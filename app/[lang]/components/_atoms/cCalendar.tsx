import { useContext, useEffect, useRef, useState } from "react";
import { cCalendarProps } from "@/@types/components";
import { ProjectInfoContext } from "@/app/context/projectInfoContext";

export default function CCalendar({ label }: cCalendarProps) {
  const newDate = new Date();
  const nowMonth = newDate.toLocaleDateString("en-US", { month: "long" });
  const nowDay = ("00" + newDate.getUTCDate().toString()).slice(-2);
  const nowYear = newDate.getUTCFullYear();
  const [date, setDate] = useState<string>(`${nowMonth} ${nowDay} ${nowYear}`);
  const { projectInfoData, setProjectInfoData } = useContext(ProjectInfoContext);

  const onChangeDate = (date: string) => {
    const _newDate = new Date(date);
    const _newMonth = _newDate.toLocaleDateString("en-US", { month: "long" });
    const _dateArr = date.split("-");
    setDate(`${_newMonth} ${_dateArr[2]} ${_dateArr[0]}`);
    projectInfoData.calendar = `${_newMonth} ${_dateArr[2]} ${_dateArr[0]}`;
  };
  useEffect(() => {
    const isBack = localStorage.getItem("isBack");
    if (isBack) setDate(projectInfoData.calendar ? projectInfoData.calendar : date);
  }, []);
  return (
    //반응형
    <div
      className={
        "w-[18.438rem] rounded-[0.188rem] border border-gray_200 flex justify-start item-center h-9 p-[0_0.375rem_0_0.75rem]  mobile:w-[12.5rem] mobile:justify-between"
      }
    >
      <div
        className={
          "w-11/12 leading-9 text-left font-LGSMHATR text-gray_700 text-[0.875rem] mobile:max-w-max mobile:flex-none"
        }
      >
        {date}
      </div>
      <input
        id={label}
        type={"date"}
        className={"calendarIcon"}
        onChange={(e) => {
          onChangeDate(e.target.value);
        }}
      />
      <label className={"sr-only"} htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
