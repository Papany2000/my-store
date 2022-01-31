import React, { useState, useEffect } from 'react'
import Itemproduct from '../ItemProduct/ItemProduct'

import Preloader from '../Ui/Preloader/Preloader'
import style from './Products.module.css'
import usePagination from '../Ui/Pagination/HookPagination'
import { getProducts } from '../../api/products'


const Products = function(props){

  const pageSize = 4;
    const {
      nextPage,
      prevPage,
      page,
      setPage,
      totalPages,
    } = usePagination({
      contentPerPage: pageSize,
      count: props.goods.length,
    });
    let [ products, setProducts ] = useState([])
      useEffect(() => {
          getProducts(page, pageSize)
            .then(
              (result) => {
                  setProducts(result.data);
              }
            )
    }, [page])


  let ProductItemElement = products.map((elem, index) =>  <Itemproduct key = {index} isCount = {false}  id = {elem.id} name = {elem.name}  price = {elem.price} src = {elem.image}  children = {'добавить в корзину'} onClickFunc = {props.createTocart} />)
  if (!ProductItemElement ){
    return <Preloader/>
  }

return <div>
        <div className = {style.product}>
            <h2>Лучшие товары из магазина "У бабы Маши".</h2>

            <section>
                      
                     {ProductItemElement}
            </section>
        </div> 

        <div className="pagination">
  <p className="text">
    {page}/{totalPages}
  </p>
  <button onClick={() => prevPage() } className="page">
    &larr;
  </button>

  {[...Array(totalPages).keys()].map((el) => (
    <button
      onClick={() => setPage(el + 1)}
      key={el}
      className={`page ${page === el + 1 ? "active" : ""}`}
    >
      {el + 1}
    </button>
  ))}
  <button onClick={() =>  nextPage() } className="page">
    &rarr;
  </button>
</div>     
        
</div>
}
export default Products