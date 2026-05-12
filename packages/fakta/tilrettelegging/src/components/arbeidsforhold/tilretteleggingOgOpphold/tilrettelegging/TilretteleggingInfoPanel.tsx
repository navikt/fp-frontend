import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BranchingIcon, CalendarIcon, PersonPregnantIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, HStack } from '@navikt/ds-react';
import { calcDaysAndWeeks, dateFormat } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { type ArbeidsforholdTilretteleggingDato } from '@navikt/fp-types';

const finnFremTilTekst = (intl: IntlShape, termindato: string, tomDatoForTilrettelegging?: string): string => {
  const dager = dayjs(termindato).diff(tomDatoForTilrettelegging, 'days');
  return dager > 21
    ? intl.formatMessage({ id: 'TilretteleggingInfoPanel.TreUker' })
    : intl.formatMessage({ id: 'TilretteleggingInfoPanel.Dager' }, { dager });
};

const finnProsentSvangerskapspenger = (tilrettelegging: ArbeidsforholdTilretteleggingDato): number => {
  switch (tilrettelegging.type) {
    case 'HEL_TILRETTELEGGING':
      return 0;
    case 'INGEN_TILRETTELEGGING':
      return 100;
    case 'DELVIS_TILRETTELEGGING':
      return tilrettelegging.overstyrtUtbetalingsgrad ?? 0;
  }
};

const finnProsentArbeid = (tilrettelegging: ArbeidsforholdTilretteleggingDato): number => {
  switch (tilrettelegging.type) {
    case 'HEL_TILRETTELEGGING':
      return 100;
    case 'INGEN_TILRETTELEGGING':
      return 0;
    case 'DELVIS_TILRETTELEGGING':
      return tilrettelegging.stillingsprosent ?? 0;
  }
};

interface Props {
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  termindato: string;
  stillingsprosentArbeidsforhold: number;
  tomDatoForTilrettelegging: string;
}

export const TilretteleggingInfoPanel = ({
  tilrettelegging,
  termindato,
  stillingsprosentArbeidsforhold,
  tomDatoForTilrettelegging,
}: Props) => {
  const intl = useIntl();

  const dagerOgUker = calcDaysAndWeeks(tilrettelegging.fom, tomDatoForTilrettelegging);
  const fremTilTidspunkt = finnFremTilTekst(intl, termindato, tomDatoForTilrettelegging);

  const registrertAvSaksbehandler = tilrettelegging.kilde === 'REGISTRERT_AV_SAKSBEHANDLER';

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

      <HStack gap="space-8">
        <PersonPregnantIcon aria-hidden fontSize="2rem" />
        <div>
          <BodyShort size="small">
            <FormattedMessage
              id="TilretteleggingInfoPanel.SvpOgArbeid"
              values={{
                svp: finnProsentSvangerskapspenger(tilrettelegging),
                arbeid: finnProsentArbeid(tilrettelegging),
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

      <HStack gap="space-8">
        <BranchingIcon aria-hidden fontSize="2rem" />
        {registrertAvSaksbehandler ? (
          <BodyShort size="small">
            <FormattedMessage id="TilretteleggingInfoPanel.Saksbehandler" />
          </BodyShort>
        ) : (
          <div>
            <BodyShort size="small">
              <FormattedMessage id="TilretteleggingInfoPanel.FraSoknad" />
            </BodyShort>
            <Detail>
              {tilrettelegging.mottattDato && (
                <FormattedMessage
                  id="TilretteleggingInfoPanel.Sendt"
                  values={{
                    dato: dateFormat(tilrettelegging.mottattDato),
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
