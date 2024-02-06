import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGif } from "../../src/hooks/useFetchGif"

describe('Test in hook useFetchGif', () => {

    test('Debe regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGif('One Punch') )
        const { images, isLoading } = result.current

        expect(images).toEqual([])
        expect(isLoading).toBeTruthy()

    })

    test('Debe retornar un arreglo de imagenes y el loading en false', async() => {
        
        const { result } = renderHook( () => useFetchGif('One Punch') )

        await waitFor(() => {
            expect(result.current.images.length).toBeGreaterThan(0)
        })

        const { images, isLoading } = result.current
        
        expect( images.length ).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy()

    })
 
})