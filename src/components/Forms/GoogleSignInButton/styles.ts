import styled from "styled-components";

interface GoogleSignInButtonProps {
  themeColor?: "dark" | "light";
}

export const Container = styled.button<GoogleSignInButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  width: 98%;
  height: 40px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  background-color: ${({ themeColor, theme }) =>
    themeColor === "dark" ?  theme.colors.black100 : theme.colors.white100 };

&:disabled {
    opacity: 0.8;
    background-color: ${({ theme, themeColor }) => 
    themeColor === "dark" ? theme.colors.black100 : theme.colors.white100};
    cursor: default;
  }
`;

export const Title = styled.h4<GoogleSignInButtonProps>`
  color: ${({ themeColor, theme }) =>
    themeColor === "dark" ? theme.colors.white100 : theme.colors.black100};
  margin-left: 12px;
  font-size: ${({ theme }) => theme.sizes.medium};
  @media(max-width: 720px){
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

