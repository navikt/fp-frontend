import React from 'react';

import { Datepicker, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { useFormContext } from 'react-hook-form';
import { AlleKodeverk } from '@navikt/fp-types';
import { KodeverkType, VilkarType } from '@navikt/fp-kodeverk';
import { Vurdering, VurderMedlemskapFormValues } from '../../types/vurderingMedlemskapForm';
import { useIntl } from 'react-intl';

interface Props {
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
}

const VurderingAlternativer = ({ alleKodeverk, readOnly }: Props) => {
  const { watch } = useFormContext<VurderMedlemskapFormValues>();
  const vurdering = watch('vurdering');

  const avslagsårsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET];
  const intl = useIntl();
  return (
    <>
      <RadioGroupPanel
        name="vurdering"
        label={intl.formatMessage({
          id: readOnly
            ? 'VurderMedlemsskapAksjonspunktForm.VurderingLabel.ReadOnly'
            : 'VurderMedlemsskapAksjonspunktForm.VurderingLabel',
        })}
        validate={[required]}
        isReadOnly={readOnly}
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
          label={intl.formatMessage({
            id: readOnly
              ? 'VurderMedlemsskapAksjonspunktForm.AvslagsarsakLabel.ReadOnly'
              : 'VurderMedlemsskapAksjonspunktForm.AvslagsarsakLabel',
          })}
          selectValues={avslagsårsaker.map(aa => (
            <option key={aa.kode} value={aa.kode}>
              {aa.navn}
            </option>
          ))}
          readOnly={readOnly}
          validate={[required]}
        />
      )}

      {vurdering === Vurdering.DELVIS_OPPFYLT && (
        <Datepicker
          name="opphørFom"
          label={intl.formatMessage({
            id: readOnly
              ? 'VurderMedlemsskapAksjonspunktForm.OpphorFomLabel.ReadOnly'
              : 'VurderMedlemsskapAksjonspunktForm.OpphorFomLabel',
          })}
          validate={[hasValidDate, required]}
          isReadOnly={readOnly}
        />
      )}
    </>
  );
};

export default VurderingAlternativer;
