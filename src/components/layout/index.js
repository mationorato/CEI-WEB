import { Container } from 'react-bootstrap';
import CommonHead from './commonHead';
import Header from './header';
import Footer from './footer';
import Colors from './colors';


export default function Layout(props) {
    return (
        <main>
            <CommonHead />
            <Header />
            <Container>
                <div className="alert alert-warning" role="alert">
                    <i className="fas fa-exclamation-triangle fa-mr"></i>
                    <b>El Chat se encuentra temporalmente deshabilitado</b><br />
                    Mientras tanto, vamos a estar respondiendo consultas por el <a href="https://m.me/mli.fiuba"> chat del facebook del MLI</a> <br />
                    Estamos trabajando para volver a activarlo a la brevedad :)
                </div>
            </Container>
            <section>
                {props.children}
            </section>
            <Footer />
            <style jsx global>{`
                html{    
                    font-family: 'Roboto', sans-serif;
                    background-color: ${Colors.white};
                }
                body{
                    background-color: ${Colors.white};
                }
            `}</style>
        </main>
    )
}