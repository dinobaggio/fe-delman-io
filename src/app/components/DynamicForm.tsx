import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react';

const DynamicForm = ({
    initialValues = {}, 
    validate = () => {},
    onSubmit = () => {},
    fields = []
}: { fields: any, onSubmit: any, validate: any, initialValues: any }) => (
    <Box as="div" mt={4}>
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            {({
                isSubmitting,
                handleChange,
                handleBlur,
                values,
                errors,
                touched
            }) => (
                <Form>
                    {fields.map((item: any, index: number) => {
                        return (
                            <FormControl isInvalid={!!errors[item.name]} isRequired mt={4} key={`formregister-${index}`}>
                                <FormLabel>{item.label}</FormLabel>
                                <Input 
                                    name={item.name}
                                    type={item.type} 
                                    bg={"light"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[item.name]}
                                />
                                {(touched[item.name] && errors[item.name]) && (
                                    <FormErrorMessage>
                                        {String(errors[item.name])}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        )
                    })}
                    <Button
                        mt={4}
                        colorScheme='teal'
                        isLoading={isSubmitting}
                        disabled={isSubmitting}
                        type='submit'
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    </Box>
);



export default DynamicForm;