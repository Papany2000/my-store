import React, {useState} from 'react'
import ProductItem from './ProductItem/ProductItem'
import style from './Products.module.css'


const Products = function(){
  const [goods] = useState([
    {id: 1, name: 'Лечо', price: 500, image: 'images/2.jpg'},
    {id: 2, name: 'Яблоки', price: 400, image: 'images/2.jpg'},
    {id: 3, name: 'Огурцы', price: 300, image: 'images/2.jpg'}
    
  ])
return <div>
        <div className = {style.product}>
            <h2>Лучшие товары из магазина "У бабы Маши".</h2>
            <section className = {style.productSection }>
             {goods.map(good => <ProductItem good = {good} key = {good.id}/>)} 
            </section>
        </div> 
</div>
}
export default Products