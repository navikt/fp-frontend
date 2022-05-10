import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Container } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { FamilieHendelse } from '@fpsak-frontend/types';
import { BekreftEktefelleAksjonspunktAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './ektefelleFaktaForm.less';

interface OwnProps {
  readOnly: boolean;
  ektefellesBarnIsEdited?: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

export type FormValues = {
  ektefellesBarn?: boolean;
}

interface StaticFunctions {
  buildInitialValues: (familiehendelse: FamilieHendelse) => FormValues;
  transformValues: (ektefellesBarn: boolean) => BekreftEktefelleAksjonspunktAp;
}

/**
 * EktefelleFaktaForm
 *
 * Setter opp aksjonspunktet for vurdering av om det er ektefelles barn som adopteres.
 */
const EktefelleFaktaForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  ektefellesBarnIsEdited,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'EktefelleFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]}
    >
      <Container className={styles.container}>
        <Normaltekst><FormattedMessage id="EktefelleFaktaForm.EktefellesBarn" /></Normaltekst>
        <VerticalSpacer twentyPx />
        <hr className={styles.hr} />
        <RadioGroupField
          name="ektefellesBarn"
          validate={[required]}
          bredde="XL"
          readOnly={readOnly}
          isEdited={ektefellesBarnIsEdited}
          parse={(value: string) => value === 'true'}
        >
          <RadioOption value="false" label={intl.formatMessage({ id: 'EktefelleFaktaForm.ErIkkeValg' })} />
          <RadioOption value="true" label={intl.formatMessage({ id: 'EktefelleFaktaForm.ErValg' })} />
        </RadioGroupField>
      </Container>
    </FaktaGruppe>
  );
};

EktefelleFaktaForm.defaultProps = {
  ektefellesBarnIsEdited: false,
};

EktefelleFaktaForm.buildInitialValues = (familiehendelse: FamilieHendelse): FormValues => ({
  ektefellesBarn: familiehendelse && familiehendelse.ektefellesBarn !== null
    ? familiehendelse.ektefellesBarn
    : undefined,
});

EktefelleFaktaForm.transformValues = (ektefellesBarn: boolean): BekreftEktefelleAksjonspunktAp => ({
  kode: aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
  ektefellesBarn,
});

export default EktefelleFaktaForm;
