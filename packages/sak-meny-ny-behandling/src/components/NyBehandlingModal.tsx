import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Modal, Button, Heading } from '@navikt/ds-react';

import { VerticalSpacer, FlexContainer, FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { CheckboxField, SelectField, Form } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { fagsakYtelseType, behandlingType as bType, behandlingArsakType } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn } from '@navikt/fp-types';

import styles from './nyBehandlingModal.module.css';

const createOptions = (
  bt: KodeverkMedNavn,
  enabledBehandlingstyper: KodeverkMedNavn[],
  intl: IntlShape,
): ReactElement => {
  // TODO Burde retta opp navn for behandlingstype i DB
  const navn =
    bt.kode === bType.REVURDERING ? intl.formatMessage({ id: 'MenyNyBehandlingIndex.OpprettRevurdering' }) : bt.navn;

  const isEnabled = enabledBehandlingstyper.some(b => b.kode === bt.kode);
  return <option key={bt.kode} value={bt.kode} disabled={!isEnabled}>{` ${navn} `}</option>;
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

const getBehandlingAarsaker = (
  ytelseType: string,
  alleRevurderingArsaker: KodeverkMedNavn[],
  alleTilbakekrevingRevurderingArsaker: KodeverkMedNavn[],
  valgtBehandlingType?: string,
): KodeverkMedNavn[] => {
  if (valgtBehandlingType === bType.TILBAKEKREVING_REVURDERING) {
    return TilbakekrevingRevurderingArsaker.flatMap(ar => {
      const arsak = alleTilbakekrevingRevurderingArsaker.find(el => el.kode === ar);
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
      .filter(bat => manuelleRevurderingsArsaker.indexOf(bat.kode) > -1)
      .sort((bat1, bat2) => bat1.navn.localeCompare(bat2.navn));
  }

  return [];
};

const getBehandlingTyper = (behandlingstyper: KodeverkMedNavn[]): KodeverkMedNavn[] =>
  [...behandlingstyper].sort((bt1, bt2) => bt1.navn.localeCompare(bt2.navn));

const getEnabledBehandlingstyper = (
  behandlingstyper: KodeverkMedNavn[],
  behandlingOppretting: BehandlingOppretting[],
  kanTilbakekrevingOpprettes = {
    kanBehandlingOpprettes: false,
    kanRevurderingOpprettes: false,
  },
) =>
  behandlingstyper.filter(bt => {
    if (bt.kode === bType.TILBAKEKREVING) {
      return kanTilbakekrevingOpprettes.kanBehandlingOpprettes;
    }
    if (bt.kode === bType.TILBAKEKREVING_REVURDERING) {
      return kanTilbakekrevingOpprettes.kanRevurderingOpprettes;
    }
    return behandlingOppretting.some(bo => bo.behandlingType === bt.kode && bo.kanOppretteBehandling);
  });

export type BehandlingOppretting = Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>;

export type FormValues = {
  behandlingType?: string;
  nyBehandlingEtterKlage?: string;
  behandlingArsakType?: string;
};

interface OwnProps {
  ytelseType: string;
  cancelEvent: () => void;
  submitCallback: (
    data: {
      eksternUuid?: string;
      fagsakYtelseType: string;
    } & FormValues,
  ) => void;
  behandlingOppretting: BehandlingOppretting[];
  behandlingstyper: KodeverkMedNavn[];
  tilbakekrevingRevurderingArsaker: KodeverkMedNavn[];
  revurderingArsaker: KodeverkMedNavn[];
  kanTilbakekrevingOpprettes: {
    kanBehandlingOpprettes: boolean;
    kanRevurderingOpprettes: boolean;
  };
  uuidForSistLukkede?: string;
}

/**
 * NyBehandlingModal
 *
 * Presentasjonskomponent. Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
 * Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.
 */
const NyBehandlingModal: FunctionComponent<OwnProps> = ({
  submitCallback,
  cancelEvent,
  behandlingstyper,
  uuidForSistLukkede,
  ytelseType,
  behandlingOppretting,
  kanTilbakekrevingOpprettes,
  revurderingArsaker,
  tilbakekrevingRevurderingArsaker,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>();

  const onSubmit = (values: FormValues) =>
    submitCallback({
      ...values,
      eksternUuid: uuidForSistLukkede,
      fagsakYtelseType: ytelseType,
    });

  const valgtBehandlingTypeKode = formMethods.watch('behandlingType');

  const behandlingTyper = useMemo(() => getBehandlingTyper(behandlingstyper), [behandlingstyper]);
  const enabledBehandlingstyper = getEnabledBehandlingstyper(
    behandlingTyper,
    behandlingOppretting,
    kanTilbakekrevingOpprettes,
  );
  const behandlingArsakTyper = getBehandlingAarsaker(
    ytelseType,
    revurderingArsaker,
    tilbakekrevingRevurderingArsaker,
    valgtBehandlingTypeKode,
  );

  return (
    <Modal
      className={styles.modal}
      open
      closeButton
      aria-label={intl.formatMessage({ id: 'MenyNyBehandlingIndex.ModalDescription' })}
      onClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <Form formMethods={formMethods} onSubmit={onSubmit}>
          <Heading size="small">
            <FormattedMessage id="MenyNyBehandlingIndex.OpprettNyForstegangsbehandling" />
          </Heading>
          <VerticalSpacer sixteenPx />
          <SelectField
            name="behandlingType"
            label=""
            validate={[required]}
            selectValues={behandlingTyper.map(bt => createOptions(bt, enabledBehandlingstyper, intl))}
            className={styles.typeBredde}
          />
          <VerticalSpacer sixteenPx />
          {valgtBehandlingTypeKode === bType.FORSTEGANGSSOKNAD && (
            <>
              <CheckboxField
                name="nyBehandlingEtterKlage"
                label={intl.formatMessage({ id: 'MenyNyBehandlingIndex.NyBehandlingEtterKlage' })}
              />
              <VerticalSpacer sixteenPx />
            </>
          )}
          {behandlingArsakTyper.length > 0 && (
            <>
              <SelectField
                name="behandlingArsakType"
                label=""
                hideLabel
                validate={[required]}
                className={styles.arsakBredde}
                selectValues={behandlingArsakTyper.map(b => (
                  <option key={b.kode} value={b.kode}>
                    {b.navn}
                  </option>
                ))}
              />
              <VerticalSpacer sixteenPx />
            </>
          )}
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Button size="small" variant="primary">
                  <FormattedMessage id="MenyNyBehandlingIndex.Ok" />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button size="small" variant="secondary" onClick={cancelEvent} type="button">
                  <FormattedMessage id="MenyNyBehandlingIndex.Avbryt" />
                </Button>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default NyBehandlingModal;
