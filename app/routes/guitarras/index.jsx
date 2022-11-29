import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listado-guitarras";

export function meta() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    descripcion: "Nuestra colección de guitarras",
  };
}


export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

function Tienda() {
  const guitarras = useLoaderData();
  return <ListadoGuitarras key={guitarras?.id} guitarras={guitarras} />;
}

export default Tienda;
