/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import Filtered from "./components/Filters/Filtered";
import Table from "./components/table/Table";
import { useAppDispatch } from "./hooks/castomHookRedux";
import { fetchAllProducts } from "./store/productsSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Filtered />
        <Table />
      </div>
    </div>
  );
}

export default App;
