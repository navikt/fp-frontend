import { type MouseEvent, type ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowForwardIcon, CheckmarkCircleFillIcon, PencilIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { Alert, BodyShort, Button, Heading, HStack, Label, Link, VStack } from '@navikt/ds-react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  type Aksjonspunkt,
  type BehandlingFpSak,
  type Behandlingsresultat,
  type BehandlingStatus,
  type Oppgave,
} from '@navikt/fp-types';
import { isAvslag, isInnvilget, isOpphor, usePanelDataContext } from '@navikt/fp-utils';

import type { VedtakForhåndsvisData } from '../../types/VedtakForhåndsvisData';
import type { VedtakFormValues } from '../../types/VedtakFormValues';
import { useVedtakEditeringContext } from '../../VedtakEditeringContext';
import { LegacyOverstyrtVedtaksbrev } from './LegacyOverstyrtVedtaksbrev';
import { OppgaveTabell } from './OppgaveTabell';
import { OverstyringVedtaksbrev } from './OverstyringVedtaksbrev';
import { VedtakHelpTextPanel } from './VedtakHelpTextPanel';

import styles from './vedtakFellesPanel.module.css';

const finnTekstkodeFraBehandlingstatus = (behandlingStatus: BehandlingStatus): string =>
  behandlingStatus === 'AVSLU' || behandlingStatus === 'IVED' ? 'VedtakForm.vedtak' : 'VedtakForm.ForslagTilVedtak';

const kanSendesTilGodkjenning = (behandlingStatusKode: BehandlingStatus): boolean => behandlingStatusKode === 'UTRED';

const finnKnappetekstkode = (aksjonspunkterForPanel: Aksjonspunkt[], skalBrukeManueltBrev: boolean): string =>
  aksjonspunkterForPanel.some(ap => ap.definisjon === AksjonspunktKode.FORESLÅ_VEDTAK) || skalBrukeManueltBrev
    ? 'VedtakForm.TilGodkjenning'
    : 'VedtakForm.FattVedtak';

const finnSkalViseLink = (behandlingsresultat: Behandlingsresultat): boolean =>
  behandlingsresultat.avslagsarsak ? behandlingsresultat.avslagsarsak !== '1099' : true;

const harIkkeKonsekvenserForYtelsen = (
  konsekvenserForYtelsenKoder: string[],
  behandlingResultat?: BehandlingFpSak['behandlingsresultat'],
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
  previewCallback: (data: VedtakForhåndsvisData) => void;
  tilbakekrevingtekst?: string;
  vedtakstatusTekst?: string;
  oppgaver?: Oppgave[];
  ferdigstillOppgave: (oppgaveId: string) => Promise<void>;
  setHarValgtÅRedigereVedtaksbrev: (harOverstyrtVedtaksbrev: boolean) => void;
  harValgtÅRedigereVedtaksbrev: boolean;
}

