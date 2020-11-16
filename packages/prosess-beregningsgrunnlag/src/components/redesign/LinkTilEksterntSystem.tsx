import React, { FunctionComponent } from 'react';
import styles from './linkTilEksternSystem.less';

type OwnProps = {
    linkText: string;
    type: string;
    userIdent?: string;
};

const LinkTilEksterntSystem: FunctionComponent<OwnProps> = ({ type, linkText, userIdent }) => {
  let link;
  if (!userIdent) { return null; }
  // TODO: Det mangler linker til Aa, IM og SØ
  switch (type) {
    case 'AI': {
      link = `https://modapp.adeo.no/a-inntekt/person/${userIdent}?1&soekekontekst=PERSON&modia.global.hent.person.begrunnet=false#!PersonInntektLamell`;
      break;
    }
    default: {
      link = 'http://link';
    }
  }

  if (!linkText || !link) {
    return null;
  }
  return (

    <a
      href={link}
      className={styles.linkText}
      target="_blank"
      rel="noopener noreferrer"
    >
      {`${linkText}`}

    </a>

  );
};
LinkTilEksterntSystem.defaultProps = {
  userIdent: undefined,
};

export default LinkTilEksterntSystem;
