import React, { FunctionComponent, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Column, Row } from 'nav-frontend-grid';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import Modal from 'nav-frontend-modal';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Undertekst } from 'nav-frontend-typografi';

import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { SelectField, TextAreaField, Form } from '@fpsak-frontend/form-hooks';
import { hasValidText, maxLength, required } from '@fpsak-frontend/utils';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';

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
    dokumentMal: dokumentMalType.IOHENL,
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

const getShowLink = (behandlingType: Kodeverk, arsakKode?: string, fritekst?: string): boolean => {
  if (behandlingType.kode === BehandlingType.TILBAKEKREVING) {
    return behandlingResultatType.HENLAGT_FEILOPPRETTET === arsakKode;
  }
  if (behandlingType.kode === BehandlingType.TILBAKEKREVING_REVURDERING) {
    return behandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV === arsakKode && !!fritekst;
  }

  return [
    behandlingResultatType.HENLAGT_SOKNAD_TRUKKET,
    behandlingResultatType.HENLAGT_KLAGE_TRUKKET,
    behandlingResultatType.HENLAGT_INNSYN_TRUKKET,
  ].includes(arsakKode || '');
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

export type FormValues = {
  årsakKode?: string;
  begrunnelse?: string;
  fritekst?: string;
}

interface PureOwnProps {
  handleSubmit: (values: FormValues) => void;
  cancelEvent: () => void;
  previewHenleggBehandling: (erHenleggelse: boolean, data: any) => void;
  behandlingUuid?: string;
  ytelseType: Kodeverk;
  behandlingResultatTyper: KodeverkMedNavn[];
  behandlingType: Kodeverk;
}

/**
 * HenleggBehandlingModal
 *
 * Presentasjonskomponent. Denne modalen vises når saksbehandler valger 'Henlegg behandling og avslutt'.
 * Ved å angi årsak og begrunnelse og trykke på 'Henlegg behandling' blir behandlingen henlagt og avsluttet.
 */
const HenleggBehandlingModal: FunctionComponent<PureOwnProps> = ({
  handleSubmit,
  cancelEvent,
  previewHenleggBehandling,
  behandlingUuid,
  ytelseType,
  behandlingType,
  behandlingResultatTyper,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>();

  const årsakKode = formMethods.watch('årsakKode');
  const begrunnelse = formMethods.watch('begrunnelse');
  const fritekst = formMethods.watch('fritekst');

  const showLink = getShowLink(behandlingType, årsakKode, fritekst);

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
      <Form formMethods={formMethods} onSubmit={handleSubmit}>
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
      </Form>
    </Modal>
  );
};

export default HenleggBehandlingModal;
