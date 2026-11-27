import React, { type ComponentProps, useEffect, useRef, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ExternalLinkIcon, KeyboardIcon, MenuGridIcon, MoonIcon, SunIcon } from '@navikt/aksel-icons';
import { Dropdown, InternalHeader, Link, Spacer, Theme } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import { Adventslys } from './components/Adventslys';
import { erJuletid } from './components/adventUtils';
import { FeilmeldingPanel } from './components/FeilmeldingPanel';
import { Julekrans } from './components/Julekrans';
import { NisseNavn } from './components/NisseNavn';
import { PyntetTittel } from './components/PyntetTittel';
import type { DekoratorLenke } from './typer/dekoratorLenke';
import type { Feilmelding } from './typer/feilmeldingTsType';

import julekransStyles from './components/julekrans.module.css';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  tittel: string;
  tittelLenke?: string;
  tittelCallback?: (event: React.SyntheticEvent) => void;
  navAnsattNavn: string;
  feilmeldinger: Feilmelding[];
  fjernFeilmeldinger: () => void;
  setSiteHeight: (height: number) => void;
  interneLenker: DekoratorLenke[];
  eksterneLenker: DekoratorLenke[];
  theme: ComponentProps<typeof Theme>['theme'];
  setTheme: (theme: NonNullable<ComponentProps<typeof Theme>['theme']>) => void;
  visTastatursnarveier?: () => void;
  /** Overstyrer dagens dato, f.eks. for å vise juledekoren i Storybook */
  dato?: Date;
}

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
  navAnsattNavn,
  feilmeldinger,
  fjernFeilmeldinger,
  setSiteHeight,
  interneLenker,
  eksterneLenker,
  theme,
  setTheme,
  visTastatursnarveier,
  dato,
}: Props) => {
  const [idag] = useState(() => new Date());
  const dagensDato = dato ?? idag;
  const visJuledekor = erJuletid(dagensDato);

  const fixedHeaderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (fixedHeaderRef.current) {
      setSiteHeight(fixedHeaderRef.current.clientHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mål høgd berre når talet på feilmeldingar endrar seg; setSiteHeight er stabil
  }, [feilmeldinger.length]);

  return (
    <div ref={fixedHeaderRef} className="fixed top-0 z-[101] w-full">
      <RawIntlProvider value={intl}>
        <InternalHeader className={visJuledekor ? julekransStyles['julehode'] : undefined}>
          <InternalHeader.Title
            className="text-xl"
            href={tittelLenke}
            onClick={tittelCallback}
            onContextMenu={tittelCallback}
          >
            {visJuledekor ? <PyntetTittel tittel={tittel} /> : tittel}
          </InternalHeader.Title>
          <Adventslys dato={dagensDato} />
          <Spacer />
          <Dropdown>
            <InternalHeader.Button as={Dropdown.Toggle}>
              <MenuGridIcon
                fontSize="1.5rem"
                title={intl.formatMessage({ id: 'DekoratorMedFeilviserSakIndex.SystemerOgOppslagsverk' })}
              />
            </InternalHeader.Button>
            <Theme theme={theme}>
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
            </Theme>
          </Dropdown>
          <InternalHeader.User name={visJuledekor ? <NisseNavn navn={navAnsattNavn} /> : navAnsattNavn} />
          {location.hostname.includes('localhost') && (
            <InternalHeader.Button href={`${location.origin}/oauth2/login?redirect=${location.pathname}`} as={Link}>
              <FormattedMessage id="DekoratorMedFeilviserSakIndex.ByttBruker" />
            </InternalHeader.Button>
          )}
          {visTastatursnarveier && (
            <InternalHeader.Button
              onClick={visTastatursnarveier}
              aria-label={intl.formatMessage({ id: 'DekoratorMedFeilviserSakIndex.Tastatursnarveier' })}
            >
              <KeyboardIcon fontSize="1.5rem" aria-hidden />
            </InternalHeader.Button>
          )}
          <InternalHeader.Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'dark' ? (
              <SunIcon
                fontSize="1.5rem"
                title={intl.formatMessage({ id: 'DekoratorMedFeilviserSakIndex.EndreTilLysTema' })}
              />
            ) : (
              <MoonIcon
                fontSize="1.5rem"
                title={intl.formatMessage({ id: 'DekoratorMedFeilviserSakIndex.EndreTilMorkTema' })}
              />
            )}
          </InternalHeader.Button>
        </InternalHeader>
        {visJuledekor && <Julekrans />}
        <FeilmeldingPanel fjernFeilmeldinger={fjernFeilmeldinger} feilmeldinger={feilmeldinger} />
      </RawIntlProvider>
    </div>
  );
};
