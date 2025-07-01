import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Checkbox } from '@navikt/ds-react';
import { RhfCheckboxGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { NaringsvirksomhetType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk } from '@navikt/fp-types';

import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';
import type { RegistrerVirksomhetFormValues, VirksomhetFormValues } from '../types';

const naringsvirksomhetTypeOrder = {
  [NaringsvirksomhetType.DAGMAMMA]: 1,
  [NaringsvirksomhetType.FISKE]: 2,
  [NaringsvirksomhetType.JORDBRUK_ELLER_SKOGBRUK]: 3,
  [NaringsvirksomhetType.ANNEN]: 4,
} as Record<string, number>;

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
  return (
    <RhfCheckboxGroup
      name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.typeVirksomhet`}
      control={control}
      label={<FormattedMessage id="Registrering.VirksomhetNaeringTypePanel.Title" />}
      validate={[required]}
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
    ANNEN: typeVirksomhet.includes(NaringsvirksomhetType.ANNEN),
    FISKE: typeVirksomhet.includes(NaringsvirksomhetType.FISKE),
    DAGMAMMA: typeVirksomhet.includes(NaringsvirksomhetType.DAGMAMMA),
    JORDBRUK_SKOGBRUK: typeVirksomhet.includes(NaringsvirksomhetType.JORDBRUK_ELLER_SKOGBRUK),
  },
});

const getNæringvirksomhetTyper = (alleKodeverk: AlleKodeverk) =>
  alleKodeverk['VirksomhetType']
    .filter(t => t.kode !== NaringsvirksomhetType.FRILANSER)
    .sort((a, b) => compare(naringsvirksomhetTypeOrder[a.kode], naringsvirksomhetTypeOrder[b.kode]));

const compare = (arg1: number, arg2: number): number => {
  if (arg1 > arg2) {
    return 1;
  }
  return arg1 < arg2 ? -1 : 0;
};
