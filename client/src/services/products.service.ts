import { IProducts } from "../models/models";
import httpServices from "./http.service";

const productsPoint = "products";

async function fetchAllProducts() {
  try {
    const { data } = await httpServices.get<IProducts[]>(productsPoint);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const productsServices = {
  fetchAllProducts,
};
