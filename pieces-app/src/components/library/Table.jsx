import Pieces from './Pieces';

import './table.css';

const Table = ({ tableHeadings, tableContents }) => {
  return (
    <table>
      <thead>
        <tr>
          {tableHeadings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>{tableContents}</tbody>
    </table>
  );
};

export default Table;
