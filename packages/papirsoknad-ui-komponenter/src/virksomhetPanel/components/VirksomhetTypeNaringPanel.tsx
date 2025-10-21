import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Checkbox } from '@navikt/ds-react';
import { RhfCheckboxGroup } from '@navikt/ft-form-hooks';

import type { AlleKodeverk, VirksomhetType } from '@navikt/fp-types';

import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';
import type { RegistrerVirksomhetFormValues, VirksomhetFormValues } from '../types';

const naringsvirksomhetTypeOrder: Record<VirksomhetType, number> = {
  FRILANSER: -1,
  DAGMAMMA: 1,
  FISKE: 2,
  JORDBRUK_SKOGBRUK: 3,
  ANNEN: 4,
  '-': 5,
};

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  index: number;
}

/**
 * VirksomhetTypeNaringPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
export const VirksomhetTypeNaringPanel = ({ readOnly, alleKodeverk, index }: Props) => {
  const { control } = useFormContext<VirksomhetFormValues>();
  const intl = useIntl();
  return (
    <RhfCheckboxGroup
      name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.typeVirksomhet`}
      control={control}
      label={<FormattedMessage id="Registrering.VirksomhetNaeringTypePanel.Tittel" />}
      validate={[
        checked =>
          checked.length > 0
            ? undefined
            : intl.formatMessage({ id: 'Registrering.VirksomhetNaeringTypePanel.Required' }),
      ]}
      isReadOnly={readOnly}
    >
      {getNæringvirksomhetTyper(alleKodeverk).map(type => (
        <Checkbox key={type.kode} value={type.kode} readOnly={readOnly}>
          {type.navn}
        </Checkbox>
      ))}
    </RhfCheckboxGroup>
  );
};

VirksomhetTypeNaringPanel.transformValues = ({ typeVirksomhet }: RegistrerVirksomhetFormValues) => ({
  typeVirksomhet: {
    ANNEN: typeVirksomhet.includes('ANNEN'),
    FISKE: typeVirksomhet.includes('FISKE'),
    DAGMAMMA: typeVirksomhet.includes('DAGMAMMA'),
    JORDBRUK_SKOGBRUK: typeVirksomhet.includes('JORDBRUK_SKOGBRUK'),
  },
});

const getNæringvirksomhetTyper = (alleKodeverk: AlleKodeverk) =>
  alleKodeverk['VirksomhetType']
    .filter(t => t.kode !== 'FRILANSER')
    .sort((a, b) => compare(naringsvirksomhetTypeOrder[a.kode], naringsvirksomhetTypeOrder[b.kode]));

const compare = (arg1: number, arg2: number): number => {
  if (arg1 > arg2) {
    return 1;
  }
  return arg1 < arg2 ? -1 : 0;
};
