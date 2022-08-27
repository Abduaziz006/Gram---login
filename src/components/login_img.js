import login from '../img/login-v2.32261d6f.svg'
import React from 'react'

export default function login_img() {
  return (
    <div className='img'>
        <a href='https://www.driverapi.gram.tj/admin#' className='gram-login-href'>Gram</a>
        <br/>
        <img src={login} className='login-img' />
    </div>
  )
}