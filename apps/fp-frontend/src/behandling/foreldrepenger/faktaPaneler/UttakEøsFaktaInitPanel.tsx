import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { UttakFaktaEøsIndex } from '@navikt/fp-fakta-uttak-eos';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useErFaktaPanelAktiv } from '../../felles/fakta/useFaktaMenyRegistrerer';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART,
  AksjonspunktKode.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART,
];

export const UttakEøsFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling, rettigheter } = useBehandlingDataContext();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const skalPanelVisesIMeny = harLenke(behandling, 'UTTAK_ANNEN_FORELDER_EOS');
  const erAktiv = useErFaktaPanelAktiv(
    FaktaPanelCode.UTTAK_EØS,
    skalPanelVisesIMeny,
    standardPanelProps.harÅpentAksjonspunkt,
  );
  const skalHenteData = useSkalHenteData(FaktaPanelCode.UTTAK_EØS, erAktiv, 'fakta');

  const api = getBehandlingApi(behandling);
  const { data: annenForelderUttakEøs } = useQuery(
    medPrioritet(api.uttakAnnenpartEøsOptions(behandling), skalHenteData),
  );

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.UTTAK_EØS}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Uttak.Eos' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {annenForelderUttakEøs ? (
        <UttakFaktaEøsIndex
          kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled && behandling.harSattEndringsdato}
          annenForelderUttakEøs={annenForelderUttakEøs}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
