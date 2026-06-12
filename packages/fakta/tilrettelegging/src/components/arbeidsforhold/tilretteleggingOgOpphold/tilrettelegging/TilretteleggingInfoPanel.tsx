import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BranchingIcon, CalendarIcon, PersonPregnantIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, HStack } from '@navikt/ds-react';
import { calcDaysAndWeeks, dateFormat } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { type SvpTilretteleggingDatoDto } from '@navikt/fp-types';

const finnFremTilTekst = (intl: IntlShape, termindato: string, tomDatoForTilrettelegging?: string): string => {
  const dager = dayjs(termindato).diff(tomDatoForTilrettelegging, 'days');
  return dager > 21
    ? intl.formatMessage({ id: 'TilretteleggingInfoPanel.TreUker' })
    : intl.formatMessage({ id: 'TilretteleggingInfoPanel.Dager' }, { dager });
};

const finnProsentSvangerskapspenger = (tilretteleggingDato: SvpTilretteleggingDatoDto): number => {
  switch (tilretteleggingDato.type) {
    case 'HEL_TILRETTELEGGING':
      return 0;
    case 'INGEN_TILRETTELEGGING':
      return 100;
    case 'DELVIS_TILRETTELEGGING':
      return tilretteleggingDato.overstyrtUtbetalingsgrad ?? 0;
  }
};

const finnProsentArbeid = (tilretteleggingDato: SvpTilretteleggingDatoDto): number => {
  switch (tilretteleggingDato.type) {
    case 'HEL_TILRETTELEGGING':
      return 100;
    case 'INGEN_TILRETTELEGGING':
      return 0;
    case 'DELVIS_TILRETTELEGGING':
      return tilretteleggingDato.stillingsprosent ?? 0;
  }
};

interface Props {
  tilretteleggingDato: SvpTilretteleggingDatoDto;
  termindato: string;
  stillingsprosentArbeidsforhold: number;
  tomDatoForTilrettelegging: string;
  arbeidsforholdErSplittet: boolean;
}

export const TilretteleggingInfoPanel = ({
  tilretteleggingDato,
  termindato,
  stillingsprosentArbeidsforhold,
  tomDatoForTilrettelegging,
  arbeidsforholdErSplittet,
}: Props) => {
  const intl = useIntl();

  const dagerOgUker = calcDaysAndWeeks(tilretteleggingDato.fom, tomDatoForTilrettelegging);
  const fremTilTidspunkt = finnFremTilTekst(intl, termindato, tomDatoForTilrettelegging);

  return (
    <HStack justify="space-between" paddingInline="space-0 space-96">
      <HStack gap="space-8">
        <CalendarIcon aria-hidden fontSize="2rem" />
        <div>
          <BodyShort size="small">
            <FormattedMessage
              id="TilretteleggingInfoPanel.Periode"
              values={{
                periode: dagerOgUker.formattedString,
              }}
            />
          </BodyShort>
          <Detail>{fremTilTidspunkt}</Detail>
        </div>
      </HStack>

      {!arbeidsforholdErSplittet && (
        <HStack gap="space-8">
          <PersonPregnantIcon aria-hidden fontSize="2rem" />
          <div>
            <BodyShort size="small">
              <FormattedMessage
                id="TilretteleggingInfoPanel.SvpOgArbeid"
                values={{
                  svp: finnProsentSvangerskapspenger(tilretteleggingDato),
                  arbeid: finnProsentArbeid(tilretteleggingDato),
                }}
              />
            </BodyShort>
            <Detail>
              <FormattedMessage
                id="TilretteleggingInfoPanel.AvStillingsprosent"
                values={{
                  stillingsprosent: stillingsprosentArbeidsforhold,
                }}
              />
            </Detail>
          </div>
        </HStack>
      )}

      <HStack gap="space-8">
        <BranchingIcon aria-hidden fontSize="2rem" />
        {tilretteleggingDato.kilde === 'REGISTRERT_AV_SAKSBEHANDLER' ? (
          <BodyShort size="small">
            <FormattedMessage id="TilretteleggingInfoPanel.Saksbehandler" />
          </BodyShort>
        ) : (
          <div>
            <BodyShort size="small">
              <FormattedMessage id="TilretteleggingInfoPanel.FraSoknad" />
            </BodyShort>
            <Detail>
              {tilretteleggingDato.mottattDato && (
                <FormattedMessage
                  id="TilretteleggingInfoPanel.Sendt"
                  values={{
                    dato: dateFormat(tilretteleggingDato.mottattDato),
                  }}
                />
              )}
            </Detail>
          </div>
        )}
      </HStack>
    </HStack>
  );
};
