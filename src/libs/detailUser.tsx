import { toast } from "react-hot-toast";
import { MdCancel } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import userColumns from "./userColumns";
import { Button, Text } from "@chakra-ui/react";

export default function detailUser(user: any, onDelete = () => {}) {
    const keys = Object.keys(user)
    toast.custom((t) => (
        <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 p-4 mt-2" >
                <div 
                    className="items-start"
                >
                    <Text
                        size={'md'}
                        fontWeight={'bold'}
                    >
                        User Detail
                    </Text>
                    <Text
                        style={{ fontSize: 11 }}
                    >
                        This inquiry about user with email {String(user.email).toLowerCase()}
                    </Text>
                    <div 
                        className="mt-4 ml-3 flex-1"
                        style={{
                            'overflow': 'auto',
                            height: 300,
                            width: 400
                        }}
                    >
                        <table>
                            {keys.map((key) => {
                                const item = user[key]
                                const header = userColumns.find(item => item.accessorKey === key)
                                return (
                                    <tr className="border border-indigo-700" key={`detailuser-${key}`}>
                                        <td className="px-2">{header?.header()}</td>
                                        <td>
                                            <p className="text-sm font-medium text-gray-900">
                                            {item}
                                            </p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
                <Button
                    mt={4}
                    colorScheme='red'
                    type='submit'
                    onClick={onDelete}
                    className="spaxe-x-2"
                >
                    <FaTrashAlt /> Delete User
                </Button>
            </div>
            <div className="flex border-l border-gray-200 relative">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="absolute"
                    style={{
                        top: 0,
                        right: 10
                    }}
                >
                    <MdCancel />
                </button>
            </div>
        </div>
    ), {
        duration: Infinity,
        position: 'top-right'
    })
}