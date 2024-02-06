import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGif } from "../../src/hooks/useFetchGif" 

jest.mock('../../src/hooks/useFetchGif')

describe('Test in <GifGrid />', () => {

    const category = 'One Punch'

    test('Debe mostrar el loading correctamente', () => {

        useFetchGif.mockReturnValue({
            images: [],
            isLoading: true
        })
    
        render( <GifGrid category={ category } /> ) 
        /* screen.debug() */

        expect( screen.getByText( category ) )
        expect( screen.getByText( 'Cargando...' ) )
        
    })

    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/Saitama.jpg',
                title: 'Saitama'
            },
            {
                id: '123',
                url: 'https://localhost/Goku.jpg',
                title: 'Goku' 
            }
        ]

        useFetchGif.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render( <GifGrid category={ category } /> )
        /* screen.debug() */

        expect( screen.getAllByRole( 'img' ).length ).toBe( gifs.length )

        
    })

})