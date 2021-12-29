import {
    Container,
    Title,
} from './styles';

interface ButtonProps {
    text: string;
}

export function Button(props: ButtonProps) {
    return (
        <Container>
            <Title>{props.text}</Title>
        </Container> 
    )
}