/* eslint-disable operator-linebreak,react/jsx-props-no-spreading,arrow-body-style */
import React from "react"
import { useTable } from "react-table"
import { useSelector } from "react-redux"
import { getTableData } from "../../../redux/game"
import "./Table.scss"
import { avValue, moneySplitter, toFix } from "../../helpers/parser"

const headerArr = [
  { Header: "Ход", accessor: "round" },
  { Header: "Выбранное действие", accessor: "action" },
  { Header: "Цена действия", accessor: "cost" },
  { Header: "Внешнее событие", accessor: "goose" },
  { Header: "Число посетителей", accessor: "visitors" },
  { Header: "Средний чек", accessor: "avPrice" },
  { Header: "Число покупок на человека", accessor: "avPayment" },
  { Header: "Маржа", accessor: "commissions" },
  { Header: "Доход на 1 платящего", accessor: "income_per_payer" },
  { Header: "Прибыль с потока", accessor: "profit_from_stream" },
  { Header: "Выручка", accessor: "revenue" },
  { Header: "Налог", accessor: "tax" },
  { Header: "Чистая прибыль", accessor: "net_profit" },
  { Header: "На счету", accessor: "cash" },
]

const notColoredColumns = ["round", "action", "cost", "goose"]

const defaultTableBottomline = {
  visitors: 0,
  avPrice_arr: [],
  avPayment_arr: [],
  cost_arr: [],
  commissions_arr: [],
  income_per_payer_arr: [],
  profit_from_stream_arr: [],
  revenue: 0,
  tax: 0,
  round: "",
  net_profit: 0,
  action: "",
  goose: "",
  cash: 0,
}

function Table() {
  const tableData = useSelector(getTableData)
  const columns = React.useMemo(() => {
    return headerArr.map(col => ({
      Header: col.Header,
      accessor: col.accessor,
    }))
  }, [])
  const data = React.useMemo(() => {
    const result = []
    const bottomLine = tableData.reduce((acc, item) => {
      acc.visitors += item.visitors
      acc.revenue += item.revenue
      acc.tax += item.tax
      acc.net_profit += item.net_profit
      acc.cost_arr.push(item.cost)
      acc.avPrice_arr.push(item.avPrice)
      acc.avPayment_arr.push(item.avPayment)
      acc.commissions_arr.push(item.commissions)
      acc.income_per_payer_arr.push(item.income_per_payer)
      acc.profit_from_stream_arr.push(item.profit_from_stream)
      acc.cash = item.cash
      result.push(item)
      return acc
    }, defaultTableBottomline)
    bottomLine.cost = avValue(bottomLine.cost_arr)
    bottomLine.avPrice = avValue(bottomLine.avPrice_arr)
    bottomLine.avPayment = avValue(bottomLine.avPayment_arr)
    bottomLine.commissions = avValue(bottomLine.commissions_arr)
    bottomLine.income_per_payer = avValue(bottomLine.income_per_payer_arr)
    bottomLine.profit_from_stream = avValue(bottomLine.profit_from_stream_arr)
    result.push(bottomLine)
    return result
  }, [tableData])
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
                className={`table__headerItem table__headerItem_${column.id}`}
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
                const classNameArr = ["table__cell"]
                const isNumber = typeof cell.value === "number"
                let prevValue = cell.value
                if (+cell.row.id !== 0) {
                  prevValue = tableData[+cell.row.id - 1][cell.column.id]
                }
                let status = cell.value - prevValue
                if (notColoredColumns.includes(cell.column.id)) {
                  status = 0
                }
                if (+cell.row.id === tableData.length) {
                  status = 0
                }

                if (status < 0) {
                  classNameArr.push("table__cell_minus")
                } else if (status > 0) {
                  classNameArr.push("table__cell_plus")
                }

                if (cell.column.id === "commissions") {
                  return (
                    <td
                      key={cell.id}
                      {...cell.getCellProps()}
                      className={classNameArr.join(" ")}
                    >
                      {`${toFix(cell.value * 100)}%`}
                    </td>
                  )
                }
                return (
                  <td
                    key={cell.id}
                    {...cell.getCellProps()}
                    className={classNameArr.join(" ")}
                  >
                    {isNumber ? moneySplitter(cell.value) : cell.render("Cell")}
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
