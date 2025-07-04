import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, Modal, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfForm, RhfSelect } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { BehandlingArsakType, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import type { KodeverkMedNavn, KodeverkMedNavnTilbakekreving } from '@navikt/fp-types';

import styles from './nyBehandlingModal.module.css';

const createOptions = (
  bt: KodeverkMedNavn<'BehandlingType'>,
  enabledBehandlingstyper: KodeverkMedNavn<'BehandlingType'>[],
): ReactElement => {
  const isEnabled = enabledBehandlingstyper.some(b => b.kode === bt.kode);
  return <option key={bt.kode} value={bt.kode} disabled={!isEnabled}>{` ${bt.navn} `}</option>;
};

// TODO Denne inndelinga burde vel flyttast til DB (KODELISTE.EKSTRA_DATA)?
const manuelleRevurderingsArsakerES = [
  BehandlingArsakType.ANNET,
  BehandlingArsakType.FEIL_I_LOVANDVENDELSE,
  BehandlingArsakType.FEIL_ELLER_ENDRET_FAKTA,
  BehandlingArsakType.FEIL_REGELVERKSFORSTAELSE,
  BehandlingArsakType.FEIL_PROSESSUELL,
];

const manuelleRevurderingsArsakerFP = [
  BehandlingArsakType.BEREEGNINGSGRUNNLAG,
  BehandlingArsakType.MEDLEMSKAP,
  BehandlingArsakType.OPPTJENING,
  BehandlingArsakType.FORDELING,
  BehandlingArsakType.INNTEKT,
  BehandlingArsakType.DØD,
  BehandlingArsakType.SØKERS_RELASJON,
  BehandlingArsakType.SØKNADSFRIST,
  BehandlingArsakType.KLAGE_U_INNTK,
  BehandlingArsakType.KLAGE_M_INNTK,
];

const manuelleRevurderingsArsakerSVP = [
  BehandlingArsakType.KLAGE_U_INNTK,
  BehandlingArsakType.KLAGE_M_INNTK,
  BehandlingArsakType.RE_ENDRET_INNTEKTSMELDING,
  BehandlingArsakType.RE_ENDRING_FRA_BRUKER,
  BehandlingArsakType.FØDSEL,
  BehandlingArsakType.DØD,
  BehandlingArsakType.ANNET,
  BehandlingArsakType.INNTEKT,
];

const TilbakekrevingRevurderingArsaker = [
  BehandlingArsakType.RE_FORELDELSE,
  BehandlingArsakType.RE_VILKÅR,
  BehandlingArsakType.RE_KLAGE_KA,
  BehandlingArsakType.RE_KLAGE_NFP,
  BehandlingArsakType.RE_FEILUTBETALT_BELØP_REDUSERT,
];

const getBehandlingAarsaker = (
  ytelseType: string,
  valgtBehandlingType?: string,
  alleRevurderingArsaker?: KodeverkMedNavn<'BehandlingÅrsakType'>[],
  alleTilbakekrevingRevurderingArsaker?: KodeverkMedNavnTilbakekreving<'BehandlingÅrsakType'>[],
): KodeverkMedNavn<'BehandlingÅrsakType'>[] | KodeverkMedNavnTilbakekreving<'BehandlingÅrsakType'>[] => {
  if (alleTilbakekrevingRevurderingArsaker && valgtBehandlingType === BehandlingType.TILBAKEKREVING_REVURDERING) {
    return TilbakekrevingRevurderingArsaker.flatMap(ar => {
      const arsak = alleTilbakekrevingRevurderingArsaker.find(el => el.kode === ar);
      return arsak ? [arsak] : [];
    });
  }

  if (alleRevurderingArsaker && valgtBehandlingType === BehandlingType.REVURDERING) {
    const isForeldrepenger = ytelseType === FagsakYtelseType.FORELDREPENGER;
    const isSvangerskap = ytelseType === FagsakYtelseType.SVANGERSKAPSPENGER;
    let manuelleRevurderingsArsaker = isForeldrepenger ? manuelleRevurderingsArsakerFP : manuelleRevurderingsArsakerES;
    if (isSvangerskap) {
      manuelleRevurderingsArsaker = manuelleRevurderingsArsakerSVP;
    }
    return alleRevurderingArsaker
      .filter(bat => manuelleRevurderingsArsaker.some(mra => mra === bat.kode))
      .sort((bat1, bat2) => bat1.navn.localeCompare(bat2.navn));
  }

  return [];
};

const getBehandlingTyper = (
  behandlingstyper: KodeverkMedNavn<'BehandlingType'>[],
): KodeverkMedNavn<'BehandlingType'>[] => [...behandlingstyper].sort((bt1, bt2) => bt1.navn.localeCompare(bt2.navn));

const getEnabledBehandlingstyper = (
  behandlingstyper: KodeverkMedNavn<'BehandlingType'>[],
  behandlingOppretting: BehandlingOppretting[],
  kanTilbakekrevingOpprettes = {
    kanBehandlingOpprettes: false,
    kanRevurderingOpprettes: false,
  },
) =>
  behandlingstyper.filter(bt => {
    if (bt.kode === BehandlingType.TILBAKEKREVING) {
      return kanTilbakekrevingOpprettes.kanBehandlingOpprettes;
    }
    if (bt.kode === BehandlingType.TILBAKEKREVING_REVURDERING) {
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

interface Props {
  ytelseType: string;
  cancelEvent: () => void;
  submitCallback: (
    data: {
      eksternUuid?: string;
      fagsakYtelseType: string;
    } & FormValues,
  ) => void;
  behandlingOppretting: BehandlingOppretting[];
  behandlingstyper: KodeverkMedNavn<'BehandlingType'>[];
  tilbakekrevingRevurderingArsaker?: KodeverkMedNavnTilbakekreving<'BehandlingÅrsakType'>[];
  revurderingArsaker?: KodeverkMedNavn<'BehandlingÅrsakType'>[];
  kanTilbakekrevingOpprettes: {
    kanBehandlingOpprettes: boolean;
    kanRevurderingOpprettes: boolean;
  };
  uuidForSistLukkede?: string;
}

/**
 * NyBehandlingModal
 *
 * Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
 * Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.
 */
export const NyBehandlingModal = ({
  submitCallback,
  cancelEvent,
  behandlingstyper,
  uuidForSistLukkede,
  ytelseType,
  behandlingOppretting,
  kanTilbakekrevingOpprettes,
  revurderingArsaker,
  tilbakekrevingRevurderingArsaker,
}: Props) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>();

  const onSubmit = (values: FormValues) =>
    submitCallback({
      ...values,
      eksternUuid: uuidForSistLukkede,
      fagsakYtelseType: ytelseType,
    });

  const valgtBehandlingTypeKode = formMethods.watch('behandlingType');

  const behandlingTyper = getBehandlingTyper(behandlingstyper);
  const enabledBehandlingstyper = getEnabledBehandlingstyper(
    behandlingTyper,
    behandlingOppretting,
    kanTilbakekrevingOpprettes,
  );
  const behandlingArsakTyper = getBehandlingAarsaker(
    ytelseType,
    valgtBehandlingTypeKode,
    revurderingArsaker,
    tilbakekrevingRevurderingArsaker,
  );

  return (
    <RhfForm formMethods={formMethods} onSubmit={onSubmit}>
      <Modal
        className={styles.modal}
        open
        aria-label={intl.formatMessage({ id: 'MenyNyBehandlingIndex.ModalDescription' })}
        onClose={cancelEvent}
      >
        <Modal.Header>
          <Heading size="small">
            <FormattedMessage id="MenyNyBehandlingIndex.OpprettNyForstegangsbehandling" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <VStack gap="4">
            <RhfSelect
              name="behandlingType"
              control={formMethods.control}
              label=""
              validate={[required]}
              selectValues={behandlingTyper.map(bt => createOptions(bt, enabledBehandlingstyper))}
              className={styles.typeBredde}
            />
            {valgtBehandlingTypeKode === BehandlingType.FORSTEGANGSSOKNAD && (
              <RhfCheckbox
                name="nyBehandlingEtterKlage"
                control={formMethods.control}
                label={intl.formatMessage({ id: 'MenyNyBehandlingIndex.NyBehandlingEtterKlage' })}
              />
            )}
            {behandlingArsakTyper.length > 0 && (
              <RhfSelect
                name="behandlingArsakType"
                control={formMethods.control}
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
            )}
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" variant="primary">
            <FormattedMessage id="MenyNyBehandlingIndex.Ok" />
          </Button>
          <Button size="small" variant="secondary" onClick={cancelEvent} type="button">
            <FormattedMessage id="MenyNyBehandlingIndex.Avbryt" />
          </Button>
        </Modal.Footer>
      </Modal>
    </RhfForm>
  );
};
