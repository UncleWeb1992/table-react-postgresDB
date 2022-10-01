import { FC } from "react";
import { range } from "../../utils/range";

interface PaginationProps {
  length: number;
  pageSize: number;
  onPageChange: (count: number) => void;
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({
  length,
  pageSize,
  onPageChange,
  currentPage,
}) => {
  const pageCount = range(1, Math.ceil(length / pageSize));
  if (pageCount.length === 1) return null;

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {pageCount.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "active" : undefined}
            onClick={() => onPageChange(page)}
          >
            <span>{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
