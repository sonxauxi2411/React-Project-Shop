import { useState } from "react"
import { saveToLocalStorage } from "./LocalStorage"

const useForm = (submitCallBack) => {
    const [state, setState] = useState({})
    const [users, setUsers] = useState([])


    const handleSubmit = e => {
        e.preventDefault()
        submitCallBack()
        setUsers([...users, state])
        saveToLocalStorage('user', users)
    }



    const handlerChange = e => {
        setState(state => ({ ...state, [e.target.name]: e.target.value }))

    }
    return [state, handlerChange, handleSubmit, users]
}
export default useForm