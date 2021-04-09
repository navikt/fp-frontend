import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Container } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import { required } from '@fpsak-frontend/utils';
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
 * Presentasjonskomponent. Setter opp aksjonspunktet for vurdering av om det er ektefelles barn som adopteres.
 */
export const EktefelleFaktaForm: FunctionComponent<OwnProps> & StaticFunctions = ({
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
        <RadioGroupField name="ektefellesBarn" validate={[required]} bredde="XL" readOnly={readOnly} isEdited={ektefellesBarnIsEdited}>
          <RadioOption value={false} label={{ id: 'EktefelleFaktaForm.ErIkkeValg' }} />
          <RadioOption value label={{ id: 'EktefelleFaktaForm.ErValg' }} />
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
