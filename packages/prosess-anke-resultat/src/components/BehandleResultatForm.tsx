import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import {
  behandlingForm, behandlingFormValueSelector, hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import { Aksjonspunkt, AnkeVurdering } from '@fpsak-frontend/types';

import PreviewAnkeLink from './PreviewAnkeLink';

const isVedtakUtenToTrinn = (apCodes: string) => apCodes.includes(aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL); // 5018
const isMedUnderskriver = (apCodes: string) => apCodes.includes(aksjonspunktCodes.FORESLA_VEDTAK); // 5015
const isFatterVedtak = (apCodes: string) => apCodes.includes(aksjonspunktCodes.FATTER_VEDTAK); // 5016

interface OwnPropsResultat {
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat']
}

const ResultatEnkel: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}) => (
  <div>
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Stadfest" /></Undertekst>
    <VerticalSpacer sixteenPx />
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Undertekst>
    <Undertekst>{ankeVurderingResultat.begrunnelse}</Undertekst>
  </div>
);

const ResultatOpphev: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}) => (
  <div>
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Oppheves" /></Undertekst>
    <VerticalSpacer sixteenPx />
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Undertekst>
    <Undertekst>{ankeVurderingResultat.begrunnelse}</Undertekst>
  </div>
);

const ResultatAvvise: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}) => (
  <>
    <Undertekst>
      {ankeVurderingResultat.paAnketBehandlingId != null
      && (<FormattedMessage id="Ankebehandling.Resultat.Innstilling.Avvises" />)}
      {ankeVurderingResultat.paAnketBehandlingId == null
      && (<FormattedMessage id="Ankebehandling.Resultat.Innstilling.AvvisesUten" />)}
    </Undertekst>
    <VerticalSpacer sixteenPx />
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Arsak" /></Undertekst>
    <ul>
      {ankeVurderingResultat.erAnkerIkkePart
      && (<li><FormattedMessage id="Ankebehandling.Avvisning.IkkePart" /></li>)}
      {ankeVurderingResultat.erIkkeKonkret
      && (<li><FormattedMessage id="Ankebehandling.Avvisning.IkkeKonkret" /></li>)}
      {ankeVurderingResultat.erFristIkkeOverholdt
      && (<li><FormattedMessage id="Ankebehandling.Avvisning.IkkeFrist" /></li>)}
      {ankeVurderingResultat.erIkkeSignert
      && (<li><FormattedMessage id="Ankebehandling.Avvisning.IkkeSignert" /></li>)}
    </ul>
    <Undertekst>
      <FormattedMessage id="Ankebehandling.Realitetsbehandles" />
      <FormattedMessage id={ankeVurderingResultat.erSubsidiartRealitetsbehandles
        ? 'Ankebehandling.Realitetsbehandles.Ja' : 'Ankebehandling.Realitetsbehandles.Nei'}
      />
    </Undertekst>
    <VerticalSpacer sixteenPx />
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Undertekst>
    <Undertekst>{ankeVurderingResultat.begrunnelse}</Undertekst>
  </>
);

const hentSprakKode = (ankeOmgjoerArsak: string) => {
  switch (ankeOmgjoerArsak) {
    case ankeVurderingOmgjoer.ANKE_TIL_UGUNST: return 'Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst';
    case ankeVurderingOmgjoer.ANKE_TIL_GUNST: return 'Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst';
    case ankeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST: return 'Ankebehandling.Resultat.Innstilling.Omgjores.Delvis';
    default: return '';
  }
};

const ResultatOmgjores: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}) => (
  <>
    <Undertekst><FormattedMessage id={hentSprakKode(ankeVurderingResultat.ankeVurderingOmgjoer)} /></Undertekst>
    <VerticalSpacer sixteenPx />
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Arsak" /></Undertekst>
    <Undertekst>{ankeVurderingResultat.ankeOmgjoerArsak.kode}</Undertekst>
    <VerticalSpacer sixteenPx />
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Undertekst>
    <Undertekst>{ankeVurderingResultat.begrunnelse}</Undertekst>
  </>
);

