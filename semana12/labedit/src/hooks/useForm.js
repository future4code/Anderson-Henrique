// const { useState } = require("react")
import {useState} from 'react'


const useForm = (initialState) => {
    const [form,setForm] = useState(initialState)

    const handleInputChange = event => {
    const {value,name} = event.target
    setForm({...form, [name] :value})
    console.log("form no useForm: ",form)
    }


    const clear= () => {
        setForm(initialState)

    }
    return [form,handleInputChange,clear]
}

export default useForm