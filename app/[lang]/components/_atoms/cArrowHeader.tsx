import IC_ARROW from "@/app/assets/icons/ic_header_arrow.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface arrowHeader {
  title: string;
  backButtonFnc?: Function;
  classList?: string;
}
export default function CArrowHeader({ title, classList }: arrowHeader) {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    // 반응형
    <div
      className={
        "flex justify-start items-center pt-[3.125rem] pb-10 mobile:bg-white mobile:py-3 mobile:px-4 mobile:w-full mobile:gap-2.5 mobile:border-b mobile:border-gray_300 " +
        (classList ? classList : "")
      }
    >
      <Image
        src={IC_ARROW}
        alt={"back"}
        className={"mobile:w-[1.125rem] cursor-pointer"}
        onClick={handleClick}
      />
      <div className={"font-LGSMHATB text-[2.5rem] text-black grow mobile:text-sm mobile:grow-0"}>
        {title}
      </div>
    </div>
  );
}
