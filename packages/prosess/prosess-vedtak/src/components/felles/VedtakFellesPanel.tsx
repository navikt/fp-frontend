import { type MouseEvent, type ReactNode, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowForwardIcon, CheckmarkCircleFillIcon, PencilIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Heading, HStack, Label, Link, VStack } from '@navikt/ds-react';
import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';

import {
  AksjonspunktKode,
  Avslagsarsak,
  BehandlingStatus as behandlingStatusCode,
  isAvslag,
  isInnvilget,
  isOpphor,
  KonsekvensForYtelsen,
} from '@navikt/fp-kodeverk';
import { ApiPollingStatus } from '@navikt/fp-konstanter';
import type { Aksjonspunkt, Behandling, Behandlingsresultat, BrevOverstyring, Oppgave } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import type { ForhandsvisData } from '../forstegang/VedtakForm';
import { LegacyOverstyrtVedtaksbrev } from './LegacyOverstyrtVedtaksbrev.tsx';
import { OppgaveTabell } from './OppgaveTabell.tsx';
import { OverstyringVedtaksbrev } from './OverstyringVedtaksbrev.tsx';
import { VedtakHelpTextPanel } from './VedtakHelpTextPanel';

import styles from './vedtakFellesPanel.module.css';

const finnTekstkodeFraBehandlingstatus = (behandlingStatus: string): string =>
  behandlingStatus === behandlingStatusCode.AVSLUTTET || behandlingStatus === behandlingStatusCode.IVERKSETTER_VEDTAK
    ? 'VedtakForm.vedtak'
    : 'VedtakForm.ForslagTilVedtak';

const kanSendesTilGodkjenning = (behandlingStatusKode: string): boolean =>
  behandlingStatusKode === behandlingStatusCode.BEHANDLING_UTREDES;

const finnKnappetekstkode = (aksjonspunkter: Aksjonspunkt[], skalBrukeManueltBrev: boolean): string =>
  aksjonspunkter?.some(ap => ap.definisjon === AksjonspunktKode.FORESLA_VEDTAK) || skalBrukeManueltBrev
    ? 'VedtakForm.TilGodkjenning'
    : 'VedtakForm.FattVedtak';

const finnSkalViseLink = (behandlingsresultat: Behandlingsresultat): boolean =>
  behandlingsresultat.avslagsarsak ? behandlingsresultat.avslagsarsak !== Avslagsarsak.INGEN_BEREGNINGSREGLER : true;

const harIkkeKonsekvenserForYtelsen = (
  konsekvenserForYtelsenKoder: string[],
  behandlingResultat?: Behandling['behandlingsresultat'],
): boolean => {
  if (!behandlingResultat) {
    return true;
  }
  const { konsekvenserForYtelsen } = behandlingResultat;
  if (!Array.isArray(konsekvenserForYtelsen) || konsekvenserForYtelsen.length !== 1) {
    return true;
  }
  return !konsekvenserForYtelsenKoder.some(kode => kode === konsekvenserForYtelsen[0]);
};

interface Props {
  erBehandlingEtterKlage: boolean;
  renderPanel: (
    skalBrukeManueltBrev: boolean,
    erInnvilget: boolean,
    erAvslatt: boolean,
    erOpphor?: boolean,
  ) => ReactNode;
  previewAutomatiskBrev: (e: MouseEvent) => void;
  previewCallback: (data: ForhandsvisData) => void;
  tilbakekrevingtekst?: string;
  vedtakstatusTekst?: string;
  oppgaver?: Oppgave[];
  brevOverstyring?: BrevOverstyring;
  refetchBrevOverstyring: () => void;
  mellomlagreBrevOverstyring: (redigertInnhold: string | null) => Promise<void>;
  setHarOverstyrtVedtaksbrev: (harOverstyrtVedtaksbrev: boolean) => void;
  harOverstyrtVedtaksbrev: boolean;
}

