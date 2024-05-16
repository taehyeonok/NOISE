"use server";

import { revalidatePath } from "next/cache";
import EditUnit from "./editUnit";

export async function noiseSimulator(
  formData: FormData,
  estimatedSoundData: any,
  productTableData: any,
  barrierInfoTableData: any,
  unitData: any
) {
  revalidatePath("/"); // 경로 재검증
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_BASE_URL;
  // console.log("formData", formData);
  try {
    const editUnit = new EditUnit();
    editUnit.setUnitData_useServer(unitData);
    const hz = [63, 125, 250, 500, 1000, 2000, 4000, 8000];
    const ratio = [0.9333333, 0.9333333, 0.9, 0.8666667, 0.8, 0.75, 0.7, 0.6666667];
    let result = { data: [] } as any;
    const field_type = formData.get("outdoor_space_text");
    const outdoor_unit = Number(formData.get("elevation_of_outdoor_unit"));
    const height_of_sound_source = outdoor_unit + 1;
    const elevation_of_receiver = Number(formData.get("elevation_of_receiver"));
    const horizontal_distance = Number(formData.get("horizontal_distance"));

    //Source와 Reciver 간 직선거리
    const sLineDistance = Math.sqrt(
      (height_of_sound_source - elevation_of_receiver) ** 2 + horizontal_distance ** 2
    );
    //거리감쇠량
    const distanceAttenuation = 20 * Math.log10(sLineDistance) + 11;
    const wallQuantity = Number(1); //TODO: 지향성 보정(DI)
    const DI = wallQuantity === 0 ? 0 : wallQuantity === 1 ? 3 : wallQuantity === 2 ? 6 : 9; //TODO: 지향성 보정(DI)

    //: Sound Source, Receiver, Barrier 조건에 따라 총 4가지 케이스로 분류
    if (field_type === "Outdoor Space") {
      const isBarrier = formData.get("barrier_in_the_path_text");

      const distance_from_ODUs = Number(formData.get("distance_from_ODUs"));
      const barrier_height = Number(formData.get("barrier_height"));
      const barrier_thickness = Number(formData.get("barrier_thickness"));
      const material_thickness = Number(formData.get("material_thickness"));
      const background_noise = Number(formData.get("background_noise"));

      //Scene 1: Only propagation
      if (isBarrier === "X") {
        for (let i = 0; i < hz.length; i++) {
          const scene1 = estimatedSoundData[i].content2 + DI - distanceAttenuation;

          result.data[i] =
            10 * Math.log10(10 ** (scene1 / 10) + 10 ** ((background_noise * ratio[i]!) / 10));

          //Total Summation Result 데이터 + DI - 거리감쇠량
        }
      } else if (isBarrier === "O") {
        //직선경로 //source와 receiver 직선경로 길이 구하기
        const sLineDistance = Math.sqrt(
          (height_of_sound_source - elevation_of_receiver) ** 2 + horizontal_distance ** 2
        );

        //반사경로
        const reflectionPath = Math.sqrt(
          (height_of_sound_source + elevation_of_receiver) ** 2 + horizontal_distance ** 2
        );

        //거리감쇠_반사 경로 증분
        const distanceAttenuation_reflectionDistance_increment =
          20 * Math.log10(reflectionPath / sLineDistance);

        /*TODO:
        * 1) Sound Source와 Receiver 간 직선을 긋고 Barrier 위치에서의 수직선과의 교차점을 구함.
          2) 해당 교차점의 높이가 Barrier의 높이보다 낮거나 같을 경우 Scene 2
          3) 교차점의 높이가 Barrier의 높이보다 높을 경우 Sound Source와 Receiver 중 높이가 낮은 점을 땅을 기준으로 대칭 시켜 해당 포인트와 다른 한 포인트를 기준으로 1)번과 동일하게 교차점을 구함.
          4) 해당 교차점이 Barrier 높이보다 낮을 경우 Scene 3
          5) 해당 교차점이 Barrier 높이보다 높을 경우 Scene 4
        */
        /*Scene 2 : Propagation, Diffraction Transmission(Direct, Reflect)*/
        if (height_of_sound_source > barrier_height && elevation_of_receiver > barrier_height) {
          // Path (a)
          //전파 경로 & 벽 교점 높이 구하기
          for (let i = 0; i < hz.length; i++) {
            const a_height =
              height_of_sound_source < elevation_of_receiver
                ? height_of_sound_source +
                  (distance_from_ODUs * (elevation_of_receiver - height_of_sound_source)) /
                    horizontal_distance
                : elevation_of_receiver +
                  ((horizontal_distance - distance_from_ODUs) *
                    (height_of_sound_source - elevation_of_receiver)) /
                    horizontal_distance;
            //회절경로 1 ( 소음원 - 벽 )
            const a_diffractionPath1 = Math.sqrt(
              (height_of_sound_source - barrier_height) ** 2 + distance_from_ODUs ** 2
            );
            //회절경로 2 (벽 - 수음점)
            const a_diffractionPath2 = Math.sqrt(
              (barrier_height - elevation_of_receiver) ** 2 +
                (horizontal_distance - barrier_thickness * 0.001 - distance_from_ODUs) ** 2
            );
            //회절경로 차
            const a_diffractionPathDifference =
              a_diffractionPath1 + a_diffractionPath2 + barrier_thickness * 0.001 - sLineDistance;

            const a_nValue = (2 * a_diffractionPathDifference * hz[i]!) / 341;
            //회절감쇠량_Path(a)
            const diffractionAttenuation_pathA =
              -0.2 < a_nValue && a_nValue < 12.5
                ? 5 +
                  20 *
                    Math.log10(
                      (2 * Math.PI * a_nValue) ** 0.5 / Math.tanh((2 * Math.PI * a_nValue) ** 0.5)
                    )
                : 24;

            //Pass (b)
            const b_height =
              ((height_of_sound_source + elevation_of_receiver) *
                (horizontal_distance - distance_from_ODUs)) /
                horizontal_distance -
              elevation_of_receiver;

            const b_diffractionPath1 = Math.sqrt(
              (height_of_sound_source - barrier_height) ** 2 + distance_from_ODUs ** 2
            );
            const b_diffractionPath2 = Math.sqrt(
              (barrier_height + elevation_of_receiver) ** 2 +
                (horizontal_distance - distance_from_ODUs - barrier_thickness * 0.001) ** 2
            );
            const b_diffractionPathDifference =
              b_diffractionPath1 + b_diffractionPath2 + barrier_thickness * 0.001 - reflectionPath;
            const b_nValue = (2 * b_diffractionPathDifference * hz[i]!) / 341;

            const diffractionAttenuation_pathB =
              0.2 < b_nValue && b_nValue < 12.5
                ? 5 +
                  20 *
                    Math.log10(
                      (2 * Math.PI * b_nValue) ** 0.5 / Math.tanh((2 * Math.PI * b_nValue) ** 0.5)
                    )
                : 24;
            //회절감쇠 + 거리증분 감쇠량
            const b_diffractionAttenuation_distanceIncrementalAttenuation =
              barrier_height <= b_height
                ? 3.5
                : distanceAttenuation_reflectionDistance_increment + diffractionAttenuation_pathB;

            //Pass (c)
            const c_height =
              ((height_of_sound_source + elevation_of_receiver) * distance_from_ODUs) /
                horizontal_distance -
              height_of_sound_source;
            const c_diffractionPath1 = Math.sqrt(
              (height_of_sound_source + barrier_height) ** 2 + distance_from_ODUs ** 2
            );
            const c_diffractionPath2 = Math.sqrt(
              (barrier_height - elevation_of_receiver) ** 2 +
                (horizontal_distance - distance_from_ODUs - barrier_thickness * 0.001) ** 2
            );
            const c_diffractionPathDifference =
              c_diffractionPath1 + c_diffractionPath2 + barrier_thickness * 0.001 - reflectionPath;
            const c_nValue = (2 * c_diffractionPathDifference * hz[i]!) / 341;

            const diffractionAttenuation_pathC =
              0.2 < c_nValue && c_nValue < 12.5
                ? 5 +
                  20 *
                    Math.log10(
                      (2 * Math.PI * c_nValue) ** 0.5 / Math.tanh((2 * Math.PI * c_nValue) ** 0.5)
                    )
                : 24;
            const c_diffractionAttenuation_distanceIncrementalAttenuation =
              barrier_height <= c_height
                ? 3.5
                : distanceAttenuation_reflectionDistance_increment + diffractionAttenuation_pathC;

            //Path (d)
            const d_height =
              height_of_sound_source < elevation_of_receiver
                ? -height_of_sound_source -
                  (distance_from_ODUs * (elevation_of_receiver - height_of_sound_source)) /
                    horizontal_distance
                : -elevation_of_receiver -
                  ((horizontal_distance - distance_from_ODUs) *
                    (height_of_sound_source - elevation_of_receiver)) /
                    horizontal_distance;
            const d_diffractionPath1 = Math.sqrt(
              (height_of_sound_source + barrier_height) ** 2 + distance_from_ODUs ** 2
            );
            const d_diffractionPath2 = Math.sqrt(
              (barrier_height + elevation_of_receiver) ** 2 +
                (horizontal_distance - distance_from_ODUs - barrier_thickness * 0.001) ** 2
            );
            const d_diffractionPathDifference =
              barrier_height <= 0
                ? 0
                : d_diffractionPath1 +
                  d_diffractionPath2 +
                  barrier_thickness * 0.001 -
                  sLineDistance;
            const d_nValue = (2 * d_diffractionPathDifference * hz[i]!) / 341;
            const diffractionAttenuation_pathD =
              -0.2 < d_nValue && d_nValue < 12.5
                ? 5 +
                  20 *
                    Math.log10(
                      (2 * Math.PI * d_nValue) ** 0.5 / Math.tanh((2 * Math.PI * d_nValue) ** 0.5)
                    )
                : 24;

            /**회절 감쇠량 합*/
            const diffractionAttenuation_total =
              -10 *
              Math.log10(
                10 ** (-diffractionAttenuation_pathA / 10) +
                  10 ** (-b_diffractionAttenuation_distanceIncrementalAttenuation / 10) +
                  10 ** (-c_diffractionAttenuation_distanceIncrementalAttenuation / 10) +
                  10 ** (-diffractionAttenuation_pathD / 10)
              );

            const sLinedistance_attenuation = 20 * Math.log10(sLineDistance) + 11; //거리감쇠량
            // (ㄱ) PWL+DI-거리-회절
            const first =
              estimatedSoundData[i].content2 +
              DI -
              sLinedistance_attenuation -
              diffractionAttenuation_total;
            //Direct Transmission
            const texture_transmission_attenuation =
              barrier_height <= a_height ? 0 : barrierInfoTableData[i].content2; //'우측테이블 Hz 별 데이터'//재질에 따른 투과 감쇠량

            //(ㄴ) 최종 PWL + DI - 거리 - 투과
            const second =
              texture_transmission_attenuation === 0
                ? -9999
                : estimatedSoundData[i].content2 +
                  DI -
                  sLinedistance_attenuation -
                  texture_transmission_attenuation;

            //Relect Transmission
            const transmission_attenuation =
              barrier_height <= b_height || barrier_height <= c_height
                ? 0
                : barrierInfoTableData[i].content2; // direct Transmission 값 동일
            const reflect_distance_attenuation = 20 * Math.log10(reflectionPath) + 11;
            const third =
              transmission_attenuation === 0
                ? -9999
                : estimatedSoundData[i].content2 +
                  DI -
                  reflect_distance_attenuation -
                  transmission_attenuation;

            const scene2 =
              10 * Math.log10(10 ** (first / 10) + 10 ** (second / 10) + 10 ** (third / 10));

            result.data[i] =
              10 * Math.log10(10 ** (scene2 / 10) + 10 ** ((background_noise * ratio[i]!) / 10));
          }
          //Scene 3 : Propagation, Diffraction Transmission(Reflect)
        } else if (
          height_of_sound_source < barrier_height &&
          elevation_of_receiver < barrier_height
        ) {
          //Path (a) 고정값
          for (let i = 0; i < hz.length; i++) {
            const diffractionAttenuation_pathA = 4.7;

            //path (b)
            //전파경로 & 벽 교점 높이
            const b_height =
              ((height_of_sound_source + elevation_of_receiver) *
                (horizontal_distance - distance_from_ODUs)) /
                horizontal_distance -
              elevation_of_receiver;
            const b_diffractionPath1 = Math.sqrt(
              (height_of_sound_source - barrier_height) ** 2 + horizontal_distance ** 2
            );
            const b_diffractionPath2 = Math.sqrt(
              (barrier_height + elevation_of_receiver) ** 2 +
                (horizontal_distance - distance_from_ODUs - barrier_thickness * 0.001) ** 2
            );
            const b_diffractionPathDifference =
              b_diffractionPath1 + b_diffractionPath2 + barrier_thickness * 0.001 - reflectionPath;
            const b_nValue = (2 * b_diffractionPathDifference * hz[i]!) / 341;
            const diffractionAttenuation_pathB =
              -0.2 < b_nValue && b_nValue < 12.5
                ? 5 +
                  20 *
                    Math.log10(
                      (2 * Math.PI * b_nValue) ** 0.5 / Math.tanh((2 * Math.PI * b_nValue) ** 0.5)
                    )
                : 24;
            const b_diffractionAttenuation_distanceIncrementalAttenuation =
              barrier_height <= b_height
                ? 3.5
                : distanceAttenuation_reflectionDistance_increment + diffractionAttenuation_pathB;

            //Path (c)
            const c_height =
              ((height_of_sound_source + elevation_of_receiver) * distance_from_ODUs) /
                horizontal_distance -
              height_of_sound_source;
            const c_diffractionPath1 = Math.sqrt(
              (height_of_sound_source + barrier_height) ** 2 + distance_from_ODUs ** 2
            );
            const c_diffractionPath2 = Math.sqrt(
              (barrier_height - elevation_of_receiver) ** 2 +
                (horizontal_distance - distance_from_ODUs - barrier_thickness * 0.001) ** 2
            );
            const c_diffractionPathDifference =
              c_diffractionPath1 + c_diffractionPath2 + barrier_thickness * 0.001 - reflectionPath;
            const c_nValue = (2 * c_diffractionPathDifference * hz[i]!) / 341;
            const diffractionAttenuation_pathC =
              -0.2 < c_nValue && c_nValue < 12.5
                ? 5 +
                  20 *
                    Math.log10(
                      (2 * Math.PI * c_nValue) ** 0.5 / Math.tanh((2 * Math.PI * c_nValue) ** 0.5)
                    )
                : 24;
            const c_diffractionAttenuation_distanceIncrementalAttenuation =
              barrier_height <= c_height
                ? 3.5
                : distanceAttenuation_reflectionDistance_increment + diffractionAttenuation_pathC;

            //Path (d)
            const d_height =
              -height_of_sound_source < elevation_of_receiver
                ? -height_of_sound_source -
                  (distance_from_ODUs * (elevation_of_receiver - height_of_sound_source)) /
                    horizontal_distance
                : -elevation_of_receiver -
                  ((horizontal_distance - distance_from_ODUs) *
                    (height_of_sound_source - elevation_of_receiver)) /
                    horizontal_distance;

            const d_diffractionPath1 = Math.sqrt(
              (height_of_sound_source + barrier_height) ** 2 + distance_from_ODUs ** 2
            );
            const d_diffractionPath2 = Math.sqrt(
              (barrier_height + elevation_of_receiver) ** 2 +
                (horizontal_distance - distance_from_ODUs - barrier_thickness * 0.001) ** 2
            );
            const d_diffractionPathDifference =
              barrier_height <= 0
                ? 0
                : d_diffractionPath1 +
                  d_diffractionPath2 +
                  barrier_thickness * 0.001 -
                  sLineDistance;
            const d_nValue = (2 * d_diffractionPathDifference * hz[i]!) / 341;
            const diffractionAttenuation_pathD =
              -0.2 < d_nValue && d_nValue < 12.5
                ? 5 +
                  20 *
                    Math.log10(
                      (2 * Math.PI * d_nValue) ** 0.5 / Math.tanh((2 * Math.PI * d_nValue) ** 0.5)
                    )
                : 24;

            //Scene 3 total
            const diffractionAttenuation_total =
              -10 *
              Math.log10(
                10 ** (-diffractionAttenuation_pathA / 10) +
                  10 ** (-b_diffractionAttenuation_distanceIncrementalAttenuation / 10) +
                  10 ** (-c_diffractionAttenuation_distanceIncrementalAttenuation / 10) +
                  10 ** (-diffractionAttenuation_pathD / 10)
              );
            const first =
              estimatedSoundData[i].content2 +
              DI -
              (20 * Math.log10(sLineDistance) + 11) -
              diffractionAttenuation_total;
            //Relect Transmission
            const transmission_attenuation =
              barrier_height <= b_height || barrier_height <= c_height
                ? 0
                : barrierInfoTableData[i].content2;

            const reflect_distance_attenuation = 20 * Math.log10(reflectionPath) + 11;

            const second =
              transmission_attenuation === 0
                ? -9999
                : estimatedSoundData[i].content2 +
                  DI -
                  reflect_distance_attenuation -
                  transmission_attenuation;
            const scene3 = 10 * Math.log10(10 ** (first / 10) + 10 ** (second / 10));
            result.data[i] =
              10 * Math.log10(10 ** (scene3 / 10) + 10 ** ((background_noise * ratio[i]!) / 10));
          }
          //Scene 4
        } else {
          for (let i = 0; i < hz.length; i++) {
            // Path (a) 회절감쇠량_Path (a)
            const diffractionAttenuation_pathA = 4.7;

            // Path (b)
            const b_height =
              ((height_of_sound_source + elevation_of_receiver) *
                (horizontal_distance - distance_from_ODUs)) /
                horizontal_distance -
              elevation_of_receiver;
            const b_diffractionPath1 = Math.sqrt(
              (height_of_sound_source - barrier_height) ** 2 + distance_from_ODUs ** 2
            );
            const b_diffractionPath2 = Math.sqrt(
              (barrier_height + elevation_of_receiver) ** 2 +
                (horizontal_distance - distance_from_ODUs - barrier_thickness * 0.001) ** 2
            );
            const b_diffractionPathDifference =
              b_diffractionPath1 + b_diffractionPath2 + barrier_thickness * 0.001 - reflectionPath;
            const b_nValue = (2 * b_diffractionPathDifference * hz[i]!) / 341;
            const diffractionAttenuation_pathB =
              -0.2 < b_nValue && b_nValue < 12.5
                ? 5 +
                  20 *
                    Math.log10(
                      (2 * Math.PI * b_nValue) ** 0.5 / Math.tanh((2 * Math.PI * b_nValue) ** 0.5)
                    )
                : 24;

            const b_diffractionAttenuation_distanceIncrementalAttenuation =
              barrier_height <= b_height
                ? 3.5
                : distanceAttenuation_reflectionDistance_increment + diffractionAttenuation_pathB;

            //Path (c) 회절감쇠량_Path (c)
            const diffractionAttenuation_pathC = 3.5;

            //Path (d)
            const d_height =
              height_of_sound_source < elevation_of_receiver
                ? -height_of_sound_source -
                  (distance_from_ODUs * (elevation_of_receiver - height_of_sound_source)) /
                    horizontal_distance
                : -elevation_of_receiver -
                  ((horizontal_distance - distance_from_ODUs) *
                    (height_of_sound_source - elevation_of_receiver)) /
                    horizontal_distance;
            const d_diffractionPath1 = Math.sqrt(
              (height_of_sound_source + barrier_height) ** 2 + distance_from_ODUs ** 2
            );
            const d_diffractionPath2 = Math.sqrt(
              (barrier_height + elevation_of_receiver) ** 2 +
                (horizontal_distance - distance_from_ODUs - barrier_thickness * 0.001) ** 2
            );
            const d_diffractionPathDifference =
              barrier_height <= 0
                ? 0
                : d_diffractionPath1 +
                  d_diffractionPath2 +
                  barrier_thickness * 0.001 -
                  sLineDistance;
            const d_nValue = (2 * d_diffractionPathDifference * hz[i]!) / 341;
            const diffractionAttenuation_pathD =
              -0.2 < d_nValue && d_nValue < 12.5
                ? 5 +
                  20 *
                    Math.log10(
                      (2 * Math.PI * d_nValue) ** 0.5 / Math.tanh((2 * Math.PI * d_nValue) ** 0.5)
                    )
                : 24;

            //Scene 4 total
            const diffractionAttenuation_total =
              -10 *
              Math.log10(
                10 ** (-diffractionAttenuation_pathA / 10) +
                  10 ** (-b_diffractionAttenuation_distanceIncrementalAttenuation / 10) +
                  10 ** (-diffractionAttenuation_pathC / 10) +
                  10 ** (-diffractionAttenuation_pathD / 10)
              );
            const scene4 =
              estimatedSoundData[i].content2 +
              DI -
              (20 * Math.log10(sLineDistance) + 11) -
              diffractionAttenuation_total;

            result.data[i] =
              10 * Math.log10(10 ** (scene4 / 10) + 10 ** ((background_noise * ratio[i]!) / 10));
          }
        }
      }
    }
    //Enclosed Space : 실내 케이스로, Direct distance, Room Volume, Number of Sound Sources로 계산
    else if (field_type === "Enclosed Space (Machine Room)") {
      const count = productTableData.length; // Number of sound sources 값
      const room_volume = Number(formData.get("room_volume"));
      const direct_distance = Number(formData.get("direct_distance"));
      for (let i = 0; i < hz.length; i++) {
        const attenuation =
          10 * Math.log(direct_distance) +
          5 * Math.log(room_volume) +
          3 * Math.log(hz[i]!) -
          10 * Math.log(count) -
          12;
        result.data[i] = estimatedSoundData[i].content2 - attenuation;
      }
    }
    result.estimatedSoundData = estimatedSoundData;
    result.DI = DI;
    result.distance = Number(Number(distanceAttenuation).toFixed(1));
    return result;
  } catch (e) {
    console.log(e);
    throw new Error("noiseSimulator");
  }
}
