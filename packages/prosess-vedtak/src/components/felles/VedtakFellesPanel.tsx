import React, {
  FunctionComponent, useMemo, useState, useCallback, ReactNode, MouseEvent,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Element, Undertittel, Normaltekst } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer, OkAvbrytModal,
} from '@navikt/ft-ui-komponenter';
import {
  formHooks,
} from '@navikt/ft-form-hooks';

import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import konsekvensForYtelsen from '@fpsak-frontend/kodeverk/src/konsekvensForYtelsen';
import { isAvslag, isInnvilget, isOpphor } from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import popOutPilSvg from '@fpsak-frontend/assets/images/pop-out-pil.svg';
import endreSvg from '@fpsak-frontend/assets/images/endre.svg';
import endreDisabletSvg from '@fpsak-frontend/assets/images/endre_disablet.svg';
import { Behandling, Aksjonspunkt, Behandlingsresultat } from '@fpsak-frontend/types';
import behandlingStatusCode from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import avslattImage from '@fpsak-frontend/assets/images/avslaatt_hover.svg';
import innvilgetImage from '@fpsak-frontend/assets/images/innvilget_hover.svg';

import ManueltVedtaksbrevPanel from './ManueltVedtaksbrevPanel';
import VedtakHelpTextPanel from './VedtakHelpTextPanel';

import styles from './vedtakFellesPanel.less';

export const finnTekstkodeFraBehandlingstatus = (
  behandlingStatus: string,
): string => (behandlingStatus === behandlingStatusCode.AVSLUTTET
  || behandlingStatus === behandlingStatusCode.IVERKSETTER_VEDTAK ? 'VedtakForm.vedtak' : 'VedtakForm.ForslagTilVedtak');

const kanSendesTilGodkjenning = (
  behandlingStatusKode: string,
): boolean => behandlingStatusKode === behandlingStatusCode.BEHANDLING_UTREDES;

const finnKnappetekstkode = (
  aksjonspunkter: Aksjonspunkt[],
): string => {
  if (aksjonspunkter && aksjonspunkter.some((ap) => ap.erAktivt && ap.toTrinnsBehandling)) {
    return 'VedtakForm.TilGodkjenning';
  }

  return 'VedtakForm.FattVedtak';
};

const finnSkalViseLink = (
  behandlingsresultat: Behandlingsresultat,
): boolean => !behandlingsresultat.avslagsarsak
  || (behandlingsresultat.avslagsarsak && behandlingsresultat.avslagsarsak !== avslagsarsakCodes.INGEN_BEREGNINGSREGLER);

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
  return !konsekvenserForYtelsenKoder.some((kode) => kode === konsekvenserForYtelsen[0]);
};

interface OwnProps {
  behandling: Behandling;
  readOnly: boolean;
  erBehandlingEtterKlage: boolean;
  aksjonspunkter: Aksjonspunkt[];
  renderPanel: (skalBrukeManueltBrev: boolean, erInnvilget: boolean, erAvslatt: boolean, erOpphor?: boolean) => ReactNode;
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

  const { setValue, formState: { isSubmitting } } = formHooks.useFormContext();

  const {
    behandlingsresultat, behandlingPaaVent, sprakkode, status,
  } = behandling;

  const [skalBrukeManueltBrev, toggleSkalBrukeManueltBrev] = useState(behandlingsresultat.vedtaksbrev && behandlingsresultat.vedtaksbrev === 'FRITEKST');
  const [skalViseModal, toggleVisModal] = useState(false);
  const onToggleOverstyring = useCallback((e) => {
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

  const harIkkeKonsekvensForYtelse = useMemo(() => harIkkeKonsekvenserForYtelsen([
    konsekvensForYtelsen.ENDRING_I_FORDELING_AV_YTELSEN, konsekvensForYtelsen.INGEN_ENDRING,
  ], behandlingsresultat), [behandlingsresultat]);

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
          {(status === behandlingStatusCode.AVSLUTTET) && (
            <FlexColumn>
              <Image className={styles.status} src={erInnvilget ? innvilgetImage : avslattImage} />
            </FlexColumn>
          )}
          <FlexColumn>
            <Undertittel><FormattedMessage id={finnTekstkodeFraBehandlingstatus(status)} /></Undertittel>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer eightPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.space}>
            <Element>
              {vedtakstatusTekst}
              {tilbakekrevingtekst && (
                `. ${intl.formatMessage({ id: tilbakekrevingtekst })}`
              )}
            </Element>
          </FlexColumn>
          <FlexColumn className={styles.space}>
            {skalViseLink && harIkkeKonsekvensForYtelse && (
              <Lenke href="#" onClick={previewAutomatiskBrev}>
                <span>
                  <FormattedMessage id={erBehandlingEtterKlage ? 'VedtakFellesPanel.UtkastVedtaksbrev' : 'VedtakFellesPanel.AutomatiskVedtaksbrev'} />
                </span>
                <Image src={popOutPilSvg} className={styles.pil} />
              </Lenke>
            )}
          </FlexColumn>
          <FlexColumn>
            {!readOnly && !skalBrukeManueltBrev && (
            <Lenke href="#" onClick={onToggleOverstyring} className={skalBrukeManueltBrev && styles.test}>
              <Image src={endreSvg} className={styles.blyant} />
              <span>
                <FormattedMessage id="VedtakFellesPanel.RedigerVedtaksbrev" />
              </span>
            </Lenke>
            )}
            {(readOnly || skalBrukeManueltBrev) && (
            <>
              <Image src={endreDisabletSvg} className={styles.blyant} />
              <Normaltekst className={styles.disabletLink}>
                <FormattedMessage id="VedtakFellesPanel.RedigerVedtaksbrev" />
              </Normaltekst>
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
                  <Hovedknapp
                    mini
                    htmlType="submit"
                    disabled={behandlingPaaVent || isSubmitting}
                    spinner={isSubmitting}
                  >
                    <FormattedMessage id={finnKnappetekstkode(aksjonspunkter)} />
                  </Hovedknapp>
                )}
              </FlexColumn>
              {skalBrukeManueltBrev && (
                <FlexColumn>
                  <Knapp
                    mini
                    htmlType="button"
                    onClick={() => toggleVisModal(true)}
                  >
                    <FormattedMessage id="VedtakFellesPanel.ForkastManueltBrev" />
                  </Knapp>
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
