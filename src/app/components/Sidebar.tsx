'use client'

import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Container,
} from '@chakra-ui/react'
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi'
import {
    MdSpaceDashboard
} from 'react-icons/md'
import {
    HiUsers,
    HiUserAdd
} from 'react-icons/hi'
import {
    FaMagnifyingGlass
} from 'react-icons/fa6'
import { IconType } from 'react-icons'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import routes from '@/libs/routes'

interface NavItemProps extends FlexProps {
    icon: IconType
    children: React.ReactNode
}

interface MobileProps extends FlexProps {
    onOpen: () => void
}

interface SidebarProps extends BoxProps {
    onClose: () => void
}


const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <div>
            <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                    <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                        <Image
                            src={'https://delman.io/contents/delman%20data%20lab%20orange%20color.webp'}
                            alt='logo delman data lab'
                            width={100}
                            height={100}
                        />
                    </Text>

                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                </Flex>
                {routes.map((link) => (
                    <Link href={link.route} key={`router-${link.route}`}>
                        <NavItem key={link.name} icon={link.icon}>
                            {link.name}
                        </NavItem>
                    </Link>
                ))}
            </Box>
        </div>
    )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <div>
            <Box
            as="a"
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: 'orange.400',
                        color: 'white',
                    }}
                    {...rest}>
                    {icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            </Box>
        </div>
    )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <div>
            <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onOpen}
                    variant="outline"
                    aria-label="open menu"
                    icon={<FiMenu />}
                />

                <Text
                    display={{ base: 'flex', md: 'none' }}
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold">
                    <Image
                        src={'https://delman.io/contents/delman%20data%20lab%20orange%20color.webp'}
                        alt='logo delman data lab'
                        width={100}
                        height={100}
                    />
                </Text>

                <HStack spacing={{ base: '0', md: '6' }}>
                    <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton py={2} _focus={{ boxShadow: 'none' }}>
                                <HStack>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://www.pinkvilla.com/english/images/2023/07/1570857066_the-witcher-henry-cavill_1280*720.jpg'
                                        }
                                    />
                                    <VStack
                                        display={{ base: 'none', md: 'flex' }}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2">
                                        <Text fontSize="sm">Henry Cavill</Text>
                                        <Text fontSize="xs" color="gray.600">
                                            Admin
                                        </Text>
                                    </VStack>
                                    <Box display={{ base: 'none', md: 'flex' }}>
                                        <FiChevronDown />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList
                                bg={useColorModeValue('white', 'gray.900')}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Settings</MenuItem>
                                <MenuItem>Billing</MenuItem>
                                <MenuDivider />
                                <MenuItem>Sign out</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack>
            </Flex>
        </div>
    )
}

const SidebarWithHeader = ({
    children,
}: { children: React.ReactNode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
                <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    returnFocusOnClose={false}
                    onOverlayClick={onClose}
                    size="full">
                    <DrawerContent>
                        <SidebarContent onClose={onClose} />
                    </DrawerContent>
                </Drawer>
                {/* mobilenav */}
                <MobileNav onOpen={onOpen} />
                <Box ml={{ base: 0, md: 60 }} p="4">
                    <Container maxW={'10xl'}>
                        {children}
                    </Container>
                </Box>
            </Box>
        </div>
    )
}

export default SidebarWithHeader