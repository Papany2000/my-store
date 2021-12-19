import React from 'react'
import style from './Carts.module.css'
import Button from '../Ui/Button/Button'
import Itemproduct from '../ItemProduct/ItemProduct'


const Carts = function(){


    
return <div>

        <div className = {style.carts}>
            <h2>Корзина.</h2>
            <Button  children={'очистить корзину'}/>
            <Button  children={'оформить покупку'}/>
            <section>
                
            </section>
    </div> 
 
</div>
}
export default Carts