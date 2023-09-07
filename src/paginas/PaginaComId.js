import Menu from '../componentes/Menu';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PaginaComId() {

  let { id } = useParams();

  const [nomePagina, setNomePagina] = useState(null);

  useEffect(() => {
    setNomePagina(`Página ${id}`);
  }, [id]);

  return <>
    <Menu />
    {
      nomePagina 
      ?
        <>
          <h1>{nomePagina}</h1>
          <p>Página dinâmica</p>
        </>
      :
      <p>Carregando...</p>
    }
  </>;
}