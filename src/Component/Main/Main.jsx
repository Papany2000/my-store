import React, { useState } from 'react'
import style from './Main.module.css'
import Modal from '../Ui/modal/Modal'
import Hookform from '../Ui/Hookformat/Hookform'

const Main = function(){

const [modalActive, setModalActive] = useState(false)

return (
<div>
    <main className={style.main}>
        <button className={style.openBtn} onClick = {() => setModalActive(true)}>зарегистрируйтесь</button>
      
      
    </main>
    <Modal  active = {modalActive}  setActive = {setModalActive}><Hookform/></Modal>
 </div>
 
    )
}
export default Main