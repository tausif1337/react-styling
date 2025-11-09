import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const theme = {
  dark: {
    background: "#000",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
`;

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme.dark}>
      <Container>
        <Button >Click me</Button>
      </Container>
    </ThemeProvider>
    </>
  );
}
