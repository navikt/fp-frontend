import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BranchingIcon, CalendarIcon, PersonPregnantIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, HStack } from '@navikt/ds-react';
import { calcDaysAndWeeks, dateFormat } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { TilretteleggingType } from '@navikt/fp-kodeverk';
import { type ArbeidsforholdTilretteleggingDato, SvpTilretteleggingFomKilde } from '@navikt/fp-types';

const finnTekst = (intl: IntlShape, termindato: string, fom?: string): string => {
  const dager = dayjs(termindato).diff(fom, 'days');
  return intl.formatMessage({ id: 'TilretteleggingInfoPanel.Dager' }, { dager });
};

const finnProsentSvangerskapspenger = (tilrettelegging: ArbeidsforholdTilretteleggingDato): number => {
  if (tilrettelegging.type === TilretteleggingType.HEL_TILRETTELEGGING) {
    return 0;
  }
  if (tilrettelegging.type === TilretteleggingType.INGEN_TILRETTELEGGING) {
    return 100;
  }
  return tilrettelegging.overstyrtUtbetalingsgrad ?? 0;
};

const finnProsentArbeid = (tilrettelegging: ArbeidsforholdTilretteleggingDato): number => {
  if (tilrettelegging.type === TilretteleggingType.HEL_TILRETTELEGGING) {
    return 100;
  }
  if (tilrettelegging.type === TilretteleggingType.INGEN_TILRETTELEGGING) {
    return 0;
  }
  return tilrettelegging.stillingsprosent ?? 0;
};

interface Props {
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  termindato: string;
  erTomDatoTreUkerFørTermin: boolean;
  stillingsprosentArbeidsforhold: number;
  tomDato: string;
}

export const TilretteleggingInfoPanel = ({
  tilrettelegging,
  termindato,
  erTomDatoTreUkerFørTermin,
  stillingsprosentArbeidsforhold,
  tomDato,
}: Props) => {
  const intl = useIntl();

  const dagerOgUker = calcDaysAndWeeks(tilrettelegging.fom, tomDato);
  const fremTilTidspunkt = erTomDatoTreUkerFørTermin
    ? intl.formatMessage({ id: 'TilretteleggingInfoPanel.TreUker' })
    : finnTekst(intl, termindato, tomDato);

  const registrertAvSaksbehandler = tilrettelegging.kilde === SvpTilretteleggingFomKilde.REGISTRERT_AV_SAKSBEHANDLER;

  return (
    <div
      style={{
        background: '#E5E5E5',
        marginLeft: '-24px',
        marginTop: '-24px',
        marginRight: '-24px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '50px',
        paddingTop: '10px',
      }}
    >
      <HStack justify="space-between">
        <HStack gap="4">
          <PersonPregnantIcon title="a11y-title" fontSize="1.5rem" />
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
            {stillingsprosentArbeidsforhold !== undefined && (
              <Detail>
                <FormattedMessage
                  id="TilretteleggingInfoPanel.AvStillingsprosent"
                  values={{
                    stillingsprosent: stillingsprosentArbeidsforhold,
                  }}
                />
              </Detail>
            )}
          </div>
        </HStack>
        <HStack gap="4">
          <CalendarIcon title="a11y-title" fontSize="1.5rem" />
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
        {!registrertAvSaksbehandler && (
          <HStack gap="4">
            <BranchingIcon title="a11y-title" fontSize="1.5rem" />
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
          </HStack>
        )}
        {registrertAvSaksbehandler && (
          <HStack gap="4">
            <BranchingIcon title="a11y-title" fontSize="1.5rem" />
            <BodyShort size="small">
              <FormattedMessage id="TilretteleggingInfoPanel.Saksbehandler" />
            </BodyShort>
          </HStack>
        )}
      </HStack>
    </div>
  );
};
