export const tableHeaderItem = ["Date", "Name", "Count", "Distance"];
export const conditionFilters = [
  {
    name: "Equal",
    method<T>(value: string, data: T[], category: keyof T) {
      return data.filter(
        (key) => String(key[category]).toLowerCase() === value
      );
    },
  },
  {
    name: "Include",
    method<T>(value: string, data: T[], category: keyof T) {
      return data.filter((key) =>
        String(key[category]).toLowerCase().includes(value)
      );
    },
  },
  {
    name: "More",
    method<T>(value: string, data: T[], category: keyof T) {
      return data.filter((key) => key[category] > +value);
    },
  },
  {
    name: "Less",
    method<T>(value: string, data: T[], category: keyof T): T[] {
      return data.filter((key) => key[category] < +value);
    },
  },
];
