import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEmail } from '../utils/checkMail'


const Auth = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const login = () => {

        // Здесь должен быть fetch для запроса на сервер

        navigate('home')
    }

    const validation = () => {
        setError('')
        !form.email ? setError('Поле email не заполнено!')
        : !isEmail(form.email) ? setError('С почтой что-то не так') 
        : !form.password ? setError('Поле password не заполнено!')
        : login()
    }


    return (
        <div className='auth'>
            <form
                onSubmit={event => event.preventDefault()}
                className='auth-form'
            >
                <div className='auth-input'>
                    <input
                        type='email'
                        name='email'
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className='auth-input'>
                    <input
                        type='password'
                        name='password'
                        onChange={changeHandler}
                    />
                    <label htmlFor='password'>Password</label>
                </div>
                <div className='auth-error'>
                    {error}
                </div>
                <button
                    onClick={validation}
                >
                    Войти
                </button>
            </form>
        </div>
    )
}

export default Auth