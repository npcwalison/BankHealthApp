import React from "react";
import {
    Container,
    ContainerHeader,
    Message,
    ContainerForm,
    Label,
    Input,
    Button,
    BtnText,
    ButtonRegister,
    RegisterText
} from "./styles";


const SignIn = () => {
    return(
        <Container>
            <ContainerHeader animation="fadeInLeft" delay={500}>
                <Message>Bem-Vindo(a)</Message>
            </ContainerHeader>

            <ContainerForm animation="fadeInUp">
                <Label>Email:</Label>
                <Input placeholder="Digite seu email..." />

                <Label>Senha:</Label>
                <Input placeholder="Digite seua senha..." secureTextEntry={true} />

                <Button>
                    <BtnText>Acessar</BtnText>
                </Button>

                <ButtonRegister>
                    <RegisterText>Não possui uma conta? Cadastre-se</RegisterText>
                </ButtonRegister>
            </ContainerForm>
        </Container>
    )
}


export default SignIn;