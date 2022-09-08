import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Container } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { getKodeverknavnFn } from '@navikt/ft-utils';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { FamilieHendelse, AlleKodeverk } from '@fpsak-frontend/types';
import { BekreftMannAdoptererAksjonspunktAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './mannAdoptererAleneFaktaForm.less';

interface OwnProps {
  readOnly: boolean;
  farSokerType?: string;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

export type FormValues = {
  mannAdoptererAlene?: boolean,
}

interface StaticFunctions {
  buildInitialValues: (familiehendelse: FamilieHendelse) => FormValues;
  transformValues: (mannAdoptererAlene: boolean) => BekreftMannAdoptererAksjonspunktAp;
}

/**
 * MannAdoptererAleneFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for vurdering av om mann adopterer alene.
 */
const MannAdoptererAleneFaktaForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  farSokerType,
  readOnly,
  alleKodeverk,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]}
    >
      <Container className={styles.container}>
        <Undertekst><FormattedMessage id="MannAdoptererAleneFaktaForm.Opplysninger" /></Undertekst>
        <VerticalSpacer fourPx />
        {farSokerType
          && <Normaltekst>{getKodeverknavnFn(alleKodeverk)(farSokerType, KodeverkType.FAR_SOEKER_TYPE)}</Normaltekst>}
        <VerticalSpacer sixteenPx />
        <hr className={styles.hr} />
        <RadioGroupPanel
          name="mannAdoptererAlene"
          hideLegend
          validate={[required]}
          isReadOnly={readOnly}
          isHorizontal
          isTrueOrFalseSelection
          radios={[{
            label: intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.AdoptererAlene' }),
            value: 'true',
          }, {
            label: intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.AdoptererIkkeAlene' }),
            value: 'false',
          }]}
        />
      </Container>
    </FaktaGruppe>
  );
};

MannAdoptererAleneFaktaForm.buildInitialValues = (familiehendelse: FamilieHendelse): FormValues => ({
  mannAdoptererAlene: familiehendelse ? familiehendelse.mannAdoptererAlene : undefined,
});

MannAdoptererAleneFaktaForm.transformValues = (mannAdoptererAlene: boolean): BekreftMannAdoptererAksjonspunktAp => ({
  kode: aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  mannAdoptererAlene,
});

export default MannAdoptererAleneFaktaForm;
