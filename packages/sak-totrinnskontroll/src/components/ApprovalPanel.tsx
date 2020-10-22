import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Location } from 'history';

import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { skjermlenkeCodes } from '@fpsak-frontend/konstanter';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import {
  Behandling, Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollAksjonspunkt, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';

import ToTrinnsForm from './ToTrinnsForm';
import ToTrinnsFormReadOnly from './ToTrinnsFormReadOnly';
import TotrinnContext from '../TotrinnContext';

import styles from './approvalPanel.less';

const sorterteSkjermlenkeCodesForTilbakekreving = [
  skjermlenkeCodes.FAKTA_OM_FEILUTBETALING,
  skjermlenkeCodes.FORELDELSE,
  skjermlenkeCodes.TILBAKEKREVING,
  skjermlenkeCodes.VEDTAK,
];

const sorterTilbakekrevingContext = (approvals: any) => sorterteSkjermlenkeCodesForTilbakekreving
  .map((s) => approvals.find((el: any) => el.contextCode === s.kode))
  .filter((s) => s);

const håndterSpeiselleTegn = (aksjonspunkter: TotrinnskontrollAksjonspunkt[]): TotrinnskontrollAksjonspunkt[] => aksjonspunkter.map((aksjonspunkt) => ({
  ...aksjonspunkt,
  besluttersBegrunnelse: decodeHtmlEntity(aksjonspunkt.besluttersBegrunnelse),
}));

export const mapPropsToContext = (
  toTrinnsBehandling: boolean,
  behandlingStatus: Kodeverk,
  skjemalenkeTyper: KodeverkMedNavn[],
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location,
  location: Location,
  erTilbakekreving?: boolean,
  totrinnskontrollSkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[],
  totrinnskontrollReadOnlySkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[],
): TotrinnContext[] => {
  if (toTrinnsBehandling) {
    let skjermlenkeContext;
    if (behandlingStatus.kode === BehandlingStatus.FATTER_VEDTAK && totrinnskontrollSkjermlenkeContext) {
      skjermlenkeContext = totrinnskontrollSkjermlenkeContext;
    }
    if (behandlingStatus.kode !== BehandlingStatus.FATTER_VEDTAK && totrinnskontrollReadOnlySkjermlenkeContext) {
      skjermlenkeContext = totrinnskontrollReadOnlySkjermlenkeContext;
    }
    if (skjermlenkeContext) {
      const totrinnsContext = skjermlenkeContext.map((context) => {
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
  }
  return [];
};

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  totrinnskontrollSkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadOnlySkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[];
  behandlingStatus: Kodeverk;
  toTrinnsBehandling: boolean;
  location: Location;
  skjemalenkeTyper: KodeverkMedNavn[];
  readOnly: boolean;
  onSubmit: (...args: any[]) => any;
  forhandsvisVedtaksbrev: () => void;
  isForeldrepengerFagsak: boolean;
  behandlingKlageVurdering?: TotrinnsKlageVurdering;
  alleKodeverk: {};
  behandlingsresultat?: Behandling['behandlingsresultat'];
  erBehandlingEtterKlage: boolean;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location;
  erTilbakekreving?: boolean;
}

interface OwnState {
  approvals: TotrinnContext[];
  allAksjonspunktApproved?: boolean;
}

/**
 * ApprovalPanel
 *
 * Containerklass ansvarlig for att rita opp vilkår og aksjonspunkter med toTrinnskontroll
 */
export class ApprovalPanel extends Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
      approvals: [],
    };

    const {
      totrinnskontrollSkjermlenkeContext,
      totrinnskontrollReadOnlySkjermlenkeContext,
      toTrinnsBehandling,
      skjemalenkeTyper,
      createLocationForSkjermlenke,
      behandlingStatus,
      erTilbakekreving,
      location,
    } = props;
    if (totrinnskontrollSkjermlenkeContext || totrinnskontrollReadOnlySkjermlenkeContext) {
      this.state = {
        ...this.state,
        approvals: mapPropsToContext(toTrinnsBehandling, behandlingStatus, skjemalenkeTyper, createLocationForSkjermlenke, location, erTilbakekreving,
          totrinnskontrollSkjermlenkeContext, totrinnskontrollReadOnlySkjermlenkeContext),
      };
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: OwnProps) {
    if (nextProps.totrinnskontrollSkjermlenkeContext || nextProps.totrinnskontrollReadOnlySkjermlenkeContext) {
      this.setState({
        approvals: mapPropsToContext(nextProps.toTrinnsBehandling, nextProps.behandlingStatus, nextProps.skjemalenkeTyper, nextProps.createLocationForSkjermlenke,
          nextProps.location, nextProps.totrinnskontrollSkjermlenkeContext, nextProps.totrinnskontrollReadOnlySkjermlenkeContext),
      });
    }
  }

  componentWillUnmount() {
    this.setState({ approvals: [] });
  }

  setAksjonspunktApproved(toTrinnsAksjonspunkter: TotrinnskontrollAksjonspunkt[]) {
    this.setState({
      allAksjonspunktApproved: toTrinnsAksjonspunkter.every((ap) => ap.totrinnskontrollGodkjent && ap.totrinnskontrollGodkjent === true),
    });
  }

  render() {
    const {
      behandlingId,
      behandlingVersjon,
      behandlingsresultat,
      behandlingStatus,
      location,
      readOnly,
      onSubmit,
      forhandsvisVedtaksbrev,
      behandlingKlageVurdering,
      isForeldrepengerFagsak,
      alleKodeverk,
      erBehandlingEtterKlage,
      erTilbakekreving,
    } = this.props;
    const { approvals } = this.state;
    return (
      <>
        {approvals && approvals.length > 0
          ? (
            <div>
              {behandlingStatus.kode === BehandlingStatus.FATTER_VEDTAK
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
                      behandlingId={behandlingId}
                      behandlingVersjon={behandlingVersjon}
                      behandlingsresultat={behandlingsresultat}
                      totrinnskontrollContext={approvals}
                      initialValues={{ approvals }}
                      onSubmit={onSubmit}
                      location={location}
                      forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
                      readOnly={readOnly}
                      isForeldrepengerFagsak={isForeldrepengerFagsak}
                      behandlingKlageVurdering={behandlingKlageVurdering}
                      behandlingStatus={behandlingStatus}
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
                        behandlingStatus={behandlingStatus}
                        alleKodeverk={alleKodeverk}
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
  }
}

export default ApprovalPanel;
