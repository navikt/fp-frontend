import React, { useEffect, FunctionComponent, ReactElement } from 'react';
import { formValueSelector, reduxForm, InjectedFormProps } from 'redux-form';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';

import { Image, VerticalSpacer } from '@fpsak-frontend/shared-components';
import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';
import { CheckboxField, SelectField } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import bType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import { KodeverkMedNavn, Kodeverk } from '@fpsak-frontend/types';

import styles from './nyBehandlingModal.less';

const createOptions = (bt: KodeverkMedNavn, enabledBehandlingstyper: KodeverkMedNavn[], intl: IntlShape): ReactElement => {
  // TODO Burde retta opp navn for behandlingstype i DB
  const navn = bt.kode === bType.REVURDERING
    ? intl.formatMessage({ id: 'MenyNyBehandlingIndex.OpprettRevurdering' })
    : bt.navn;

  const isEnabled = enabledBehandlingstyper.some((b) => b.kode === bt.kode);
  return (<option key={bt.kode} value={bt.kode} disabled={!isEnabled}>{` ${navn} `}</option>);
};

export type BehandlingOppretting = Readonly<{
  behandlingType: Kodeverk;
  kanOppretteBehandling: boolean;
}>

export type FormValues = {
  behandlingType?: string;
  nyBehandlingEtterKlage?: string;
  behandlingArsakType?: string;
}

interface PureOwnProps {
  ytelseType: Kodeverk;
  saksnummer: string;
  cancelEvent: () => void;
  submitCallback: (data: {
    eksternUuid?: string,
    fagsakYtelseType: Kodeverk,
  } & FormValues) => void;
  behandlingOppretting: BehandlingOppretting[];
  behandlingstyper: KodeverkMedNavn[];
  tilbakekrevingRevurderingArsaker: KodeverkMedNavn[];
  revurderingArsaker: KodeverkMedNavn[];
  kanTilbakekrevingOpprettes: {
    kanBehandlingOpprettes: boolean;
    kanRevurderingOpprettes: boolean;
  };
  behandlingType?: Kodeverk;
  behandlingUuid?: string;
  uuidForSistLukkede?: string;
  erTilbakekrevingAktivert: boolean;
  sjekkOmTilbakekrevingKanOpprettes: (params: {
    saksnummer: string;
    uuid: string;
  }) => void;
  sjekkOmTilbakekrevingRevurderingKanOpprettes: (params: {
    uuid: string;
  }) => void;
}

interface MappedOwnProps {
  behandlingTyper: KodeverkMedNavn[];
  enabledBehandlingstyper: KodeverkMedNavn[];
  uuid?: string;
  behandlingArsakTyper: KodeverkMedNavn[];
  valgtBehandlingTypeKode: string;
  erTilbakekreving: boolean;
  onSubmit: (values: FormValues) => void;
}

/**
 * NyBehandlingModal
 *
 * Presentasjonskomponent. Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
 * Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.
 */
