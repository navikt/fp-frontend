import React from 'react';

import { VStack } from '@navikt/ds-react';
import { Datepicker, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { useFormContext } from 'react-hook-form';
import { AlleKodeverk } from '@navikt/fp-types';
import { KodeverkType, VilkarType } from '@navikt/fp-kodeverk';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { Vurdering } from '../../types/vurderingMedlemskapForm';
import {
  SØKER_INNFLYTTET_FOR_SENT_KODE,
  VurderMedlemskapForutgaendeFormValues,
} from '../../types/vurderingMedlemskapForutgaendeForm';

import messages from '../../../../i18n/nb_NO.json';

const intl = createIntl(messages);

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

export const VilkårResultatPickerMedlemskapsvilkåretForutgående = ({ alleKodeverk, readOnly }: Props) => {
  const { watch } = useFormContext<VurderMedlemskapForutgaendeFormValues>();
  const vurdering = watch('vurdering');
  const avslagskode = watch('avslagskode');

  const avslagsårsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE]
    .sort((k1, k2) => k1.navn.localeCompare(k2.navn));

  return (
    <RawIntlProvider value={intl}>
      <VStack gap={readOnly ? '2' : '6'}>
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
        {vurdering && [Vurdering.IKKE_OPPFYLT].includes(vurdering) && avslagskode === SØKER_INNFLYTTET_FOR_SENT_KODE && (
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
      </VStack>
    </RawIntlProvider>
  );
};
