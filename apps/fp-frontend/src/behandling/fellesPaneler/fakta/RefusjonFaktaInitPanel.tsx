import { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';

import { FaktaRefusjonIndex, type FaktaRefusjonIndexProps } from '@navikt/ft-fakta-refusjon';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

import '@navikt/ft-fakta-refusjon/dist/style.css';

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const RefusjonFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps();

  const { behandling } = useBehandlingDataContext();

  const api = getBehandlingApi(behandling);

  const skalPanelVisesIMeny = harLenke(behandling, 'REFUSJON');

  const { data: refusjon, isFetching } = useQuery(api.refusjonOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.REFUSJON}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Refusjon' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {isFetching ? (
        <LoadingPanel />
      ) : (
        <Wrapper
          aksjonspunkt={[]}
          refusjonsandeler={refusjon?.refusjonsandeler ?? []}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          readOnly={standardPanelProps.isReadOnly}
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
