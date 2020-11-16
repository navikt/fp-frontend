import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import {
  VerticalSpacer, FlexContainer, FlexRow, FlexColumn, Image,
} from '@fpsak-frontend/shared-components';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  DatepickerField, RadioGroupField, RadioOption, SelectField,
} from '@fpsak-frontend/form';
import {
  FormValidationError, hasValidDate, isRequiredMessage, required,
} from '@fpsak-frontend/utils';
import avslattImage from '@fpsak-frontend/assets/images/avslaatt.svg';
import innvilgetImage from '@fpsak-frontend/assets/images/check.svg';
import { Aksjonspunkt, Behandlingsresultat, KodeverkMedNavn } from '@fpsak-frontend/types';

import useIntl from '../useIntl';

import styles from './vilkarResultPicker.less';

const findRadioButtonTextCode = (customVilkarText: { id: string; }, isVilkarOk: boolean) => {
  if (customVilkarText) {
    return customVilkarText.id;
  }
  return isVilkarOk ? 'VilkarResultPicker.VilkarOppfylt' : 'VilkarResultPicker.VilkarIkkeOppfylt';
};

interface OwnProps {
  avslagsarsaker?: KodeverkMedNavn[];
  erVilkarOk?: boolean;
  customVilkarIkkeOppfyltText?: {
    id: string;
    values?: any;
  };
  customVilkarOppfyltText?: {
    id: string;
    values?: any;
  };
  readOnly: boolean;
  erMedlemskapsPanel?: boolean;
}

interface StaticFunctions {
  buildInitialValues?: (behandlingsresultat: Behandlingsresultat, aksjonspunkter: Aksjonspunkt[], status: string) => {
    erVilkarOk: boolean;
    avslagCode?: string;
  },
  transformValues?: (values: { erVilkarOk: boolean; avslagCode?: string; avslagDato?: string }) => {
    erVilkarOk: boolean;
  } | {
    erVilkarOk: boolean;
    avslagskode: string;
    avslagDato: string;
  },
  validate?: (erVilkarOk: boolean, avslagCode: string) => { avslagCode?: FormValidationError }
}

/**
 * VilkarResultPicker
 *
 * Presentasjonskomponent. Lar NAV-ansatt velge om vilkåret skal oppfylles eller avvises.
 */
const VilkarResultPicker: FunctionComponent<OwnProps> & StaticFunctions = ({
  avslagsarsaker,
  erVilkarOk,
  customVilkarIkkeOppfyltText,
  customVilkarOppfyltText,
  readOnly,
  erMedlemskapsPanel = false,
}) => {
  const intl = useIntl();
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
              {erVilkarOk && <Normaltekst><FormattedMessage id={findRadioButtonTextCode(customVilkarOppfyltText, true)} /></Normaltekst>}
              {!erVilkarOk && (
              <Normaltekst>
                <FormattedMessage
                  id={findRadioButtonTextCode(customVilkarIkkeOppfyltText, false)}
                  values={{
                    b: (chunks) => <b>{chunks}</b>,
                  }}
                />
              </Normaltekst>
              )}
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
        >
          <RadioOption
            label={(
              <FormattedMessage
                id={findRadioButtonTextCode(customVilkarOppfyltText, true)}
                values={customVilkarOppfyltText ? {
                  b: (chunks) => <b>{chunks}</b>,
                  ...customVilkarIkkeOppfyltText.values,
                } : { b: (chunks) => <b>{chunks}</b> }}
              />
            )}
            value
          />
          <RadioOption
            label={(
              <FormattedMessage
                id={findRadioButtonTextCode(customVilkarIkkeOppfyltText, false)}
                values={customVilkarIkkeOppfyltText ? {
                  b: (chunks) => <b>{chunks}</b>,
                  ...customVilkarIkkeOppfyltText.values,
                } : { b: (chunks) => <b>{chunks}</b> }}
              />
            )}
            value={false}
          />
        </RadioGroupField>
      )}
      <>
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
            />
            {erMedlemskapsPanel && (
            <DatepickerField
              name="avslagDato"
              label={{ id: 'VilkarResultPicker.VilkarDato' }}
              readOnly={readOnly}
              validate={[required, hasValidDate]}
            />
            )}
          </>
        )}
      </>
      <VerticalSpacer eightPx />
    </div>
  );
};

VilkarResultPicker.validate = (erVilkarOk: boolean, avslagCode: string) => {
  if (erVilkarOk === false && !avslagCode) {
    return {
      avslagCode: isRequiredMessage(),
    };
  }
  return {};
};

VilkarResultPicker.buildInitialValues = (behandlingsresultat: Behandlingsresultat, aksjonspunkter: Aksjonspunkt[], status: string) => {
  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;
  return {
    erVilkarOk,
    avslagCode: erVilkarOk === false && behandlingsresultat && behandlingsresultat.avslagsarsak
      ? behandlingsresultat.avslagsarsak.kode
      : undefined,
  };
};

VilkarResultPicker.transformValues = (values: { erVilkarOk: boolean; avslagCode?: string; avslagDato?: string }) => (
  values.erVilkarOk
    ? { erVilkarOk: values.erVilkarOk }
    : {
      erVilkarOk: values.erVilkarOk,
      avslagskode: values.avslagCode,
      avslagDato: values.avslagDato,
    }
);

export default VilkarResultPicker;
