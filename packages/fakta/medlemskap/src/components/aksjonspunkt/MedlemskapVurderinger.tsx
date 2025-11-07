import { useFormContext } from 'react-hook-form';
import { RawIntlProvider } from 'react-intl';

import { Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfRadioGroup, RhfSelect } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk, ManuellBehandlingResultat, Vilkar } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { MedlemskapVurdering, SØKER_INNFLYTTET_FOR_SENT_KODE } from '../../types/vurderingMedlemskapForm';
import { lagVurderingsAlternativer } from './lagVurderingsAlternativer';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

export type MedlemskapVurderingerFormValues = {
  vurdering?: MedlemskapVurdering;
  opphørFom?: string;
  medlemFom?: string;
  avslagskode?: string;
};

interface Props {
  vilkår: Vilkar;
  readOnly: boolean;
  ytelse: string;
  erForutgående: boolean;
  erRevurdering: boolean;
}

export const MedlemskapVurderinger = ({ readOnly, ytelse, vilkår, erForutgående, erRevurdering }: Props) => {
  const { watch, control } = useFormContext<MedlemskapVurderingerFormValues>();
  const vurdering = watch('vurdering');
  const avslagskode = watch('avslagskode');

  const { alleKodeverk } = usePanelDataContext();
  const avslagsårsakerOptions = getAvslagsårsakerOptions(alleKodeverk, vilkår);

  return (
    <RawIntlProvider value={intl}>
      <VStack gap={readOnly ? '2' : '6'}>
        <RhfRadioGroup
          name="vurdering"
          control={control}
          legend={
            erForutgående
              ? intl.formatMessage({ id: 'MedlemskapVurderinger.VurderingLabel.Forutgående' })
              : intl.formatMessage({ id: 'MedlemskapVurderinger.VurderingLabel.Ordinært' })
          }
          validate={[required]}
          readOnly={readOnly}
        >
          {lagVurderingsAlternativer(ytelse, erForutgående, erRevurdering).map(option => (
            <Radio key={option.value} value={option.value} size="small">
              {option.label}
            </Radio>
          ))}
        </RhfRadioGroup>

        {vurdering && [MedlemskapVurdering.DELVIS_OPPFYLT, MedlemskapVurdering.IKKE_OPPFYLT].includes(vurdering) && (
          <RhfSelect
            name="avslagskode"
            control={control}
            label={intl.formatMessage({ id: 'MedlemskapVurderinger.AvslagsarsakLabel' })}
            selectValues={avslagsårsakerOptions}
            readOnly={readOnly}
            validate={[required]}
          />
        )}
        {!erForutgående && vurdering === MedlemskapVurdering.DELVIS_OPPFYLT && (
          <RhfDatepicker
            name="opphørFom"
            control={control}
            label={intl.formatMessage({ id: 'MedlemskapVurderinger.OpphorFomLabel' })}
            validate={[hasValidDate, required]}
            readOnly={readOnly}
          />
        )}
        {erForutgående &&
          vurdering &&
          [MedlemskapVurdering.IKKE_OPPFYLT].includes(vurdering) &&
          avslagskode === SØKER_INNFLYTTET_FOR_SENT_KODE && (
            <RhfDatepicker
              name="medlemFom"
              control={control}
              label={intl.formatMessage({ id: 'MedlemskapVurderinger.MedlemFomLabel' })}
              validate={[hasValidDate, required]}
              readOnly={readOnly}
            />
          )}
      </VStack>
    </RawIntlProvider>
  );
};

const getAvslagsårsakerOptions = (alleKodeverk: AlleKodeverk, vilkår: Vilkar) => {
  return alleKodeverk['Avslagsårsak']
    .filter(kodeverk => vilkår.aktuelleAvslagsårsaker.includes(kodeverk.kode))
    .toSorted((k1, k2) => k1.navn.localeCompare(k2.navn))
    .map(aa => (
      <option key={aa.kode} value={aa.kode}>
        {aa.navn}
      </option>
    ));
};

MedlemskapVurderinger.initialValues = (
  resultat: ManuellBehandlingResultat | undefined,
): MedlemskapVurderingerFormValues => {
  if (resultat) {
    const { opphørFom, avslagskode, medlemFom } = resultat;
    if (!avslagskode) {
      return { vurdering: MedlemskapVurdering.OPPFYLT };
    } else if (opphørFom) {
      return { vurdering: MedlemskapVurdering.DELVIS_OPPFYLT, opphørFom, avslagskode };
    } else if (medlemFom) {
      return { vurdering: MedlemskapVurdering.IKKE_OPPFYLT, medlemFom, avslagskode };
    }
    return { vurdering: MedlemskapVurdering.IKKE_OPPFYLT, avslagskode };
  }
  return {};
};

MedlemskapVurderinger.transformValues = (values: MedlemskapVurderingerFormValues) => ({
  avslagskode: values.vurdering === MedlemskapVurdering.OPPFYLT ? undefined : values.avslagskode,
  opphørFom: values.vurdering === MedlemskapVurdering.DELVIS_OPPFYLT ? values.opphørFom : undefined,
  medlemFom: values.avslagskode === SØKER_INNFLYTTET_FOR_SENT_KODE ? values.medlemFom : undefined,
});
