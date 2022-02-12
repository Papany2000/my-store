import React from 'react'
import {useForm} from 'react-hook-form'


const Hookform = function(){
    const{ register, formState: {errors,}, handleSubmit} = useForm(); 
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    };
                                                  
return <div>
            <h3>Форма регистрации</h3>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label>
                    Имя:
                    <input {...register("firstName", {required: true,})} />
                </label>
                <input type="submit" />
            </form>
      
       </div>
}
export default Hookform
