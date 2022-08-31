import styled from 'styled-components/native';
import { Colors } from '../../utilities/colors/colors';


export const ContainerImage = styled.View `
    width: 100%;
    height:${(props: { screenHeight: number; }) => props.screenHeight * 0.7}px;;
    justify-content: center;
    align-items: center;
`

export const ImagePoster = styled.Image`
    flex:1;
    width: 100%;
    height: 100%;
    border-bottom-right-radius:25px;
    border-bottom-left-radius:25px;
    box-shadow: 10px 5px 5px black;
`;


export const ContainerInfo = styled.View`
    margin-top: 20px;
    margin-left: 5px;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.black}
`

export const SubTitle = styled.Text`
    font-size: 16px;
    opacity: 0.8;
    color: ${Colors.black}
`