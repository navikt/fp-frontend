import React, {
  FunctionComponent, useCallback, useEffect, useMemo, useState,
} from 'react';
import { WrappedComponentProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { change as reduxFormChange, FormAction, InjectedFormProps } from 'redux-form';

import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { behandlingFormValueSelector, getBehandlingFormPrefix, behandlingForm } from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextHTML, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { KontrollerAktivitetskravAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import { bindActionCreators, Dispatch } from 'redux';
import AktivitetskravFaktaDetailForm from './AktivitetskravFaktaDetailForm';
import AktivitetskravFaktaTabell from './AktivitetskravFaktaTabell';

const FORM_NAME = 'AktivitetskravFaktaForm';

type FormValues = {
  aktivitetskrav: UttakKontrollerAktivitetskrav[];
};

type FormValuesAllRequired = {
  aktivitetskrav: Required<UttakKontrollerAktivitetskrav>[];
};

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  harApneAksjonspunkter: boolean;
  sorterteAktivitetskrav: UttakKontrollerAktivitetskrav[];
  submitCallback: (aksjonspunkter: KontrollerAktivitetskravAp) => Promise<void>;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  morsAktiviteter: KodeverkMedNavn[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  readOnly: boolean;
  submittable: boolean;
}

interface MappedOwnProps {
  initialValues: FormValues;
  onSubmit: (formValues: FormValuesAllRequired) => any;
  aktivitetskrav: UttakKontrollerAktivitetskrav[];
  behandlingFormPrefix: string;
}

interface DispatchProps {
  formChange: (form: string, field: string, value: any, touch?: boolean, persistentSubmitErrors?: boolean) => FormAction;
}

export const AktivitetskravFaktaForm: FunctionComponent<PureOwnProps & MappedOwnProps & DispatchProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  behandlingId,
  behandlingVersjon,
  harApneAksjonspunkter,
  aktivitetskrav,
  aktivitetskravAvklaringer,
  morsAktiviteter,
  alleMerknaderFraBeslutter,
  readOnly,
  submittable,
  formChange,
  behandlingFormPrefix,
  ...formProps
}) => {
  const [valgtAktivitetskrav, setAktivitetskrav] = useState<UttakKontrollerAktivitetskrav>();
  useEffect(() => setAktivitetskrav(aktivitetskrav?.find((oa) => !oa.avklaring)), [aktivitetskrav]);

  const velgAktivitetskrav = useCallback((
    _event: React.MouseEvent | React.KeyboardEvent,
    _id: string,
    model: UttakKontrollerAktivitetskrav,
  ) => setAktivitetskrav(model), []);

  const oppdaterAktivitetskrav = useCallback((oppdatertKrav) => {
    const oppdaterteAktivitetskrav = aktivitetskrav
      .filter((aKrav) => aKrav.fom !== oppdatertKrav.fom)
      .concat([oppdatertKrav])
      .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

    formChange(`${behandlingFormPrefix}.${FORM_NAME}`, 'aktivitetskrav', oppdaterteAktivitetskrav);
    setAktivitetskrav(oppdaterteAktivitetskrav.find((oa) => !oa.avklaring));
  }, [aktivitetskrav]);

  const avbrytEditeringAvAktivitetskrav = useCallback(() => {
    setAktivitetskrav(undefined);
  }, []);

  const isSubmittable = useMemo(() => submittable && !valgtAktivitetskrav && aktivitetskrav?.every((a) => a.avklaring), [aktivitetskrav, valgtAktivitetskrav]);

  return (
    <>
      {harApneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {[intl.formatMessage({ id: 'AktivitetskravFaktaForm.AksjonspunktHjelpetekst' })]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <form onSubmit={formProps.handleSubmit}>
        <FaktaGruppe
          title={intl.formatMessage({ id: 'AktivitetskravFaktaForm.Aktivitetskravperioder' })}
          merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV]}
        >
          {aktivitetskrav && (
            <AktivitetskravFaktaTabell
              aktivitetskrav={aktivitetskrav}
              valgtAktivitetskravFom={valgtAktivitetskrav?.fom}
              velgAktivitetskrav={velgAktivitetskrav}
              aktivitetskravAvklaringer={aktivitetskravAvklaringer}
              morsAktiviteter={morsAktiviteter}
            />
          )}
          {valgtAktivitetskrav && (
            <AktivitetskravFaktaDetailForm
              key={valgtAktivitetskrav.fom}
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersjon}
              valgtAktivitetskrav={valgtAktivitetskrav}
              readOnly={readOnly}
              aktivitetskravAvklaringer={aktivitetskravAvklaringer}
              oppdaterAktivitetskrav={oppdaterAktivitetskrav}
              avbrytEditeringAvAktivitetskrav={avbrytEditeringAvAktivitetskrav}
              morsAktiviteter={morsAktiviteter}
            />
          )}
        </FaktaGruppe>
        <VerticalSpacer twentyPx />
        <FaktaSubmitButton
          formName={formProps.form}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          isSubmittable={isSubmittable}
          isReadOnly={readOnly}
          hasOpenAksjonspunkter={harApneAksjonspunkter}
        />
      </form>
    </>
  );
};

const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.sorterteAktivitetskrav],
  (sorterteAktivitetskrav): FormValues => ({
    aktivitetskrav: sorterteAktivitetskrav,
  }),
);

const transformValues = (values: FormValuesAllRequired): KontrollerAktivitetskravAp => ({
  kode: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
  avklartePerioder: values.aktivitetskrav,
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValuesAllRequired) => submitCallback(transformValues(values)));

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => ({
  behandlingFormPrefix: getBehandlingFormPrefix(ownProps.behandlingId, ownProps.behandlingVersjon),
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
  aktivitetskrav: behandlingFormValueSelector(FORM_NAME, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'aktivitetskrav'),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    formChange: reduxFormChange,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(behandlingForm({ form: FORM_NAME })(injectIntl(AktivitetskravFaktaForm)));
