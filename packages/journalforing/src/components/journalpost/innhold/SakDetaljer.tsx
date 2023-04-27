import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { Label, Detail, Tag, Button, TagProps } from '@navikt/ds-react';
import { NewTab } from '@navikt/ds-icons';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { FagsakStatus } from '@navikt/ft-kodeverk';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { familieHendelseType } from '@navikt/fp-kodeverk';
import dayjs from 'dayjs';
import { CopyToClipboard } from "@navikt/ds-react-internal";
import styles from './sakDetaljer.module.css';
import { finnYtelseTekst } from './VelgSakForm';
import JournalFagsak, { FamilieHendelse } from '../../../typer/journalFagsakTsType';

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
    case familieHendelseType.ADOPSJON:
      return 'Journal.Sak.FamAdopsjon';
    case familieHendelseType.FODSEL:
      return 'Journal.Sak.FamFødsel';
    case familieHendelseType.TERMIN:
      return 'Journal.Sak.FamTermin';
    case familieHendelseType.OMSORG:
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
  return (
    <FormattedMessage
      id={tekstKode}
      values={{ famDato: dayjs(familieHendelseJf.familiehHendelseDato).format(DDMMYYYY_DATE_FORMAT) }}
    />
  );
};

const lagEtikett = (fagsakStatus: string): ReactElement | null => {
  const props = finnTagProps(fagsakStatus);
  return props ? <Tag {...props} /> : null;
};
type OwnProps = Readonly<{
  sak: JournalFagsak;
}>;

/**
 * SakDetaljer - Inneholder detaljer om en sak som kan knyttes til journalposten
 */
const SakDetaljer: FunctionComponent<OwnProps> = ({ sak }) => {
  const famTekst = useMemo(() => utledFamileihendelsetekst(sak.familieHendelseJf), [sak]);
  const lenke = velgSakLenke(sak.saksnummer);
  return (
    <div className={styles.sakContainer}>
      <div className={styles.sakDataFelt}>
        <FlexRow>
          <FlexColumn>
            <Label>
              <FormattedMessage id={finnYtelseTekst(sak.ytelseType)} />
            </Label>
          </FlexColumn>
          <FlexColumn>
            <Label>{sak.saksnummer}</Label>
          </FlexColumn>
          <FlexColumn className={styles.clipBoard}>
            <CopyToClipboard size="medium" copyText={sak.saksnummer} popoverText="Kopiert" type='button' />
          </FlexColumn>
        </FlexRow>
        <div className={styles.datoRad}>
          <FlexColumn className={styles.datoFelt}>
            <Detail>
              <FormattedMessage
                id="Journal.Sak.OpprettetDato"
                values={{ opprettetDato: dayjs(sak.opprettetDato).format(DDMMYYYY_DATE_FORMAT) }}
              />
            </Detail>
          </FlexColumn>
          {sak.førsteUttaksdato && (
            <FlexColumn className={styles.datoFelt}>
              <Detail>
                <FormattedMessage
                  id="Journal.Sak.FørsteUttak"
                  values={{ førsteUttak: dayjs(sak.førsteUttaksdato).format(DDMMYYYY_DATE_FORMAT) }}
                />
              </Detail>
            </FlexColumn>
          )}
          {famTekst && (
            <FlexColumn className={styles.datoFelt}>
              <Detail>{famTekst}</Detail>
            </FlexColumn>
          )}
        </div>
      </div>
      <div className={styles.etikettFelt}>
        <FlexRow>
          <FlexColumn>{lagEtikett(sak.status)}</FlexColumn>
        </FlexRow>
      </div>
      <div className={styles.faneFelt}>
        <FlexRow>
          <FlexColumn className={styles.sakLenke}>
            <Button as="a" href={lenke} target="_blank" rel="noreferrer" variant="tertiary" icon={<NewTab className={styles.newTabIcon} />} />
          </FlexColumn>
        </FlexRow>
      </div>
    </div>
  );
};
export default SakDetaljer;
