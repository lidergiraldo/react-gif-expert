import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmedInput = input.trim()
        if (trimmedInput.length <= 1) return
        onNewCategory( trimmedInput )
        setInput('')
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text" 
                placeholder="Buscar gifs" 
                value= { input }
                onChange={ handleInputChange }
            />
        </form>
    );
}
