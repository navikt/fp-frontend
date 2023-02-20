import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import {
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-form-validators';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt } from '@navikt/fp-types';
import { VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp } from '@navikt/fp-types-avklar-aksjonspunkter';

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
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT]}
    >
      <TextAreaField
        name="begrunnelseSykdom"
        label={intl.formatMessage({ id: 'SykdomPanel.Begrunnelse' })}
        validate={[required, minLength3, maxLength1500, hasValidText]}
        maxLength={1500}
        readOnly={readOnly}
      />
      <VerticalSpacer eightPx />
      <RadioGroupPanel
        name="erMorForSykVedFodsel"
        validate={[required]}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        radios={[{
          label: intl.formatMessage({ id: 'SykdomPanel.AnnenForelderForSyk' }),
          value: 'true',
        }, {
          label: <FormattedMessage
            id="SykdomPanel.AnnenForelderIkkeForSyk"
            values={{
              b: (chunks: any) => <b>{chunks}</b>,
            }}
          />,
          value: 'false',
        }]}
      />
    </FaktaGruppe>
  );
};

SykdomPanel.buildInitialValues = (aksjonspunkt, morForSykVedFodsel) => ({
  begrunnelseSykdom: aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : '',
  erMorForSykVedFodsel: morForSykVedFodsel,
});

SykdomPanel.transformValues = (values) => ({
  kode: AksjonspunktCode.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
  begrunnelse: values.begrunnelseSykdom,
  erMorForSykVedFodsel: values.erMorForSykVedFodsel,
});

export default SykdomPanel;