export const NyBehandlingModal: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  handleSubmit,
  cancelEvent,
  intl,
  behandlingTyper,
  behandlingArsakTyper,
  enabledBehandlingstyper,
  behandlingUuid,
  sjekkOmTilbakekrevingKanOpprettes,
  sjekkOmTilbakekrevingRevurderingKanOpprettes,
  uuid,
  saksnummer,
  erTilbakekrevingAktivert,
  valgtBehandlingTypeKode,
  erTilbakekreving,
}) => {
  useEffect(() => {
    if (erTilbakekrevingAktivert) {
      if (uuid !== undefined) {
        sjekkOmTilbakekrevingKanOpprettes({ saksnummer, uuid });
      }
      if (erTilbakekreving && behandlingUuid) {
        sjekkOmTilbakekrevingRevurderingKanOpprettes({ uuid: behandlingUuid });
      }
    }
  }, []);
  return (
    <Modal
      className={styles.modal}
      isOpen
      closeButton={false}
      contentLabel={intl.formatMessage({ id: 'MenyNyBehandlingIndex.ModalDescription' })}
      onRequestClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <form onSubmit={handleSubmit}>
        <Row>
          <Column xs="1">
            <Image className={styles.image} src={innvilgetImageUrl} />
            <div className={styles.divider} />
          </Column>
          <Column xs="11">
            <div className={styles.label}>
              <Element>
                <FormattedMessage id="MenyNyBehandlingIndex.OpprettNyForstegangsbehandling" />
              </Element>
            </div>
            <VerticalSpacer sixteenPx />
            <VerticalSpacer sixteenPx />
            <SelectField
              name="behandlingType"
              label=""
              placeholder={intl.formatMessage({ id: 'MenyNyBehandlingIndex.SelectBehandlingTypePlaceholder' })}
              validate={[required]}
              selectValues={behandlingTyper.map((bt) => createOptions(bt, enabledBehandlingstyper, intl))}
              bredde="l"
            />
            <VerticalSpacer eightPx />
            { valgtBehandlingTypeKode === bType.FORSTEGANGSSOKNAD && (
              <CheckboxField
                name="nyBehandlingEtterKlage"
                label={intl.formatMessage({ id: 'MenyNyBehandlingIndex.NyBehandlingEtterKlage' })}
              />
            )}
            { behandlingArsakTyper.length > 0 && (
              <SelectField
                name="behandlingArsakType"
                label=""
                placeholder={intl.formatMessage({ id: 'MenyNyBehandlingIndex.SelectBehandlingArsakTypePlaceholder' })}
                validate={[required]}
                selectValues={behandlingArsakTyper.map((b) => <option key={b.kode} value={b.kode}>{b.navn}</option>)}
              />
            )}
            <div className={styles.right}>
              <Hovedknapp
                mini
                className={styles.button}
              >
                <FormattedMessage id="MenyNyBehandlingIndex.Ok" />
              </Hovedknapp>
              <Knapp
                htmlType="button"
                mini
                onClick={cancelEvent}
                className={styles.cancelButton}
              >
                <FormattedMessage id="MenyNyBehandlingIndex.Avbryt" />
              </Knapp>
            </div>
          </Column>
        </Row>
      </form>
    </Modal>
  );
};

const formName = 'NyBehandlingModal';

// TODO Denne inndelinga burde vel flyttast til DB (KODELISTE.EKSTRA_DATA)?
const manuelleRevurderingsArsakerES = [
  behandlingArsakType.ANNET,
  behandlingArsakType.FEIL_I_LOVANDVENDELSE,
  behandlingArsakType.FEIL_ELLER_ENDRET_FAKTA,
  behandlingArsakType.FEIL_REGELVERKSFORSTAELSE,
  behandlingArsakType.FEIL_PROSESSUELL,
];

const manuelleRevurderingsArsakerFP = [
  behandlingArsakType.BEREEGNINGSGRUNNLAG,
  behandlingArsakType.MEDLEMSKAP,
  behandlingArsakType.OPPTJENING,
  behandlingArsakType.FORDELING,
  behandlingArsakType.INNTEKT,
  behandlingArsakType.DØD,
  behandlingArsakType.SØKERS_RELASJON,
  behandlingArsakType.SØKNADSFRIST,
  behandlingArsakType.KLAGE_U_INNTK,
  behandlingArsakType.KLAGE_M_INNTK,
];

const manuelleRevurderingsArsakerSVP = [
  behandlingArsakType.KLAGE_U_INNTK,
  behandlingArsakType.KLAGE_M_INNTK,
  behandlingArsakType.RE_ENDRET_INNTEKTSMELDING,
  behandlingArsakType.RE_ENDRING_FRA_BRUKER,
  behandlingArsakType.FØDSEL,
  behandlingArsakType.DØD,
  behandlingArsakType.ANNET,
  behandlingArsakType.INNTEKT,
];

const tilbakekrevingRevurderingArsaker = [
  behandlingArsakType.RE_FORELDELSE,
  behandlingArsakType.RE_VILKÅR,
  behandlingArsakType.RE_KLAGE_KA,
  behandlingArsakType.RE_KLAGE_NFP,
  behandlingArsakType.RE_FEILUTBETALT_BELØP_REDUSERT,
];

