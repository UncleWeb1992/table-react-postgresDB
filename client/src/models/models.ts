export interface formType {
  value: string;
  category: string;
  condition: string;
}

export interface IProducts {
  [key: string]: string;
}

export interface httpServices {
  get: () => IProducts[];
  post: () => IProducts;
  put: () => IProducts;
  patch: () => IProducts;
  delete: () => null;
}
