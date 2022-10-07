import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import pilNedUrl from '@fpsak-frontend/assets/images/pil_ned.svg';

import { restApiHooks, RestApiPathsKeys } from '../../data/fplosRestApi';
import Saksliste from '../../typer/sakslisteAvdelingTsType';
import Saksbehandler from '../../typer/saksbehandlerAvdelingTsType';
import GjeldendeSakslisterTabell from './GjeldendeSakslisterTabell';
import SaksbehandlereForSakslisteForm from './saksbehandlerForm/SaksbehandlereForSakslisteForm';
import UtvalgskriterierForSakslisteForm from './sakslisteForm/UtvalgskriterierForSakslisteForm';

import styles from './endreSakslisterPanel.less';

const EMPTY_ARRAY: Saksliste[] = [];

interface OwnProps {
  setValgtSakslisteId: (sakslisteId: number) => void;
  valgtSakslisteId?: number;
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: Saksbehandler[];
  resetValgtSakslisteId: () => void;
}

/**
 * EndreSakslisterPanel
 */
const EndreSakslisterPanel: FunctionComponent<OwnProps> = ({
  setValgtSakslisteId,
  valgtSakslisteId,
  valgtAvdelingEnhet,
  avdelingensSaksbehandlere,
  resetValgtSakslisteId,
}) => {
  const intl = useIntl();
  const { data: oppgaverForAvdelingAntall, startRequest: hentOppgaverForAvdelingAntall } = restApiHooks
    .useRestApiRunner(RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL);
  const { data: sakslister = EMPTY_ARRAY, startRequest: hentAvdelingensSl } = restApiHooks
    .useRestApiRunner(RestApiPathsKeys.SAKSLISTER_FOR_AVDELING);
  const hentAvdelingensSakslister = useCallback((params: { avdelingEnhet: string }) => hentAvdelingensSl(params, true), []);
  useEffect(() => {
    hentOppgaverForAvdelingAntall({ avdelingEnhet: valgtAvdelingEnhet });
    hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
  }, [valgtAvdelingEnhet]);

  const { data: nySakslisteObject, startRequest: lagNySaksliste } = restApiHooks
    .useRestApiRunner(RestApiPathsKeys.OPPRETT_NY_SAKSLISTE);
  const lagNySakslisteOgHentAvdelingensSakslisterPåNytt = useCallback((avdelingEnhet: string) => {
    lagNySaksliste({ avdelingEnhet }).then(() => {
      resetValgtSakslisteId();
      hentAvdelingensSakslister({ avdelingEnhet });
    });
  }, []);
  const nyId = nySakslisteObject ? parseInt(nySakslisteObject.sakslisteId, 10) : undefined;
  const valgtSakId = valgtSakslisteId !== undefined ? valgtSakslisteId : nyId;

  const valgtSaksliste = sakslister.find((s) => s.sakslisteId === valgtSakId);

  return (
    <>
      <GjeldendeSakslisterTabell
        sakslister={sakslister}
        setValgtSakslisteId={setValgtSakslisteId}
        valgtSakslisteId={valgtSakId}
        valgtAvdelingEnhet={valgtAvdelingEnhet}
        oppgaverForAvdelingAntall={oppgaverForAvdelingAntall}
        lagNySaksliste={lagNySakslisteOgHentAvdelingensSakslisterPåNytt}
        resetValgtSakslisteId={resetValgtSakslisteId}
        hentAvdelingensSakslister={hentAvdelingensSakslister}
      />
      <VerticalSpacer sixteenPx />
      {valgtSakId && valgtSaksliste && (
        <React.Fragment key={valgtSaksliste.sakslisteId}>
          <UtvalgskriterierForSakslisteForm
            valgtSaksliste={valgtSaksliste}
            valgtAvdelingEnhet={valgtAvdelingEnhet}
            hentAvdelingensSakslister={hentAvdelingensSakslister}
            hentOppgaverForAvdelingAntall={hentOppgaverForAvdelingAntall}
          />
          <FlexContainer>
            <FlexRow>
              <FlexColumn className={styles.leftCol} />
              <FlexColumn>
                <Image
                  alt={intl.formatMessage({ id: 'EndreSakslisterPanel.Saksbehandlere' })}
                  src={pilNedUrl}
                />
              </FlexColumn>
              <FlexColumn className={styles.text}>
                <FormattedMessage id="EndreSakslisterPanel.KnyttetMotSaksbehandlere" />
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
          <SaksbehandlereForSakslisteForm
            valgtSaksliste={valgtSaksliste}
            valgtAvdelingEnhet={valgtAvdelingEnhet}
            avdelingensSaksbehandlere={avdelingensSaksbehandlere}
            hentAvdelingensSakslister={hentAvdelingensSakslister}
          />
        </React.Fragment>
      )}
    </>
  );
};

export default EndreSakslisterPanel;
