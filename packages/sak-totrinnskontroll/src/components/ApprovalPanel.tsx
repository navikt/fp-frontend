import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Location } from 'history';

import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { skjermlenkeCodes } from '@fpsak-frontend/konstanter';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import {
  Behandling, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollAksjonspunkt, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import ToTrinnsForm from './ToTrinnsForm';
import ToTrinnsFormReadOnly from './ToTrinnsFormReadOnly';
import TotrinnContext from '../TotrinnContextTsType';

import styles from './approvalPanel.less';

const sorterteSkjermlenkeCodesForTilbakekreving = [
  skjermlenkeCodes.FAKTA_OM_FEILUTBETALING,
  skjermlenkeCodes.FORELDELSE,
  skjermlenkeCodes.TILBAKEKREVING,
  skjermlenkeCodes.VEDTAK,
];

const sorterTilbakekrevingContext = (approvals: TotrinnContext[]) => sorterteSkjermlenkeCodesForTilbakekreving
  .map((s) => approvals.find((el) => el.contextCode === s.kode))
  .filter((s) => s);

const håndterSpeiselleTegn = (aksjonspunkter: TotrinnskontrollAksjonspunkt[]): TotrinnskontrollAksjonspunkt[] => aksjonspunkter.map((aksjonspunkt) => ({
  ...aksjonspunkt,
  besluttersBegrunnelse: decodeHtmlEntity(aksjonspunkt.besluttersBegrunnelse),
}));

export const mapPropsToContext = (
  toTrinnsBehandling: boolean,
  alleKodeverk: {[key: string]: KodeverkMedNavn[]},
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location,
  location: Location,
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[],
  erTilbakekreving?: boolean,
): TotrinnContext[] => {
  if (toTrinnsBehandling) {
    const skjemalenkeTyper = alleKodeverk[kodeverkTyper.SKJERMLENKE_TYPE];
    const totrinnsContext = totrinnskontrollSkjermlenkeContext.map((context) => {
      const skjermlenkeTypeKodeverk = skjemalenkeTyper.find((skjemalenkeType) => skjemalenkeType.kode === context.skjermlenkeType);
      return {
        contextCode: context.skjermlenkeType,
        skjermlenke: createLocationForSkjermlenke(location, context.skjermlenkeType),
        skjermlenkeNavn: skjermlenkeTypeKodeverk.navn,
        aksjonspunkter: håndterSpeiselleTegn(context.totrinnskontrollAksjonspunkter),
      };
    });
    if (erTilbakekreving && totrinnsContext) {
      return sorterTilbakekrevingContext(totrinnsContext);
    }
    return totrinnsContext || [];
  }
  return [];
};

interface OwnProps {
  behandling: Behandling;
  totrinnskontrollSkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[];
  location: Location;
  readOnly: boolean;
  onSubmit: (...args: any[]) => any;
  forhandsvisVedtaksbrev: () => void;
  isForeldrepengerFagsak: boolean;
  behandlingKlageVurdering?: TotrinnsKlageVurdering;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  behandlingsresultat?: Behandling['behandlingsresultat'];
  erBehandlingEtterKlage: boolean;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location;
  erTilbakekreving?: boolean;
}

/**
 * ApprovalPanel
 *
 * Containerklass ansvarlig for att rita opp vilkår og aksjonspunkter med toTrinnskontroll
 */
const ApprovalPanel: FunctionComponent<OwnProps> = ({
  behandling,
  location,
  readOnly,
  onSubmit,
  forhandsvisVedtaksbrev,
  behandlingKlageVurdering,
  isForeldrepengerFagsak,
  alleKodeverk,
  erBehandlingEtterKlage,
  erTilbakekreving,
  totrinnskontrollSkjermlenkeContext,
  createLocationForSkjermlenke,
}) => {
  const approvals = totrinnskontrollSkjermlenkeContext
    ? mapPropsToContext(behandling.toTrinnsBehandling, alleKodeverk, createLocationForSkjermlenke, location,
      totrinnskontrollSkjermlenkeContext, erTilbakekreving)
    : [];

  return (
    <>
      {approvals && approvals.length > 0
        ? (
          <div>
            {behandling.status.kode === BehandlingStatus.FATTER_VEDTAK
              ? (
                <div>
                  {!readOnly && (
                    <>
                      <AksjonspunktHelpTextHTML>
                        {[<FormattedMessage key={1} id="HelpText.ToTrinnsKontroll" />]}
                      </AksjonspunktHelpTextHTML>
                      <VerticalSpacer sixteenPx />
                    </>
                  )}
                  <ToTrinnsForm
                    behandlingId={behandling.id}
                    behandlingVersjon={behandling.versjon}
                    behandlingsresultat={behandling.behandlingsresultat}
                    totrinnskontrollContext={approvals}
                    initialValues={{ approvals }}
                    onSubmit={onSubmit}
                    location={location}
                    forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
                    readOnly={readOnly}
                    isForeldrepengerFagsak={isForeldrepengerFagsak}
                    behandlingKlageVurdering={behandlingKlageVurdering}
                    behandlingStatus={behandling.status}
                    alleKodeverk={alleKodeverk}
                    erBehandlingEtterKlage={erBehandlingEtterKlage}
                    erTilbakekreving={erTilbakekreving}
                  />
                </div>
              )
              : (
                <div>
                  <div className={styles.resultatFraGodkjenningTextContainer}>
                    <FormattedMessage
                      id="ToTrinnsForm.LøstAksjonspunkt"
                      values={{
                        b: (chunks: any) => <b>{chunks}</b>,
                      }}
                    />
                  </div>
                  <div>
                    <ToTrinnsFormReadOnly
                      approvalList={approvals}
                      isForeldrepengerFagsak={isForeldrepengerFagsak}
                      klagebehandlingVurdering={behandlingKlageVurdering}
                      behandlingStatus={behandling.status}
                      arbeidsforholdHandlingTyper={alleKodeverk[kodeverkTyper.ARBEIDSFORHOLD_HANDLING_TYPE]}
                      erTilbakekreving={erTilbakekreving}
                    />
                  </div>
                </div>
              )}
          </div>
        )
        : null}
    </>
  );
};
export default ApprovalPanel;
