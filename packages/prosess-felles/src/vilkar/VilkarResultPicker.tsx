import React, { FunctionComponent, ReactNode } from 'react';
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
  hasValidDate, isRequiredMessage, required, createIntl,
} from '@fpsak-frontend/utils';
import avslattImage from '@fpsak-frontend/assets/images/avslaatt.svg';
import innvilgetImage from '@fpsak-frontend/assets/images/check.svg';
import { Aksjonspunkt, Behandlingsresultat, KodeverkMedNavn } from '@fpsak-frontend/types';

import messages from '../../i18n/nb_NO.json';

import styles from './vilkarResultPicker.less';

const intl = createIntl(messages);

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  avslagDato?: string;
}

interface OwnProps {
  avslagsarsaker?: KodeverkMedNavn[];
  erVilkarOk?: boolean;
  customVilkarIkkeOppfyltText: string | ReactNode;
  customVilkarOppfyltText: string | ReactNode;
  readOnly: boolean;
  erMedlemskapsPanel?: boolean;
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
  validate: (erVilkarOk: boolean, avslagCode?: string) => { avslagCode?: string };
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
}) => (
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
      >
        <RadioOption
          label={customVilkarOppfyltText}
          value
        />
        <RadioOption
          label={customVilkarIkkeOppfyltText}
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
            label={intl.formatMessage({ id: 'VilkarResultPicker.VilkarDato' })}
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

VilkarResultPicker.validate = (erVilkarOk: boolean, avslagCode?: string) => {
  if (erVilkarOk === false && !avslagCode) {
    return {
      avslagCode: isRequiredMessage(),
    };
  }
  return {};
};

VilkarResultPicker.buildInitialValues = (behandlingsresultat: Behandlingsresultat, aksjonspunkter: Aksjonspunkt[], status: string): FormValues => {
  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;
  return {
    erVilkarOk,
    avslagCode: erVilkarOk === false && behandlingsresultat && behandlingsresultat.avslagsarsak
      ? behandlingsresultat.avslagsarsak.kode
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
