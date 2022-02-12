import React  from "react";
 import style from './Button.module.css'

const Button  = ({children, ...props}) => {
 
    return (
       <button  {...props} className = {style.Btn}>  {/*children из Компанента в пропс а в Button из пропсов ...props {}*/}
           {children}
       </button>
      );
}
export default Button