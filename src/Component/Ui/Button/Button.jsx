import React  from "react";
 import style from './Button.module.css'

const Button  = ({children, ...props}) => {
    
    return (
       <button {...props} className = {style.Btn}>  {/*children из Аpp в пропс а в компоненте из пропсов деструктуризацией {}*/}
           {children}
       </button>
      );
}
export default Button