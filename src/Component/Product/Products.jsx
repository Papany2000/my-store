import React from 'react'
import Itemproduct from '../ItemProduct/ItemProduct'

import style from './Products.module.css'


const Products = function(props){

  let itemProductElement = props.goods.map((elem, index) =>  <Itemproduct key = {index} id = {elem.id} name = {elem.name}  price = {elem.price} src = {elem.image}  children = {'добавить в корзину'} createTocart = {props.createTocart} />)
  let onClick = () => props.createTocart({id: props.id, price: props.price, name: props.name, image: props.src})
return <div>
        <div className = {style.product}>
            <h2>Лучшие товары из магазина "У бабы Маши".</h2>
            <section>
                     {itemProductElement}
            </section>
        </div> 
</div>
}
export default Products