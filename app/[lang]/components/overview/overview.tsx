import IC_MAIN from "@/app/assets/icons/ic_main.svg";
import Image from "next/image";

export default function Overview() {
  return (
    //반응형
    <div
      className="w-full h-80 bg-mainOverview bg-cover text-center flex justify-center items-center flex-col relative mb-[3.125rem]
            mobile:mb-[0.625rem] mobile:bg-mobileMainOverview mobile:bg-center mobile:overflow-x-hidden mobile:h-[18.75rem]"
    >
      <div className="text-[3.75rem] text-gray_900 font-LGSMHATB static z-[1] mobile:text-[3.75rem]">
        LATS Noise
      </div>
      <Image
        src={IC_MAIN}
        alt={"overview"}
        className="absolute right-[22.813rem] mobile:right-[-3.125rem]"
      />
    </div>
  );
}
