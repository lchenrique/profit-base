import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #f4f5f7;
    height:100vh;
  }
  button{
	  cursor: pointer;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
`;

export default GlobalStyle;
