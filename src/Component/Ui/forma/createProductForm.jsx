import React, { useState } from "react";
import style from './createProductForm.module.css'
import { postProduct } from '../../../api/products';


const CreateProductForm = (props) => {
    const [name, setName] = useState('')
    const newName = (name) => setName(name)

    const [price, setPrice] = useState(0)
    const newPrice = (price) => setPrice(price)

    const [image, setImage] = useState('')
    let newImage = (image) => setImage(image)

    const createNewProduct = async () => {
        await postProduct({ name, price, image });
        alert('Продукт добавлен в базу');
    }

    return (
        <div className={style.forma}>
            <h3>Форма для сервера</h3>
            <forma action="#" encType="multipart/form-data" method="post">
                <fieldset>
                    <legend>Информация</legend>
                    <p>
                        <label>имя</label>
                        <input type="text" onChange={(e) => newName(e.target.value)} />
                    </p>
                    <p>
                        <label>Цена</label>
                        <input type="number" onChange={(e) => newPrice(e.target.value)} />
                    </p>
                    <p>
                        <label>Ссылка на картинку</label>
                        <input type="text" onChange={(e) => newImage(e.target.value)} />
                    </p>
                </fieldset>
            </forma>
            <button className={style.form} type="submit" onClick={() => createNewProduct() } >Введите данные</button>
        </div>

    )
}
export default CreateProductForm