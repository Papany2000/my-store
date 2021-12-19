import React, {useState} from 'react'
import style from './Carts.module.css'
import Button from '../Ui/Button/Button'
import Itemproduct from '../ItemProduct/ItemProduct'



const Carts = function(props){

   
    let cartItems = props.cartGoods.map((elem, index) =>  <Itemproduct key = {index} name = {elem.name}  price = {elem.price} src = {elem.image} createTocart = {props.createTocart} />)
    
return <div>

        <div className = {style.carts}>
            <h2>Корзина.</h2>
            <Button  children={'очистить корзину'}/>
            <Button  children={'оформить покупку'}/>
            <section>
           {cartItems}
            </section>
    </div> 
 
</div>
}
export default Carts