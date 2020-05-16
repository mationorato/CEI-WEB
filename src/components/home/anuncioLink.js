import Link from 'next/link';
import { Jumbotron } from 'react-bootstrap';
import colors from '../layout/colors';

function AnuncioLink({ anuncio }) {
    return (
        <div>
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
                a{
                    color: ${colors.white}
                }
                a:hover{
                    color: ${colors.white};
                    text-decoration: none;
                }
                p{
                    margin-bottom: 0px;
                }
                h1{
                    color: ${colors.white};
                }
                div :global(.jumbotron){
                    background-color:${anuncio.color};
                    padding: 2rem 2rem;
                }
            `}</style>
        </div>

    )
}

export default AnuncioLink
