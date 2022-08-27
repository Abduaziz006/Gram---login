import React from 'react'

export default function login_form() {
  return (
    <div className='form'>
        <form>
            <label className='label-login'>Логин</label> <br />
            <input type='text' className='form-text' /> <br />
            <a href='https://www.driverapi.gram.tj/forgot-password'>Забыли пароль?</a> <br />
            <label className='label-pass'>Пароль</label> <br />
            <input type='password' className='form-pass' /> <br />
            <input type='checkbox' className='form-checkbox'/>
            <span>Запомнить</span> <br />
            <button type='submit' className='form-submit'>Вход</button> <br />
        </form>
    </div>
  )
}