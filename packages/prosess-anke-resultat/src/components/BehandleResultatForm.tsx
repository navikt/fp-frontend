import React, { FunctionComponent, ReactElement } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { ProsessStegSubmitButton, validerApKodeOgHentApEnum } from '@fpsak-frontend/prosess-felles';
import {
  behandlingForm, hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import {
  Aksjonspunkt, AnkeVurdering, Kodeverk, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import { BekreftVedtakUtenTotrinnskontrollAp, ForeslaVedtakAp, ForeslaVedtakManueltAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import PreviewAnkeLink, { BrevData } from './PreviewAnkeLink';

const isVedtakUtenToTrinn = (apCodes: string): boolean => apCodes.includes(AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL); // 5018
const isMedUnderskriver = (apCodes: string): boolean => apCodes.includes(AksjonspunktCode.FORESLA_VEDTAK); // 5015
const isFatterVedtak = (apCodes: string): boolean => apCodes.includes(AksjonspunktCode.FATTER_VEDTAK); // 5016
const skalViseForhaandlenke = (avr: Kodeverk): boolean => avr.kode === ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE
  || avr.kode === ankeVurdering.ANKE_OMGJOER || avr.kode === ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV;

interface OwnPropsResultat {
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat'];
}

const ResultatEnkel: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}): ReactElement => (
  <div>
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Stadfest" /></Undertekst>
    <VerticalSpacer sixteenPx />
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Undertekst>
    <Undertekst>{ankeVurderingResultat.begrunnelse}</Undertekst>
  </div>
);

const ResultatOpphev: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}): ReactElement => (
  <div>
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Oppheves" /></Undertekst>
    <VerticalSpacer sixteenPx />
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Undertekst>
    <Undertekst>{ankeVurderingResultat.begrunnelse}</Undertekst>
  </div>
);

const ResultatHjemsend: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}): ReactElement => (
  <div>
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Hjemsendes" /></Undertekst>
    <VerticalSpacer sixteenPx />
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Undertekst>
    <Undertekst>{ankeVurderingResultat.begrunnelse}</Undertekst>
  </div>
);

const ResultatAvvise: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}): ReactElement => (
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

const hentSprakKode = (ankeOmgjoerArsak: Kodeverk): string => {
  switch (ankeOmgjoerArsak.kode) {
    case ankeVurderingOmgjoer.ANKE_TIL_UGUNST: return 'Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst';
    case ankeVurderingOmgjoer.ANKE_TIL_GUNST: return 'Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst';
    case ankeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST: return 'Ankebehandling.Resultat.Innstilling.Omgjores.Delvis';
    default: return '';
  }
};

const ResultatOmgjores: FunctionComponent<OwnPropsResultat & { alleKodeverk: {[key: string]: KodeverkMedNavn[]}; }> = ({
  ankeVurderingResultat,
  alleKodeverk,
}): ReactElement => (
  <>
    <Undertekst><FormattedMessage id={hentSprakKode(ankeVurderingResultat.ankeVurderingOmgjoer)} /></Undertekst>
    <VerticalSpacer sixteenPx />
    {ankeVurderingResultat.ankeOmgjoerArsak && (
      <>
        <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Arsak" /></Undertekst>
        <Undertekst>{getKodeverknavnFn(alleKodeverk, kodeverkTyper)(ankeVurderingResultat.ankeOmgjoerArsak)}</Undertekst>
        <VerticalSpacer sixteenPx />
      </>
    )}
    <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Undertekst>
    <Undertekst>{ankeVurderingResultat.begrunnelse}</Undertekst>
  </>
);

const AnkeResultat: FunctionComponent<OwnPropsResultat & { alleKodeverk: {[key: string]: KodeverkMedNavn[]}; }> = ({
  ankeVurderingResultat,
  alleKodeverk,
}): ReactElement | null => {
  if (!ankeVurderingResultat) {
    return null;
  }
  switch (ankeVurderingResultat.ankeVurdering.kode) {
    case ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK: return (<ResultatEnkel ankeVurderingResultat={ankeVurderingResultat} />);
    case ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE: return (<ResultatOpphev ankeVurderingResultat={ankeVurderingResultat} />);
    case ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV: return (<ResultatHjemsend ankeVurderingResultat={ankeVurderingResultat} />);
    case ankeVurdering.ANKE_OMGJOER: return (<ResultatOmgjores ankeVurderingResultat={ankeVurderingResultat} alleKodeverk={alleKodeverk} />);
    case ankeVurdering.ANKE_AVVIS: return (<ResultatAvvise ankeVurderingResultat={ankeVurderingResultat} />);
    default: return <div>???</div>;
  }
};

type FormValues = {
  begrunnelse?: string;
}

interface PureOwnProps {
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submitCallback: (data: ForeslaVedtakAp | ForeslaVedtakManueltAp | BekreftVedtakUtenTotrinnskontrollAp) => Promise<void>;
  behandlingId: number;
  behandlingVersjon: number;
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat'];
  previewCallback: (data: BrevData) => Promise<any>;
  readOnlySubmitButton?: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  aksjonspunktCode: string;
  ankeVurderingVerdi?: Kodeverk;
  fritekstTilBrev?: string;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

const AnkeResultatForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  handleSubmit,
  previewCallback,
  aksjonspunktCode,
  ankeVurderingVerdi,
  fritekstTilBrev,
  ankeVurderingResultat,
  readOnly = true,
  behandlingId,
  behandlingVersjon,
  alleKodeverk,
  ...formProps
}) => (
  <form onSubmit={handleSubmit}>
    <Undertittel><FormattedMessage id="Ankebehandling.Resultat.Title" /></Undertittel>
    <VerticalSpacer fourPx />
    <Row>
      <Column xs="12">
        <Undertekst><FormattedMessage id="Ankebehandling.Resultat.Innstilling" /></Undertekst>
        <AnkeResultat ankeVurderingResultat={ankeVurderingResultat} alleKodeverk={alleKodeverk} />
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
          isBehandlingFormSubmitting={isBehandlingFormSubmitting}
          isBehandlingFormDirty={isBehandlingFormDirty}
          hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
          text={intl.formatMessage({ id: 'Ankebehandling.Resultat.SendTilMedunderskriver' })}
        />
        <span>&nbsp;</span>
        <ProsessStegSubmitButton
          formName={formProps.form}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          isReadOnly={readOnly}
          isSubmittable={!readOnly && isVedtakUtenToTrinn(aksjonspunktCode) && !isFatterVedtak(aksjonspunktCode)}
          isBehandlingFormSubmitting={isBehandlingFormSubmitting}
          isBehandlingFormDirty={isBehandlingFormDirty}
          hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
          text={skalViseForhaandlenke(ankeVurderingVerdi)
            ? intl.formatMessage({ id: 'Ankebehandling.Resultat.FerdigstillAnke' })
            : intl.formatMessage({ id: 'Ankebehandling.Resultat.VentMerknader' })}
        />
        <span>&nbsp;</span>
        {skalViseForhaandlenke(ankeVurderingVerdi)
          && (
          <PreviewAnkeLink
            previewCallback={previewCallback}
            fritekstTilBrev={fritekstTilBrev}
            ankeVurdering={ankeVurderingVerdi}
          />
          )}
      </Column>
    </Row>
  </form>
);

