import styled from 'styled-components';
import Link from '@components/ui/Link';
import { Col, Row } from '@components/ui';

const HEADER_HEIGHT = 80;

export const HeaderBox = styled(Row)`
  display: flex;
  justify-content: space-between;
`

export const NavBox = styled(Col)(
  ({ theme }) => `
  display: flex;
  height: ${HEADER_HEIGHT}px;
  align-items: center;
  ${Link} {
    padding: 0 ${theme.spacing.sm}px;
  }
`,
);


export const HomeLink = styled(Link)(({theme})=>`
  font-weight: bold;
  font-size: 24px;
  margin-right: ${theme.spacing.lg}px;;
  padding: 0!important;
`)

export const AdditionalBox = styled.div`
`
