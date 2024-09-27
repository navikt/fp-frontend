import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { BodyShort, HStack, VStack } from '@navikt/ds-react';
import { CheckmarkIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';

import { vilkarUtfallType } from '@navikt/fp-kodeverk';
import { RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { createIntl } from '@navikt/ft-utils';
import { required, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { Aksjonspunkt, Behandlingsresultat, KodeverkMedNavn } from '@navikt/fp-types';
import { useFormContext } from 'react-hook-form';

import messages from '../../i18n/nb_NO.json';

import styles from './vilkarResultPicker.module.css';

const intl = createIntl(messages);

const getIsAvslagCodeRequired = (erVilkarOk: boolean, avslagCode?: string) => () => erVilkarOk === false && !avslagCode;

const EMPTY_ARRAY = [] as KodeverkMedNavn[];

type FormValues = {
  erVilkarOk?: boolean;
  avslagskode?: string;
};

interface OwnProps {
  avslagsarsaker?: KodeverkMedNavn[];
  customVilkarIkkeOppfyltText: string | ReactElement;
  customVilkarOppfyltText: string | ReactElement;
  readOnly: boolean;
  skalKunneInnvilge?: boolean;
  validatorsForRadioOptions?: ((value: boolean) => any)[];
}

interface StaticFunctions {
  buildInitialValues: (
    aksjonspunkter: Aksjonspunkt[],
    status: string,
    behandlingsresultat?: Behandlingsresultat,
  ) => FormValues;
  transformValues: (values: FormValues) =>
    | {
        erVilkarOk: boolean;
      }
    | {
        erVilkarOk: boolean;
        avslagskode: string;
      };
}

const sorterAvslagsArsaker = (
  avslagsarsakerUsortert: KodeverkMedNavn[],
): KodeverkMedNavn[] =>
  avslagsarsakerUsortert.sort((k1, k2) => k1.navn.localeCompare(k2.navn));


/**
 * VilkarResultPicker
 *
 * Presentasjonskomponent. Lar NAV-ansatt velge om vilkåret skal oppfylles eller avvises.
 */
const VilkarResultPicker: FunctionComponent<OwnProps> & StaticFunctions = ({
  avslagsarsaker,
  customVilkarIkkeOppfyltText,
  customVilkarOppfyltText,
  readOnly,
  skalKunneInnvilge = true,
  validatorsForRadioOptions,
}) => {
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
          // @ts-ignore Fiks denne!
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
        <>
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
            validate={[
              requiredIfCustomFunctionIsTrueNew(getIsAvslagCodeRequired(erVilkarOk, getValues('avslagskode'))),
            ]}
          />
        </>
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
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;
  return {
    erVilkarOk,
    avslagskode:
      erVilkarOk === false && behandlingsresultat && behandlingsresultat.avslagsarsak
        ? behandlingsresultat.avslagsarsak
        : undefined,
  };
};

VilkarResultPicker.transformValues = values =>
  values.erVilkarOk
    ? { erVilkarOk: values.erVilkarOk! }
    : {
        erVilkarOk: values.erVilkarOk!,
        avslagskode: values.avslagskode,
      };

export default VilkarResultPicker;
