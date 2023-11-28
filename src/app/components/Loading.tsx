import { VscLoading } from "react-icons/vsc";

export default function Loading() {
    return (
        <div className="flex items-center space-x-2 p-4 bg-white rounded w-36">
          <div className="animate-spin"><VscLoading /></div>
          <div>Loading...</div>
        </div>
    )
}