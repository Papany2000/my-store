import React from 'react'
import style from './Carts.module.css'
const Carts = function(){


    
return <div>

        <div className = {style.carts}>
            <h2>Корзина.</h2>
             <button className = {style.floatingButton} >Очистить корзину</button>
             <button className = {style.floatingButton} >Оформить покупку</button>
             <section className = {style.CartSection} >

             </section>
    </div> 
 
</div>
}
export default Carts