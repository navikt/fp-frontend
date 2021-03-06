import React, { FunctionComponent, useMemo } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { formValueSelector, reduxForm, InjectedFormProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import Modal from 'nav-frontend-modal';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Undertekst } from 'nav-frontend-typografi';

import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { SelectField, TextAreaField } from '@fpsak-frontend/form';
import { hasValidText, maxLength, required } from '@fpsak-frontend/utils';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import styles from './henleggBehandlingModal.less';

const maxLength1500 = maxLength(1500);

// TODO (TOR) Skal bruka navn fra kodeverk i staden for oppslag klientside for "henleggArsaker"

const previewHenleggBehandlingDoc = (
  previewHenleggBehandling: (erHenleggelse: boolean, data: any) => void,
  ytelseType: Kodeverk,
  fritekst?: string,
  behandlingUuid?: string,
) => (e: React.MouseEvent | React.KeyboardEvent): void => {
  // TODO Hardkoda verdiar. Er dette eit kodeverk?
  const data = {
    behandlingUuid,
    ytelseType,
    dokumentMal: 'HENLEG',
    fritekst,
    mottaker: 'Søker',
  };
  previewHenleggBehandling(true, data);
  e.preventDefault();
};

const showHenleggelseFritekst = (
  behandlingTypeKode: string,
  årsakKode?: string,
): boolean => BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode && behandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV === årsakKode;

const disableHovedKnapp = (
  behandlingTypeKode: string,
  årsakKode?: string,
  begrunnelse?: string,
  fritekst?: string,
): boolean => {
  if (showHenleggelseFritekst(behandlingTypeKode, årsakKode)) {
    return !(årsakKode && begrunnelse && fritekst);
  }
  return !(årsakKode && begrunnelse);
};

const henleggArsakerPerBehandlingType = {
  [BehandlingType.KLAGE]: [behandlingResultatType.HENLAGT_KLAGE_TRUKKET, behandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.ANKE]: [behandlingResultatType.HENLAGT_SOKNAD_TRUKKET, behandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.DOKUMENTINNSYN]: [behandlingResultatType.HENLAGT_INNSYN_TRUKKET, behandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.TILBAKEKREVING]: [behandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.TILBAKEKREVING_REVURDERING]: [behandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV, behandlingResultatType.HENLAGT_FEILOPPRETTET_UTEN_BREV],
  [BehandlingType.REVURDERING]: [behandlingResultatType.HENLAGT_SOKNAD_TRUKKET, behandlingResultatType.HENLAGT_FEILOPPRETTET,
    behandlingResultatType.HENLAGT_SOKNAD_MANGLER],
  [BehandlingType.FORSTEGANGSSOKNAD]: [behandlingResultatType.HENLAGT_SOKNAD_TRUKKET, behandlingResultatType.HENLAGT_FEILOPPRETTET,
    behandlingResultatType.HENLAGT_SOKNAD_MANGLER, behandlingResultatType.MANGLER_BEREGNINGSREGLER],
};

export const getHenleggArsaker = (behandlingResultatTyper: KodeverkMedNavn[], behandlingType: Kodeverk, ytelseType: Kodeverk): KodeverkMedNavn[] => {
  const typerForBehandlingType = henleggArsakerPerBehandlingType[behandlingType.kode];
  return typerForBehandlingType
    .filter((type) => ytelseType.kode !== fagsakYtelseType.ENGANGSSTONAD || (ytelseType.kode === fagsakYtelseType.ENGANGSSTONAD
      && type !== behandlingResultatType.HENLAGT_SOKNAD_MANGLER
      && type !== behandlingResultatType.MANGLER_BEREGNINGSREGLER))
    .flatMap((type) => {
      const typer = behandlingResultatTyper.find((brt) => brt.kode === type);
      return typer ? [typer] : [];
    });
};

interface PureOwnProps {
  cancelEvent: () => void;
  previewHenleggBehandling: (erHenleggelse: boolean, data: any) => void;
  behandlingUuid?: string;
  ytelseType: Kodeverk;
  behandlingResultatTyper: KodeverkMedNavn[];
  behandlingType: Kodeverk;
}

interface MappedOwnProps {
  årsakKode?: string;
  begrunnelse?: string;
  fritekst?: string;
  showLink: boolean;
}

/**
 * HenleggBehandlingModal
 *
 * Presentasjonskomponent. Denne modalen vises når saksbehandler valger 'Henlegg behandling og avslutt'.
 * Ved å angi årsak og begrunnelse og trykke på 'Henlegg behandling' blir behandlingen henlagt og avsluttet.
 */
