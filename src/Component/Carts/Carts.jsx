import React from 'react'
import style from './Carts.module.css'
import Button from '../Ui/Button/Button'
import Itemproduct from '../ItemProduct/ItemProduct'



const Carts = function(props){

  

    let cartItemElement = props.cartGoods.map((elem) =>  <Itemproduct key = {elem.id}  id = {elem.id} name = {elem.name}  price = {elem.price} src = {elem.image}  onClickFunc = {props.removeTocart} children = {'удалить'} />)
    
return <div>

        <div className = {style.carts}>
            <h2>Корзина.</h2>
            <Button  children={'очистить корзину'}/>
            <Button  children={'оформить покупку'}/>
            <section>
           {cartItemElement}
        
            </section>
    </div> 
 
</div>
}
export default Carts