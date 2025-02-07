import { type ReactElement, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckmarkIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, VStack } from '@navikt/ds-react';
import { RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { required, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktStatus, VilkarUtfallType } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Behandlingsresultat, KodeverkMedNavn } from '@navikt/fp-types';

import styles from './vilkarResultPicker.module.css';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const getIsAvslagCodeRequired = (erVilkarOk: boolean, avslagCode?: string) => () => erVilkarOk === false && !avslagCode;

const EMPTY_ARRAY = [] as KodeverkMedNavn[];

type FormValues = {
  erVilkarOk?: boolean;
  avslagskode?: string;
};

interface Props {
  avslagsarsaker?: KodeverkMedNavn[];
  customVilkarIkkeOppfyltText: string | ReactElement;
  customVilkarOppfyltText: string | ReactElement;
  readOnly: boolean;
  skalKunneInnvilge?: boolean;
  validatorsForRadioOptions?: ((value: boolean) => any)[];
}

const sorterAvslagsArsaker = (avslagsarsakerUsortert: KodeverkMedNavn[]): KodeverkMedNavn[] =>
  avslagsarsakerUsortert.toSorted((k1, k2) => k1.navn.localeCompare(k2.navn));

/**
 * VilkarResultPicker
 *
 * Presentasjonskomponent. Lar Nav-ansatt velge om vilkåret skal oppfylles eller avvises.
 */
export const VilkarResultPicker = ({
  avslagsarsaker,
  customVilkarIkkeOppfyltText,
  customVilkarOppfyltText,
  readOnly,
  skalKunneInnvilge = true,
  validatorsForRadioOptions,
}: Props) => {
  const { getValues, watch } = useFormContext();
  const erVilkarOk = watch('erVilkarOk');

  const radioValidators = useMemo(
    () => (validatorsForRadioOptions ? validatorsForRadioOptions.concat(required) : [required]),
    [validatorsForRadioOptions],
  );

  return (
    <VStack gap="4" paddingInline="4">
      {readOnly && erVilkarOk !== undefined && (
        <HStack gap="2">
          {erVilkarOk && <CheckmarkIcon className={styles.godkjentImage} />}
          {!erVilkarOk && <XMarkOctagonIcon className={styles.avslattImage} />}
          {erVilkarOk && <BodyShort size="small">{customVilkarOppfyltText}</BodyShort>}
          {!erVilkarOk && <BodyShort size="small">{customVilkarIkkeOppfyltText}</BodyShort>}
        </HStack>
      )}

      {(!readOnly || erVilkarOk === undefined) && (
        <RadioGroupPanel
          name="erVilkarOk"
          // @ts-expect-error Fiks denne!
          validate={radioValidators}
          isReadOnly={readOnly}
          isTrueOrFalseSelection
          radios={[
            {
              value: 'true',
              label: customVilkarOppfyltText,
              disabled: !skalKunneInnvilge,
            },
            {
              value: 'false',
              label: customVilkarIkkeOppfyltText,
            },
          ]}
        />
      )}
      {erVilkarOk !== undefined && !erVilkarOk && avslagsarsaker && (
        <SelectField
          name="avslagskode"
          label={intl.formatMessage({ id: 'VilkarResultPicker.Arsak' })}
          selectValues={sorterAvslagsArsaker(avslagsarsaker || EMPTY_ARRAY).map(aa => (
            <option key={aa.kode} value={aa.kode}>
              {aa.navn}
            </option>
          ))}
          readOnly={readOnly}
          className={styles.selectBredde}
          validate={[requiredIfCustomFunctionIsTrueNew(getIsAvslagCodeRequired(erVilkarOk, getValues('avslagskode')))]}
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
  const isOpenAksjonspunkt = aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  const erVilkarOk = isOpenAksjonspunkt ? undefined : VilkarUtfallType.OPPFYLT === status;
  return {
    erVilkarOk,
    avslagskode:
      erVilkarOk === false && behandlingsresultat?.avslagsarsak ? behandlingsresultat.avslagsarsak : undefined,
  };
};

VilkarResultPicker.transformValues = (values: FormValues) =>
  values.erVilkarOk
    ? { erVilkarOk: values.erVilkarOk }
    : {
        erVilkarOk: values.erVilkarOk!,
        avslagskode: values.avslagskode,
      };
