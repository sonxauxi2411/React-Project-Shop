import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { saveToLocalStorage } from '../../Component/Hook/LocalStrong'
import { userAction } from '../../Redux/user'
import Card from './Card'
import style from './RegisterForm.module.css'


function RegisterForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [phone, setPhone] = useState('')
    const [isvalid, setIsvalid] = useState(false)
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    // const findUserArr = userArr.find(user => user.email === email)
    // console.log(findUserArr)
    const handlerSubmit = (e) => {
        e.preventDefault()
        if (name.length < 6) {
            setIsvalid(false)
            setError('name ít nhất 6 ký tự !')
        } else if (password.length < 8) {
            setIsvalid(false)
            setError('password ít nhất 8 ký tự!')
        } else if (phone.length !== 10) {
            setIsvalid(false)
            setError('vui lòng nhập đúng số điện thoại')
        }
        // if (findUserArr) {
        //     setIsvalid(false)
        //     setError('Email đã có người sự dụng !')
        // }
        else {
            setIsvalid(true)
            dispatch(userAction.addUser({ name, email, password, phone }))
            navigate('/login')
        }

    }

    return (
        <Card >
            <div className={style.banner__register}>
                <div className={style.form__login} >
                    <form onSubmit={handlerSubmit}>
                        <h2 className='mb-4'>Sign Up</h2>

                        <input className='border border-bottom-0'
                            type='text'
                            placeholder='Full Name'
                            name='fullName'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input className='border border-bottom-0'
                            type='email'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        <input className='border border-bottom-0'
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={(e) => setPasword(e.target.value)}
                        />
                        <input className='border '
                            type='number'
                            placeholder='phone'
                            name='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />


                        {!isvalid && <p className={style.text__error}>{error}</p>}
                        <button >Sigin Up</button>
                        <div >
                            <span >Login?</span>
                            <Link to='/login' >Click</Link>
                        </div>
                    </form>
                </div>
            </div>
        </Card>
    )
}

export default RegisterForm