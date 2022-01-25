import React from 'react'
import Button from '../Ui/Button/Button'
import style from './ItemProduct.module.css'

const Itemproduct = function(props){


let newItem = {id: props.id, price: props.price, name: props.name, image: props.src, count: props.count} 

return ( <div className={style.itemProduct}>
                
                    <div className = {style.foto}> 
                    <img className = {style.img} src = {props.src} alt = 'foto'/>
                    </div>
                    <div className = {style.productItemInfo}>
                        <p>{props.name} </p>
                       {props.isCount ? <p className={style.price}>{props.price} * {props.count}</p> : <p className={style.price}>{props.price}</p>}
                        <Button  onClick = {() => props.onClickFunc(newItem)}  children={props.children}/>
                        
                     </div>
                
          </div>  
           
)   

}
export default Itemproduct