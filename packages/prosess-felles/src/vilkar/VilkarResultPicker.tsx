import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { BodyShort } from '@navikt/ds-react';
import { FlexContainer, FlexRow, FlexColumn, Image, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';

import { vilkarUtfallType } from '@navikt/fp-kodeverk';
import { Datepicker, RadioGroupPanel, SelectField, formHooks } from '@navikt/ft-form-hooks';
import { createIntl } from '@navikt/ft-utils';
import { hasValidDate, required, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { Aksjonspunkt, Behandlingsresultat, KodeverkMedNavn } from '@navikt/fp-types';
import avslattImage from '../images/avslaatt.svg';
import innvilgetImage from '../images/check.svg';

import messages from '../../i18n/nb_NO.json';

import styles from './vilkarResultPicker.module.css';

const intl = createIntl(messages);

const getIsAvslagCodeRequired = (erVilkarOk: boolean, avslagCode) => () => erVilkarOk === false && !avslagCode;

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  avslagDato?: string;
};

interface OwnProps {
  avslagsarsaker?: KodeverkMedNavn[];
  customVilkarIkkeOppfyltText: string | ReactElement;
  customVilkarOppfyltText: string | ReactElement;
  readOnly: boolean;
  erMedlemskapsPanel?: boolean;
  skalKunneInnvilge?: boolean;
  validatorsForRadioOptions?: ((value: string | number) => any)[];
}

interface StaticFunctions {
  buildInitialValues: (
    behandlingsresultat: Behandlingsresultat,
    aksjonspunkter: Aksjonspunkt[],
    status: string,
  ) => FormValues;
  transformValues: (values: FormValues) =>
    | {
        erVilkarOk: boolean;
      }
    | {
        erVilkarOk: boolean;
        avslagskode: string;
        avslagDato: string;
      };
}

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
  erMedlemskapsPanel = false,
  skalKunneInnvilge = true,
  validatorsForRadioOptions,
}) => {
  const { getValues, watch } = formHooks.useFormContext();
  const erVilkarOk = watch('erVilkarOk');

  const radioValidators = useMemo(
    () => (validatorsForRadioOptions ? validatorsForRadioOptions.concat(required) : [required]),
    [validatorsForRadioOptions],
  );

  return (
    <div className={styles.container}>
      <VerticalSpacer sixteenPx />
      {readOnly && erVilkarOk !== undefined && (
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image className={styles.image} src={erVilkarOk ? innvilgetImage : avslattImage} />
            </FlexColumn>
            <FlexColumn>
              {erVilkarOk && <BodyShort size="small">{customVilkarOppfyltText}</BodyShort>}
              {!erVilkarOk && <BodyShort size="small">{customVilkarIkkeOppfyltText}</BodyShort>}
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </FlexContainer>
      )}
      {(!readOnly || erVilkarOk === undefined) && (
        <RadioGroupPanel
          name="erVilkarOk"
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
          <VerticalSpacer sixteenPx />
          <SelectField
            name="avslagCode"
            label={intl.formatMessage({ id: 'VilkarResultPicker.Arsak' })}
            selectValues={avslagsarsaker.map(aa => (
              <option key={aa.kode} value={aa.kode}>
                {aa.navn}
              </option>
            ))}
            readOnly={readOnly}
            className={styles.selectBredde}
            validate={[requiredIfCustomFunctionIsTrueNew(getIsAvslagCodeRequired(erVilkarOk, getValues('avslagCode')))]}
          />
          {erMedlemskapsPanel && (
            <>
              <VerticalSpacer sixteenPx />
              <Datepicker
                name="avslagDato"
                label={intl.formatMessage({ id: 'VilkarResultPicker.VilkarDato' })}
                isReadOnly={readOnly}
                validate={[required, hasValidDate]}
              />
            </>
          )}
        </>
      )}
      <VerticalSpacer sixteenPx />
    </div>
  );
};

VilkarResultPicker.buildInitialValues = (
  behandlingsresultat: Behandlingsresultat,
  aksjonspunkter: Aksjonspunkt[],
  status: string,
): FormValues => {
  const isOpenAksjonspunkt = aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;
  return {
    erVilkarOk,
    avslagCode:
      erVilkarOk === false && behandlingsresultat && behandlingsresultat.avslagsarsak
        ? behandlingsresultat.avslagsarsak
        : undefined,
  };
};

VilkarResultPicker.transformValues = (values: Required<FormValues>) =>
  values.erVilkarOk
    ? { erVilkarOk: values.erVilkarOk }
    : {
        erVilkarOk: values.erVilkarOk,
        avslagskode: values.avslagCode,
        avslagDato: values.avslagDato,
      };

export default VilkarResultPicker;
