import React from 'react';

import { Datepicker, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { useFormContext } from 'react-hook-form';
import { AlleKodeverk } from '@navikt/fp-types';
import { KodeverkType, VilkarType } from '@navikt/fp-kodeverk';
import { Vurdering, VurderMedlemskapFormValues } from '../../types/vurderingMedlemskapForm';

interface Props {
  alleKodeverk: AlleKodeverk;
}

const VurderingAlternativer = ({ alleKodeverk }: Props) => {
  const { watch } = useFormContext<VurderMedlemskapFormValues>();
  const vurdering = watch('vurdering');

  const avslagsårsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET];

  return (
    <>
      <RadioGroupPanel
        name="vurdering"
        label="Er medlemskapsvilkåret oppfylt?"
        validate={[required]}
        isReadOnly={false}
        isEdited={false}
        radios={[
          {
            label: 'Oppfylt',
            value: Vurdering.OPPFYLT,
          },
          {
            label: 'Delvis oppfylt',
            value: Vurdering.DELVIS_OPPFYLT,
          },
          {
            label: 'Ikke oppfylt',
            value: Vurdering.IKKE_OPPFYLT,
          },
        ]}
      />
      {vurdering && [Vurdering.DELVIS_OPPFYLT, Vurdering.IKKE_OPPFYLT].includes(vurdering) && (
        <SelectField
          name="avslagskode"
          label="Velg en avslagsårsak"
          selectValues={avslagsårsaker.map(aa => (
            <option key={aa.kode} value={aa.kode}>
              {aa.navn}
            </option>
          ))}
          readOnly={false}
          validate={[required]}
        />
      )}

      {vurdering === Vurdering.DELVIS_OPPFYLT && (
        <Datepicker name="opphørFom" label="Når opphører medlemskapet?" validate={[hasValidDate, required]} />
      )}
    </>
  );
};

export default VurderingAlternativer;
