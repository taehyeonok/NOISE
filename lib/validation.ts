import "@/lib/utils";

/**
 * html invalid custom message
 * @param event  React.InvalidEvent<HTMLInputElement>
 * @param message custom message
 */
export const validateMsg = ({
  event,
  validMessage,
}: {
  event: React.InvalidEvent<HTMLInputElement>;
  validMessage?: { message: string; format?: string[] };
}) => {
  const validityState = event.target.validity;
  if (validityState?.valueMissing) {
    const message = validMessage?.message ? validMessage?.message : "";
    if (validMessage?.format) {
      event.target.setCustomValidity(message.format(validMessage?.format));
    } else {
      event.target.setCustomValidity(message);
    }
  }
};

/**
 * html invalid를 제외한 Form Data Custom Validation
 * @param form
 * @param trans 다국어 객체
 * @returns
 */
export const validateFormData = (form: React.RefObject<HTMLFormElement>, trans: any) => {
  let result = true;
  const elements = form.current!.elements;
  const checkDataObj = Object.create(null);
  for (const element of elements) {
    const input = element as HTMLInputElement;
    if (input.name && !input.disabled) {
      checkDataObj[input.name] = input.value;
    }
  }

  //installation_height validation
  if (checkDataObj.rectangular_height) {
    if (Number(checkDataObj.rectangular_height) < Number(checkDataObj.installation_height)) {
      const installation_height_input = elements.namedItem(
        "installation_height"
      ) as HTMLInputElement;
      installation_height_input.setCustomValidity(trans("RC_0062"));
      installation_height_input.reportValidity();
      result = false;
    }
  }
  return result;
};
