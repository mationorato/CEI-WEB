import { Container } from 'react-bootstrap';
import Layout from '../components/layout';
import AnuncioLink from '../components/home/anuncioLink';
import anuncios from '../data/anuncios'

export default function Index(props) {

    return (
        <Layout>
            <Container>
                {process.env.CeiApiKey__Academica}
                <div className="anuncios">
                    <img src="/img/anuncio.svg"></img>
                    <h1>Anuncios</h1>
                </div>
                <div className="row">
                    {props.anuncios.map(anuncio =>
                        <div className="col-lg-4" key={anuncio.id}>
                            <AnuncioLink anuncio={anuncio} />
                        </div>
                    )}
                </div>
            </Container>
            <style jsx>{`
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