import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckmarkIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup, RhfSelect } from '@navikt/ft-form-hooks';
import { required, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import { erAksjonspunktÅpent, VilkarUtfallType } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Behandlingsresultat, KodeverkMedNavn } from '@navikt/fp-types';

import styles from './vilkarResultPicker.module.css';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const getIsAvslagCodeRequired = (erVilkårOk: boolean, avslagCode?: string) => () => erVilkårOk === false && !avslagCode;

type FormValues = {
  erVilkarOk?: boolean;
  avslagskode?: string;
};

interface Props {
  avslagsårsaker?: KodeverkMedNavn<'Avslagsårsak'>[];
  customVilkårIkkeOppfyltText: string | ReactElement;
  customVilkårOppfyltText: string | ReactElement;
  isReadOnly: boolean;
  skalKunneInnvilge?: boolean;
  validatorsForRadioOptions?: ((value: string | number | boolean) => string | null | undefined)[];
}

const sorterAvslagsårsaker = (
  avslagsårsakerUsortert: KodeverkMedNavn<'Avslagsårsak'>[],
): KodeverkMedNavn<'Avslagsårsak'>[] => avslagsårsakerUsortert.toSorted((k1, k2) => k1.navn.localeCompare(k2.navn));

export const VilkarResultPicker = ({
  avslagsårsaker,
  customVilkårIkkeOppfyltText,
  customVilkårOppfyltText,
  isReadOnly,
  skalKunneInnvilge = true,
  validatorsForRadioOptions,
}: Props) => {
  const { getValues, watch, control } = useFormContext<FormValues>();
   
  const erVilkårOk = watch('erVilkarOk');

  const radioValidators = validatorsForRadioOptions ? validatorsForRadioOptions.concat(required) : [required];

  return (
    <VStack gap="space-16" paddingInline="4">
      {isReadOnly && erVilkårOk !== undefined && (
        <HStack gap="space-8">
          {erVilkårOk && (
            <>
              <CheckmarkIcon className={styles['godkjentImage']} />
              <BodyShort size="small">{customVilkårOppfyltText}</BodyShort>
            </>
          )}
          {!erVilkårOk && (
            <>
              <XMarkOctagonIcon className={styles['avslattImage']} />
              <BodyShort size="small">{customVilkårIkkeOppfyltText}</BodyShort>
            </>
          )}
        </HStack>
      )}

      {(!isReadOnly || erVilkårOk === undefined) && (
        <RhfRadioGroup name="erVilkarOk" control={control} validate={radioValidators} isReadOnly={isReadOnly}>
          <Radio value={true} size="small" disabled={!skalKunneInnvilge}>
            {customVilkårOppfyltText}
          </Radio>
          <Radio value={false} size="small">
            {customVilkårIkkeOppfyltText}
          </Radio>
        </RhfRadioGroup>
      )}
      {erVilkårOk !== undefined && !erVilkårOk && avslagsårsaker && (
        <RhfSelect
          name="avslagskode"
          control={control}
          label={intl.formatMessage({ id: 'VilkarResultPicker.Arsak' })}
          selectValues={sorterAvslagsårsaker(avslagsårsaker).map(aa => (
            <option key={aa.kode} value={aa.kode}>
              {aa.navn}
            </option>
          ))}
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
): FormValues => {
  const erVilkårOk = aksjonspunkter.some(erAksjonspunktÅpent) ? undefined : VilkarUtfallType.OPPFYLT === status;
  return {
    erVilkarOk: erVilkårOk,
    avslagskode:
      erVilkårOk === false && behandlingsresultat?.avslagsarsak ? behandlingsresultat.avslagsarsak : undefined,
  };
};

VilkarResultPicker.transformValues = (values: FormValues) =>
  values.erVilkarOk
    ? { erVilkarOk: values.erVilkarOk }
    : {
        erVilkarOk: values.erVilkarOk!,
        avslagskode: values.avslagskode,
      };
