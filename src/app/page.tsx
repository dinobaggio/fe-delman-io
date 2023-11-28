'use client'
import { useQuery, useQueryClient } from "react-query";
import Title from "./components/Title";
import salesService from "@/services/salesService";
import ListTable from "./components/ListTable";
import Loading from "./components/Loading";
import onError from "@/libs/onError";

export default function Home() {
  const { isLoading, data } = useQuery({
    queryFn: salesService.getList,
    onError: onError
  })

  const columns = [{
    accessorKey: 'id',
    header: () => 'ID',
    footer: (props: { column: { id: any; }; }) => props.column.id,
  }, {
    accessorKey: 'name',
    header: () => 'Name',
    footer: (props: { column: { id: any; }; }) => props.column.id,
  }, {
    accessorKey: 'sales_id',
    header: () => 'Sales ID',
    footer: (props: { column: { id: any; }; }) => props.column.id,
  }, {
    accessorKey: 'item_id',
    header: () => 'Item ID',
    footer: (props: { column: { id: any; }; }) => props.column.id,
  }, {
    accessorKey: 'qty',
    header: () => 'Quantity',
    footer: (props: { column: { id: any; }; }) => props.column.id,
  }, {
    accessorKey: 'consumen_name',
    header: () => 'Consumen Name',
    footer: (props: { column: { id: any; }; }) => props.column.id,
  }, {
    accessorKey: 'transaction_date',
    header: () => 'Transaction Date',
    footer: (props: { column: { id: any; }; }) => props.column.id,
  }]

  const TitleComponent = () => (
    <Title
      title="Sales Dashboard"
      subTitle="List of Sales Data"
    />
  )

  if (isLoading) {
    return (
      <div>
        <TitleComponent />
        <div className="mt-4">
          <Loading />
        </div>
      </div>
    )
  }

  return (
    <div>
      <TitleComponent />
      <div className="mt-4">
        <ListTable
          data={data.data}
          columns={columns}
        />
      </div>
    </div>
  )
}
