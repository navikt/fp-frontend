import React, { useEffect, useRef } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { Dropdown, InternalHeader, Link, Spacer } from '@navikt/ds-react';
import { ExternalLinkIcon, MenuGridIcon } from '@navikt/aksel-icons';
import { FeilmeldingPanel } from './components/FeilmeldingPanel';
import { Feilmelding } from './typer/feilmeldingTsType';

import messages from '../i18n/nb_NO.json';

import styles from './dekoratorMedFeilviserSakIndex.module.css';
import { DekoratorLenke } from './typer/dekoratorLenke';

const intl = createIntl(messages);

interface Props {
  tittel: string;
  tittelLenke?: string;
  tittelCallback?: (event: React.SyntheticEvent) => void;
  navAnsattNavn?: string;
  feilmeldinger: Feilmelding[];
  fjernFeilmeldinger: () => void;
  setSiteHeight: (height: number) => void;
  interneLenker?: DekoratorLenke[];
  eksterneLenker: DekoratorLenke[];
}

const EMPTY_ARRAY = [] as DekoratorLenke[];

/**
 * DekoratorMedFeilviserSakIndex
 *
 * Definerer header-linjen som alltid vises øverst nettleservinduet.
 * Denne viser lenke tilbake til hovedsiden, nettside-navnet, Nav-ansatt navn og lenker i meny.
 * I tillegg vil den vise potensielle feilmeldinger i FeilmeldingPanel.
 */
export const DekoratorMedFeilviserSakIndex = ({
  tittel,
  tittelLenke,
  tittelCallback,
  navAnsattNavn = '',
  feilmeldinger,
  fjernFeilmeldinger,
  setSiteHeight,
  interneLenker = EMPTY_ARRAY,
  eksterneLenker,
}: Props) => {
  const fixedHeaderRef = useRef<any>();
  useEffect(() => {
    setSiteHeight(fixedHeaderRef.current.clientHeight);
  }, [feilmeldinger.length]);

  return (
    <div ref={fixedHeaderRef} className={styles.container}>
      <RawIntlProvider value={intl}>
        <InternalHeader>
          <InternalHeader.Title href={tittelLenke} onClick={tittelCallback} onContextMenu={tittelCallback}>
            {tittel}
          </InternalHeader.Title>
          <Spacer />
          <Dropdown>
            <InternalHeader.Button as={Dropdown.Toggle}>
              <MenuGridIcon
                style={{ fontSize: '1.5rem' }}
                title={intl.formatMessage({ id: 'DekoratorMedFeilviserSakIndex.SystemerOgOppslagsverk' })}
              />
            </InternalHeader.Button>
            <Dropdown.Menu>
              <Dropdown.Menu.GroupedList>
                {interneLenker.length > 0 && (
                  <Dropdown.Menu.GroupedList.Heading>
                    <FormattedMessage id="DekoratorMedFeilviserSakIndex.Vedtakslosningen" />
                  </Dropdown.Menu.GroupedList.Heading>
                )}
                {interneLenker.map(lenke => (
                  <Dropdown.Menu.GroupedList.Item as={Link} key={lenke.tekst} onClick={lenke.callback}>
                    {lenke.tekst}
                  </Dropdown.Menu.GroupedList.Item>
                ))}
                <Dropdown.Menu.GroupedList.Heading>
                  <FormattedMessage id="DekoratorMedFeilviserSakIndex.SystemerOgOppslagsverk" />
                </Dropdown.Menu.GroupedList.Heading>
                {eksterneLenker.map(lenke => (
                  <Dropdown.Menu.GroupedList.Item as={Link} key={lenke.tekst} href={lenke.href} target="_blank">
                    {lenke.tekst}
                    <ExternalLinkIcon
                      title={intl.formatMessage({ id: 'DekoratorMedFeilviserSakIndex.EksternLenke' })}
                    />
                  </Dropdown.Menu.GroupedList.Item>
                ))}
              </Dropdown.Menu.GroupedList>
            </Dropdown.Menu>
          </Dropdown>
          <InternalHeader.User name={navAnsattNavn} />
        </InternalHeader>
        <FeilmeldingPanel fjernFeilmeldinger={fjernFeilmeldinger} feilmeldinger={feilmeldinger} />
      </RawIntlProvider>
    </div>
  );
};
