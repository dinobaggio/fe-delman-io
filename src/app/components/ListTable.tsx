'use client'
import React, { useState } from 'react'

import {
  ColumnDef,
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtual } from 'react-virtual'
import {
  FaSort,
  FaSortDown,
  FaSortUp
} from 'react-icons/fa6'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex
} from '@chakra-ui/react'

const Cell = ({ cell }: { cell: any }) => {
  const [collapse, setCollapse] = useState(false)
  return (
    <Td
      key={cell.id}
      whiteSpace="nowrap" 
      overflow="hidden" 
      textOverflow="ellipsis" 
      cursor="pointer"
      onClick={() => setCollapse(!collapse)}
    >
      {flexRender(
        cell.column.columnDef.cell,
        cell.getContext()
      )}
      {collapse && (
        <div style={{ height: 100 }}></div>
      )}
    </Td>
  )
}

export default function ListTable({ data = [], columns = [] } : { data: any, columns: any }) {
  const [collapse, setCollapse] = useState(Array(data.length).fill(Array(columns.length).fill(false)))
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnResizeMode, setColumnResizeMode] = React.useState<ColumnResizeMode>('onChange')

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })

  const tableContainerRef = React.useRef<HTMLDivElement>(null)

  const { rows } = table.getRowModel()
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  })
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0

    return (
        <>
            <TableContainer className="container" ref={tableContainerRef} bg={"white"}>
                <Table variant='simple'
                {...{
                    style: {
                    width: table.getCenterTotalSize(),
                    },
                }}
                >
                    <Thead>
                      {table.getHeaderGroups().map(headerGroup => (
                      <Tr key={headerGroup.id}>
                          {headerGroup.headers.map(header => (
                          <Th
                            key={header.id}
                            {...{
                              colSpan: header.colSpan,
                              style: {
                                width: header.getSize()
                              },
                              className: 'border-r-2 border-indigo-500'
                            }}
                          >
                              <Flex className="space-x-2 items-center" as="div">
                                <div>
                                  {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )}
                                    <div
                                      {...{
                                          onMouseDown: header.getResizeHandler(),
                                          onTouchStart: header.getResizeHandler(),
                                          className: `resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`,
                                          style: {
                                            transform:
                                                columnResizeMode === 'onEnd' &&
                                                header.column.getIsResizing()
                                                ? `translateX(${table.getState().columnSizingInfo.deltaOffset}px)`
                                                : '',
                                          },
                                      }}
                                    />
                                </div>
                                <div
                                  style={{
                                    cursor: header.column.getCanSort() ? 'pointer' : ''
                                  }}

                                  onClick={header.column.getToggleSortingHandler()}
                                >
                                  {{
                                    asc: <FaSortUp />,
                                    desc: <FaSortDown />,
                                  }[header.column.getIsSorted() as string] ?? <FaSort />}
                                </div>
                              </Flex>
                          </Th>
                          ))}
                      </Tr>
                      ))}
                  </Thead>
                  <Tbody>
                      {paddingTop > 0 && (
                          <Tr>
                              <Td style={{ height: `${paddingTop}px` }} />
                          </Tr>
                      )}
                      {virtualRows.map((virtualRow, rIndex) => {
                          const row = rows[virtualRow.index]
                          return (
                              <Tr key={row.id}>
                                  {row.getVisibleCells().map((cell, cIndex) => {
                                      return (
                                        <Cell cell={cell} key={`cell-${cIndex}`} />
                                      )
                                  })}
                              </Tr>
                          )
                      })}
                      {paddingBottom > 0 && (
                          <Tr>
                              <Td style={{ height: `${paddingBottom}px` }} />
                          </Tr>
                      )}
                  </Tbody>
                </Table>
            </TableContainer>
            <style scoped>{`
                * {
                  box-sizing: border-box;
                }
                
                html {
                  font-family: sans-serif;
                  font-size: 14px;
                }
                
                table,
                .divTable {
                  width: fit-content;
                }

                thead th {
                  position: sticky;
                  top: 0;
                  background-color: #f2f2f2;
                }
                
                .tr {
                  display: flex;
                }
                
                tr,
                .tr {
                  width: fit-content;
                  height: 30px;
                }
                
                th,
                .th,
                td,
                .td {
                  padding: 0.25rem;
                }
                
                th,
                .th {
                  padding: 2px 4px;
                  position: relative;
                  font-weight: bold;
                  text-align: center;
                  height: 30px;
                }
                
                td,
                .td {
                  height: 30px;
                }
                
                .resizer {
                  position: absolute;
                  right: 0;
                  top: 0;
                  height: 100%;
                  width: 5px;
                  background: rgba(0, 0, 0, 0.5);
                  cursor: col-resize;
                  user-select: none;
                  touch-action: none;
                }
                
                .resizer.isResizing {
                  background: blue;
                  opacity: 1;
                }
                .container {
                  border: 1px solid lightgray;
                  height: 500px;
                  max-width: 1000px !important;
                  overflow: auto;
                }
                
                @media (hover: hover) {
                  .resizer {
                    opacity: 0;
                  }
                
                  *:hover > .resizer {
                    opacity: 1;
                  }
                }
            `}</style>
        </>
    )
}