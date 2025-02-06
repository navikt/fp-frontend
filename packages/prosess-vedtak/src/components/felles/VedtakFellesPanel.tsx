import React, { type MouseEvent, type ReactNode, useCallback, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowForwardIcon, CheckmarkCircleFillIcon, PencilIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Heading, Label, Link } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, OkAvbrytModal, VerticalSpacer } from '@navikt/ft-ui-komponenter';

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
import type { Aksjonspunkt, Behandling, Behandlingsresultat } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { ManueltVedtaksbrevPanel } from './ManueltVedtaksbrevPanel';
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
  previewOverstyrtBrev: (e: MouseEvent) => void;
  tilbakekrevingtekst?: string;
  vedtakstatusTekst?: string;
}

export const VedtakFellesPanel = ({
  renderPanel,
  previewAutomatiskBrev,
  previewOverstyrtBrev,
  tilbakekrevingtekst,
  erBehandlingEtterKlage,
  vedtakstatusTekst,
}: Props) => {
  const intl = useIntl();

  const { behandling, isReadOnly } = usePanelDataContext();

  const { aksjonspunkt } = behandling;

  const {
    setValue,
    formState: { isSubmitting },
  } = useFormContext();

  const { behandlingsresultat, behandlingPaaVent, sprakkode, status, behandlingHenlagt, uuid, taskStatus } = behandling;

  if (!behandlingsresultat) {
    throw new Error(`behandlingsresultat finnes ikke på behandling ${uuid}`);
  }

  const [skalBrukeManueltBrev, setSkalBrukeManueltBrev] = useState(
    !!behandlingsresultat.vedtaksbrev && behandlingsresultat.vedtaksbrev === 'FRITEKST',
  );
  const [skalViseModal, setSkalViseModal] = useState(false);
  const onToggleOverstyring = useCallback((e: React.MouseEvent) => {
    setSkalBrukeManueltBrev(true);
    e.preventDefault();
  }, []);
  const avsluttRedigering = useCallback(() => {
    setSkalBrukeManueltBrev(false);
    setSkalViseModal(false);
    setValue('overskrift', undefined);
    setValue('brødtekst', undefined);
  }, []);

  const erInnvilget = isInnvilget(behandlingsresultat.type);
  const erAvslatt = isAvslag(behandlingsresultat.type);
  const erOpphor = isOpphor(behandlingsresultat.type);

  const skalViseLink = finnSkalViseLink(behandlingsresultat);
  const kanBehandles =
    !behandlingHenlagt &&
    taskStatus?.status !== ApiPollingStatus.HALTED &&
    taskStatus?.status !== ApiPollingStatus.DELAYED;

  const harIkkeKonsekvensForYtelse = useMemo(
    () =>
      harIkkeKonsekvenserForYtelsen(
        [KonsekvensForYtelsen.ENDRING_I_FORDELING_AV_YTELSEN, KonsekvensForYtelsen.INGEN_ENDRING],
        behandlingsresultat,
      ),
    [behandlingsresultat],
  );

  return (
    <>
      <OkAvbrytModal
        text={intl.formatMessage({ id: 'VedtakFellesPanel.Forkast' })}
        okButtonText={intl.formatMessage({ id: 'VedtakFellesPanel.Ok' })}
        showModal={skalViseModal}
        cancel={() => setSkalViseModal(false)}
        submit={avsluttRedigering}
      />
      <FlexContainer>
        <FlexRow>
          {status === behandlingStatusCode.AVSLUTTET && (
            <FlexColumn>
              {erInnvilget && <CheckmarkCircleFillIcon className={styles.innvilgetImage} />}
              {!erInnvilget && <XMarkOctagonFillIcon className={styles.avslattImage} />}
            </FlexColumn>
          )}
          <FlexColumn>
            <Heading size="small">
              <FormattedMessage id={finnTekstkodeFraBehandlingstatus(status)} />
            </Heading>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer eightPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.space}>
            <Label size="small">
              {vedtakstatusTekst}
              {tilbakekrevingtekst && `. ${intl.formatMessage({ id: tilbakekrevingtekst })}`}
            </Label>
          </FlexColumn>
          <FlexColumn className={styles.space}>
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
          </FlexColumn>
          <FlexColumn>
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
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VedtakHelpTextPanel aksjonspunkter={aksjonspunkt} isReadOnly={isReadOnly} />
      <VerticalSpacer twentyPx />
      {renderPanel(skalBrukeManueltBrev, erInnvilget, erAvslatt, erOpphor)}
      {skalBrukeManueltBrev && (
        <ManueltVedtaksbrevPanel
          isReadOnly={isReadOnly}
          språkKode={sprakkode}
          forhåndsvisOverstyrtBrev={previewOverstyrtBrev}
          skalViseLink={skalViseLink}
        />
      )}
      {kanSendesTilGodkjenning(status) && (
        <>
          <VerticalSpacer twentyPx />
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                {!isReadOnly && (
                  <Button
                    variant="primary"
                    size="small"
                    disabled={behandlingPaaVent || isSubmitting}
                    loading={isSubmitting}
                  >
                    <FormattedMessage id={finnKnappetekstkode(aksjonspunkt, skalBrukeManueltBrev)} />
                  </Button>
                )}
              </FlexColumn>
              {skalBrukeManueltBrev && (
                <FlexColumn>
                  <Button size="small" variant="secondary" onClick={() => setSkalViseModal(true)} type="button">
                    <FormattedMessage id="VedtakFellesPanel.ForkastManueltBrev" />
                  </Button>
                </FlexColumn>
              )}
            </FlexRow>
          </FlexContainer>
        </>
      )}
    </>
  );
};
