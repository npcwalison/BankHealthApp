import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable';


export const Container = styled.View`
    flex: 1;
    background-color: #38a69d;
`;

export const ContainerLogo = styled.View`
    flex: 2;
    background-color: #38a69d;
    justify-content: center;
    align-items: center;
`;

export const ContainerForm = styled(Animatable.View)`
    flex: 1;
    background-color: #ffffff;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-left: 5%;
    padding-right: 5%;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 26px;
    margin-bottom: 12px;
`;

export const Text = styled.Text`
    color: #A1A1A1;
`;

export const Logo = styled(Animatable.Image)``;

export const Button = styled.TouchableOpacity`
    position: absolute;
    background-color: red;
    border-radius: 50px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 60%;
    align-self: center;
    bottom: 15%;
    align-items: center;
    justify-content: center;
`;

export const BtnText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`;