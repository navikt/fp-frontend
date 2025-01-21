import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaGruppe, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FamilieHendelse } from '@navikt/fp-types';
import { BekreftEktefelleAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './ektefelleFaktaForm.module.css';

interface OwnProps {
  readOnly: boolean;
  ektefellesBarnIsEdited?: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export type FormValues = {
  ektefellesBarn?: boolean;
};

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
  ektefellesBarnIsEdited = false,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'EktefelleFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]}
    >
      <div className={styles.container}>
        <BodyShort size="small">
          <FormattedMessage id="EktefelleFaktaForm.EktefellesBarn" />
        </BodyShort>
        <VerticalSpacer twentyPx />
        <hr className={styles.hr} />
        <RadioGroupPanel
          name="ektefellesBarn"
          hideLegend
          validate={[required]}
          isReadOnly={readOnly}
          isEdited={ektefellesBarnIsEdited}
          isHorizontal
          isTrueOrFalseSelection
          radios={[
            {
              label: intl.formatMessage({ id: 'EktefelleFaktaForm.ErIkkeValg' }),
              value: 'false',
            },
            {
              label: intl.formatMessage({ id: 'EktefelleFaktaForm.ErValg' }),
              value: 'true',
            },
          ]}
        />
      </div>
    </FaktaGruppe>
  );
};

EktefelleFaktaForm.buildInitialValues = (familiehendelse: FamilieHendelse): FormValues => ({
  ektefellesBarn:
    familiehendelse && familiehendelse.ektefellesBarn !== null ? familiehendelse.ektefellesBarn : undefined,
});

EktefelleFaktaForm.transformValues = (ektefellesBarn: boolean): BekreftEktefelleAksjonspunktAp => ({
  kode: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
  ektefellesBarn,
});

export default EktefelleFaktaForm;
