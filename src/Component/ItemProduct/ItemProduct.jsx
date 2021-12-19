import React from 'react'
import Button from '../Ui/Button/Button'
import style from './ItemProduct.module.css'


const Itemproduct = function(props){



return ( <div className={style.itemProduct}>
                
                    <div className = {style.foto}> 
                     <img className = {style.img} src = {props.src} alt = 'foto'/>
                    </div>
                    <div className = {style.productItemInfo}>
                        <p>{props.name} </p>
                        <p className={style.price}>{props.price}</p>
                        <Button onClick = {() => props.createTocart({id: props.id, price: props.price, name: props.name, image: props.src})} children={'добавить в корзину'}/>
                     </div>
                
          </div>  
           
)   

}
export default Itemproduct