import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';


import {
    Container,
    Aside,
    Illustration,
    AsideTitle,
    AsideText,
    MainContent,
    Main,
    Logo,
    MainButton,
    GoogleIcon,
    Line,
    Form,
    FormInput,
    FormButton,
} from './styles';

export function Home() {
    return ( 
        <Container>
            <Aside>
                <Illustration src={illustrationImg} alt="Ilustração"/>
                <AsideTitle>Crie salas de Q&amp;A ao-vivo</AsideTitle>
                <AsideText>Tire as dúvidas da sua audiência em tempo-real</AsideText>
            </Aside>
            <Main>
                <MainContent>
                    <Logo src={logoImg} alt="Logo"/>
                    <MainButton>
                        <GoogleIcon src={googleIconImg} alt="Logo Google"/>
                        Crie sua sala com o Google
                    </MainButton>

                    <Line>ou entre em uma sala</Line>

                    <Form>
                        <FormInput 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <FormButton type="submit">Entrar na Sala</FormButton>
                    </Form>
                </MainContent>
            </Main>
        </Container>
    );
}