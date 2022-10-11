import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import Guitarra from '~/components/guitarra';

export async function loader(){
  const guitarras = await getGuitarras();
  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData()



  return (
    <main className='contenedor'>
        <h2 className='heading'>Nuestra Colección</h2>
        {guitarras.length && (
          <div className="guitarra grid">
            {guitarras.map( guitarra =>(
                <Guitarra 
                  key={guitarra?.id}
                  guitarra={guitarra?.atributes}
                /> 
            ))}
          </div>
        )}

    </main>
  )
}

export default Tienda