import Link from 'next/link';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <Link href="/">
                            <a>
                                <Image src="/img/logocei.png" fluid />
                            </a>
                        </Link>

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