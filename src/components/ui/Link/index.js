import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)(
  ({ theme }) => `
  color: ${theme.color.primary};
  text-decoration: none;
  &:active {
    color: ${theme.color.main};

  }  
`,
);
