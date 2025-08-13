import { useFormContext } from 'react-hook-form';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfRadioGroupNew, RhfSelect } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import type { KodeverkMedNavn } from '@navikt/fp-types';

import {
  MedlemskapVurdering,
  SØKER_INNFLYTTET_FOR_SENT_KODE,
  type VurderMedlemskapFormValues,
} from '../../types/vurderingMedlemskapForm';
import { lagVurderingsAlternativer } from './lagVurderingsAlternativer';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  avslagsarsaker: KodeverkMedNavn<'Avslagsårsak'>[];
  readOnly: boolean;
  ytelse: string;
  erForutgående: boolean;
  erRevurdering: boolean;
}

export const MedlemskapVurderinger = ({ readOnly, ytelse, avslagsarsaker, erForutgående, erRevurdering }: Props) => {
  const { watch, control } = useFormContext<VurderMedlemskapFormValues>();
  const vurdering = watch('vurdering');
  const avslagskode = watch('avslagskode');

  const label = erForutgående
    ? intl.formatMessage({ id: 'VurderMedlemsskapAksjonspunktForm.VurderingLabel.Forutgaaende' })
    : intl.formatMessage({ id: 'VurderMedlemsskapAksjonspunktForm.VurderingLabel.Ordinaert' });

  return (
    <RawIntlProvider value={intl}>
      <VStack gap={readOnly ? '2' : '6'}>
        <RhfRadioGroupNew
          name="vurdering"
          control={control}
          label={
            readOnly ? intl.formatMessage({ id: 'VurderMedlemsskapAksjonspunktForm.VurderingLabel.ReadOnly' }) : label
          }
          validate={[required]}
          isReadOnly={readOnly}
        >
          {lagVurderingsAlternativer(ytelse, erForutgående, erRevurdering).map(option => (
            <Radio key={option.value} value={option.value} size="small">
              <FormattedMessage id={option.label} />
            </Radio>
          ))}
        </RhfRadioGroupNew>
        {vurdering && [MedlemskapVurdering.DELVIS_OPPFYLT, MedlemskapVurdering.IKKE_OPPFYLT].includes(vurdering) && (
          <RhfSelect
            name="avslagskode"
            control={control}
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
          <RhfDatepicker
            name="opphørFom"
            control={control}
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
            <RhfDatepicker
              name="medlemFom"
              control={control}
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
