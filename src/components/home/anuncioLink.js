import Link from 'next/link';
import { Jumbotron } from 'react-bootstrap';
import colors from '../layout/colors';

function AnuncioLink({ anuncio }) {
    return (
        <>
            <Link href="anuncios/[id]" as={`anuncios/${anuncio.id}`}>
                <a>
                    <Jumbotron>
                        <p className="lead">{anuncio.fecha}</p>
                        <h1>{anuncio.titulo}</h1>
                        <p>{anuncio.bajada}</p>
                    </Jumbotron>
                </a>
            </Link>
            <style jsx>{`

                .lead{
                    color: ${colors.cerulean};
                }
                a{
                    color: ${colors.black};
                }
                a:hover{
                    color: ${colors.white};
                    text-decoration: none;
                }
                p{
                    color: gray;
                    margin-bottom: 0px;
                }
                h1{
                    color: ${colors.black};
                }
                a :global(.jumbotron){
                    background-color:${anuncio.color};
                    padding: 2rem;
                }
            `}</style>
        </>

    )
}

export default AnuncioLink
