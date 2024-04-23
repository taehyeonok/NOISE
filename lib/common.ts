/**
 * Get DB select box item data
 * @param pCode select Data code
 * @param selectBoxParam 추가 파라미터 객체
 * @param setSelectBoxData Select Data Set Function
 */
//TODO selectbox data 가져오기 로직 마저 작업
export const getSelectItemData = async ({
  pCode,
  selectBoxParam,
  setSelectBoxData,
}: {
  pCode: string;
  selectBoxParam?: any;
  setSelectBoxData?: Function;
}) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  let url = `${basePath}/api/common-select-code`;
  const res = await fetch(url, {
    method: "post",
    body: JSON.stringify({
      clss: pCode,
      param: selectBoxParam,
    }),
  });

  const result = await res.json();
  const selectBoxDummyData = result.data.map((item: any) => {
    return { title: item.title, value: item.value };
  });

  if (setSelectBoxData) setSelectBoxData(selectBoxDummyData);
};
