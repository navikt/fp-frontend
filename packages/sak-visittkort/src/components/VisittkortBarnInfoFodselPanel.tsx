import React from 'react';
import dayjs from 'dayjs';
import { FormattedMessage, useIntl } from 'react-intl';
import { Tag, BodyShort } from '@navikt/ds-react';
import { FagsakHendelse } from '@navikt/fp-types';
import { FamilieHendelseType } from '@navikt/fp-kodeverk';
import { dateFormat } from '@navikt/ft-utils';

const finnFodselsdatoTekstkode = (antallBarn: number): string => {
  if (antallBarn === 1) {
    return 'VisittkortBarnInfoFodselPanel.Fodt';
  }
  return antallBarn === 2 ? 'VisittkortBarnInfoFodselPanel.Tvillinger' : 'VisittkortBarnInfoFodselPanel.Flerlinger';
};

const finnAlderTekstProps = (fødselsdato: string) => {
  const ar = dayjs().diff(fødselsdato, 'years');
  const maneder = dayjs().diff(fødselsdato, 'months');
  const dager = dayjs().diff(fødselsdato, 'days');

  if (ar < 0 || maneder < 0 || dager < 0) {
    throw new Error('Fødselsdato kan ikke være i fremtiden');
  }

  let tekstkode;
  if (ar > 0) {
    tekstkode = 'VisittkortBarnInfoFodselPanel.Ar.Fodt';
  } else if (maneder > 0) {
    tekstkode = 'VisittkortBarnInfoFodselPanel.Maned.Fodt';
  } else if (dager >= 0) {
    if (dager === 1) {
      tekstkode = 'VisittkortBarnInfoFodselPanel.Dag.Fodt';
    }
    if (dager === 0 || dager > 1) {
      tekstkode = 'VisittkortBarnInfoFodselPanel.Dager.Fodt';
    }
  }

  return {
    id: tekstkode,
    values: {
      value: ar || maneder || dager,
    },
  };
};

interface Props {
  familiehendelse: FagsakHendelse;
}

export const VisittkortBarnInfoFodselPanel = ({ familiehendelse }: Props) => {
  const intl = useIntl();
  const { hendelseType, hendelseDato, antallBarn, dødfødsel } = familiehendelse;

  const visFødselsdato = hendelseType === FamilieHendelseType.FODSEL;

  return (
    <>
      <BodyShort>
        {visFødselsdato && !!hendelseDato && antallBarn > 0 && (
          <>
            <FormattedMessage id={finnFodselsdatoTekstkode(antallBarn)} values={{ dato: dateFormat(hendelseDato) }} />
            {!dødfødsel && <FormattedMessage {...finnAlderTekstProps(hendelseDato)} />}
          </>
        )}
        {visFødselsdato && (!hendelseDato || antallBarn === 0) && (
          <FormattedMessage id="VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger" />
        )}
        {!visFødselsdato && (
          <FormattedMessage id="VisittkortBarnInfoFodselPanel.Termin" values={{ dato: dateFormat(hendelseDato) }} />
        )}
      </BodyShort>
      {dødfødsel && (
        <Tag
          variant="neutral"
          size="small"
          title={intl.formatMessage({ id: 'VisittkortBarnInfoFodselPanel.DodTittel' })}
        >
          <FormattedMessage id="VisittkortBarnInfoFodselPanel.Dod" />
        </Tag>
      )}
    </>
  );
};
