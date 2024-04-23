import React from 'react';
import { Container, Link } from '@components/ui';
import { FormattedMessage } from 'react-intl';
import clientRoutes from 'src/constants/clientRoutes';
import { AdditionalBox, HeaderBox, HomeLink, NavBox } from './styled';

const transformLink = (langKey, defaultLangKey) => url =>
  langKey === defaultLangKey ? url : `/${langKey}${url}`;

const Navigation = ({ homeLink, langKey, defaultLangKey, languagesMenu }) => {
  const links = languagesMenu.map(lang => {
    const linkTo =
      lang.link.includes(clientRoutes.blog) && langKey === defaultLangKey
        ? `/${lang.langKey}/`.replace(`/${defaultLangKey}/`, '/')
        : lang.link;
    return (
      <Link
        to={linkTo}
        key={lang.langKey}
        style={{
          color: 'black',
        }}
      >
        <li selected={lang.selected}>{lang.langKey}</li>
      </Link>
    );
  });

  const getLink = transformLink(langKey, defaultLangKey);

  return (
    <nav role="navigation" aria-label="main-navigation">
      <Container>
        <HeaderBox>
          <NavBox>
            <HomeLink to={homeLink}>
              <FormattedMessage id="name" />
            </HomeLink>

            <Link to={getLink(clientRoutes.about)} activeClassName="active">
              <FormattedMessage id="bio" />
            </Link>

            <Link to={getLink(clientRoutes.videos)} activeClassName="active">
              <FormattedMessage id="videos" />
            </Link>

            <Link to={getLink(clientRoutes.blog)} activeClassName="active">
              <FormattedMessage id="blog" />
            </Link>
          </NavBox>

          <AdditionalBox>{links}</AdditionalBox>
        </HeaderBox>
      </Container>
    </nav>
  );
};

export default Navigation;
