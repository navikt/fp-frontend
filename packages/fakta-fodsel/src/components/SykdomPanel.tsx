import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { RadioGroupField, RadioOption, TextAreaField } from '@navikt/ft-form-hooks';
import {
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-form-validators';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

export type FormValues = {
  begrunnelseSykdom?: string;
  erMorForSykVedFodsel?: boolean;
}

interface OwnProps {
  aksjonspunkt: Aksjonspunkt;
  morForSykVedFodsel: boolean;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface StaticFunctions {
  buildInitialValues?: (aksjonspunkt: Aksjonspunkt, morForSykVedFodsel: boolean) => FormValues;
  transformValues?: (values: FormValues) => VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp;
}

/**
 * SykdomPanel
 */
export const SykdomPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'SykdomPanel.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT]}
    >
      <TextAreaField
        name="begrunnelseSykdom"
        label={intl.formatMessage({ id: 'SykdomPanel.Begrunnelse' })}
        validate={[required, minLength3, maxLength1500, hasValidText]}
        maxLength={1500}
        readOnly={readOnly}
      />
      <VerticalSpacer eightPx />
      <RadioGroupField
        name="erMorForSykVedFodsel"
        validate={[required]}
        bredde="XL"
        readOnly={readOnly}
        direction="vertical"
        parse={(value: string) => value === 'true'}
      >
        <RadioOption value="true" label={intl.formatMessage({ id: 'SykdomPanel.AnnenForelderForSyk' })} />
        <RadioOption
          value="false"
          label={(
            <FormattedMessage
              id="SykdomPanel.AnnenForelderIkkeForSyk"
              values={{
                b: (chunks: any) => <b>{chunks}</b>,
              }}
            />
        )}
        />
      </RadioGroupField>
    </FaktaGruppe>
  );
};

SykdomPanel.buildInitialValues = (aksjonspunkt, morForSykVedFodsel) => ({
  begrunnelseSykdom: aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : '',
  erMorForSykVedFodsel: morForSykVedFodsel,
});

SykdomPanel.transformValues = (values) => ({
  kode: aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
  begrunnelse: values.begrunnelseSykdom,
  erMorForSykVedFodsel: values.erMorForSykVedFodsel,
});

export default SykdomPanel;
