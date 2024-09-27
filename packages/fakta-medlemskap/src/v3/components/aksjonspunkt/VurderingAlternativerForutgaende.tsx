import React from 'react';

import { Datepicker, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { useFormContext } from 'react-hook-form';
import { AlleKodeverk } from '@navikt/fp-types';
import { KodeverkType, VilkarType } from '@navikt/fp-kodeverk';
import { Vurdering, VurderMedlemskapFormValues } from '../../types/vurderingMedlemskapForm';
import { useIntl } from 'react-intl';
import { SØKER_INNFLYTTET_FOR_SENT_KODE } from '../../types/vurderingMedlemskapForutgaendeForm';

interface Props {
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
}

const lagVurderingsAlternativer = (): {
  value: string;
  label: string;
}[] => {
  return [
    {
      label: 'Oppfylt',
      value: Vurdering.OPPFYLT,
    },
    {
      label: 'Ikke oppfylt',
      value: Vurdering.IKKE_OPPFYLT,
    },
  ];
};

const VurderingAlternativerForutgaende = ({ alleKodeverk, readOnly }: Props) => {
  const { watch } = useFormContext<VurderMedlemskapFormValues>();
  const vurdering = watch('vurdering');
  const avslagskode = watch('avslagskode');

  const avslagsårsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE]
    .sort((k1, k2) => k1.navn.localeCompare(k2.navn));
  const intl = useIntl();
  return (
    <>
      <RadioGroupPanel
        name="vurdering"
        label={intl.formatMessage({
          id: readOnly
            ? 'VurderForutgaendeMedlemskapAksjonspunktForm.VurderingLabel.ReadOnly'
            : 'VurderForutgaendeMedlemskapAksjonspunktForm.VurderingLabel',
        })}
        validate={[required]}
        isReadOnly={readOnly}
        radios={lagVurderingsAlternativer()}
      />
      {vurdering && [Vurdering.IKKE_OPPFYLT].includes(vurdering) && (
        <SelectField
          name="avslagskode"
          label={intl.formatMessage({
            id: readOnly
              ? 'VurderForutgaendeMedlemskapAksjonspunktForm.AvslagsarsakLabel.ReadOnly'
              : 'VurderForutgaendeMedlemskapAksjonspunktForm.AvslagsarsakLabel',
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

      {avslagskode === SØKER_INNFLYTTET_FOR_SENT_KODE && (
        <Datepicker
          name="medlemFom"
          label={intl.formatMessage({
            id: readOnly
              ? 'VurderForutgaendeMedlemskapAksjonspunktForm.MedlemFomLabel.ReadOnly'
              : 'VurderForutgaendeMedlemskapAksjonspunktForm.MedlemFomLabel',
          })}
          validate={[hasValidDate, required]}
          isReadOnly={readOnly}
        />
      )}
    </>
  );
};

export default VurderingAlternativerForutgaende;
