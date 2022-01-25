import React from 'react'
import Itemproduct from '../ItemProduct/ItemProduct'
import Preloader from '../Ui/Preloader/Preloader'
import style from './Products.module.css'
import {useParams, useLocation} from 'react-router-dom'

const Products = function(props){
  const search = useLocation().search;
  console.log(search)
const params = useParams()
console.log(params)
  let ProductItemElement = props.goods.map((elem, index) =>  <Itemproduct key = {index} isCount = {false}  id = {elem.id} name = {elem.name}  price = {elem.price} src = {elem.image}  children = {'добавить в корзину'} onClickFunc = {props.createTocart} />)
  if (!ProductItemElement ){
    return <Preloader/>
}


    const name = new URLSearchParams(search).get('name');
    console.log(name)
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