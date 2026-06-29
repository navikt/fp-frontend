import { type ReactElement, useState } from 'react';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, AksjonspunktKodeTilbakekreving } from '@navikt/fp-kodeverk';
import { type TotrinnskontrollFormValues, TotrinnskontrollSakIndex } from '@navikt/fp-sak-totrinnskontroll';
import type {
  AksjonspunktTilBekreftelse,
  BekreftedeAksjonspunkterDto,
  TilbakekrevingAksjonspunktTilBekreftelse,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty } from '@navikt/fp-utils';

import { createLocationForSkjermlenke } from '../../app/paths';
import { getFagsakBehandlingApi, initFetchOptions } from '../../data/fagsakApi';
import { useKodeverk } from '../../data/useKodeverk';
import { FagsakData } from '../../fagsak/FagsakData';
import { SupportHeaderAndContent } from '../SupportHeader';
import { BeslutterModalIndex } from './BeslutterModalIndex';

interface Props {
  fagsakData: FagsakData;
  valgtBehandlingUuid: string;
  beslutterFormData?: TotrinnskontrollFormValues;
  setBeslutterFormData: (data?: TotrinnskontrollFormValues) => void;
  toggleVisUtvidetBehandlingDetaljerKnapp: ReactElement;
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
  toggleVisUtvidetBehandlingDetaljerKnapp,
}: Props) => {
  const intl = useIntl();
  const [visBeslutterModal, setVisBeslutterModal] = useState(false);
  const [erAlleAksjonspunktGodkjent, setErAlleAksjonspunktGodkjent] = useState(false);

  const valgtBehandling = notEmpty(fagsakData.getBehandling(valgtBehandlingUuid));

  const api = getFagsakBehandlingApi(valgtBehandling);

  const location = useLocation();
  const navigate = useNavigate();

  const initFetchQuery = useQuery(initFetchOptions());
  const { brukernavn, kanVeilede } = notEmpty(initFetchQuery.data).innloggetBruker;

  const alleKodeverk = useKodeverk(valgtBehandling.type);

  const { mutate: godkjennTotrinnsaksjonspunkter } = useMutation({
    mutationFn: (valuesToStore: BekreftedeAksjonspunkterDto) => api.lagreTotrinnsaksjonspunkt(valuesToStore),
  });

  const { mutate: forhåndsvisVedtaksbrev } = useMutation({
    mutationFn: () =>
      api.forhåndsvisMelding({
        behandlingUuid: valgtBehandling.uuid,
      }),
    onSuccess: response => {
      forhandsvisDokument(response);
    },
  });

  const onSubmit = (
    aksjonspunktData:
      | AksjonspunktTilBekreftelse<AksjonspunktKode.FATTER_VEDTAK>
      | TilbakekrevingAksjonspunktTilBekreftelse<AksjonspunktKodeTilbakekreving.FATTER_VEDTAK>,
  ) => {
    const params: BekreftedeAksjonspunkterDto = {
      behandlingUuid: valgtBehandling.uuid,
      behandlingVersjon: valgtBehandling.versjon,
      bekreftedeAksjonspunktDtoer:
        aksjonspunktData.kode === AksjonspunktKodeTilbakekreving.FATTER_VEDTAK
          ? [aksjonspunktData]
          : [aksjonspunktData],
    };
    const alleAksjonspunktGodkjent = (aksjonspunktData.aksjonspunktGodkjenningDtos ?? []).every(ap => ap.godkjent);
    setErAlleAksjonspunktGodkjent(alleAksjonspunktGodkjent);
    setVisBeslutterModal(true);
    godkjennTotrinnsaksjonspunkter(params);
  };

  const erStatusFatterVedtak = valgtBehandling.status === 'FVED';

  return (
    <>
      <SupportHeaderAndContent
        tekst={intl.formatMessage({
          id: erStatusFatterVedtak ? 'TotrinnskontrollIndex.Godkjenning' : 'TotrinnskontrollIndex.FraBeslutter',
        })}
        toggleVisUtvidetBehandlingDetaljerKnapp={toggleVisUtvidetBehandlingDetaljerKnapp}
      >
        <TotrinnskontrollSakIndex
          behandling={valgtBehandling}
          location={location}
          readOnly={brukernavn === valgtBehandling.ansvarligSaksbehandler || kanVeilede}
          onSubmit={onSubmit}
          forhandsvisVedtaksbrev={forhåndsvisVedtaksbrev}
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
