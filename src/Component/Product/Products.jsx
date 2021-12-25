import React from 'react'
import Itemproduct from '../ItemProduct/ItemProduct'

import style from './Products.module.css'


const Products = function(props){

  let ProductItemElement = props.goods.map((elem, index) =>  <Itemproduct key = {index} isCount = {false}  id = {elem.id} name = {elem.name}  price = {elem.price} src = {elem.image}  children = {'добавить в корзину'} onClickFunc = {props.createTocart} />)

return <div>
        <div className = {style.product}>
            <h2>Лучшие товары из магазина "У бабы Маши".</h2>
            <section>
                     {ProductItemElement}
            </section>
        </div> 
</div>
}
export default Products