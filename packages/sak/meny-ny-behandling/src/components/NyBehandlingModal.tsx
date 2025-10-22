import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, Modal, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfForm, RhfSelect } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import type {
  BehandlingArsakType,
  BehandlingÅrsakTypeFpTilbake,
  KodeverkMedNavn,
  KodeverkMedNavnTilbakekreving,
} from '@navikt/fp-types';

import styles from './nyBehandlingModal.module.css';

const createOptions = (
  bt: KodeverkMedNavn<'BehandlingType'>,
  enabledBehandlingstyper: KodeverkMedNavn<'BehandlingType'>[],
): ReactElement => {
  const isEnabled = enabledBehandlingstyper.some(b => b.kode === bt.kode);
  return <option key={bt.kode} value={bt.kode} disabled={!isEnabled}>{` ${bt.navn} `}</option>;
};

// TODO Denne inndelinga burde vel flyttast til DB (KODELISTE.EKSTRA_DATA)?
const manuelleRevurderingsArsakerES: BehandlingArsakType[] = [
  'RE-ANNET',
  'RE-LOV',
  'RE-FEFAKTA',
  'RE-RGLF',
  'RE-PRSSL',
];

const manuelleRevurderingsArsakerFP: BehandlingArsakType[] = [
  'RE-BER-GRUN',
  'RE-MDL',
  'RE-OPTJ',
  'RE-FRDLING',
  'RE-INNTK',
  'RE-DØD',
  'RE-SRTB',
  'RE-FRIST',
  'RE-KLAG-U-INNTK',
  'RE-KLAG-M-INNTK',
];

const manuelleRevurderingsArsakerSVP: BehandlingArsakType[] = [
  'RE-KLAG-U-INNTK',
  'RE-KLAG-M-INNTK',
  'RE-END-INNTEKTSMELD',
  'RE-END-FRA-BRUKER',
  'RE-FØDSEL',
  'RE-DØD',
  'RE-ANNET',
  'RE-INNTK',
];

const TilbakekrevingRevurderingArsaker: BehandlingÅrsakTypeFpTilbake[] = [
  'RE_FORELDELSE',
  'RE_VILKÅR',
  'RE_KLAGE_KA',
  'RE_KLAGE_NFP',
  'RE_FEILUTBETALT_BELØP_REDUSERT',
];

const getBehandlingAarsaker = (
  ytelseType: string,
  valgtBehandlingType?: string,
  alleRevurderingArsaker?: KodeverkMedNavn<'BehandlingÅrsakType'>[],
  alleTilbakekrevingRevurderingArsaker?: KodeverkMedNavnTilbakekreving<'BehandlingÅrsakType'>[],
): KodeverkMedNavn<'BehandlingÅrsakType'>[] | KodeverkMedNavnTilbakekreving<'BehandlingÅrsakType'>[] => {
  if (alleTilbakekrevingRevurderingArsaker && valgtBehandlingType === 'BT-009') {
    return TilbakekrevingRevurderingArsaker.flatMap(ar => {
      const arsak = alleTilbakekrevingRevurderingArsaker.find(el => el.kode === ar);
      return arsak ? [arsak] : [];
    });
  }

  if (alleRevurderingArsaker && valgtBehandlingType === 'BT-004') {
    const isForeldrepenger = ytelseType === 'FP';
    const isSvangerskap = ytelseType === 'SVP';
    const manuelleRevurderingsArsaker = new Array<BehandlingArsakType>();
    if (isForeldrepenger) {
      manuelleRevurderingsArsaker.push(...manuelleRevurderingsArsakerFP);
    } else if (isSvangerskap) {
      manuelleRevurderingsArsaker.push(...manuelleRevurderingsArsakerSVP);
    } else {
      manuelleRevurderingsArsaker.push(...manuelleRevurderingsArsakerES);
    }

    return alleRevurderingArsaker
      .filter(bat => manuelleRevurderingsArsaker.includes(bat.kode))
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
    if (bt.kode === 'BT-007') {
      return kanTilbakekrevingOpprettes.kanBehandlingOpprettes;
    }
    if (bt.kode === 'BT-009') {
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
        className={styles['modal']}
        open
        aria-label={intl.formatMessage({ id: 'MenyNyBehandlingIndex.ModalDescription' })}
        onClose={cancelEvent}
      >
        <Modal.Header>
          <Heading size="small" level="2">
            <FormattedMessage id="MenyNyBehandlingIndex.OpprettNyForstegangsbehandling" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <VStack gap="space-16">
            <RhfSelect
              name="behandlingType"
              control={formMethods.control}
              label=""
              validate={[required]}
              selectValues={behandlingTyper.map(bt => createOptions(bt, enabledBehandlingstyper))}
              className={styles['typeBredde']}
            />
            {valgtBehandlingTypeKode === 'BT-002' && (
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
                className={styles['arsakBredde']}
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
