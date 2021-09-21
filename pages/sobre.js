import Link from 'next/link';

function Title(props) {
    return <h1>{props.children}</h1>;
}

export default function Sobre() {
    return (
      <div>
        <header>
          <Title>Página Sobre</Title>
          <img src="..."/>
        </header>
        <Link href= "/">
            <a>
                Link para Home
            </a>
        </Link>
      </div>
    )
}