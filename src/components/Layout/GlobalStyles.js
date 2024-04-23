import { createGlobalStyle } from 'styled-components';

export const DefaultStyles = `
html, body {
	height: 100%;
}

#root {
	height: 100%;
}


*, *::after, *::before {
  box-sizing: border-box;
  }
  
  
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-rendering: optimizeLegibility;
}
`;

const CommonStyle = createGlobalStyle`
${DefaultStyles}
`;
export default CommonStyle;
