import { type ReactElement, type ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckmarkIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';
import { BodyShort, Radio, VStack } from '@navikt/ds-react';
import { ReadOnlyField, RhfRadioGroup, RhfSelect } from '@navikt/ft-form-hooks';
import { required, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import type { Aksjonspunkt, AlleKodeverk, Behandlingsresultat, Vilkar } from '@navikt/fp-types';
import { erAksjonspunktÅpent, usePanelDataContext } from '@navikt/fp-utils';

import styles from './vilkarResultPicker.module.css';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export type VilkarResultPickerFormValues = {
  erVilkarOk?: boolean;
  avslagskode?: string;
};

interface Props {
  vilkår: Vilkar | undefined;
  legend: ReactNode;
  customVilkårIkkeOppfyltText: string | ReactElement;
  customVilkårOppfyltText: string | ReactElement;
  isReadOnly: boolean;
  skalKunneInnvilge?: boolean;
  validatorsForRadioOptions?: ((value: string | number | boolean) => string | null | undefined)[];
}

export const VilkarResultPicker = ({
  vilkår,
  legend,
  customVilkårIkkeOppfyltText,
  customVilkårOppfyltText,
  isReadOnly,
  skalKunneInnvilge = true,
  validatorsForRadioOptions,
}: Props) => {
  const { getValues, watch, control } = useFormContext<VilkarResultPickerFormValues>();

  const erVilkårOk = watch('erVilkarOk');

  const radioValidators = validatorsForRadioOptions ? validatorsForRadioOptions.concat(required) : [required];

  const { alleKodeverk } = usePanelDataContext();
  const avslagsårsakerOptions = getAvslagsårsakerOptions(alleKodeverk, vilkår);

  return (
    <VStack gap="space-16">
      {isReadOnly && erVilkårOk !== undefined && (
        <ReadOnlyField
          label={legend}
          size="small"
          value={
            erVilkårOk ? (
              <>
                <CheckmarkIcon className={styles['godkjentImage']} />
                <BodyShort as="span" size="small">
                  {customVilkårOppfyltText}
                </BodyShort>
              </>
            ) : (
              <>
                <XMarkOctagonIcon className={styles['avslattImage']} />
                <BodyShort as="span" size="small">
                  {customVilkårIkkeOppfyltText}
                </BodyShort>
              </>
            )
          }
        />
      )}
      {(!isReadOnly || erVilkårOk === undefined) && (
        <RhfRadioGroup
          name="erVilkarOk"
          control={control}
          legend={legend}
          validate={radioValidators}
          readOnly={isReadOnly}
        >
          <Radio value={true} size="small" disabled={!skalKunneInnvilge}>
            {customVilkårOppfyltText}
          </Radio>
          <Radio value={false} size="small">
            {customVilkårIkkeOppfyltText}
          </Radio>
        </RhfRadioGroup>
      )}
      {erVilkårOk !== undefined && !erVilkårOk && avslagsårsakerOptions && (
        <RhfSelect
          name="avslagskode"
          control={control}
          label={intl.formatMessage({ id: 'VilkarResultPicker.Arsak' })}
          selectValues={avslagsårsakerOptions}
          readOnly={isReadOnly}
          className={styles['selectBredde']}
          validate={[requiredIfCustomFunctionIsTrueNew(getIsAvslagCodeRequired(erVilkårOk, getValues('avslagskode')))]}
        />
      )}
    </VStack>
  );
};

VilkarResultPicker.buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: Behandlingsresultat,
): VilkarResultPickerFormValues => {
  const erVilkårOk = aksjonspunkter.some(erAksjonspunktÅpent) ? undefined : 'OPPFYLT' === status;
  return {
    erVilkarOk: erVilkårOk,
    avslagskode:
      erVilkårOk === false && behandlingsresultat?.avslagsarsak ? behandlingsresultat.avslagsarsak : undefined,
  };
};

VilkarResultPicker.transformValues = (values: VilkarResultPickerFormValues) =>
  values.erVilkarOk
    ? { erVilkarOk: true }
    : {
        erVilkarOk: false,
        avslagskode: values.avslagskode,
      };

const getAvslagsårsakerOptions = (alleKodeverk: AlleKodeverk, vilkår: Vilkar | undefined) => {
  if (vilkår) {
    return alleKodeverk['Avslagsårsak']
      .filter(kodeverk => vilkår.aktuelleAvslagsårsaker.includes(kodeverk.kode))
      .toSorted((k1, k2) => k1.navn.localeCompare(k2.navn))
      .map(aa => (
        <option key={aa.kode} value={aa.kode}>
          {aa.navn}
        </option>
      ));
  }
  return undefined;
};

const getIsAvslagCodeRequired = (erVilkårOk: boolean, avslagCode?: string) => () => erVilkårOk === false && !avslagCode;
