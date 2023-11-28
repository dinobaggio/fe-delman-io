import { toast } from "react-hot-toast"

export default function onError(err: any) {
    const option = {
        duration: 5000
    }
    let message = "This didn't work."
    if (err?.response?.data?.message) {
        message = err?.response?.data?.message
        
    } else if (err?.message) {
        message = err.message
    }

    toast.error(message, option)
}