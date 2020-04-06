import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Custom404() {
    return (
        <Layout>
            <Container>
                <div>
                    <h1><FontAwesomeIcon icon={['fas', 'robot']} size="3x" /></h1>
                    <h1>404</h1>
                    <p className="lead">¡ No hay nada por acá !</p>
                    <Link href="/">
                        <a className="btn btn-outline-secondary">
                            <FontAwesomeIcon icon={['fas', 'arrow-left']} />
                            <span></span>
                            Volvé a la página principal
                        </a>
                    </Link>
                </div>
            </Container>

            <style jsx>{`
                h1,h3{
                    text-align: center;
                    color: gray;
                }

                p{
                    text-align: center;
                }
                
                a{
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 250px;
                }

                span{
                    margin-right: 5px;
                }
            `}</style>
        </Layout>
    );
}