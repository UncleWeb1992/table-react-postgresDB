import { FC } from "react";

interface TableHeaderProps {
  items: string[];
}

const TableHeader: FC<TableHeaderProps> = ({ items }) => {
  return (
    <thead>
      <tr>
        {items.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
