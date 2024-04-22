import { totalCapacityTableDummyData } from "@/app/[lang]/constants/const";

export default function TotalCapacityTable() {
  return (
    //반응형
    <table className={"w-[27.5rem] mobile:w-full"}>
      <thead>
        <tr>
          <th
            colSpan={3}
            className={`tableTh
                mobile:border-0 mobile:h-[2.5rem] mobile:text-gray_700 mobile:text-[0.875rem]`}
          >
            Total Capacity
          </th>
        </tr>
      </thead>
      <tbody>
        {totalCapacityTableDummyData.map((item, index: number) => {
          return (
            <tr key={index}>
              <td
                className={`tableTd w-[12.5rem]
                         mobile:noLine mobile:w-[6.875rem] mobile:border-t-0  mobile:h-[2.5rem] mobile:text-[0.875rem]`}
              >
                {item.label}
              </td>
              <td
                className={`tableTd w-[7.5rem] 
                        mobile:w-[6.25rem] mobile:border-t-0 mobile:text-[0.875rem]`}
              >
                {item.first}
              </td>
              <td
                className={`tableTd w-[7.5rem]
                         mobile:noLine mobile:w-[7.375rem] mobile:border-t-0  mobile:h-[2.5rem] mobile:text-[0.875rem]`}
              >
                {item.second}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
