'use client'
import { useQuery, useQueryClient } from "react-query";
import Title from "../components/Title";
import salesService from "@/services/salesService";
import ListTable from "../components/ListTable";
import Loading from "../components/Loading";
import onError from "@/libs/onError";
import usersService from "@/services/usersService";
import userColumns from "@/libs/userColumns";

export default function Users() {
  const { isLoading, data } = useQuery({
    queryKey: 'users',
    queryFn: usersService.getList,
    onError: onError
  })

  const columns = userColumns

  const TitleComponent = () => (
    <Title
      title="Users Data"
      subTitle="List of Users Data"
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
