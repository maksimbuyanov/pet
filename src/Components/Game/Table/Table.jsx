/* eslint-disable operator-linebreak,react/jsx-props-no-spreading,arrow-body-style */
import React from "react"
import { useTable } from "react-table"
import { useSelector } from "react-redux"
import { getTableData } from "../../../redux/game"
import "./Table.scss"

const headerArr = [
  "Ход",
  "Выбранное действие",
  "Внешнее событие",
  "Число посетителей",
  "Конверсия в покупку",
  // "Число платящих",
  "Средний чек",
  "маржа",
  "Число покупок на человека",
  "Доход на 1 платящего",
  "расходы на привлечение",
  "Стоимость привлечения 1 посетителя",
  "Доход на 1 привлеченного",
  "Прибыль с потока",
  // "REVENUE",
  // "Доход с потока",
  // "COGS после продажи",
  "ЗП персонала",
  "Стоимость аренды",
  "Цена действия",
  "FIX COSTS",
  "EBITDA",
  "Амортизация оборудование",
  "Налог",
  "Чистая прибыль",
]
const structure = [
  "round",
  "action",
  "goose",
  "visitors",
  "cr",
  // "number_of_paying",
  "avPrice",
  "commissions",
  "avPayment",
  "income_per_payer",
  "acqcosts",
  "cost_of_attraction",
  "income_per_attracted",
  "profit_from_stream",
  // "revenue",
  // "income_from_stream",
  // "COGS_after_sales",
  "salary",
  "rent",
  "cost",
  "FIX_COSTS",
  "EBITDA",
  "amortization",
  "tax",
  "net_profit",
]

function Table() {
  const tableData = useSelector(getTableData)
  debugger
  const columns = React.useMemo(() => {
    return headerArr.map((headerName, headerIndex) => ({
      Header: headerName,
      accessor: `col${headerIndex + 1}`,
    }))
  }, [])
  const data = React.useMemo(() => {
    return tableData.map(line => {
      const result = {}
      structure.forEach((colName, colIndex) => {
        const key = `col${colIndex + 1}`
        result[key] = line[colName]
      })
      return result
    })
  }, [tableData])
  debugger
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })

  return (
    <table {...getTableProps()} className="game__table table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr
            key={Math.random()}
            {...headerGroup.getHeaderGroupProps()}
            className="table__headerLine"
          >
            {headerGroup.headers.map(column => (
              <th
                key={column.id}
                {...column.getHeaderProps()}
                className="table__headerItem"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr
              key={Math.random()}
              {...row.getRowProps()}
              className="table__row"
            >
              {row.cells.map(cell => {
                return (
                  <td
                    key={cell.id}
                    {...cell.getCellProps()}
                    className="table__cell"
                  >
                    {cell.render("Cell")}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