export const HenleggBehandlingModalImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  handleSubmit,
  cancelEvent,
  previewHenleggBehandling,
  behandlingUuid,
  ytelseType,
  intl,
  årsakKode,
  begrunnelse,
  fritekst,
  showLink,
  behandlingType,
  behandlingResultatTyper,
}) => {
  const henleggArsaker = useMemo(() => getHenleggArsaker(behandlingResultatTyper, behandlingType, ytelseType),
    [behandlingResultatTyper, behandlingType, ytelseType]);
  return (
    <Modal
      className={styles.modal}
      isOpen
      closeButton={false}
      contentLabel={intl.formatMessage({ id: 'HenleggBehandlingModal.ModalDescription' })}
      onRequestClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <SkjemaGruppe legend={intl.formatMessage({ id: 'HenleggBehandlingModal.HenleggBehandling' })}>
            <Row>
              <Column xs="5">
                <SelectField
                  name="årsakKode"
                  label={intl.formatMessage({ id: 'HenleggBehandlingModal.ArsakField' })}
                  validate={[required]}
                  placeholder={intl.formatMessage({ id: 'HenleggBehandlingModal.ArsakFieldDefaultValue' })}
                  selectValues={henleggArsaker.map((arsak) => <option value={arsak.kode} key={arsak.kode}>{intl.formatMessage({ id: arsak.kode })}</option>)}
                />
              </Column>
            </Row>
            <Row>
              <Column xs="8">
                <TextAreaField
                  name="begrunnelse"
                  label={intl.formatMessage({ id: 'HenleggBehandlingModal.BegrunnelseField' })}
                  validate={[required, maxLength1500, hasValidText]}
                  maxLength={1500}
                />
              </Column>
            </Row>
            {showHenleggelseFritekst(behandlingType.kode, årsakKode) && (
              <Row>
                <Column xs="8">
                  <div className={styles.fritekstTilBrevTextArea}>
                    <TextAreaField
                      name="fritekst"
                      label={intl.formatMessage({ id: 'HenleggBehandlingModal.Fritekst' })}
                      validate={[required, hasValidText]}
                      maxLength={2000}
                    />
                  </div>
                </Column>
              </Row>
            )}
            <Row>
              <Column xs="6">
                <div>
                  <Hovedknapp
                    mini
                    className={styles.button}
                    disabled={disableHovedKnapp(behandlingType.kode, årsakKode, begrunnelse, fritekst)}
                  >
                    {intl.formatMessage({ id: 'HenleggBehandlingModal.HenleggBehandlingSubmit' })}
                  </Hovedknapp>
                  <Knapp
                    htmlType="button"
                    mini
                    onClick={cancelEvent}
                  >
                    {intl.formatMessage({ id: 'HenleggBehandlingModal.Avbryt' })}
                  </Knapp>
                </div>
              </Column>
              <Column xs="4">
                {showLink && (
                  <div className={styles.forhandsvis}>
                    <Undertekst>{intl.formatMessage({ id: 'HenleggBehandlingModal.SokerInformeres' })}</Undertekst>
                    <a
                      href=""
                      onClick={previewHenleggBehandlingDoc(previewHenleggBehandling, ytelseType, fritekst, behandlingUuid)}
                      onKeyDown={previewHenleggBehandlingDoc(previewHenleggBehandling, ytelseType, fritekst, behandlingUuid)}
                      className="lenke lenke--frittstaende"
                    >
                      {intl.formatMessage({ id: 'HenleggBehandlingModal.ForhandsvisBrev' })}
                    </a>
                  </div>
                )}
              </Column>
            </Row>
          </SkjemaGruppe>
        </div>
      </form>
    </Modal>
  );
};

const getShowLink = createSelector([
  (state: any) => formValueSelector('HenleggBehandlingModal')(state, 'årsakKode'),
  (state: any) => formValueSelector('HenleggBehandlingModal')(state, 'fritekst'),
  (_state: any, ownProps: PureOwnProps) => ownProps.behandlingType],
(arsakKode: string, fritekst: string, type): boolean => {
  if (type.kode === BehandlingType.TILBAKEKREVING) {
    return behandlingResultatType.HENLAGT_FEILOPPRETTET === arsakKode;
  }
  if (type.kode === BehandlingType.TILBAKEKREVING_REVURDERING) {
    return behandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV === arsakKode && !!fritekst;
  }

  return [
    behandlingResultatType.HENLAGT_SOKNAD_TRUKKET,
    behandlingResultatType.HENLAGT_KLAGE_TRUKKET,
    behandlingResultatType.HENLAGT_INNSYN_TRUKKET,
  ].includes(arsakKode);
});

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  årsakKode: formValueSelector('HenleggBehandlingModal')(state, 'årsakKode'),
  begrunnelse: formValueSelector('HenleggBehandlingModal')(state, 'begrunnelse'),
  fritekst: formValueSelector('HenleggBehandlingModal')(state, 'fritekst'),
  showLink: getShowLink(state, ownProps),
});

const HenleggBehandlingModal = reduxForm({
  form: 'HenleggBehandlingModal',
})(HenleggBehandlingModalImpl);

// @ts-ignore Fiks
export default connect(mapStateToProps)(injectIntl(HenleggBehandlingModal));