const AnkeResultat: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}) => {
  if (!ankeVurderingResultat) {
    return null;
  }
  switch (ankeVurderingResultat.ankeVurdering) {
    case ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK: return (<ResultatEnkel ankeVurderingResultat={ankeVurderingResultat} />);
    case ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE: return (<ResultatOpphev ankeVurderingResultat={ankeVurderingResultat} />);
    case ankeVurdering.ANKE_OMGJOER: return (<ResultatOmgjores ankeVurderingResultat={ankeVurderingResultat} />);
    case ankeVurdering.ANKE_AVVIS: return (<ResultatAvvise ankeVurderingResultat={ankeVurderingResultat} />);
    default: return <div>???</div>;
  }
};

type FormValuesUtrekk = {
  ankeVurdering: string;
  fritekstTilBrev?: string;
  gjelderVedtak: string;
};

type FormValues = {
  erMerknaderMottatt: boolean;
  erGodkjentAvMedunderskriver: boolean;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
  vedtak: string;
  begrunnelse: string;
  erSubsidiartRealitetsbehandles: boolean;
  ankeOmgjoerArsak: string;
  ankeVurderingOmgjoer: string;
} & FormValuesUtrekk

interface OwnProps {
  saveAnke: (data: any) => Promise<any>;
  previewCallback: (data: any) => Promise<any>;
  aksjonspunktCode: string;
  formValues?: FormValuesUtrekk;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat'];
  behandlingId: number;
  behandlingVersjon: number;
}

const AnkeResultatForm: FunctionComponent<OwnProps & InjectedFormProps> = ({
  handleSubmit,
  previewCallback,
  aksjonspunktCode,
  formValues,
  ankeVurderingResultat,
  readOnly = true,
  behandlingId,
  behandlingVersjon,
  ...formProps
}) => (
  <form onSubmit={handleSubmit}>
    <Undertittel><FormattedMessage id="Ankebehandling.Resultat.Title" /></Undertittel>
    <VerticalSpacer fourPx />
    <Row>
      <Column xs="12">
        <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling" /></Undertekst>
        <AnkeResultat ankeVurderingResultat={ankeVurderingResultat} />
      </Column>
    </Row>
    <VerticalSpacer sixteenPx />
    <Row>
      <Column xs="12">
        <ProsessStegSubmitButton
          formName={formProps.form}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          isReadOnly={readOnly}
          isSubmittable={!readOnly && isMedUnderskriver(aksjonspunktCode) && !isFatterVedtak(aksjonspunktCode)}
          hasEmptyRequiredFields={false}
          isBehandlingFormSubmitting={isBehandlingFormSubmitting}
          isBehandlingFormDirty={isBehandlingFormDirty}
          hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
          textCode="Ankebehandling.Resultat.SendTilMedunderskriver"
        />
        <span>&nbsp;</span>
        <ProsessStegSubmitButton
          formName={formProps.form}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          isReadOnly={readOnly}
          isSubmittable={!readOnly && isVedtakUtenToTrinn(aksjonspunktCode) && !isFatterVedtak(aksjonspunktCode)}
          hasEmptyRequiredFields={false}
          isBehandlingFormSubmitting={isBehandlingFormSubmitting}
          isBehandlingFormDirty={isBehandlingFormDirty}
          hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
          textCode="Ankebehandling.Resultat.FerdigstillAnke"
        />
        <span>&nbsp;</span>
        <PreviewAnkeLink
          previewCallback={previewCallback}
          fritekstTilBrev={formValues.fritekstTilBrev}
          ankeVurdering={formValues.ankeVurdering}
        />
      </Column>
    </Row>
  </form>
);

