import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { InjectedFormProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';

import { behandlingForm } from '@fpsak-frontend/form';
import { FaktaBegrunnelseTextField, FaktaSubmitButton, isFieldEdited } from '@fpsak-frontend/fakta-felles';
import {
  Aksjonspunkt, FamilieHendelse, Kodeverk, KodeverkMedNavn, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, AksjonspunktHelpTextTemp,
} from '@fpsak-frontend/shared-components';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import MannAdoptererAleneFaktaForm from './MannAdoptererAleneFaktaForm';
import EktefelleFaktaForm from './EktefelleFaktaForm';
import DokumentasjonFaktaForm from './DokumentasjonFaktaForm';

const { ADOPSJONSDOKUMENTAJON, OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, OM_ADOPSJON_GJELDER_EKTEFELLES_BARN } = aksjonspunktCodes;
const adopsjonAksjonspunkter = [OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, ADOPSJONSDOKUMENTAJON, OM_ADOPSJON_GJELDER_EKTEFELLES_BARN];

const getHelpTexts = (aksjonspunkter: any) => {
  const helpTexts = [
    <FormattedMessage key="KontrollerMotDok" id="AdopsjonInfoPanel.KontrollerMotDok" />,
  ];

  if (hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="VurderOmEktefellesBarn" id="AdopsjonInfoPanel.VurderOmEktefellesBarn" />);
  }
  if (hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="VurderOmMannAdoptererAlene" id="AdopsjonInfoPanel.VurderOmMannAdoptererAlene" />);
  }
  return helpTexts;
};

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  submittable: boolean;
  readOnly: boolean;
  behandlingId: number;
  behandlingVersjon: number;
  farSokerType?: Kodeverk;
  editedStatus: {
    mannAdoptererAlene: boolean;
    ektefellesBarn: boolean;
    adopsjonFodelsedatoer: { [key: number]: string };
    omsorgsovertakelseDato: boolean;
    barnetsAnkomstTilNorgeDato: boolean;
  };
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  hasOpenAksjonspunkter: boolean;
  isForeldrepengerFagsak: boolean;
  initialValues: {
    begrunnelse?: string;
  },
}

/**
 * AdopsjonInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp Redux Formen for faktapenelet til Adopsjonsvilkåret.
 */
export const AdopsjonInfoPanelImpl: FunctionComponent<OwnProps & InjectedFormProps> = ({
  aksjonspunkter,
  hasOpenAksjonspunkter,
  submittable,
  readOnly,
  initialValues,
  editedStatus,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  isForeldrepengerFagsak,
  behandlingId,
  behandlingVersjon,
  farSokerType,
  ...formProps
}) => (
  <>
    <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
      {getHelpTexts(aksjonspunkter)}
    </AksjonspunktHelpTextTemp>
    <form onSubmit={formProps.handleSubmit}>
      <VerticalSpacer eightPx />
      <Row>
        <Column xs="6">
          <DokumentasjonFaktaForm
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            readOnly={readOnly}
            editedStatus={editedStatus}
            erForeldrepengerFagsak={isForeldrepengerFagsak}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            hasEktefellesBarnAksjonspunkt={hasAksjonspunkt(
              OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
              aksjonspunkter,
            )}
          />
        </Column>
        <Column xs="6">
          {hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter) && (
            <EktefelleFaktaForm
              readOnly={readOnly}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              ektefellesBarnIsEdited={editedStatus.ektefellesBarn}
            />
          )}
          {hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter) && (
            <MannAdoptererAleneFaktaForm
              farSokerType={farSokerType}
              readOnly={readOnly}
              mannAdoptererAlene={editedStatus.mannAdoptererAlene}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              alleKodeverk={alleKodeverk}
            />
          )}
        </Column>
      </Row>
      {aksjonspunkter && aksjonspunkter.length > 0 && (
        <>
          <VerticalSpacer twentyPx />
          <FaktaBegrunnelseTextField
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasBegrunnelse={!!initialValues.begrunnelse}
          />
          <VerticalSpacer twentyPx />
          <FaktaSubmitButton
            formName={formProps.form}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasOpenAksjonspunkter={hasOpenAksjonspunkter}
          />
        </>
      )}
    </form>
  </>
);

AdopsjonInfoPanelImpl.defaultProps = {
  farSokerType: undefined,
};

interface PureOwnProps {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  aksjonspunkter: Aksjonspunkt[];
  personopplysninger: Personopplysninger;
  submitCallback: (...args: any[]) => any;
}

const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.soknad,
  (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkter], (
  soknad, familiehendelse, allAksjonspunkter,
) => {
  const aksjonspunkter = allAksjonspunkter.filter((ap: any) => adopsjonAksjonspunkter.includes(ap.definisjon.kode));

  let mannAdoptererAleneValues = {};
  if (hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter)) {
    mannAdoptererAleneValues = MannAdoptererAleneFaktaForm.buildInitialValues(familiehendelse);
  }
  let omAdopsjonGjelderEktefellesBarn = {};
  if (hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter)) {
    omAdopsjonGjelderEktefellesBarn = EktefelleFaktaForm.buildInitialValues(familiehendelse);
  }

  return {
    ...DokumentasjonFaktaForm.buildInitialValues(soknad, familiehendelse),
    ...omAdopsjonGjelderEktefellesBarn,
    ...mannAdoptererAleneValues,
    ...FaktaBegrunnelseTextField.buildInitialValues(aksjonspunkter[0]),
  };
});

interface FormValues {
  omsorgsovertakelseDato: string;
  barnetsAnkomstTilNorgeDato: string;
  fodselsdatoer: { [key: number ]: string };
  ektefellesBarn?: boolean;
  begrunnelse: string;
  mannAdoptererAlene?: boolean;
}

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]) => {
  const aksjonspunkterArray = [DokumentasjonFaktaForm.transformValues(values)] as any;
  if (hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter)) {
    aksjonspunkterArray.push(EktefelleFaktaForm.transformValues(values.ektefellesBarn));
  }
  if (hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter)) {
    aksjonspunkterArray.push(MannAdoptererAleneFaktaForm.transformValues(values.mannAdoptererAlene));
  }

  return aksjonspunkterArray.map((ap) => ({
    ...ap,
    begrunnelse: values.begrunnelse,
  }));
};

const getEditedStatus = createSelector(
  [(ownProps: PureOwnProps) => ownProps.soknad,
    (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
    (ownProps: PureOwnProps) => ownProps.personopplysninger],
  (soknad, familiehendelse, personopplysning) => (
    isFieldEdited(soknad, familiehendelse, personopplysning)
  ),
);

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: any) => initialOwnProps.submitCallback(transformValues(values, initialOwnProps.aksjonspunkter));
  return (_state: any, ownProps: PureOwnProps) => ({
    editedStatus: getEditedStatus(ownProps),
    initialValues: buildInitialValues(ownProps),
    farSokerType: ownProps.soknad.farSokerType,
    onSubmit,
  });
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: 'AdopsjonInfoPanel',
})(AdopsjonInfoPanelImpl));
