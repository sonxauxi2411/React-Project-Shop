import Button from './Button'
import React, { useState } from 'react'
import Card from './Card'
import style from './loginForm.module.css'
import { getTolocalStorage } from '../../Component/Hook/LocalStrong'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../../Redux/user'
import { Link, useNavigate } from 'react-router-dom'

function LoginForm() {
  const userArr = getTolocalStorage('userArr')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isvalid, setIsvalid] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isValidUser = useSelector((state) => state.user.isValidUser)
  const findUser = userArr?.find(
    (user) => user.email === email && user.password === password,
  )
  const handlerSubmit = (e) => {
    e.preventDefault()

    if (email.trim() === '') {
      setIsvalid(false)
      setError('vui lòng không để trống !!')
    } else if (!findUser) {
      setIsvalid(false)
      setError('Password hoặc Email sai !!')
    } else {
      setIsvalid(false)
      dispatch(userAction.onLogin(findUser))
      navigate('/')
    }
  }
  console.log(isValidUser)

  return (
    <Card>
      <div className={style.banner_login}>
        <div className={style.form__login}>
          <form onSubmit={handlerSubmit}>
            <h2>Sign In</h2>

            <input
              className="border border-bottom-0"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border "
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isvalid && <p className={style.text__error}>{error}</p>}
            <Button>Sign IN</Button>
            <div className="mt-4">
              <span>Create an account?</span>
              <Link to="/register">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </Card>
  )
}

export default LoginForm