export const VedtakFellesPanel = ({
  renderPanel,
  previewAutomatiskBrev,
  previewCallback,
  tilbakekrevingtekst,
  erBehandlingEtterKlage,
  vedtakstatusTekst,
  oppgaver,
  ferdigstillOppgave,
  setHarValgtÅRedigereVedtaksbrev,
  harValgtÅRedigereVedtaksbrev,
}: Props) => {
  const intl = useIntl();

  const { behandling, isReadOnly, aksjonspunkterForPanel } = usePanelDataContext();
  const { behandlingsresultat, behandlingPåVent, status, behandlingHenlagt, uuid, taskStatus } = behandling;

  const {
    formState: { isSubmitting },
  } = useFormContext<VedtakFormValues>();

  const { harRedigertBrev, hentBrevOverstyring } = useVedtakEditeringContext();

  if (!behandlingsresultat) {
    throw new Error(`behandlingsresultat finnes ikke på behandling ${uuid}`);
  }

  const erInnvilget = isInnvilget(behandlingsresultat.type);
  const erAvslatt = isAvslag(behandlingsresultat.type);
  const erOpphor = isOpphor(behandlingsresultat.type);

  const skalViseLink = finnSkalViseLink(behandlingsresultat);
  const kanBehandles = !behandlingHenlagt && taskStatus?.status !== 'HALTED' && taskStatus?.status !== 'DELAYED';

  const harIkkeKonsekvensForYtelse = harIkkeKonsekvenserForYtelsen(
    ['ENDRING_I_FORDELING_AV_YTELSEN', 'INGEN_ENDRING'],
    behandlingsresultat,
  );

  const harValgtÅRedigereMenHarIkkeRedigert = harValgtÅRedigereVedtaksbrev && !harRedigertBrev;

  const skalProdusereBrev = behandlingsresultat.vedtaksbrevStatus === 'VEDTAKSBREV_PRODUSERES';

  return (
    <VStack gap="space-16">
      <HStack gap="space-8">
        {status === 'AVSLU' && (
          <>
            {erInnvilget && <CheckmarkCircleFillIcon className={styles['innvilgetImage']} />}
            {!erInnvilget && <XMarkOctagonFillIcon className={styles['avslattImage']} />}
          </>
        )}
        <Heading size="small" level="2">
          <FormattedMessage id={finnTekstkodeFraBehandlingstatus(status)} />
        </Heading>
      </HStack>
      <HStack gap="space-8">
        <div className={styles['space']}>
          <Label size="small">
            {vedtakstatusTekst}
            {tilbakekrevingtekst && `. ${intl.formatMessage({ id: tilbakekrevingtekst })}`}
          </Label>
        </div>
        <div className={styles['space']}>
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
              <ArrowForwardIcon className={styles['pil']} />
            </Link>
          )}
          {skalViseLink && harIkkeKonsekvensForYtelse && !kanBehandles && (
            <BodyShort size="small" className={styles['disabletLink']}>
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
          {hentBrevOverstyring && skalProdusereBrev && !isReadOnly && !harValgtÅRedigereVedtaksbrev && (
            <Link
              href="#"
              onClick={(e: React.MouseEvent) => {
                setHarValgtÅRedigereVedtaksbrev(true);

                e.preventDefault();
              }}
            >
              <PencilIcon className={styles['blyant']} />
              <span>
                <FormattedMessage id="VedtakFellesPanel.RedigerVedtaksbrev" />
              </span>
            </Link>
          )}
          {skalProdusereBrev && (isReadOnly || harValgtÅRedigereVedtaksbrev) && (
            <>
              <PencilIcon className={styles['blyantDisablet']} />
              <BodyShort size="small" className={styles['disabletLink']}>
                <FormattedMessage id="VedtakFellesPanel.RedigerVedtaksbrev" />
              </BodyShort>
            </>
          )}
        </div>
      </HStack>
      {!skalProdusereBrev && (
        <Alert variant="info" size="small" className={styles['alert']}>
          <BodyShort size="small">
            <FormattedMessage id="VedtakFellesPanel.IngenVedtaksbrev" />
          </BodyShort>
        </Alert>
      )}
      <VedtakHelpTextPanel aksjonspunkterForPanel={aksjonspunkterForPanel} isReadOnly={isReadOnly} />
      {oppgaver && oppgaver.length > 0 && (
        <OppgaveTabell oppgaver={oppgaver} ferdigstillOppgave={ferdigstillOppgave} isReadOnly={isReadOnly} />
      )}
      <VStack gap="space-32">
        {renderPanel(harValgtÅRedigereVedtaksbrev, erInnvilget, erAvslatt, erOpphor)}
        {behandling.behandlingsresultat?.overskrift && (
          <LegacyOverstyrtVedtaksbrev forhåndsvisOverstyrtBrev={previewCallback} behandling={behandling} />
        )}
        {harValgtÅRedigereVedtaksbrev && (
          <OverstyringVedtaksbrev
            forhåndsvisBrev={previewCallback}
            setHarValgtÅRedigereVedtaksbrev={setHarValgtÅRedigereVedtaksbrev}
          />
        )}
        {!isReadOnly && kanSendesTilGodkjenning(status) && (
          <div>
            <Button
              variant="primary"
              size="small"
              disabled={behandlingPåVent || isSubmitting || harValgtÅRedigereMenHarIkkeRedigert}
              loading={isSubmitting}
            >
              <FormattedMessage id={finnKnappetekstkode(aksjonspunkterForPanel, harValgtÅRedigereVedtaksbrev)} />
            </Button>
          </div>
        )}
      </VStack>
    </VStack>
  );
};
