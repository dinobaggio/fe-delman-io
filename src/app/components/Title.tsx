'use client'

import { Heading, Text, useColorModeValue } from "@chakra-ui/react"

export default function Title({
    title,
    subTitle,
}: {
    title: string,
    subTitle: string
}) {
    return (
        <div>
            <Heading as="h1">{title}</Heading>
            <Text
                as="p"
                marginTop="2"
                color={useColorModeValue('blue.700', 'blue.200')}
                fontSize="lg"
            >
                {subTitle}
            </Text>
        </div>
    )
}