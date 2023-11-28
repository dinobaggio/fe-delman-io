'use client'
import { Box, Button, Heading, Input, InputGroup, InputRightElement, Text, useColorModeValue } from "@chakra-ui/react";
import Title from "../components/Title";
import { SlMagnifier } from "react-icons/sl";
import { FormEventHandler, useState } from "react";
import { useMutation, useQuery } from "react-query";
import usersService from "@/services/usersService";
import onError from "@/libs/onError";
import Loading from "../components/Loading";
import detailUser from "@/libs/detailUser";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter()
  const [user, setUser]: [any, any] = useState(null)
  const { isLoading, data: resUsers } = useQuery({
    queryKey: 'users',
    queryFn: usersService.getList,
    onError: onError
  })
  const mutation = useMutation(usersService.getDetail, {
    onError: onError
  })
  const mutationDelete = useMutation(usersService.postDelete, {
    onError: onError
  })
  const TitleComponent = () => (
    <Title
      title="Search User"
      subTitle="Search existing user"
    />
  )

  async function onDelete() {
    const confirm: any = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    })
    if (confirm.isConfirmed) {
      console.log(user.id)
      mutationDelete.mutate(user.id, {
        onSuccess: async () => {
          await Swal.fire({
            title: "Success!",
            text: "Success user deleted",
            icon: "success"
          });
          window.location.reload()
        }
      })
    }
  }

  function handleClickDetail() {
    detailUser(user, onDelete)
  }

  function findByEmail(email: string, arr = []) {
    let result = null
    arr.forEach((item: any) => {
      if (item.email === email) {
        result = item
      }
    })
    return result
  } 

  async function onSubmit(e: any) {
    e.preventDefault()
    try {
      const email = e.target?.elements?.email?.value
      const users = resUsers.data
      const user: any = findByEmail(email, users)
      if (user) {
        mutation.mutate(user.id, {
          onSuccess: (res) => {
            setUser(res.data)
          }
        })
        return
      }
      throw new Error('Email not found')
    } catch (err) {
      onError(err)
    }
  }

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
    <Box as="div">
      <TitleComponent />
      <Box as="div" mt={4}>
        <Box as="div">
          <form onSubmit={onSubmit}>
            <InputGroup size='md'>
              <Input
                pr="4.5rem"
                type="text"
                placeholder='Enter email'
                bg="light"
                name="email"
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' mr={2} type="submit">
                  <SlMagnifier />
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>

        {user && (
          <Box mt={4} bg="white" className="rounded" padding={"4"}>
            <Text
                as="p"
                // color={useColorModeValue('blue.700', 'blue.200')}
                fontSize="lg"
                fontWeight={"bold"}
            >
                {user.name}
            </Text>
            <Text
                as="p"
                color={'blue.700'}
                fontSize="sm"
            >
                {user.email}
            </Text>
            <Button
              mt={4}
              colorScheme='teal'
              type='submit'
              onClick={handleClickDetail}
            >
                View Profile
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}
