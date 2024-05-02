import React from "react";
import {
    Container,
    ContainerLogo,
    ContainerForm,
    Title,
    Text,
    Logo,
    Button,
    BtnText
} from "./styles";

import { useNavigation } from "@react-navigation/native";


// Definindo tipos de variaveis
type RootStackParamList = {
    SignIn: undefined;
    navigate: any;
    // outras rotas
};


const Landing = () => {
    const navigation = useNavigation<RootStackParamList>();

    return(
        <Container>
            <ContainerLogo>
                <Logo
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </ContainerLogo>
            <ContainerForm
                animation="fadeInUp"
                delay={600}
            >
                <Title>Monitore, organize seus gastos de qualquer lugar!</Title>
                <Text>Faça o login para começar</Text>

                <Button onPress={() => navigation.navigate('SignIn')}>
                    <BtnText>Acessar</BtnText>
                </Button>
            </ContainerForm>
        </Container>
    )
}


export default Landing;