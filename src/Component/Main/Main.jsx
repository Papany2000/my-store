import React, { useState } from 'react'
import style from './Main.module.css'
import Modal from '../Ui/modal/Modal'
import Hookform from '../Ui/Hookformat/Hookform'
import Slider from '../Slide/Slider'

const Main = function(){

const [modalActive, setModalActive] = useState(false)

return (
<div>
    <main className={style.main}>
        <button className={style.openBtn} onClick = {() => setModalActive(true)}>зарегистрируйтесь</button>
        <Slider/>
        <Modal  active = {modalActive}  setActive = {setModalActive}><Hookform/></Modal> 
      
    </main>
   
 </div>
 
    )
}
export default Main