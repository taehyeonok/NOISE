import { ReferenceCommonDummyData } from "@/app/[lang]/constants/const";

export default function ReferenceCommonTable() {
  return (
    //반응형
    <table className={"w-fit self-center mobile:self-start"}>
      <caption
        className={"!text-right !mb-[0.25rem] !font-LGSMHATR !text-[0.75rem] !leading-[0.836rem]"}
      >
        *Source : FHWA
      </caption>
      <tbody>
        <tr>
          <th
            className={"tableTh w-[12.5rem] !h-[2rem] !py-0 !text-[0.875rem] !leading-[0.976rem]"}
          >
            Outdoor noises
          </th>
          <th className={"tableTh w-[7.5rem] !h-[2rem] !py-0 !text-[0.875rem] !leading-[0.976rem]"}>
            Sound Pressures
          </th>
        </tr>
        {ReferenceCommonDummyData.map((item, index) => {
          return (
            <tr key={"ReferenceCommonDummyData" + index}>
              <td
                className={
                  "tableTd !text-left !h-[1.625rem] !text-[0.875rem] !leading-[0.976rem] !px-[0.625rem] bg-white"
                }
              >
                {item.outdoorNoises}
              </td>
              <td
                className={"tableTd !h-[1.625rem] !text-[0.875rem] !leading-[0.976rem]  bg-white"}
              >
                {item.soundPressures}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
