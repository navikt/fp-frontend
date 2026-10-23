import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Tag } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { FagsakHendelse } from '@navikt/fp-types';

import type { SakVisittkortMessageId } from '../../i18n/messageIds';

const finnFodselsdatoTekstkode = (antallBarn: number) => {
  if (antallBarn === 1) {
    return 'VisittkortBarnInfoFodselPanel.Fodt';
  }
  return antallBarn === 2 ? 'VisittkortBarnInfoFodselPanel.Tvillinger' : 'VisittkortBarnInfoFodselPanel.Flerlinger';
};

const finnAlderTekstkode = (ar: number, maneder: number, dager: number): SakVisittkortMessageId => {
  if (ar > 0) {
    return 'VisittkortBarnInfoFodselPanel.Ar.Fodt';
  }
  if (maneder > 0) {
    return 'VisittkortBarnInfoFodselPanel.Maned.Fodt';
  }
  return dager === 1 ? 'VisittkortBarnInfoFodselPanel.Dag.Fodt' : 'VisittkortBarnInfoFodselPanel.Dager.Fodt';
};

const finnAlderTekstProps = (fødselsdato: string) => {
  const ar = dayjs().diff(fødselsdato, 'years');
  const maneder = dayjs().diff(fødselsdato, 'months');
  const dager = dayjs().diff(fødselsdato, 'days');

  if (ar < 0 || maneder < 0 || dager < 0) {
    throw new Error('Fødselsdato kan ikke være i fremtiden');
  }

  return {
    id: finnAlderTekstkode(ar, maneder, dager),
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

  const visFødselsdato = hendelseType === 'FODSL';

  return (
    <>
      <BodyShort className="text-pretty">
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
          <FormattedMessage
            id="VisittkortBarnInfoFodselPanel.Termin"
            values={{ dato: hendelseDato ? dateFormat(hendelseDato) : '-' }}
          />
        )}
      </BodyShort>
      {dødfødsel && (
        <Tag
          data-color="neutral"
          variant="outline"
          size="small"
          title={intl.formatMessage({ id: 'VisittkortBarnInfoFodselPanel.DodTittel' })}
        >
          <FormattedMessage id="VisittkortBarnInfoFodselPanel.Dod" />
        </Tag>
      )}
    </>
  );
};
