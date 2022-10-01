import { FC, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/castomHookRedux";
import { formType } from "../../models/models";
import {
  clearProductsFilter,
  filteredProducts,
} from "../../store/productsSlice";
import { conditionFilters, tableHeaderItem } from "../../utils/constanse";
import { validator } from "../../utils/validator";
import SelectField from "../common/form/SelectField";
import TextField from "../common/form/TextField";

const initialState: formType = {
  value: "",
  category: tableHeaderItem[1],
  condition: conditionFilters[0].name,
};

const errorsState = {
  value: "",
};

const Filtered: FC = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState(initialState || {});
  const [errors, setError] = useState(errorsState);

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validate = () => {
    const errors = validator(data);
    setError(errors);
  };

  const isValid =
    Object.values(errors).filter((val) => val.trim().length).length === 0;

  const handleChange = (target: { name: string; value: string }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const clearFilters = () => {
    dispatch(clearProductsFilter());
    setData(initialState);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData(initialState);
    if (!isValid) return;
    const normalData = {
      condition: data.condition.toLowerCase(),
      value: data.value.toLowerCase().trim(),
      category:
        data.category === "Name" ? "title" : data.category.toLowerCase(),
    };
    dispatch(filteredProducts(normalData));
  };

  return (
    <div className="filtered">
      <form onSubmit={handleSubmit}>
        <TextField
          name="value"
          value={data.value}
          label="What are you lookng for"
          onChange={handleChange}
          placeholder="Please enter text there"
          error={errors.value}
        />
        <SelectField
          label="select category"
          options={tableHeaderItem.filter((o) => o !== "Date")}
          value={data.category}
          onChange={handleChange}
          name="category"
        />
        <SelectField
          label="select condition"
          options={conditionFilters.map((el) => el.name)}
          value={data.condition}
          onChange={handleChange}
          name="condition"
        />
        <div className="buttons">
          <button className="btn btn-primary" disabled={!isValid}>
            search
          </button>
          <button className="btn btn-danger" onClick={clearFilters}>
            clear filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filtered;
