import styled from 'styled-components/native';
import { Colors } from '../../utilities/colors/colors';

export const ViewActors = styled.View`
    flex-direction: row;
    background-color: ${Colors.white};
    border-radius: 20px;
    margin-right: 25px;
`

export const ActorInfo = styled.View`
    margin-left: 10px;
    background-color: ${Colors.white};
`

export const ActorName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const Character = styled.Text`
  font-size: 16px;
  opacity: 0.7;
`;

export const ProfileImage = styled.Image `
    width: 50px;
    height: 50px;
    border-radius: 10px;
`