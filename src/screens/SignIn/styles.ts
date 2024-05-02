import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable';


export const Container = styled.View`
    flex: 1;
    background-color: #38A69D;
`;

export const ContainerHeader = styled(Animatable.View)`
    margin-top: 14%;
    margin: 8%;
    padding-left: 5%;
    padding-right: 5%;
`;

export const Message = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #ffffff;
`;

export const ContainerForm = styled(Animatable.View)`
    background-color: #ffffff;
    flex: 1;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    padding-left: 5%;
    padding-right: 5%;
`;

export const Label = styled.Text`
    font-size: 16px;
    margin-top: 28px;
`;

export const Input = styled.TextInput`
    border-bottom-width: 1px;
    height: 40px;
    margin-bottom: 12px;
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #38A69D;
    width: 100%;
    border-radius: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
`;

export const BtnText = styled.Text`
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
`;

export const ButtonRegister = styled.TouchableOpacity`
    margin-top: 14px;
    align-self: center;
`;

export const RegisterText = styled.Text`
    color: #A1A1A1;
`;