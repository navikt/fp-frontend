import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { required, getKodeverknavnFn } from '@fpsak-frontend/utils';
import { VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { FamilieHendelse, Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './mannAdoptererAleneFaktaForm.less';

interface OwnProps {
  readOnly: boolean;
  farSokerType?: Kodeverk;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  mannAdoptererAlene: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface StaticFunctions {
  buildInitialValues: (familiehendelse: FamilieHendelse) => {
    mannAdoptererAlene: boolean,
  },
  transformValues: (mannAdoptererAlene: boolean) => {
    kode: string,
    mannAdoptererAlene: boolean,
  },
}

/**
 * MannAdoptererAleneFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for vurdering av om mann adopterer alene.
 */
const MannAdoptererAleneFaktaForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  farSokerType,
  readOnly,
  mannAdoptererAlene,
  alleKodeverk,
  alleMerknaderFraBeslutter,
}) => (
  <FaktaGruppe
    titleCode="MannAdoptererAleneFaktaForm.ApplicationInformation"
    merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]}
  >
    <Container className={styles.container}>
      <Undertekst><FormattedMessage id="MannAdoptererAleneFaktaForm.Opplysninger" /></Undertekst>
      <VerticalSpacer fourPx />
      {farSokerType
        && <Normaltekst>{getKodeverknavnFn(alleKodeverk, kodeverkTyper)(farSokerType)}</Normaltekst>}
      <VerticalSpacer sixteenPx />
      <hr className={styles.hr} />
      <RadioGroupField name="mannAdoptererAlene" validate={[required]} bredde="XL" readOnly={readOnly} isEdited={mannAdoptererAlene}>
        <RadioOption label={{ id: 'MannAdoptererAleneFaktaForm.AdoptererAlene' }} value />
        <RadioOption label={{ id: 'MannAdoptererAleneFaktaForm.AdoptererIkkeAlene' }} value={false} />
      </RadioGroupField>
    </Container>
  </FaktaGruppe>
);

MannAdoptererAleneFaktaForm.defaultProps = {
  farSokerType: undefined,
};

MannAdoptererAleneFaktaForm.buildInitialValues = (familiehendelse: FamilieHendelse) => ({
  mannAdoptererAlene: familiehendelse ? familiehendelse.mannAdoptererAlene : undefined,
});

MannAdoptererAleneFaktaForm.transformValues = (mannAdoptererAlene: boolean) => ({
  kode: aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  mannAdoptererAlene,
});

export default MannAdoptererAleneFaktaForm;
