import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Jumbotron, Container } from 'react-bootstrap';
import Layout from '../../components/layout';
import colors from '../../components/layout/colors'

import anuncios from '../../data/anuncios'

export default function Anuncio(props) {

    const Contenido = dynamic(() => import(`../../data/${props.anuncio.id}.js`))

    return (
        <Layout>
            <Head>
                <title key="title">CEI UBA - {props.anuncio.titulo}</title>
                <meta property="og:title" key="og:title" content={props.anuncio.titulo} />
                <meta property="og:description" key="og:description" content={props.anuncio.bajada} />
                <meta property="og:url" key="og:url" content={`https://cei.fi.uba.ar/a/${props.anuncio.id}`} />
            </Head>
            <div >
                <Jumbotron>
                    <Container>
                        <p className="lead">{props.anuncio.fecha}</p>
                        <h1>{props.anuncio.titulo}</h1>
                        <p>{props.anuncio.bajada}</p>
                    </Container>
                </Jumbotron>
                <Container>
                    <Contenido />
                </Container>
            </div>
            <style jsx>{`
                div :global(.jumbotron){
                    color: ${colors.white};
                    background-color: ${props.anuncio.color};
                    border-radius: 0px;
                }

                div :global(h1){
                    color: ${colors.white};
                }

                p{
                    margin-bottom: 0px;
                }

                div :global(.separator){
                    height: 15px;
                }
                
                div :global(.separator2){
                    height: 30px;
                }

                div :global(.bd) {
                    padding: 1.25rem;
                    margin-top: 1.25rem;
                    margin-bottom: 1.25rem;
                    border: 1px solid #eee;
                    border-left-color: rgb(238, 238, 238);
                    border-left-width: 1px;
                    border-left-width: .25rem;
                    border-radius: .25rem;
                    background-color: white;
                }

                div :global(.bd-info) {
                    border-left-color: #5bc0de;
                }

                div :global(.bd-warning) {
                    border-left-color: #ffc107;
                }

                div :global(.bd-danger) {
                    border-left-color: #dc3545;
                }
                div :global(.bd-success) {
                    border-left-color: #28a745;
                }

                div :global(.hgray){
                    color: ${colors.black};
                }

                div :global(.hbrand){
                    color: #0f90d1;
                    font-weight: 600;
                }

                div :global(a){
                    color: #0f90d1;
                }

                div :global(a:hover){
                    color: #0f90d1;
                    text-decoration: none;
                }

                div :global(.brand-color){
                    color: #0f90d1;
                }

                div :global(.covid-color){
                    color: #03734b;
                }

                div :global(.fa-mr){
                    margin-right: 5px;
                }

                div :global(.fa-mr-h){
                    margin-right: 15px;
                }
            `}</style>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const anuncio = anuncios.filter(a => a.id === params.id)[0];
    return {
        props: {
            anuncio
        },
    }
}

export async function getStaticPaths() {
    const paths = anuncios.map(anuncio => ({
        params: { id: anuncio.id }
    }))

    return { paths, fallback: false }
}

