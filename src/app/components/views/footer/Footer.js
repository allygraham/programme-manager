import React from 'react';
import styled from 'react-emotion';

import { constants } from '~/constants';

const FooterBlock = styled('footer')`
  padding: 1.5rem;
  background-color: #757575;
  color: #FFF;
`;
  
const Link = styled('a')`
  color: #BBDEFB;
  font-weight: 700;
  transition: color 300ms ease-in-out;

  &:hover {
    color: #6BB7F6;
  }
`;

export const Footer = () => (
  <FooterBlock className="footer">
    <div className="content has-text-centered">
      <p>
        Built by <Link href={`mailto:${constants.footer.email}`}>{constants.footer.name}</Link>
      </p>
    </div>
  </FooterBlock>
);
