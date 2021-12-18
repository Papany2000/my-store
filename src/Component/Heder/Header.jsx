import React from 'react'
import style from './Heder.module.css'
import {Link} from 'react-router-dom'
import logo from './../../Images/logo.jpg'

const Header = function(){


return <div>
  <header>
        <div className = {style.header}>
         <div className='img'>
             <img src = {logo} alt = "foto"/>
         </div>
         <div className = {style.span}>
             <span><Link to = "/Products">Товары</Link></span>
             <span><Link to = "/Carts">Корзина</Link></span>
             <span>Контакты</span>
         </div> 
         </div>
       </header>

</div>
}
export default Header