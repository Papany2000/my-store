import React from 'react'
import style from './Heder.module.css'
import {NavLink} from 'react-router-dom'
import logo from './../../Images/logo.jpg'

const Header = function(){


return <div>
  <header>
        <div className = {style.header}>
         <div className='img'>
             <img src = {logo} alt = "foto"/>
         </div>
         <div className = {style.span}>
             <span><NavLink to = "/" >Главная</NavLink></span>
             <span><NavLink to = "/Products">Товары</NavLink></span>
             <span><NavLink to = "/Carts">Корзина</NavLink></span>
             <span>Контакты</span>
         </div> 
         </div>
  </header>

</div>
}
export default Header