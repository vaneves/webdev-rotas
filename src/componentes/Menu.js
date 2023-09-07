import { Link } from 'react-router-dom';

export default function Menu() {

  const ids = [1, 4, 7];

  return <>
    <ul>
      <li><Link to="/">Página Inicial</Link></li>
      <li><Link to="/sobre">Sobre</Link></li>
      <li><Link to="/contato">Contato</Link></li>
      {ids.map((id) => {
        return <li><Link to={`/link-com-id/${id}`}>Página {id}</Link></li>
      })}
    </ul>
  </>;
}