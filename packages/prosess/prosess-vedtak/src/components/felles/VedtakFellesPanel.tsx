import React, { type MouseEvent, type ReactNode, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowForwardIcon, CheckmarkCircleFillIcon, PencilIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { Alert, BodyShort, Box, Button, Heading, HStack, Label, Link, VStack } from '@navikt/ds-react';
import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';

import {
  AksjonspunktKode,
  Avslagsarsak,
  BehandlingStatus as behandlingStatusCode,
  DokumentMalType,
  isAvslag,
  isInnvilget,
  isOpphor,
  KonsekvensForYtelsen,
} from '@navikt/fp-kodeverk';
import { ApiPollingStatus } from '@navikt/fp-konstanter';
import type {
  Aksjonspunkt,
  Behandling,
  Behandlingsresultat,
  GenererHtmlDokument,
  Oppgave,
  OverstyrtDokument,
} from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { FritekstRedigeringModal } from '../editor/FritekstRedigeringModal';
import type { ForhandsvisData } from '../forstegang/VedtakForm';
import { OppgaveTabell } from './OppgaveTabell.tsx';
import { VedtakHelpTextPanel } from './VedtakHelpTextPanel';

import styles from './vedtakFellesPanel.module.css';

export const finnTekstkodeFraBehandlingstatus = (behandlingStatus: string): string =>
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
  hentBrevHtml: (params: GenererHtmlDokument) => Promise<OverstyrtDokument>;
  lagreManueltBrev: (html: string) => Promise<void>;
  forkastManueltBrev: () => Promise<void>;
  setHarOverstyrtVedtaksbrev: (harOverstyrtVedtaksbrev: boolean) => void;
}

export const VedtakFellesPanel = ({
  renderPanel,
  previewAutomatiskBrev,
  previewCallback,
  tilbakekrevingtekst,
  erBehandlingEtterKlage,
  vedtakstatusTekst,
  oppgaver,
  hentBrevHtml,
  lagreManueltBrev,
  forkastManueltBrev,
  setHarOverstyrtVedtaksbrev,
}: Props) => {
  const intl = useIntl();

  const { behandling, isReadOnly } = usePanelDataContext();

  const { aksjonspunkt, behandlingsresultat, behandlingPåVent, status, behandlingHenlagt, uuid, taskStatus } =
    behandling;

  const [visRedigering, setVisRedigering] = useState(false);
  const [brevHtml, setBrevHtml] = useState<OverstyrtDokument>();

  useEffect(() => {
    if (behandling.behandlingsresultat?.vedtaksbrev === DokumentMalType.FRITEKST_HTML) {
      hentBrevHtml({
        behandlingUuid: behandling.uuid,
        dokumentMal: DokumentMalType.FRITEKST_HTML,
        automatiskVedtaksbrev: false,
        arsakskode: '',
      }).then(html => setBrevHtml(html));
    }
  }, []);

  const {
    formState: { isSubmitting },
  } = useFormContext();

  if (!behandlingsresultat) {
    throw new Error(`behandlingsresultat finnes ikke på behandling ${uuid}`);
  }

  const [skalBrukeManueltBrev, setSkalBrukeManueltBrev] = useState(
    behandlingsresultat.vedtaksbrev === DokumentMalType.FRITEKST ||
      behandlingsresultat.vedtaksbrev === DokumentMalType.FRITEKST_HTML,
  );

  const [skalViseModal, setSkalViseModal] = useState(false);

  const onToggleOverstyring = async (e: React.MouseEvent) => {
    setSkalBrukeManueltBrev(true);
    setHarOverstyrtVedtaksbrev(true);

    const html = await hentBrevHtml({
      behandlingUuid: behandling.uuid,
      dokumentMal: DokumentMalType.FRITEKST_HTML,
      automatiskVedtaksbrev: false,
      arsakskode: '',
    });
    setBrevHtml(html);

    e.preventDefault();
  };

  const avsluttRedigering = () => {
    setSkalBrukeManueltBrev(false);
    setHarOverstyrtVedtaksbrev(false);
    setSkalViseModal(false);

    forkastManueltBrev();
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

  return (
    <VStack gap="4">
      <OkAvbrytModal
        text={intl.formatMessage({ id: 'VedtakFellesPanel.Forkast' })}
        okButtonText={intl.formatMessage({ id: 'VedtakFellesPanel.Ok' })}
        showModal={skalViseModal}
        cancel={() => setSkalViseModal(false)}
        submit={avsluttRedigering}
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
          {!isReadOnly && !skalBrukeManueltBrev && (
            <Link href="#" onClick={onToggleOverstyring}>
              <PencilIcon className={styles.blyant} />
              <span>
                <FormattedMessage id="VedtakFellesPanel.RedigerVedtaksbrev" />
              </span>
            </Link>
          )}
          {(isReadOnly || skalBrukeManueltBrev) && (
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
      {renderPanel(skalBrukeManueltBrev, erInnvilget, erAvslatt, erOpphor)}
      {skalBrukeManueltBrev && (
        <div className={styles.brevRedigering}>
          <VStack gap="4">
            <Alert variant="info" size="small">
              <FormattedMessage id="VedtakFellesPanel.KanRedigeres" />
            </Alert>
            <Box padding="4" borderRadius="medium" background="surface-subtle">
              <VStack gap="2">
                <Heading size="small">
                  <FormattedMessage id="VedtakFellesPanel.RedigerBrevOverskrift" />
                </Heading>
                <HStack>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => setVisRedigering(true)}
                    size="small"
                    disabled={isReadOnly}
                  >
                    <FormattedMessage id="VedtakFellesPanel.RedigerVedtaksbrev" />
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </VStack>
          {brevHtml && visRedigering && (
            <FritekstRedigeringModal
              setVisRedigering={setVisRedigering}
              brevHtml={brevHtml}
              forkastManueltBrev={forkastManueltBrev}
              forhåndsvisBrev={previewCallback}
              lagreManueltBrev={lagreManueltBrev}
            />
          )}
        </div>
      )}
      {kanSendesTilGodkjenning(status) && (
        <HStack gap="2">
          {!isReadOnly && (
            <div>
              <Button variant="primary" size="small" disabled={behandlingPåVent || isSubmitting} loading={isSubmitting}>
                <FormattedMessage id={finnKnappetekstkode(aksjonspunkt, skalBrukeManueltBrev)} />
              </Button>
            </div>
          )}
          {skalBrukeManueltBrev && (
            <div>
              <Button size="small" variant="secondary" onClick={() => setSkalViseModal(true)} type="button">
                <FormattedMessage id="VedtakFellesPanel.ForkastManueltBrev" />
              </Button>
            </div>
          )}
        </HStack>
      )}
    </VStack>
  );
};