export const getBehandlingAarsaker = createSelector([
  (_state: any, ownProps: PureOwnProps) => ownProps.ytelseType,
  (_state: any, ownProps: PureOwnProps) => ownProps.revurderingArsaker,
  (_state: any, ownProps: PureOwnProps) => ownProps.tilbakekrevingRevurderingArsaker,
  (state: any) => formValueSelector(formName)(state, 'behandlingType')],
(ytelseType, alleRevurderingArsaker, alleTilbakekrevingRevurderingArsaker, valgtBehandlingType: string): KodeverkMedNavn[] => {
  if (valgtBehandlingType === bType.TILBAKEKREVING_REVURDERING) {
    return tilbakekrevingRevurderingArsaker
      .flatMap((ar) => {
        const arsak = alleTilbakekrevingRevurderingArsaker.find((el) => el.kode === ar);
        return arsak ? [arsak] : [];
      });
  }

  if (valgtBehandlingType === bType.REVURDERING) {
    const isForeldrepenger = ytelseType.kode === fagsakYtelseType.FORELDREPENGER;
    const isSvangerskap = ytelseType.kode === fagsakYtelseType.SVANGERSKAPSPENGER;
    let manuelleRevurderingsArsaker = isForeldrepenger ? manuelleRevurderingsArsakerFP : manuelleRevurderingsArsakerES;
    if (isSvangerskap) {
      manuelleRevurderingsArsaker = manuelleRevurderingsArsakerSVP;
    }
    return alleRevurderingArsaker
      .filter((bat) => manuelleRevurderingsArsaker.indexOf(bat.kode) > -1)
      .sort((bat1, bat2) => bat1.navn.localeCompare(bat2.navn));
  }

  return [];
});

export const getBehandlingTyper = createSelector([(ownProps: PureOwnProps) => ownProps.behandlingstyper],
  (behandlingstyper) => [...behandlingstyper].sort((bt1, bt2) => bt1.navn.localeCompare(bt2.navn)));

const kanOppretteBehandlingstype = (behandlingOppretting: BehandlingOppretting[], behandlingTypeKode: string): boolean => behandlingOppretting
  .some((bo) => bo.behandlingType.kode === behandlingTypeKode && bo.kanOppretteBehandling);

export const getEnabledBehandlingstyper = createSelector([
  getBehandlingTyper,
  (ownProps: PureOwnProps) => ownProps.behandlingOppretting,
  (ownProps: PureOwnProps) => ownProps.kanTilbakekrevingOpprettes],
(behandlingstyper, behandlingOppretting, kanTilbakekrevingOpprettes = {
  kanBehandlingOpprettes: false,
  kanRevurderingOpprettes: false,
}) => behandlingstyper
  .filter((b) => (b.kode === bType.TILBAKEKREVING ? kanTilbakekrevingOpprettes.kanBehandlingOpprettes : true))
  .filter((b) => (b.kode === bType.TILBAKEKREVING_REVURDERING ? kanTilbakekrevingOpprettes.kanRevurderingOpprettes : true))
  .filter((b) => (b.kode === bType.FORSTEGANGSSOKNAD ? kanOppretteBehandlingstype(behandlingOppretting, bType.FORSTEGANGSSOKNAD) : true))
  .filter((b) => (b.kode === bType.REVURDERING ? kanOppretteBehandlingstype(behandlingOppretting, bType.REVURDERING) : true)));

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: FormValues) => initialOwnProps.submitCallback({
    ...values,
    eksternUuid: initialOwnProps.uuidForSistLukkede,
    fagsakYtelseType: initialOwnProps.ytelseType,
  });
  return (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
    onSubmit,
    behandlingTyper: getBehandlingTyper(ownProps),
    enabledBehandlingstyper: getEnabledBehandlingstyper(ownProps),
    uuid: ownProps.uuidForSistLukkede,
    behandlingArsakTyper: getBehandlingAarsaker(state, ownProps),
    valgtBehandlingTypeKode: formValueSelector(formName)(state, 'behandlingType'),
    erTilbakekreving: ownProps.behandlingType?.kode === bType.TILBAKEKREVING || ownProps.behandlingType?.kode === bType.TILBAKEKREVING_REVURDERING,
  });
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: formName,
})(injectIntl(NyBehandlingModal)));
