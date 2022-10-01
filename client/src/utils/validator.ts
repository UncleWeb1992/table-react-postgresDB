import { formType } from "../models/models";

export function validator(data: formType) {
  const error = Object.assign({ ...data });
  let fieldName: keyof typeof data;
  for (fieldName in data) {
    if (!data[fieldName].trim().length) {
      error[fieldName] = "This field cannot be empty";
    } else {
      error[fieldName] = "";
    }
  }

  return error;
}
