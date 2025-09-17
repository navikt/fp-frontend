import { type ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ExternalLinkIcon } from '@navikt/aksel-icons';
import { Button, CopyButton, Detail, HStack, Label, Spacer, Tag, type TagProps, VStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import { FagsakStatusEnum, FamilieHendelseType } from '@navikt/fp-kodeverk';

import type { FamilieHendelse, JournalFagsak } from '../../../typer/journalFagsakTsType';

import styles from './sakDetaljer.module.css';

type Props = Readonly<{
  sak: JournalFagsak;
}>;

/**
 * SakDetaljer - Inneholder detaljer om en sak som kan knyttes til journalposten
 */
export const SakDetaljer = ({ sak }: Props) => {
  const famTekst = utledFamileihendelsetekst(sak.familieHendelseJf);
  const intl = useIntl();
  return (
    <HStack className={styles.sakContainer} gap="0 4" align="center" wrap={false}>
      <div>
        <VStack gap="space-4">
          <HStack gap="0 2" align="center">
            <Label>
              <FormattedMessage id="Journal.Sak.Ytelse" values={{ ytelseType: sak.ytelseType }} />
            </Label>
            <HStack align="center">
              <Label>{sak.saksnummer}</Label>
              <CopyButton copyText={sak.saksnummer} variant="action" size="small" />
            </HStack>
          </HStack>
          <VStack gap="space-8">
            <HStack gap="space-8">
              <Detail>
                <FormattedMessage
                  id="Journal.Sak.OpprettetDato"
                  values={{ br: <br />, opprettetDato: dateFormat(sak.opprettetDato) }}
                />
              </Detail>
              {sak.førsteUttaksdato && (
                <Detail>
                  <FormattedMessage
                    id="Journal.Sak.FørsteUttak"
                    values={{
                      br: <br />,
                      førsteUttak: dateFormat(sak.førsteUttaksdato),
                    }}
                  />
                </Detail>
              )}
              {famTekst && <Detail>{famTekst}</Detail>}
            </HStack>
            <div>{lagEtikett(sak.status)}</div>
          </VStack>
        </VStack>
      </div>

      <Spacer />
      <Button
        as="a"
        href={velgSakLenke(sak.saksnummer)}
        target="_blank"
        rel="noreferrer"
        variant="tertiary"
        title={intl.formatMessage({ id: 'DokumentDetaljer.ExternalLink' })}
        icon={<ExternalLinkIcon className={styles.externalLinkIcon} />}
      />
    </HStack>
  );
};

const velgSakLenke = (saksnummer: string): string => `/fagsak/${saksnummer}/`;

const finnTagProps = (statusKode: string): TagProps | null => {
  switch (statusKode) {
    case FagsakStatusEnum.AVSLUTTET:
      return { variant: 'neutral', size: 'xsmall', children: <FormattedMessage id="Journal.Sak.Avsluttet" /> };
    case FagsakStatusEnum.LOPENDE:
      return { variant: 'warning', size: 'xsmall', children: <FormattedMessage id="Journal.Sak.Løpende" /> };
    case FagsakStatusEnum.OPPRETTET:
      return { variant: 'alt1', size: 'xsmall', children: <FormattedMessage id="Journal.Sak.Opprettet" /> };
    case FagsakStatusEnum.UNDER_BEHANDLING:
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
  if (!familieHendelseJf?.familihendelseType || !familieHendelseJf.familiehHendelseDato) {
    return null;
  }
  const tekstKode = finnFamilieHendelseTekstKode(familieHendelseJf.familihendelseType);
  return (
    <FormattedMessage
      id={tekstKode}
      values={{ br: <br />, famDato: dateFormat(familieHendelseJf.familiehHendelseDato) }}
    />
  );
};

const lagEtikett = (fagsakStatus: string): ReactElement | null => {
  const props = finnTagProps(fagsakStatus);
  return props ? <Tag {...props} /> : null;
};
