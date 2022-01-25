import React from 'react'
import style from './Carts.module.css'
import Button from '../Ui/Button/Button'
import Itemproduct from '../ItemProduct/ItemProduct'



const Carts = function(props){

    let cartItemElement = props.cartGoods.map((elem) =>  <Itemproduct key = {elem.id} isCount = {true} count = {elem.count}  id = {elem.id} name = {elem.name}  price = {elem.price} src = {elem.image}  onClickFunc = {props.removeTocart} children = {'удалить'} />)
    
return <div>

        <div className = {style.carts} >
            <h2>Корзина.</h2>
            <div className = {style.checkout} style = {props.style.map(el => el)[0]}>
                <p>Вы выбрали товара на {props.sum[0].price} рублей</p>
                <button className = {style.check} onMouseMove = {() => props.check()}>Оплатить покупки</button>
                <button className = {style.zuruck} onClick = {() => props.inVisible() } >назад</button>
            </div>
            <Button   onClick = {() => props.cartClear()} children={'очистить корзину'}/>
            <Button  onClick = {() => props.visible() } onMouseMove = {() => props.check()} children={'оформить покупку'}/>
            <section>
           {cartItemElement}
        
            </section>
    </div> 
 
</div>
}
export default Carts