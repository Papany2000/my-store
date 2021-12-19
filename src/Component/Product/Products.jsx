import React from 'react'
import Itemproduct from '../ItemProduct/ItemProduct'

import style from './Products.module.css'


const Products = function(props){

  let itemProductElement = props.goods.map((elem, index) =>  <Itemproduct key = {index} name = {elem.name}  price = {elem.price} src = {elem.image} createTocart = {props.createTocart} />)

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