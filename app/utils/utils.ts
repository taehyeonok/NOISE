import { headerLanguage } from "../[lang]/constants/const";

export const isNull = (target: any) => {
  let result = false;
  try {
    if (
      target === undefined ||
      target === "undefined" ||
      target == null ||
      target === "null" ||
      target === "NaN" ||
      target === "" ||
      target.length <= 0
    ) {
      result = true;
    }
  } catch (e) {
    result = false;
  }
  return result;
};

export const getSelectedLanguage = (locale: string) => {
  const result = headerLanguage.find((h: any) => h.locale == locale);

  return result?.title;
};

// python range 함수 구현
export const makeRange = (start: number, stop: number, step = 1) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => Math.ceil((start + i * step) * 10) / 10
  );
};

// Object 깊은 복사 함수
export const cloneObject = (objectToBeCloned: any) => {
  // Basis.
  if (!(objectToBeCloned instanceof Object)) {
    return objectToBeCloned;
  }

  const objectClone = structuredClone(objectToBeCloned);

  return objectClone;
};
