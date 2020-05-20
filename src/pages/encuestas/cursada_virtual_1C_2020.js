import Head from 'next/head'
import { Jumbotron, Container, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../../components/layout';
import colors from '../../components/layout/colors'
import { url, options } from '../../utils/rest';
import Encuesta from '../../components/encuesta/encuesta';


export default function ({ encuesta }) {
    encuesta.fecha_apertura = new Date(encuesta.fecha_apertura);
    encuesta.fecha_cierre = new Date(encuesta.fecha_cierre);

    return (
        <Layout>
            <Head>
                <title key="title">CEI UBA - Encuesta Cursada Virtual 1C 2020</title>
                <meta property="og:title" key="og:title" content="Encuesta Cursada Virtual FIUBA 1C 2020" />
                <meta property="og:description" key="og:description" content="LLená la encuesta para analizar como esta funcionando la cursada virtual en fiuba" />
                <meta property="og:url" key="og:url" content="https://cei.fi.uba.ar/encuestas/cursada_virtual_1C_2020" />
            </Head>
            <div>
                <Jumbotron>
                    <Container>
                        <h1>
                            <i className="fas fa-poll"></i>
                            Encuesta {encuesta.nombre}
                        </h1>
                        <p className="lead">
                            LLená la encuesta para analizar como esta funcionando la cursada virtual en fiuba
                        </p>
                        <br /><hr />
                    </Container>

                </Jumbotron>
                <Container>
                    {
                        Date.now() > encuesta.fecha_apertura && Date.now() < encuesta.fecha_cierre ?
                            <Encuesta encuesta={encuesta} /> :
                            <Alert variant="danger">
                                La encuesta se encuentra cerrada :(
                            </Alert>
                    }
                </Container>
            </div>

            <style jsx>{`
                div :global(.jumbotron){
                    color: ${colors.black};
                    background-color: ${colors.white};
                    border-radius: 0px;
                    margin-bottom: 0px;
                }
                div :global(.fas){
                    margin-right: 10px;
                }
            `}</style>

        </Layout>
    );
}

export async function getStaticProps({ params }) {
    var encuesta = await fetch(
        url.api_academica_encuestas_nombre("Cursada Virtual 1C 2020"),
        options.academica.GET
    ).then(res => res.json())

    return {
        props: {
            encuesta
        },
    }
}
