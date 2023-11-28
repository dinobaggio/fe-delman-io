'use client'
import { Box } from "@chakra-ui/react";
import Swal from 'sweetalert2'
import DynamicForm from "../components/DynamicForm";
import Title from "../components/Title";
import { useMutation } from "react-query";
import usersService from "@/services/usersService";
import onError from "@/libs/onError";

export default function Registrations() {
  const mutation = useMutation(usersService.postRegister, {
    onError: onError
  })
  async function validate(values: any) {
    const errors: any = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }
  async function onSubmit(values: any, { setSubmitting, resetForm }: any) {
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
      mutation.mutate({
        name: values.name,
        email: values.email
      }, {
        onSuccess: () => {
          setSubmitting(false);
          Swal.fire({
            title: "Success!",
            text: "Success user register",
            icon: "success"
          });
          resetForm({
            values: {
              name: '',
              email: ''
            }
          })
        }
      })
    }
  }

  const TitleComponent = () => (
    <Title
      title="User Registration"
      subTitle="Add New User"
    />
  )

  const fields = [
    { name: 'name', type: 'string', label: 'Name' },
    { name: 'email', type: 'email', label: 'Email' }
  ]

  return (
    <Box as="div">
      <TitleComponent />
      <Box as="div" mt={4} width={300}>
        <DynamicForm 
          fields={fields}
          validate={validate}
          onSubmit={onSubmit}
          initialValues={{
            name: '',
            email: ''
          }}
        />
      </Box>
    </Box>
  )
}
