import React, { useState } from "react";
import style from './createProductForm.module.css'
import { postProduct } from '../../../api/products';
import ItemProduct from '../../ItemProduct/ItemProduct'
import { removeProduct, getProducts} from '../../../api/products'

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

    const deleteProduct = async (e) =>{
        await removeProduct(e.id)
        const products = await getProducts()
        props.refresh(products.data)
    }

    let productList = props.goods.map((elem, index) => <ItemProduct key = {index} id = {elem.id} name = {elem.name}  price = {elem.price} src = {elem.image}  children = {'удалить с сервера'} onClickFunc = {deleteProduct} />)
   
    return (
    <div>
        <div className={style.forma}>
            <div className={style.formContainer}>
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
        </div>
        <section>
                     {productList}
            </section>
        </div>
    )
}
export default CreateProductForm