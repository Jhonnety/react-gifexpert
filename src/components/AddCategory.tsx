import { useState } from "react"

export const AddCategory = ({onNewCategory}:any) => {
const [inputValue, setInputValue]= useState('');

const onInputChange= ({target}:any)=>{
    setInputValue(target.value) 
}
const onSubmit=(event:any)=>{
    event.preventDefault(); //Evita recargar la pagina

    const newImputValue = inputValue.trim();
    if(newImputValue.length<=1) return;
    onNewCategory(newImputValue);
     /* setCategories((categories:any) => [inputValue,...categories]) */
    setInputValue('');
   

}

  return (
    <form onSubmit={onSubmit}>
    <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange }
            //onChange={ (event) => onInputChange(event) }
        />
    </form>
  )
}
