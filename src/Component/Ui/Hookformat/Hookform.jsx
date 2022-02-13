import React from 'react'
import {useForm} from 'react-hook-form'
import style from './Hookform.module.css'

const Hookform = function(){
    const{ register, reset, formState: {errors}, handleSubmit} = useForm({mode: 'onBlur'}); 
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
    };
                                                  
return <div>
            <h1 className= {style.h} >Форма регистрации</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label>
                    Имя:
                    <input {...register("firstName", {required: 'поле обязательно к заполнению', minLength: {value: 2, message: 'минимум 2 буквы'}})} />
                </label>
                <div style = {{ height: 40}}> {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}</div>
                <label>
                    email:
                    <input {...register("email", {required: 'поле обязательно к заполнению', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, message: 'Проверте Email'}})} />
                </label>
                <div style = {{ height: 40}}> {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>
                <input type="submit" />
            </form>
     
       </div>
}
export default Hookform
