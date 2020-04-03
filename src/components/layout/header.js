import { Container,Row, Col, Image } from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <Image src="img/logocei.png" fluid/>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                header{
                    padding: 25px 0px;
                }
            `}</style>
        </header>
    )
}