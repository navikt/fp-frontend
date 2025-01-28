import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AdopsjonFaktaIndex } from '@navikt/fp-fakta-adopsjon';
import { adopsjonsvilkarene, AksjonspunktKode, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Fagsak } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
  AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

interface Props {
  fagsak: Fagsak;
}

export const AdopsjonsvilkaretFaktaInitPanel = ({ fagsak, ...props }: Props & FaktaPanelInitProps) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(props.behandling));
  const { data: søknad } = useQuery(api.søknadOptions(props.behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.ADOPSJONSVILKARET}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Adopsjon' })}
      skalPanelVisesIMeny={props.behandling.vilkår.some(v => adopsjonsvilkarene.some(av => av === v.vilkarType))}
    >
      {familiehendelse && søknad ? (
        <AdopsjonFaktaIndex
          familiehendelse={familiehendelse}
          soknad={søknad}
          isForeldrepengerFagsak={fagsak.fagsakYtelseType === FagsakYtelseType.FORELDREPENGER}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
