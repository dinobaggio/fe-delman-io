import { IconType } from "react-icons"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { HiUserAdd, HiUsers } from "react-icons/hi"
import { MdSpaceDashboard } from "react-icons/md"

interface LinkItemProps {
    name: string
    icon: IconType
    route: string
}

const routes: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: MdSpaceDashboard, route: '/' },
    { name: 'Users', icon: HiUsers, route: '/users' },
    { name: 'Registrations', icon: HiUserAdd, route: '/registrations' },
    { name: 'Search', icon: FaMagnifyingGlass, route: '/search' },
]

export default routes