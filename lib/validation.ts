import { ProductItem } from "@/@types/components";
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
export const validateFormData = (
  form: React.RefObject<HTMLFormElement>,
  productTableData: ProductItem[],
  trans: any
) => {
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
  //Enclosed Space (Machine Room) 모델 4대 제한
  if (checkDataObj.outdoor_space_text === "Enclosed Space (Machine Room)") {
    if (Number(productTableData.length) > 4) {
      const number_of_point_sound_sources_input = elements.namedItem(
        "product_type_4_text"
      ) as HTMLInputElement;
      number_of_point_sound_sources_input.setCustomValidity(trans("NOISE_0001"));
      number_of_point_sound_sources_input.reportValidity();
      result = false;
    }
  }
  return result;
};
