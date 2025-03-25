import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { TabsAddIcon } from '@navikt/aksel-icons';
import { Button, CopyButton, Detail, HStack, Label, Tag, type TagProps, VStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import { FagsakStatus, FamilieHendelseType } from '@navikt/fp-kodeverk';

import type { FamilieHendelse, JournalFagsak } from '../../../typer/journalFagsakTsType';

import styles from './sakDetaljer.module.css';

const velgSakLenke = (saksnummer: string): string => `/fagsak/${saksnummer}/`;

const finnTagProps = (statusKode: string): TagProps | null => {
  switch (statusKode) {
    case FagsakStatus.AVSLUTTET:
      return { variant: 'neutral', size: 'xsmall', children: <FormattedMessage id="Journal.Sak.Avsluttet" /> };
    case FagsakStatus.LOPENDE:
      return { variant: 'warning', size: 'xsmall', children: <FormattedMessage id="Journal.Sak.Løpende" /> };
    case FagsakStatus.OPPRETTET:
      return { variant: 'alt1', size: 'xsmall', children: <FormattedMessage id="Journal.Sak.Opprettet" /> };
    case FagsakStatus.UNDER_BEHANDLING:
      return { variant: 'alt2', size: 'xsmall', children: <FormattedMessage id="Journal.Sak.UnderBehandling" /> };
    default:
      return null;
  }
};

const finnFamilieHendelseTekstKode = (hendelseType: string): string => {
  switch (hendelseType) {
    case FamilieHendelseType.ADOPSJON:
      return 'Journal.Sak.FamAdopsjon';
    case FamilieHendelseType.FODSEL:
      return 'Journal.Sak.FamFødsel';
    case FamilieHendelseType.TERMIN:
      return 'Journal.Sak.FamTermin';
    case FamilieHendelseType.OMSORG:
      return 'Journal.Sak.FamOmsorg';
    default:
      throw new Error(`Ukjent familiehendelse ${hendelseType}`);
  }
};

const utledFamileihendelsetekst = (familieHendelseJf?: FamilieHendelse): ReactElement | null => {
  if (!familieHendelseJf?.familihendelseType || !familieHendelseJf?.familiehHendelseDato) {
    return null;
  }
  const tekstKode = finnFamilieHendelseTekstKode(familieHendelseJf.familihendelseType);
  return <FormattedMessage id={tekstKode} values={{ famDato: dateFormat(familieHendelseJf.familiehHendelseDato) }} />;
};

const lagEtikett = (fagsakStatus: string): ReactElement | null => {
  const props = finnTagProps(fagsakStatus);
  return props ? <Tag {...props} /> : null;
};

type Props = Readonly<{
  sak: JournalFagsak;
}>;

/**
 * SakDetaljer - Inneholder detaljer om en sak som kan knyttes til journalposten
 */
export const SakDetaljer = ({ sak }: Props) => {
  const famTekst = utledFamileihendelsetekst(sak.familieHendelseJf);

  return (
    <div className={styles.sakContainer}>
      <div className={styles.sakDataFelt}>
        <VStack gap="1">
          <HStack gap="3" className={styles.sakRad}>
            <Label>
              <FormattedMessage id="Journal.Sak.Ytelse" values={{ ytelseType: sak.ytelseType }} />
            </Label>
            <Label>{sak.saksnummer}</Label>
            <div className={styles.clipBoard}>
              <CopyButton copyText={sak.saksnummer} variant="action" />
            </div>
          </HStack>
          <VStack gap="2">
            <HStack gap="2">
              <div className={styles.datoFelt}>
                <Detail>
                  <FormattedMessage
                    id="Journal.Sak.OpprettetDato"
                    values={{ opprettetDato: dateFormat(sak.opprettetDato) }}
                  />
                </Detail>
              </div>
              {sak.førsteUttaksdato && (
                <div className={styles.datoFelt}>
                  <Detail>
                    <FormattedMessage
                      id="Journal.Sak.FørsteUttak"
                      values={{ førsteUttak: dateFormat(sak.førsteUttaksdato) }}
                    />
                  </Detail>
                </div>
              )}
              {famTekst && (
                <div className={styles.datoFelt}>
                  <Detail>{famTekst}</Detail>
                </div>
              )}
            </HStack>
            <div>{lagEtikett(sak.status)}</div>
          </VStack>
        </VStack>
      </div>
      <div className={styles.faneFelt}>
        <div>
          <Button
            as="a"
            href={velgSakLenke(sak.saksnummer)}
            target="_blank"
            rel="noreferrer"
            variant="tertiary"
            icon={<TabsAddIcon aria-hidden className={styles.newTabIcon} />}
          />
        </div>
      </div>
    </div>
  );
};
