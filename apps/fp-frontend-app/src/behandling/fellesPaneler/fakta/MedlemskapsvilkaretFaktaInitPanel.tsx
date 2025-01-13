import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { MedlemskapFaktaIndex } from '@navikt/fp-fakta-medlemskap';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Fagsak } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = [
  AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
  AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
];

interface Props {
  fagsak: Fagsak;
}

export const MedlemskapsvilkaretFaktaInitPanel = ({ ...props }: FaktaPanelInitProps & Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: medlemskap } = useQuery(api.medlemskapOptions(props.behandling));
  const { data: søknad } = useQuery(api.søknadOptions(props.behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.MEDLEMSKAPSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Medlemskap' })}
      skalPanelVisesIMeny={props.behandling.harSøknad}
    >
      {medlemskap && søknad ? (
        <MedlemskapFaktaIndex medlemskap={medlemskap} soknad={søknad} fagsak={props.fagsak} {...standardPanelProps} />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
