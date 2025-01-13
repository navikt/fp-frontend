import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FodselFaktaIndex } from '@navikt/fp-fakta-fodsel';
import { AksjonspunktKode, fodselsvilkarene } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.TERMINBEKREFTELSE, AksjonspunktKode.SJEKK_MANGLENDE_FODSEL];

export const FodselvilkaretFaktaInitPanel = (props: FaktaPanelInitProps) => {
  const intl = useIntl();
  const {
    behandling: { vilkår },
  } = props;

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(props.behandling));
  const { data: søknad } = useQuery(api.søknadOptions(props.behandling));
  const { data: familiehendelseOrigninalBehandling } = useQuery(
    api.familiehendelseOrigninalBehandlingOptions(props.behandling),
  );
  const { data: søknadOriginalBehandling } = useQuery(api.søknadOriginalBehandlingOptions(props.behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.FODSELSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Fodsel' })}
      skalPanelVisesIMeny={vilkår.some(v => fodselsvilkarene.some(fv => fv === v.vilkarType))}
    >
      {familiehendelse && søknad ? (
        <FodselFaktaIndex
          soknad={søknad}
          familiehendelse={familiehendelse}
          familiehendelseOriginalBehandling={familiehendelseOrigninalBehandling}
          soknadOriginalBehandling={søknadOriginalBehandling}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
