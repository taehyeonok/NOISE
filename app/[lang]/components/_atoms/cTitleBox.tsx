import { CTitleProps } from "@/@types/components";

export default function CTitleBox({ title, children, classList = "" }: CTitleProps) {
  return (
    <div
      className={`border-solid border-gray_200 border-b flex justify-between items-end ${classList} ${
        !children && "pb-[0.563rem]"
      }`}
    >
      <div className={"flex items-center gap-[0.438rem]"}>
        <div className={"w-1 h-4 bg-primary"}></div>
        <p className={"font-LGSMHATB text-gray_700"}>{title}</p>
      </div>
      {children}
    </div>
  );
}