// TODO Kvifor sender ein med alle desse verdiane til backend? Ingen av dei blir endra i forma
const transformValues = (values: FormValues, aksjonspunktCode: string) => ({
  vedtak: values.vedtak === '0' ? null : values.vedtak,
  ankeVurdering: values.ankeVurdering,
  begrunnelse: values.begrunnelse,
  erMerknaderMottatt: values.erMerknaderMottatt,
  fritekstTilBrev: values.fritekstTilBrev,
  erGodkjentAvMedunderskriver: values.erGodkjentAvMedunderskriver,
  erAnkerIkkePart: values.erAnkerIkkePart,
  erIkkeKonkret: values.erIkkeKonkret,
  erFristIkkeOverholdt: values.erFristIkkeOverholdt,
  erIkkeSignert: values.erIkkeSignert,
  erSubsidiartRealitetsbehandles: values.erSubsidiartRealitetsbehandles,
  ankeOmgjoerArsak: values.ankeOmgjoerArsak,
  ankeVurderingOmgjoer: values.ankeVurderingOmgjoer,
  gjelderVedtak: values.vedtak !== '0',
  kode: aksjonspunktCode,
});

interface PureOwnProps {
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submitCallback: (data: any) => Promise<any>;
  behandlingId: number;
  behandlingVersjon: number;
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat'];
}

const IKKE_PAA_ANKET_BEHANDLING_ID = '0';
const formatId = (b: number) => (b === null ? IKKE_PAA_ANKET_BEHANDLING_ID : `${b}`);
// TODO Kvifor set ein opp alle desse verdiane som initial props? Ingen felt i forma for desse verdiane
const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingResultat], (resultat) => ({
  vedtak: resultat ? formatId(resultat.paAnketBehandlingId) : null,
  ankeVurdering: resultat ? resultat.ankeVurdering : null,
  begrunnelse: resultat ? resultat.begrunnelse : null,
  fritekstTilBrev: resultat ? resultat.fritekstTilBrev : null,
  erAnkerIkkePart: resultat ? resultat.erAnkerIkkePart : false,
  erIkkeKonkret: resultat ? resultat.erIkkeKonkret : false,
  erFristIkkeOverholdt: resultat ? resultat.erFristIkkeOverholdt : false,
  erIkkeSignert: resultat ? resultat.erIkkeSignert : false,
  erSubsidiartRealitetsbehandles: resultat ? resultat.erSubsidiartRealitetsbehandles : null,
  ankeOmgjoerArsak: resultat ? resultat.ankeOmgjoerArsak : null,
  ankeVurderingOmgjoer: resultat ? resultat.ankeVurderingOmgjoer : null,
}));

const formName = 'ankeResultatForm';

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const vedtaksaksjonspunkt = initialOwnProps.aksjonspunkter
    .filter((ap: Aksjonspunkt) => initialOwnProps.readOnly || ap.status.kode === aksjonspunktStatus.OPPRETTET)
    .filter((ap: Aksjonspunkt) => isVedtakUtenToTrinn(ap.definisjon.kode) || isMedUnderskriver(ap.definisjon.kode) || isFatterVedtak(ap.definisjon.kode));
  const aksjonspunktCode = !vedtaksaksjonspunkt || vedtaksaksjonspunkt.length === 0 ? aksjonspunktCodes.FATTER_VEDTAK : vedtaksaksjonspunkt[0].definisjon.kode;
  const onSubmit = (values: FormValues) => initialOwnProps.submitCallback([transformValues(values, aksjonspunktCode)]);
  return (state: any, ownProps: PureOwnProps) => ({
    aksjonspunktCode,
    initialValues: buildInitialValues(ownProps),
    formValues: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state,
      'ankeVurdering', 'fritekstTilBrev', 'gjelderVedtak') || {},
    onSubmit,
  });
};

const BehandleResultatForm = connect(mapStateToPropsFactory)(behandlingForm({
  form: formName,
})(AnkeResultatForm));

export default BehandleResultatForm;
