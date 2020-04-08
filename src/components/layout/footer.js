import { Container, Col, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Colors from './colors'

export default function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col sm={5}>
                        <div className="mb">
                            <p className="head">
                                Centro de Estudiantes de Ingeniería<br />
                                "La Linea Recta"
                            </p>
                            <i>Facultad de Ingeniería de la Universidad de Buenos Aires</i><br />
                            <i>Av. Paseo Colón 850 - C1063ACV - Buenos Aires - Argentina</i><br />
                            <p>Sitio administrado por la Presidencia del Centro de Estudiantes</p>
                        </div>
                    </Col>
                    <Col sm={7} >
                        <Row>
                            <Col lg={7}>
                                <div className="mb">
                                    <p className="head">Contacto</p>
                                    <div className="flex social">
                                        <a href="mailto:mli.fiuba@gmail.com" target="blank">
                                            <FontAwesomeIcon icon={['fas', 'envelope-square']} />
                                        </a>
                                        <a href="https://www.facebook.com/mli.fiuba" target="blank">
                                            <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                                        </a>
                                        <a href="https://www.instagram.com/mli.fiuba" target="blank">
                                            <FontAwesomeIcon icon={['fab', 'instagram-square']} />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="mb logo">
                                    <Image src="/img/logopresidenciacei.png" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                footer{
                    background-color:${Colors.black};
                    color: ${Colors.white};
                    padding: 50px;  
                    font-size: 0.75rem;
                    margin-top:50px; 
                }

                .head{
                    font-size: 1rem
                }

                .mb{
                    margin-bottom: 15px;
                }

                .logo :global(img){
                    max-height: 80px;
                }
                .flex{
                    height: 100%;
                    display: flex;
                }

                .flex-center{
                    align-items: center;
                }    

                .social a{
                    color: lightgray;
                    text-decoration: none;
                    margin-right: 5px;
                    font-size: 0.75rem;
                }
                .social a:hover{
                    color: ${Colors.white}
                }       

                .social a :global(svg){
                    height: 40px;
                }
            `}</style>
        </footer>
    )
}