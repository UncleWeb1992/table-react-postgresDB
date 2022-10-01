import { FC } from "react";
import { IProducts } from "../../models/models";

type TableBodyProps = {
  data: IProducts[];
};

const TableBody: FC<TableBodyProps> = ({ data }) => {
  return (
    <tbody>
      {[...data].map((prod) => (
        <tr key={prod.id}>
          <td style={{ width: "20%" }}>{prod.date}</td>
          <td style={{ width: "80%" }}>{prod.title}</td>
          <td>{prod.count}</td>
          <td>{prod.distance}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
