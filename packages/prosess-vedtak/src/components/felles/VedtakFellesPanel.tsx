import React, { FunctionComponent, useMemo, useState, useCallback, ReactNode, MouseEvent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, Button, Link, BodyShort, Heading } from '@navikt/ds-react';
import { ArrowForwardIcon, CheckmarkCircleFillIcon, PencilIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer, OkAvbrytModal } from '@navikt/ft-ui-komponenter';

import {
  avslagsarsakCodes,
  behandlingStatus as behandlingStatusCode,
  konsekvensForYtelsen,
  isAvslag,
  isInnvilget,
  isOpphor,
  AksjonspunktCode,
} from '@navikt/fp-kodeverk';
import { AsyncPollingStatus } from '@navikt/fp-rest-api';
import { Behandling, Aksjonspunkt, Behandlingsresultat } from '@navikt/fp-types';

import { useFormContext } from 'react-hook-form';

import ManueltVedtaksbrevPanel from './ManueltVedtaksbrevPanel';
import VedtakHelpTextPanel from './VedtakHelpTextPanel';

import styles from './vedtakFellesPanel.module.css';

export const finnTekstkodeFraBehandlingstatus = (behandlingStatus: string): string =>
  behandlingStatus === behandlingStatusCode.AVSLUTTET || behandlingStatus === behandlingStatusCode.IVERKSETTER_VEDTAK
    ? 'VedtakForm.vedtak'
    : 'VedtakForm.ForslagTilVedtak';

const kanSendesTilGodkjenning = (behandlingStatusKode: string): boolean =>
  behandlingStatusKode === behandlingStatusCode.BEHANDLING_UTREDES;

const finnKnappetekstkode = (aksjonspunkter: Aksjonspunkt[], skalBrukeManueltBrev: boolean): string =>
  (aksjonspunkter && aksjonspunkter.some(ap => ap.definisjon === AksjonspunktCode.FORESLA_VEDTAK)) ||
  skalBrukeManueltBrev
    ? 'VedtakForm.TilGodkjenning'
    : 'VedtakForm.FattVedtak';

const finnSkalViseLink = (behandlingsresultat: Behandlingsresultat): boolean =>
  behandlingsresultat.avslagsarsak
    ? behandlingsresultat.avslagsarsak !== avslagsarsakCodes.INGEN_BEREGNINGSREGLER
    : true;

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

interface OwnProps {
  behandling: Behandling;
  readOnly: boolean;
  erBehandlingEtterKlage: boolean;
  aksjonspunkter: Aksjonspunkt[];
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

const VedtakFellesPanel: FunctionComponent<OwnProps> = ({
  behandling,
  aksjonspunkter,
  readOnly,
  renderPanel,
  previewAutomatiskBrev,
  previewOverstyrtBrev,
  tilbakekrevingtekst,
  erBehandlingEtterKlage,
  vedtakstatusTekst,
}) => {
  const intl = useIntl();

  const {
    setValue,
    formState: { isSubmitting },
  } = useFormContext();

  const { behandlingsresultat, behandlingPaaVent, sprakkode, status, behandlingHenlagt, uuid, taskStatus } = behandling;

  if (!behandlingsresultat) {
    throw new Error(`behandlingsresultat finnes ikke på behandling ${uuid}`);
  }

  const [skalBrukeManueltBrev, toggleSkalBrukeManueltBrev] = useState(
    !!behandlingsresultat.vedtaksbrev && behandlingsresultat.vedtaksbrev === 'FRITEKST',
  );
  const [skalViseModal, toggleVisModal] = useState(false);
  const onToggleOverstyring = useCallback((e: React.MouseEvent) => {
    toggleSkalBrukeManueltBrev(true);
    e.preventDefault();
  }, []);
  const avsluttRedigering = useCallback(() => {
    toggleSkalBrukeManueltBrev(false);
    toggleVisModal(false);
    setValue('overskrift', undefined);
    setValue('brødtekst', undefined);
  }, []);

  const erInnvilget = isInnvilget(behandlingsresultat.type);
  const erAvslatt = isAvslag(behandlingsresultat.type);
  const erOpphor = isOpphor(behandlingsresultat.type);

  const skalViseLink = finnSkalViseLink(behandlingsresultat);
  const kanBehandles =
    !behandlingHenlagt &&
    taskStatus?.status !== AsyncPollingStatus.HALTED &&
    taskStatus?.status !== AsyncPollingStatus.DELAYED;

  const harIkkeKonsekvensForYtelse = useMemo(
    () =>
      harIkkeKonsekvenserForYtelsen(
        [konsekvensForYtelsen.ENDRING_I_FORDELING_AV_YTELSEN, konsekvensForYtelsen.INGEN_ENDRING],
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
        cancel={() => toggleVisModal(false)}
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
            {!readOnly && !skalBrukeManueltBrev && (
              <Link href="#" onClick={onToggleOverstyring}>
                <PencilIcon className={styles.blyant} />
                <span>
                  <FormattedMessage id="VedtakFellesPanel.RedigerVedtaksbrev" />
                </span>
              </Link>
            )}
            {(readOnly || skalBrukeManueltBrev) && (
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
      <VedtakHelpTextPanel aksjonspunkter={aksjonspunkter} isReadOnly={readOnly} />
      <VerticalSpacer twentyPx />
      {renderPanel(skalBrukeManueltBrev, erInnvilget, erAvslatt, erOpphor)}
      {skalBrukeManueltBrev && (
        <ManueltVedtaksbrevPanel
          isReadOnly={readOnly}
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
                {!readOnly && (
                  <Button
                    variant="primary"
                    size="small"
                    disabled={behandlingPaaVent || isSubmitting}
                    loading={isSubmitting}
                  >
                    <FormattedMessage id={finnKnappetekstkode(aksjonspunkter, skalBrukeManueltBrev)} />
                  </Button>
                )}
              </FlexColumn>
              {skalBrukeManueltBrev && (
                <FlexColumn>
                  <Button size="small" variant="secondary" onClick={() => toggleVisModal(true)} type="button">
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

export default VedtakFellesPanel;
