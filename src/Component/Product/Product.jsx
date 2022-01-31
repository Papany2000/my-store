import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Itemproduct from '../ItemProduct/ItemProduct'
import Preloader from '../Ui/Preloader/Preloader'
import style from './Products.module.css'
import { getProduct} from '../../api/products'

const Product = function(props){
    const routeParams = useParams();
    let [ product, setProduct ] = useState({})
    useEffect(() => {
        getProduct(routeParams.id)
          .then(
            (result) => {
                setProduct(result.data);
            }
          )
      }, [routeParams.id])
      
    let ProductItemElement = <></>
    if(product.id){
     ProductItemElement = <Itemproduct key = {product.id} isCount = {false}  id = {product.id} name = {product.name}  price = {product.price} src = {product.image}  children = {'добавить в корзину'} onClickFunc = {props.createTocart} />
    } else {
        return <Preloader/>
    }

return <div>
        <div className = {style.product}>
            <section>
              {ProductItemElement}
            </section>
        </div> 
</div>
}
export default Product