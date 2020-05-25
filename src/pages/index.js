import Link from 'next/link';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Layout from '../components/layout';
import colors from '../components/layout/colors';
import AnuncioLink from '../components/home/anuncioLink';
import anuncios from '../data/anuncios'

export default function Index({ anuncios }) {

    const anunciop = anuncios.filter(a => a.principal).shift()

    return (
        <Layout>
            <Container>
                <div className="anuncios">
                    <img src="/img/anuncio.svg"></img>
                    <h1>Anuncios</h1>
                </div>
                <Row>
                    <Col>
                        {
                            anunciop &&
                            <Link href={anunciop.link}>
                                <a className="anunciop">
                                    <Jumbotron>
                                        <p className="lead">{anunciop.fecha}</p>
                                        <h1>
                                            {anunciop.tipo === "encuesta" && <i className="fas fa-poll"></i>}
                                            {anunciop.titulo}</h1>
                                        <p className="lead">{anunciop.bajada}</p>
                                    </Jumbotron>
                                </a>
                            </Link>
                        }
                    </Col>
                </Row>
                <Row>
                    {
                        anuncios.filter(a => !a.principal).map(anuncio =>
                            <div className="col-lg-4" key={anuncio.id}>
                                <AnuncioLink anuncio={anuncio} />
                            </div>
                        )
                    }
                </Row>
            </Container>
            <style jsx>{`
                .fas{
                    margin-right: 10px;
                }
                a :global(.jumbotron){
                    background-color: ${anunciop.color};
                    padding: 2rem 2rem;                    
                }
                @media (min-width: 992px) {
                    a :global(.jumbotron){
                        padding: 4rem 2rem;
                    }
                }
                .anunciop .lead{
                    color: ${colors.cerulean};
                }
                .anunciop{
                    color: ${colors.black};
                }
                .anunciop:hover{
                    color: ${colors.white};
                    text-decoration: none;
                }
                .anunciop h1{
                    color: ${colors.white};
                }
                .anunciop .lead{
                    color:${colors.white}
                }
                .anunciop p{
                    color:${colors.white};
                    margin-bottom: 0px;
                }
                h1{
                    margin-bottom: 0px;
                }
                .anuncios{
                    display:flex;
                    margin-bottom: 30px;
                    border-top: 1px solid rgba(0,0,0,.1);
                    border-bottom: 1px solid rgba(0,0,0,.1);
                    padding: 15px 0px;
                }
                .anuncios img{
                    height:50px;
                }
                .anuncios h1{
                    margin-top:5px;
                }
            `}</style>
        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            anuncios
        },
    }
}