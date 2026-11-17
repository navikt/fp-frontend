import { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';

import { FaktaRefusjonIndex, type FaktaRefusjonIndexProps } from '@navikt/ft-fakta-refusjon';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { åpneDokument, useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useFagsakApi } from '../../../data/fagsakApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const RefusjonFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps();

  const { behandling, fagsak } = useBehandlingDataContext();

  const api = getBehandlingApi(behandling);
  const fagsakApi = useFagsakApi();

  const skalPanelVisesIMeny = harLenke(behandling, 'FORDELINGSGRUNNLAG');

  const { data: fordelingsgrunnlag, isFetching: isFGFetching } = useQuery(api.fordelingsgrunnlagOptions(behandling));
  const { data: dokumenter = [], isFetching: isDokFetching } = useQuery({
    ...fagsakApi.hentDokumenter(fagsak.saksnummer, behandling.uuid, behandling.versjon),
    enabled: skalPanelVisesIMeny,
  });

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.REFUSJON}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Refusjon' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {isFGFetching || isDokFetching ? (
        <LoadingPanel />
      ) : (
        <Wrapper
          aksjonspunkt={[]}
          refusjonsandeler={fordelingsgrunnlag?.refusjonsandeler ?? []}
          dokumenter={dokumenter}
          åpneDokument={(journalpostId, dokumentId) =>
            åpneDokument(
              fagsak.saksnummer,
              journalpostId,
              dokumentId,
              dokumenter.find(d => d.journalpostId === journalpostId && d.dokumentId === dokumentId)?.tittel ??
                intl.formatMessage({ id: 'FaktaInitPanel.Title.Inntektsmelding' }),
            )
          }
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          readOnly={standardPanelProps.isReadOnly}
          // TODO: Overstyring må vente til fp-sak støtter refusjonsaksjonspunktet (TFP-7267).
          erOverstyrer={false}
          submitCallback={lagModifisertCallback(standardPanelProps.submitCallback)}
        />
      )}
    </FaktaDefaultInitPanel>
  );
};

const Wrapper = (props: Omit<ComponentProps<typeof FaktaRefusjonIndex>, 'formData' | 'setFormData'>) => {
  const { mellomlagretFormData, setMellomlagretFormData } =
    useMellomlagretFormData<ComponentProps<typeof FaktaRefusjonIndex>['formData']>();
  return <FaktaRefusjonIndex {...props} formData={mellomlagretFormData} setFormData={setMellomlagretFormData} />;
};

type RefusjonSubmitType = Parameters<FaktaRefusjonIndexProps['submitCallback']>[0];

// 🔴 Rød sone: lagring av aksjonspunkt. fp-sak må først definere aksjonspunktkoden for
// refusjon i @navikt/fp-kodeverk og en AP-type i @navikt/fp-types-avklar-aksjonspunkter.
// Inntil da videresendes pakkens submit-payload direkte, og panelet vises i praksis read-only
// (ingen åpent refusjonsaksjonspunkt). TODO(TFP-7267): fjern castet og map kode → fp-kode.
const lagModifisertCallback =
  (submitCallback: (aksjonspunkter: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>) =>
  (aksjonspunktData: RefusjonSubmitType): Promise<void> =>
    submitCallback(aksjonspunktData as unknown as FaktaAksjonspunkt);
