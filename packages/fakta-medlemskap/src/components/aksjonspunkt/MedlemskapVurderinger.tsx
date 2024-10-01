import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { useFormContext } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';
import { Datepicker, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { KodeverkMedNavn } from '@navikt/fp-types';
import { fagsakYtelseType } from '@navikt/fp-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import {
  SØKER_INNFLYTTET_FOR_SENT_KODE,
  MedlemskapVurdering,
  VurderMedlemskapFormValues,
} from '../../types/vurderingMedlemskapForm';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  avslagsarsaker: KodeverkMedNavn[];
  readOnly: boolean;
  ytelse: string;
  erForutgående: boolean;
}

const lagVurderingsAlternativer = (
  ytelse: string,
  erForutgående: boolean,
): {
  value: string;
  label: string;
}[] => {
  return [
    {
      label: 'Oppfylt',
      value: MedlemskapVurdering.OPPFYLT,
    },
    ...(!erForutgående && ytelse !== fagsakYtelseType.ENGANGSSTONAD
      ? [
          {
            label: 'Delvis oppfylt',
            value: MedlemskapVurdering.DELVIS_OPPFYLT,
          },
        ]
      : []),
    {
      label: 'Ikke oppfylt',
      value: MedlemskapVurdering.IKKE_OPPFYLT,
    },
  ];
};

export const MedlemskapVurderinger = ({ readOnly, ytelse, avslagsarsaker, erForutgående }: Props) => {
  const { watch } = useFormContext<VurderMedlemskapFormValues>();
  const vurdering = watch('vurdering');
  const avslagskode = watch('avslagskode');

  return (
    <RawIntlProvider value={intl}>
      <VStack gap={readOnly ? '2' : '6'}>
        <RadioGroupPanel
          name="vurdering"
          label={intl.formatMessage({
            id: readOnly
              ? 'VurderMedlemsskapAksjonspunktForm.VurderingLabel.ReadOnly'
              : erForutgående
                ? 'VurderMedlemsskapAksjonspunktForm.VurderingLabel.Forutgaaende'
                : 'VurderMedlemsskapAksjonspunktForm.VurderingLabel.Ordinaert',
          })}
          validate={[required]}
          isReadOnly={readOnly}
          radios={lagVurderingsAlternativer(ytelse, erForutgående)}
        />
        {vurdering && [MedlemskapVurdering.DELVIS_OPPFYLT, MedlemskapVurdering.IKKE_OPPFYLT].includes(vurdering) && (
          <SelectField
            name="avslagskode"
            label={intl.formatMessage({
              id: readOnly
                ? 'VurderMedlemsskapAksjonspunktForm.AvslagsarsakLabel.ReadOnly'
                : 'VurderMedlemsskapAksjonspunktForm.AvslagsarsakLabel',
            })}
            selectValues={avslagsarsaker.map(aa => (
              <option key={aa.kode} value={aa.kode}>
                {aa.navn}
              </option>
            ))}
            readOnly={readOnly}
            validate={[required]}
          />
        )}
        {!erForutgående && vurdering === MedlemskapVurdering.DELVIS_OPPFYLT && (
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
        {erForutgående &&
          vurdering &&
          [MedlemskapVurdering.IKKE_OPPFYLT].includes(vurdering) &&
          avslagskode === SØKER_INNFLYTTET_FOR_SENT_KODE && (
            <Datepicker
              name="medlemFom"
              label={intl.formatMessage({
                id: readOnly
                  ? 'VurderMedlemsskapAksjonspunktForm.MedlemFomLabel.ReadOnly'
                  : 'VurderMedlemsskapAksjonspunktForm.MedlemFomLabel',
              })}
              validate={[hasValidDate, required]}
              isReadOnly={readOnly}
            />
          )}
      </VStack>
    </RawIntlProvider>
  );
};
