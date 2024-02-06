import { useState } from "react";
import PropTypes from 'prop-types'

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
        <form onSubmit={ handleSubmit } aria-label="form">
            <input
                type="text" 
                placeholder="Buscar gifs" 
                value= { input }
                onChange={ handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes  = {
    onNewCategory: PropTypes.func.isRequired
}
