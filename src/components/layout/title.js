import { Container, Jumbotron } from 'react-bootstrap';
import Colors from './colors';

export default function Title(props) {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1 className="display-4">{props.children}</h1>
                </Container>
            </Jumbotron>
            <style jsx>{`
                h1{
                    color: ${Colors.white};
                }
                div :global(.jumbotron){
                    background-color:${props.color};
                    border-radius: 0px;
                }
            `}</style>
        </div>
    )
}
