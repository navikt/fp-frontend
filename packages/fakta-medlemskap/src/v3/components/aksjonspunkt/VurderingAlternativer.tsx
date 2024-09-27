import React, { FC } from 'react';
import { RawIntlProvider } from 'react-intl';
import { useFormContext } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';
import { Datepicker, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { AlleKodeverk } from '@navikt/fp-types';
import { fagsakYtelseType, KodeverkType, VilkarType } from '@navikt/fp-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import { Vurdering, VurderMedlemskapFormValues } from '../../types/vurderingMedlemskapForm';

import messages from '../../../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  ytelse: string;
}

const lagVurderingsAlternativer = (
  ytelse: string,
): {
  value: string;
  label: string;
}[] => {
  return [
    {
      label: 'Oppfylt',
      value: Vurdering.OPPFYLT,
    },
    ...(ytelse !== fagsakYtelseType.ENGANGSSTONAD
      ? [
          {
            label: 'Delvis oppfylt',
            value: Vurdering.DELVIS_OPPFYLT,
          },
        ]
      : []),
    {
      label: 'Ikke oppfylt',
      value: Vurdering.IKKE_OPPFYLT,
    },
  ];
};

export const VilkårResultatPickerMedlemskapsvilkåret: FC<Props> = ({ alleKodeverk, readOnly, ytelse }: Props) => {
  const { watch } = useFormContext<VurderMedlemskapFormValues>();
  const vurdering = watch('vurdering');

  const avslagsårsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET];

  return (
    <RawIntlProvider value={intl}>
      <VStack gap={readOnly ? '2' : '6'}>
        <RadioGroupPanel
          name="vurdering"
          label={intl.formatMessage({
            id: readOnly
              ? 'VurderMedlemsskapAksjonspunktForm.VurderingLabel.ReadOnly'
              : 'VurderMedlemsskapAksjonspunktForm.VurderingLabel',
          })}
          validate={[required]}
          isReadOnly={readOnly}
          radios={lagVurderingsAlternativer(ytelse)}
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
      </VStack>
    </RawIntlProvider>
  );
};
