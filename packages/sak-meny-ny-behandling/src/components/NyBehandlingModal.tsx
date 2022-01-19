import React, { useEffect, FunctionComponent, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';

import { Image, VerticalSpacer } from '@fpsak-frontend/shared-components';
import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';
import { CheckboxField, SelectField, Form } from '@fpsak-frontend/form-hooks';
import { required } from '@fpsak-frontend/utils';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import bType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './nyBehandlingModal.less';

const createOptions = (bt: KodeverkMedNavn, enabledBehandlingstyper: KodeverkMedNavn[], intl: IntlShape): ReactElement => {
  // TODO Burde retta opp navn for behandlingstype i DB
  const navn = bt.kode === bType.REVURDERING
    ? intl.formatMessage({ id: 'MenyNyBehandlingIndex.OpprettRevurdering' })
    : bt.navn;

  const isEnabled = enabledBehandlingstyper.some((b) => b.kode === bt.kode);
  return (<option key={bt.kode} value={bt.kode} disabled={!isEnabled}>{` ${navn} `}</option>);
};

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

const TilbakekrevingRevurderingArsaker = [
  behandlingArsakType.RE_FORELDELSE,
  behandlingArsakType.RE_VILKÅR,
  behandlingArsakType.RE_KLAGE_KA,
  behandlingArsakType.RE_KLAGE_NFP,
  behandlingArsakType.RE_FEILUTBETALT_BELØP_REDUSERT,
];

export const getBehandlingAarsaker = (
  ytelseType: string,
  alleRevurderingArsaker: KodeverkMedNavn[],
  alleTilbakekrevingRevurderingArsaker: KodeverkMedNavn[],
  valgtBehandlingType?: string,
): KodeverkMedNavn[] => {
  if (valgtBehandlingType === bType.TILBAKEKREVING_REVURDERING) {
    return TilbakekrevingRevurderingArsaker
      .flatMap((ar) => {
        const arsak = alleTilbakekrevingRevurderingArsaker.find((el) => el.kode === ar);
        return arsak ? [arsak] : [];
      });
  }

  if (valgtBehandlingType === bType.REVURDERING) {
    const isForeldrepenger = ytelseType === fagsakYtelseType.FORELDREPENGER;
    const isSvangerskap = ytelseType === fagsakYtelseType.SVANGERSKAPSPENGER;
    let manuelleRevurderingsArsaker = isForeldrepenger ? manuelleRevurderingsArsakerFP : manuelleRevurderingsArsakerES;
    if (isSvangerskap) {
      manuelleRevurderingsArsaker = manuelleRevurderingsArsakerSVP;
    }
    return alleRevurderingArsaker
      .filter((bat) => manuelleRevurderingsArsaker.indexOf(bat.kode) > -1)
      .sort((bat1, bat2) => bat1.navn.localeCompare(bat2.navn));
  }

  return [];
};

export const getBehandlingTyper = (
  behandlingstyper: KodeverkMedNavn[],
): KodeverkMedNavn[] => [...behandlingstyper].sort((bt1, bt2) => bt1.navn.localeCompare(bt2.navn));

const kanOppretteBehandlingstype = (
  behandlingOppretting: BehandlingOppretting[],
  behandlingTypeKode: string,
): boolean => behandlingOppretting.some((bo) => bo.behandlingType === behandlingTypeKode && bo.kanOppretteBehandling);

export const getEnabledBehandlingstyper = (
  behandlingstyper: KodeverkMedNavn[],
  behandlingOppretting: BehandlingOppretting[],
  kanTilbakekrevingOpprettes = {
    kanBehandlingOpprettes: false,
    kanRevurderingOpprettes: false,
  },
) => behandlingstyper
  .filter((b) => (b.kode === bType.TILBAKEKREVING ? kanTilbakekrevingOpprettes.kanBehandlingOpprettes : true))
  .filter((b) => (b.kode === bType.TILBAKEKREVING_REVURDERING ? kanTilbakekrevingOpprettes.kanRevurderingOpprettes : true))
  .filter((b) => (b.kode === bType.FORSTEGANGSSOKNAD ? kanOppretteBehandlingstype(behandlingOppretting, bType.FORSTEGANGSSOKNAD) : true))
  .filter((b) => (b.kode === bType.REVURDERING ? kanOppretteBehandlingstype(behandlingOppretting, bType.REVURDERING) : true));

export type BehandlingOppretting = Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>

export type FormValues = {
  behandlingType?: string;
  nyBehandlingEtterKlage?: string;
  behandlingArsakType?: string;
}

interface OwnProps {
  ytelseType: string;
  saksnummer: string;
  cancelEvent: () => void;
  submitCallback: (data: {
    eksternUuid?: string,
    fagsakYtelseType: string,
  } & FormValues) => void;
  behandlingOppretting: BehandlingOppretting[];
  behandlingstyper: KodeverkMedNavn[];
  tilbakekrevingRevurderingArsaker: KodeverkMedNavn[];
  revurderingArsaker: KodeverkMedNavn[];
  kanTilbakekrevingOpprettes: {
    kanBehandlingOpprettes: boolean;
    kanRevurderingOpprettes: boolean;
  };
  behandlingType?: string;
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

/**
 * NyBehandlingModal
 *
 * Presentasjonskomponent. Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
 * Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.
 */
export const NyBehandlingModal: FunctionComponent<OwnProps> = ({
  submitCallback,
  cancelEvent,
  behandlingstyper,
  behandlingUuid,
  sjekkOmTilbakekrevingKanOpprettes,
  sjekkOmTilbakekrevingRevurderingKanOpprettes,
  saksnummer,
  erTilbakekrevingAktivert,
  uuidForSistLukkede,
  ytelseType,
  behandlingOppretting,
  kanTilbakekrevingOpprettes,
  revurderingArsaker,
  tilbakekrevingRevurderingArsaker,
  behandlingType,
}) => {
  const intl = useIntl();

  const erTilbakekreving = behandlingType === bType.TILBAKEKREVING || behandlingType === bType.TILBAKEKREVING_REVURDERING;

  useEffect(() => {
    if (erTilbakekrevingAktivert) {
      if (uuidForSistLukkede !== undefined) {
        sjekkOmTilbakekrevingKanOpprettes({ saksnummer, uuid: uuidForSistLukkede });
      }
      if (erTilbakekreving && behandlingUuid) {
        sjekkOmTilbakekrevingRevurderingKanOpprettes({ uuid: behandlingUuid });
      }
    }
  }, []);

  const formMethods = useForm<FormValues>();

  const onSubmit = (values: FormValues) => submitCallback({
    ...values,
    eksternUuid: uuidForSistLukkede,
    fagsakYtelseType: ytelseType,
  });

  const valgtBehandlingTypeKode = formMethods.watch('behandlingType');

  const behandlingTyper = getBehandlingTyper(behandlingstyper);
  const enabledBehandlingstyper = getEnabledBehandlingstyper(behandlingTyper, behandlingOppretting, kanTilbakekrevingOpprettes);
  const behandlingArsakTyper = getBehandlingAarsaker(ytelseType, revurderingArsaker, tilbakekrevingRevurderingArsaker, valgtBehandlingTypeKode);

  return (
    <Modal
      className={styles.modal}
      isOpen
      closeButton={false}
      contentLabel={intl.formatMessage({ id: 'MenyNyBehandlingIndex.ModalDescription' })}
      onRequestClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Form formMethods={formMethods} onSubmit={onSubmit}>
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
            {valgtBehandlingTypeKode === bType.FORSTEGANGSSOKNAD && (
              <CheckboxField
                name="nyBehandlingEtterKlage"
                label={intl.formatMessage({ id: 'MenyNyBehandlingIndex.NyBehandlingEtterKlage' })}
              />
            )}
            {behandlingArsakTyper.length > 0 && (
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
      </Form>
    </Modal>
  );
};

export default NyBehandlingModal;
