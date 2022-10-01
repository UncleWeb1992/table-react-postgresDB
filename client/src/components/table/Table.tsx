import { useState } from "react";
import { useTypedSelector } from "../../hooks/castomHookRedux";
import { getProductsList } from "../../store/productsSlice";
import { tableHeaderItem } from "../../utils/constanse";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/pagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useTypedSelector(getProductsList());
  const pageSize = 4;
  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const pageCrop = paginate(products, currentPage, pageSize);

  if (pageCrop.length) {
    return (
      <div>
        <table>
          <TableHeader items={tableHeaderItem} />
          <TableBody data={pageCrop} />
        </table>
        <Pagination
          length={products.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Table;
