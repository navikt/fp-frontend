import React, {
  FunctionComponent, useEffect, useState, useMemo, useCallback,
} from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  LoadingPanel,
  FlexContainer,
  FlexColumn,
  FlexRow,
} from '@navikt/ft-ui-komponenter';
import {
  Aksjonspunkt,
  FeilutbetalingFakta,
  AlleKodeverkTilbakekreving,
  Behandling,
  AlleKodeverk,
} from '@navikt/ft-types';
import { AksessRettigheter } from '@fpsak-frontend/types';
import { FeilutbetalingAksjonspunktCode } from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import FeilutbetalingFaktaInitPanel from './paneler/FeilutbetalingFaktaInitPanel';
import VergeFaktaInitPanel from './paneler/VergeFaktaInitPanel';
import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';
import FaktaMeny, { MenyData } from './FaktaMeny';

import { erReadOnlyCurried } from '../felles/util/readOnlyPanelUtils';

import styles from './faktaIndex.less';

const DEFAULT_PANEL_VALGT = 'default';
const EMPTY_FORM_DATA = {};

const hentAksjonspunkterFor = (
  aksjonspunktKode: string,
  aksjonspunkter?: Aksjonspunkt[],
): Aksjonspunkt[] => (aksjonspunkter ? aksjonspunkter.filter((ap) => aksjonspunktKode === ap.definisjon) : []);

const leggTilFaktaPanel = (
  faktaPanelKode: string,
  label: string,
  aksjonspunkter: Aksjonspunkt[],
  valgtFaktaSteg?: string,
): MenyData => {
  const harApneAksjonspunkter = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status) && ap.kanLoses);
  const erAktiv = valgtFaktaSteg === faktaPanelKode || (harApneAksjonspunkter && valgtFaktaSteg === DEFAULT_PANEL_VALGT);
  return {
    id: faktaPanelKode,
    label,
    erAktiv,
    harApneAksjonspunkter,
  };
};

const utledFaktaPaneler = (
  intl: IntlShape,
  initData?: EndepunktInitData,
  valgtFaktaSteg?: string,
): MenyData[] => {
  const faktaPanelData = [] as MenyData[];
  if (initData?.feilutbetalingFakta) {
    faktaPanelData.push(leggTilFaktaPanel(
      FaktaPanelCode.FEILUTBETALING,
      intl.formatMessage({ id: 'TilbakekrevingFakta.FaktaFeilutbetaling' }),
      hentAksjonspunkterFor(FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING, initData?.aksjonspunkter),
      valgtFaktaSteg));
  }
  if (initData?.aksjonspunkter?.some((ap) => ap.definisjon === AksjonspunktCode.AVKLAR_VERGE)) {
    faktaPanelData.push(leggTilFaktaPanel(
      FaktaPanelCode.VERGE,
      intl.formatMessage({ id: 'RegistrereVergeInfoPanel.Info' }),
      hentAksjonspunkterFor(AksjonspunktCode.AVKLAR_VERGE, initData?.aksjonspunkter),
      valgtFaktaSteg));
  }
  return faktaPanelData;
};

const erFaktaPanelAktivt = (
  faktaPanelerData: MenyData[],
  faktaPanelKode: string,
): boolean => (faktaPanelerData.some((d) => d.id === faktaPanelKode && d.erAktiv));

const ENDEPUNKTER_INIT_DATA = [TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER, TilbakekrevingBehandlingApiKeys.FEILUTBETALING_FAKTA];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  feilutbetalingFakta: FeilutbetalingFakta;
}

interface OwnProps {
  behandling: Behandling;
  fagsakYtelseTypeKode: string;
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
  fpsakKodeverk: AlleKodeverk;
  valgtFaktaSteg?: string;
  oppdaterFaktaPanelIUrl: (faktanavn: string) => void;
  bekreftAksjonspunkterMedSideeffekter: (
    lagringSideEffectsCallback?: (aksjonspunktModeller: any) => () => void,
  ) => (aksjonspunkter: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<any>;
  rettigheter: AksessRettigheter;
  hasFetchError: boolean;
}

const FaktaIndex: FunctionComponent<OwnProps> = ({
  behandling,
  fagsakYtelseTypeKode,
  tilbakekrevingKodeverk,
  fpsakKodeverk,
  valgtFaktaSteg,
  oppdaterFaktaPanelIUrl,
  bekreftAksjonspunkterMedSideeffekter,
  rettigheter,
  hasFetchError,
}) => {
  const intl = useIntl();

  const formaterteEndepunkter = ENDEPUNKTER_INIT_DATA.map((e) => ({ key: e }));
  const { data: initData, state } = restApiTilbakekrevingHooks
    .useMultipleRestApi<EndepunktInitData, any>(formaterteEndepunkter, {
      updateTriggers: [behandling.versjon],
      isCachingOn: true,
    });

  const [formData, setFormData] = useState(EMPTY_FORM_DATA);
  useEffect(() => {
    if (formData) {
      setFormData(EMPTY_FORM_DATA);
    }
  }, [behandling.versjon]);

  const faktaPanelerData = useMemo(() => utledFaktaPaneler(intl, initData, valgtFaktaSteg), [initData, valgtFaktaSteg]);

  const oppdaterFaktaPanel = useCallback((index: number) => {
    oppdaterFaktaPanelIUrl(faktaPanelerData[index].id);
  }, [faktaPanelerData, oppdaterFaktaPanelIUrl]);

  const erReadOnlyFn = useCallback(erReadOnlyCurried(behandling, rettigheter, hasFetchError),
    [behandling, rettigheter, hasFetchError]);

  const bekreftAksjonspunkter = useCallback(bekreftAksjonspunkterMedSideeffekter(), [behandling.versjon]);

  return (
    <div className={styles.container}>
      <FlexContainer fullHeight>
        <FlexRow>
          <FlexColumn className={styles.sideMenu}>
            <FaktaMeny
              menyData={faktaPanelerData}
              oppdaterFaktaPanelIUrl={oppdaterFaktaPanel}
            />
          </FlexColumn>
          <FlexColumn className={styles.content}>
            {state !== RestApiState.SUCCESS && (
              <LoadingPanel />
            )}
            {state === RestApiState.SUCCESS && (
              <>
                {erFaktaPanelAktivt(faktaPanelerData, FaktaPanelCode.FEILUTBETALING) && (
                  <FeilutbetalingFaktaInitPanel
                    fagsakYtelseTypeKode={fagsakYtelseTypeKode}
                    behandling={behandling}
                    fpsakKodeverk={fpsakKodeverk}
                    alleKodeverk={tilbakekrevingKodeverk}
                    feilutbetalingFakta={initData.feilutbetalingFakta}
                    aksjonspunkter={initData.aksjonspunkter}
                    erReadOnlyFn={erReadOnlyFn}
                    submitCallback={bekreftAksjonspunkter}
                    formData={formData}
                    setFormData={setFormData}
                  />
                )}
                {erFaktaPanelAktivt(faktaPanelerData, FaktaPanelCode.VERGE) && (
                  <VergeFaktaInitPanel
                    behandling={behandling}
                    aksjonspunkter={initData.aksjonspunkter}
                    fpsakKodeverk={fpsakKodeverk}
                    erReadOnlyFn={erReadOnlyFn}
                    submitCallback={bekreftAksjonspunkter}
                    formData={formData}
                    setFormData={setFormData}
                  />
                )}
              </>
            )}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default FaktaIndex;