export const VedtakFellesPanel = ({
  renderPanel,
  previewAutomatiskBrev,
  previewCallback,
  tilbakekrevingtekst,
  erBehandlingEtterKlage,
  vedtakstatusTekst,
  oppgaver,
  brevOverstyring,
  refetchBrevOverstyring,
  mellomlagreBrevOverstyring,
  setHarOverstyrtVedtaksbrev,
  harOverstyrtVedtaksbrev,
}: Props) => {
  const intl = useIntl();

  const { behandling, isReadOnly } = usePanelDataContext();
  const { aksjonspunkt, behandlingsresultat, behandlingPåVent, status, behandlingHenlagt, uuid, taskStatus } =
    behandling;

  const {
    formState: { isSubmitting },
  } = useFormContext();

  const [visForkastOverstyringModal, setVisForkastOverstyringModal] = useState(false);

  if (!behandlingsresultat) {
    throw new Error(`behandlingsresultat finnes ikke på behandling ${uuid}`);
  }

  const forkastOverstyrtBrev = async () => {
    setVisForkastOverstyringModal(false);
    setHarOverstyrtVedtaksbrev(false);

    await mellomlagreBrevOverstyring(null);
    refetchBrevOverstyring();
  };

  const erInnvilget = isInnvilget(behandlingsresultat.type);
  const erAvslatt = isAvslag(behandlingsresultat.type);
  const erOpphor = isOpphor(behandlingsresultat.type);

  const skalViseLink = finnSkalViseLink(behandlingsresultat);
  const kanBehandles =
    !behandlingHenlagt &&
    taskStatus?.status !== ApiPollingStatus.HALTED &&
    taskStatus?.status !== ApiPollingStatus.DELAYED;

  const harIkkeKonsekvensForYtelse = harIkkeKonsekvenserForYtelsen(
    [KonsekvensForYtelsen.ENDRING_I_FORDELING_AV_YTELSEN, KonsekvensForYtelsen.INGEN_ENDRING],
    behandlingsresultat,
  );

  const harValgtÅOverstyreMenIkkeOverstyrt = harOverstyrtVedtaksbrev && !brevOverstyring?.redigertHtml;

  return (
    <VStack gap="4">
      <OkAvbrytModal
        text={intl.formatMessage({ id: 'VedtakFellesPanel.Forkast' })}
        okButtonText={intl.formatMessage({ id: 'VedtakFellesPanel.Ok' })}
        showModal={visForkastOverstyringModal}
        cancel={() => setVisForkastOverstyringModal(false)}
        submit={forkastOverstyrtBrev}
      />
      <HStack gap="2">
        {status === behandlingStatusCode.AVSLUTTET && (
          <>
            {erInnvilget && <CheckmarkCircleFillIcon className={styles.innvilgetImage} />}
            {!erInnvilget && <XMarkOctagonFillIcon className={styles.avslattImage} />}
          </>
        )}
        <Heading size="small">
          <FormattedMessage id={finnTekstkodeFraBehandlingstatus(status)} />
        </Heading>
      </HStack>
      <HStack gap="2">
        <div className={styles.space}>
          <Label size="small">
            {vedtakstatusTekst}
            {tilbakekrevingtekst && `. ${intl.formatMessage({ id: tilbakekrevingtekst })}`}
          </Label>
        </div>
        <div className={styles.space}>
          {skalViseLink && harIkkeKonsekvensForYtelse && kanBehandles && (
            <Link href="#" onClick={previewAutomatiskBrev}>
              <span>
                <FormattedMessage
                  id={
                    erBehandlingEtterKlage
                      ? 'VedtakFellesPanel.UtkastVedtaksbrev'
                      : 'VedtakFellesPanel.AutomatiskVedtaksbrev'
                  }
                />
              </span>
              <ArrowForwardIcon className={styles.pil} />
            </Link>
          )}
          {skalViseLink && harIkkeKonsekvensForYtelse && !kanBehandles && (
            <BodyShort size="small" className={styles.disabletLink}>
              <FormattedMessage
                id={
                  erBehandlingEtterKlage
                    ? 'VedtakFellesPanel.UtkastVedtaksbrev'
                    : 'VedtakFellesPanel.AutomatiskVedtaksbrev'
                }
              />
            </BodyShort>
          )}
        </div>
        <div>
          {!isReadOnly && !harOverstyrtVedtaksbrev && (
            <Link
              href="#"
              onClick={(e: React.MouseEvent) => {
                setHarOverstyrtVedtaksbrev(true);

                e.preventDefault();
              }}
            >
              <PencilIcon className={styles.blyant} />
              <span>
                <FormattedMessage id="VedtakFellesPanel.RedigerVedtaksbrev" />
              </span>
            </Link>
          )}
          {(isReadOnly || harOverstyrtVedtaksbrev) && (
            <>
              <PencilIcon className={styles.blyantDisablet} />
              <BodyShort size="small" className={styles.disabletLink}>
                <FormattedMessage id="VedtakFellesPanel.RedigerVedtaksbrev" />
              </BodyShort>
            </>
          )}
        </div>
      </HStack>
      <VedtakHelpTextPanel aksjonspunkter={aksjonspunkt} isReadOnly={isReadOnly} />
      {oppgaver && oppgaver.length > 0 && <OppgaveTabell oppgaver={oppgaver} />}
      <VStack gap="8">
        {renderPanel(harOverstyrtVedtaksbrev, erInnvilget, erAvslatt, erOpphor)}
        {behandling.behandlingsresultat?.overskrift && (
          <LegacyOverstyrtVedtaksbrev forhåndsvisOverstyrtBrev={previewCallback} behandling={behandling} />
        )}
        {harOverstyrtVedtaksbrev && (
          <OverstyringVedtaksbrev
            forhåndsvisBrev={previewCallback}
            brevOverstyring={brevOverstyring}
            refetchBrevOverstyring={refetchBrevOverstyring}
            mellomlagreBrevOverstyring={mellomlagreBrevOverstyring}
            setVisForkastOverstyringModal={setVisForkastOverstyringModal}
          />
        )}
        {!isReadOnly && kanSendesTilGodkjenning(status) && (
          <div>
            <Button
              variant="primary"
              size="small"
              disabled={behandlingPåVent || isSubmitting || harValgtÅOverstyreMenIkkeOverstyrt}
              loading={isSubmitting}
            >
              <FormattedMessage id={finnKnappetekstkode(aksjonspunkt, harOverstyrtVedtaksbrev)} />
            </Button>
          </div>
        )}
      </VStack>
    </VStack>
  );
};
