import { useTable, usePagination } from "react-table";
import { useMemo } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import { column } from "./column";
import "./table.css";
import Checkbox from "./Checkbox";

const Table = () => {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const {
    selectedFlatRows,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
    pageOptions,
    state,
  } = tableInstance;

  const { pageIndex } = state;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((colm) => (
                <th {...colm.getHeaderProps()}>{colm.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} rops>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="bg-gray-700 text-white px-3 py-1 font-semibold m-1 rounded-lg"
          >
            Previous
          </button>
          <button
            className="bg-gray-700 text-white px-3 py-1 font-semibold m-1 rounded-lg"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
