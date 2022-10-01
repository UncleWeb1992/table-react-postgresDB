import { createSlice } from "@reduxjs/toolkit";
import { formType, IProducts } from "../models/models";
import { productsServices } from "../services/products.service";
import { formatDate } from "../utils/formatDate";
import { randomNumber } from "../utils/randomCount";
import { AppDispatch, RootState } from "./createStore";
import { filtered } from "../utils/filtered";

const initialState = {
  entities: [] as IProducts[],
  filtered: [] as IProducts[],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetching: (state, action) => {
      state.entities = action.payload;
    },
    productsFiltered: (state, action) => {
      state.filtered = filtered(action.payload, state.entities);
    },
    productsClearFilters: (state) => {
      state.filtered = [];
    },
  },
});

const { reducer: productsReducer, actions } = productsSlice;
const { productsFetching, productsFiltered, productsClearFilters } = actions;

export const fetchAllProducts = () => async (dispatch: AppDispatch) => {
  try {
    const data = await productsServices.fetchAllProducts();

    const products =
      data &&
      data.map((product) => ({
        ...product,
        date: formatDate(randomNumber(1000, +Date.now())),
      }));

    dispatch(productsFetching(products));
  } catch (error) {
    console.log(error);
  }
};

export const getProductsList = () => (state: RootState) =>
  state.products.filtered.length
    ? state.products.filtered
    : state.products.entities;

export const filteredProducts = (data: formType) => (dispatch: AppDispatch) => {
  dispatch(productsFiltered(data));
};

export const clearProductsFilter = () => (dispatch: AppDispatch) => {
  dispatch(productsClearFilters());
};

export default productsReducer;
