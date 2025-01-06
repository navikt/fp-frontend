import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { BehandlingStatus } from '@navikt/fp-kodeverk';
import { TotrinnskontrollSakIndex } from '@navikt/fp-sak-totrinnskontroll';
import { FatterVedtakAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { createLocationForSkjermlenke } from '../../app/paths';
import { BekreftedeTotrinnsaksjonspunkter, initFetchOptions, useFagsakBehandlingApi } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';
import { useKodeverk } from '../../data/useKodeverk';
import { useVisForhandsvisningAvMelding } from '../../data/useVisForhandsvisningAvMelding';
import { FagsakData } from '../../fagsak/FagsakData';
import { SupportHeaderAndContent } from '../SupportHeader';
import { BeslutterModalIndex } from './BeslutterModalIndex';

type Values = {
  fatterVedtakAksjonspunktDto: {
    '@type': string;
  } & FatterVedtakAp;
  erAlleAksjonspunktGodkjent: boolean;
};

interface Props {
  fagsakData: FagsakData;
  valgtBehandlingUuid: string;
  beslutterFormData?: any;
  setBeslutterFormData: (data?: any) => void;
}

/**
 * TotrinnskontrollIndex
 *
 * Ansvarlig for att rita opp vilkår og aksjonspunkter med toTrinnskontroll
 */
export const TotrinnskontrollIndex = ({
  fagsakData,
  valgtBehandlingUuid,
  beslutterFormData,
  setBeslutterFormData,
}: Props) => {
  const intl = useIntl();
  const [visBeslutterModal, setVisBeslutterModal] = useState(false);
  const [erAlleAksjonspunktGodkjent, setAlleAksjonspunktTilGodkjent] = useState(false);

  const fagsak = fagsakData.getFagsak();
  const valgtBehandling = notEmpty(fagsakData.getBehandling(valgtBehandlingUuid));

  const api = useFagsakBehandlingApi(valgtBehandling);

  const location = useLocation();
  const navigate = useNavigate();

  const initFetchQuery = useQuery(initFetchOptions());
  const { brukernavn, kanVeilede } = notEmpty(initFetchQuery.data).innloggetBruker;

  const alleKodeverk = useKodeverk(valgtBehandling.type);

  const { mutate: godkjennTotrinnsaksjonspunkter } = useMutation({
    mutationFn: (valuesToStore: BekreftedeTotrinnsaksjonspunkter) => api.lagreTotrinnsaksjonspunkt(valuesToStore),
  });

  const forhandsvisMelding = useVisForhandsvisningAvMelding(valgtBehandling);

  const forhandsvisVedtaksbrev = () => {
    forhandsvisMelding(false, {
      behandlingUuid: valgtBehandling.uuid,
      fagsakYtelseType: fagsak.fagsakYtelseType,
      gjelderVedtak: true,
    });
  };

  if (!valgtBehandling.totrinnskontrollÅrsaker) {
    return null;
  }

  const onSubmit = (totrinnskontrollData: Values) => {
    const params = {
      behandlingUuid: valgtBehandling.uuid,
      behandlingVersjon: valgtBehandling.versjon,
      bekreftedeAksjonspunktDtoer: [totrinnskontrollData.fatterVedtakAksjonspunktDto],
    };
    setAlleAksjonspunktTilGodkjent(totrinnskontrollData.erAlleAksjonspunktGodkjent);
    setVisBeslutterModal(true);
    godkjennTotrinnsaksjonspunkter(params);
  };

  const erStatusFatterVedtak = valgtBehandling.status === BehandlingStatus.FATTER_VEDTAK;

  return (
    <>
      <SupportHeaderAndContent
        tekst={intl.formatMessage({
          id: erStatusFatterVedtak ? 'TotrinnskontrollIndex.Godkjenning' : 'TotrinnskontrollIndex.FraBeslutter',
        })}
      >
        <VerticalSpacer sixteenPx />
        <TotrinnskontrollSakIndex
          behandling={valgtBehandling}
          location={location}
          readOnly={brukernavn === valgtBehandling.ansvarligSaksbehandler || kanVeilede}
          onSubmit={onSubmit}
          forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
          fagsakYtelseType={fagsak.fagsakYtelseType}
          alleKodeverk={alleKodeverk}
          createLocationForSkjermlenke={createLocationForSkjermlenke}
          beslutterFormData={beslutterFormData}
          setBeslutterFormData={setBeslutterFormData}
        />
      </SupportHeaderAndContent>
      {visBeslutterModal && (
        <BeslutterModalIndex
          behandling={valgtBehandling}
          pushLocation={navigate}
          allAksjonspunktApproved={erAlleAksjonspunktGodkjent}
        />
      )}
    </>
  );
};
