import styled from 'styled-components/native';

export const Loading = styled.View`
  display: flex;
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const HomeView = styled.View`
  margin-top: ${(props: { top: number; }) => props.top + 20};
`;