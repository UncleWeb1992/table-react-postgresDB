import { formType, IProducts } from "../models/models";
import { conditionFilters } from "./constanse";

export function filtered(filters: formType, data: IProducts[]) {
  const { value, category, condition } = filters;
  const currentCondition = conditionFilters.findIndex(
    (filter) => filter.name.toLowerCase() === condition
  );

  return conditionFilters[currentCondition].method(value, data, category);
}
