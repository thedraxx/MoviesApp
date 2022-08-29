import styled from 'styled-components/native';

export const Container = styled.View`
  margin-Top: 25px ;
  height: ${(props: { title: string; }) => props.title ? 260 : 220}px;
`;

export const CustomText = styled.Text `
     font-Size: 25 ;
     font-Weight: bold;
`