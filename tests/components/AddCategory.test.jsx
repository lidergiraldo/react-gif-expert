import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('test in <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {
        
        render(<AddCategory onNewCategory={ () => {} } />)
        
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: 'Saitama' } })

        expect(input.value).toBe('Saitama')

        /* screen.debug() */

    })

    test('Debe de llamar handleSubmit si el input tiene un valor', () => {

        const inputValue = 'Saitama'
        const handleSubmit = jest.fn()

        render(<AddCategory onNewCategory={ handleSubmit } />)  

        const input = screen.getByRole('textbox')  
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } })
        fireEvent.submit( form )

        expect( input.value ).toBe('')
        expect( handleSubmit ).toHaveBeenCalled()
        expect( handleSubmit ).toHaveBeenCalledTimes(1)
        expect( handleSubmit ).toHaveBeenCalledWith( expect.any(String) )
        
    })

    test('No debe de llamar handleSubmit si el input no tiene un valor', () => {

        const handleSubmit = jest.fn()

        render(<AddCategory onNewCategory={ handleSubmit } />)  

        const form = screen.getByRole('form')

        fireEvent.submit( form )

        expect( handleSubmit ).not.toHaveBeenCalled()
        
    })
})



