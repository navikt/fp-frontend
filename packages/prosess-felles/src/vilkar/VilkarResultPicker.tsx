import React, { FunctionComponent, ReactElement } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { useFormContext } from 'react-hook-form';
import {
  FlexContainer, FlexRow, FlexColumn, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  Datepicker, RadioGroupField, RadioOption, SelectField,
} from '@fpsak-frontend/form-hooks';
import {
  hasValidDate, required, createIntl, requiredIfCustomFunctionIsTrueNew,
} from '@fpsak-frontend/utils';
import avslattImage from '@fpsak-frontend/assets/images/avslaatt.svg';
import innvilgetImage from '@fpsak-frontend/assets/images/check.svg';
import { Aksjonspunkt, Behandlingsresultat, KodeverkMedNavn } from '@fpsak-frontend/types';

import messages from '../../i18n/nb_NO.json';

import styles from './vilkarResultPicker.less';

const intl = createIntl(messages);

const getIsAvslagCodeRequired = (erVilkarOk: boolean, avslagCode) => () => erVilkarOk === false && !avslagCode;

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  avslagDato?: string;
}

interface OwnProps {
  avslagsarsaker?: KodeverkMedNavn[];
  customVilkarIkkeOppfyltText: string | ReactElement;
  customVilkarOppfyltText: string | ReactElement;
  readOnly: boolean;
  erMedlemskapsPanel?: boolean;
  skalKunneInnvilge?: boolean;
}

interface StaticFunctions {
  buildInitialValues: (behandlingsresultat: Behandlingsresultat, aksjonspunkter: Aksjonspunkt[], status: string) => FormValues;
  transformValues: (values: FormValues) => {
    erVilkarOk: boolean;
  } | {
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
}) => {
  const { getValues, watch } = useFormContext();
  const erVilkarOk = watch('erVilkarOk');

  return (
    <div className={styles.container}>
      <VerticalSpacer sixteenPx />
      {(readOnly && erVilkarOk !== undefined) && (
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image className={styles.image} src={erVilkarOk ? innvilgetImage : avslattImage} />
            </FlexColumn>
            <FlexColumn>
              {erVilkarOk && <Normaltekst>{customVilkarOppfyltText}</Normaltekst>}
              {!erVilkarOk && <Normaltekst>{customVilkarIkkeOppfyltText}</Normaltekst>}
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </FlexContainer>
      )}
      {(!readOnly || erVilkarOk === undefined) && (
        <RadioGroupField
          name="erVilkarOk"
          validate={[required]}
          bredde="XXL"
          direction="vertical"
          readOnly={readOnly}
          parse={(value) => value === 'true'}
        >
          <RadioOption
            label={customVilkarOppfyltText}
            value="true"
            disabled={!skalKunneInnvilge}
          />
          <RadioOption
            label={customVilkarIkkeOppfyltText}
            value="false"
          />
        </RadioGroupField>
      )}
      {erVilkarOk !== undefined && !erVilkarOk && avslagsarsaker && (
        <>
          <VerticalSpacer eightPx />
          <SelectField
            name="avslagCode"
            label={intl.formatMessage({ id: 'VilkarResultPicker.Arsak' })}
            placeholder={intl.formatMessage({ id: 'VilkarResultPicker.SelectArsak' })}
            selectValues={avslagsarsaker.map((aa) => <option key={aa.kode} value={aa.kode}>{aa.navn}</option>)}
            bredde="xl"
            readOnly={readOnly}
            validate={[requiredIfCustomFunctionIsTrueNew(getIsAvslagCodeRequired(erVilkarOk, getValues('avslagCode')))]}
          />
          {erMedlemskapsPanel && (
            <Datepicker
              name="avslagDato"
              label={intl.formatMessage({ id: 'VilkarResultPicker.VilkarDato' })}
              isReadOnly={readOnly}
              validate={[required, hasValidDate]}
            />
          )}
        </>
      )}
      <VerticalSpacer eightPx />
    </div>
  );
};

VilkarResultPicker.buildInitialValues = (behandlingsresultat: Behandlingsresultat, aksjonspunkter: Aksjonspunkt[], status: string): FormValues => {
  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;
  return {
    erVilkarOk,
    avslagCode: erVilkarOk === false && behandlingsresultat && behandlingsresultat.avslagsarsak
      ? behandlingsresultat.avslagsarsak
      : undefined,
  };
};

VilkarResultPicker.transformValues = (values: Required<FormValues>) => (
  values.erVilkarOk
    ? { erVilkarOk: values.erVilkarOk }
    : {
      erVilkarOk: values.erVilkarOk,
      avslagskode: values.avslagCode,
      avslagDato: values.avslagDato,
    }
);

export default VilkarResultPicker;