const transformValues = (values: FormValues, aksjonspunktCode: string): ForeslaVedtakAp | ForeslaVedtakManueltAp | BekreftVedtakUtenTotrinnskontrollAp => ({
  begrunnelse: values.begrunnelse,
  kode: validerApKodeOgHentApEnum(aksjonspunktCode, AksjonspunktCode.FORESLA_VEDTAK,
    AksjonspunktCode.FORESLA_VEDTAK_MANUELT,
    AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL),
});

const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingResultat], (resultat): FormValues => ({
  begrunnelse: resultat ? resultat.begrunnelse : null,
}));

const formName = 'ankeResultatForm';

const finnAksjonspunktKode = createSelector([
  (ownProps: PureOwnProps) => ownProps.aksjonspunkter, (ownProps: PureOwnProps) => ownProps.readOnly],
(aksjonspunkter, readOnly): string => {
  const vedtaksaksjonspunkt = aksjonspunkter
    .filter((ap: Aksjonspunkt) => readOnly || ap.status.kode === aksjonspunktStatus.OPPRETTET)
    .filter((ap: Aksjonspunkt) => isVedtakUtenToTrinn(ap.definisjon.kode) || isMedUnderskriver(ap.definisjon.kode) || isFatterVedtak(ap.definisjon.kode));
  return !vedtaksaksjonspunkt || vedtaksaksjonspunkt.length === 0 ? AksjonspunktCode.FATTER_VEDTAK : vedtaksaksjonspunkt[0].definisjon.kode;
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, finnAksjonspunktKode],
(submitCallback, aksjonspunktCode) => (values: FormValues) => submitCallback(transformValues(values, aksjonspunktCode)));

const mapStateToProps = (_state, ownProps: PureOwnProps): MappedOwnProps => ({
  aksjonspunktCode: finnAksjonspunktKode(ownProps),
  initialValues: buildInitialValues(ownProps),
  ankeVurderingVerdi: ownProps.ankeVurderingResultat ? ownProps.ankeVurderingResultat.ankeVurdering : null,
  fritekstTilBrev: ownProps.ankeVurderingResultat ? ownProps.ankeVurderingResultat.fritekstTilBrev : null,
  onSubmit: lagSubmitFn(ownProps),
});

const BehandleResultatForm = connect(mapStateToProps)(behandlingForm({
  form: formName,
})(injectIntl(AnkeResultatForm)));

export default BehandleResultatForm;
