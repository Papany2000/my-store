import React from 'react'
import style from './ProductItem.module.css'


const ProductItem = function(props){

return ( <div className={style.product}>
                
                    <div className = {style.foto}> 
                          <img src = {props.good.image} alt = 'foto'/>
                     
                    </div>
                    <div className = {style.productInfo}>
                        <p>{props.good.name}</p>
                        <p>{props.good.price}</p>
                        <p><button>добавить в корзину</button></p>
                     </div>
          </div>  
           
)   

}
export default ProductItem