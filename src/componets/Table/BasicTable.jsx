import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { MOCK_DATA } from '../../data/mock-data.json';
import { COLUMNS } from './Columns'; // component estrutura das colunas
import '../../styles/main.css';

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,

    getTableBodyProps,

    headerGroups,

    rows,

    prepareRow,
  } = tableInstance;

  return (
    // apply the table props

    <table
      {...getTableProps()}
      className="table container  content-center  text-gray-400 border-separate text-sm"
    >
      <thead className="bg-gray-800 text-gray-500">
        {
          // Loop over the header rows

          headerGroups.map(headerGroup => (
            // Apply the header row props

            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row

                headerGroup.headers.map(column => (
                  // Apply the header cell props

                  <th {...column.getHeaderProps()} className="p-3">
                    {
                      // Render the header

                      column.render('Header')
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>

      {/* Apply the table body props */}

      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows

          rows.map(row => {
            // Prepare the row for display

            prepareRow(row);

            return (
              // Apply the row props

              <tr {...row.getRowProps()} className="bg-gray-800">
                {
                  // Loop over the rows cells

                  row.cells.map(cell => {
                    // Apply the cell props

                    return (
                      <td {...cell.getCellProps()} className="p-3">
                        {
                          // Render the cell contents

                          cell.render('Cell')
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};
