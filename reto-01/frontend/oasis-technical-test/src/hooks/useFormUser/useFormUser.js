import { useEffect, useState } from 'react'
const useFormUser = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const [data, setData] = useState({})
    const handleOnChange = e => {
        setUser(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        if (Object.values(user).includes('')) {
            return
        }
        try {
            await fetch('http://localhost:5000/users/api', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(res => setData(res))
        } catch (error) {
            console.log(error)
        }
    }
    return {
        handleOnChange,
        handleSubmit, 
        data
    }
}

export default useFormUser