import {Container, Col, Row, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Colors from './colors'

export default function Footer() {    
    return (
        <footer>
            <Container>
                <Row>
                    <Col sm={5}>                        
                        <b>Centro de Estudiantes de Ingeniería La Linea Recta</b><br/>
                        <i>Facultad de Ingeniería de la Universidad de Buenos Aires</i><br/>
                        <i>Av. Paseo Colón 850 - C1063ACV - Buenos Aires - Argentina</i><br/>
                        Sitio administrado por la Presidencia del Centro de Estudiantes 
                    </Col>
                    <Col sm={5}>
                        <p><b>Contacto</b></p>
                        <div className="flex social">                            
                            <a href="mailto:mli.fiuba@gmail.com" target="blank">
                                <FontAwesomeIcon icon={['fas', 'envelope-square']} size="3x" />
                            </a>
                            <a href="https://www.facebook.com/mli.fiuba" target="blank">
                                <FontAwesomeIcon icon={['fab', 'facebook-square']} size="3x" />
                            </a>
                            <a href="https://www.instagram.com/mli.fiuba" target="blank">
                                <FontAwesomeIcon icon={['fab', 'instagram-square']} size="3x" />
                            </a>
                        </div>                        
                    </Col>
                    <Col sm={2}>
                        <div className="flex flex-center">
                            <Image src="img/logopresidenciacei.png" fluid/>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                footer{
                    background-color:${Colors.black};
                    color: ${Colors.white};
                    padding: 50px;  
                    font-size: 0.75rem; 
                }

                .flex{
                    height: 100%;
                    display: flex;
                }

                .flex-center{
                    align-items: center;
                }    

                .social a{
                    color: ${Colors.white};
                    text-decoration: none;
                    margin-right: 5px;
                }

                .social a:hover{
                    color: #0f90d1;
                }       
            `}</style>
        </footer>
    )
}