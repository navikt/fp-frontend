import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OpptjeningFaktaIndex } from '@navikt/fp-fakta-opptjening';
import { AksjonspunktKode, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const OpptjeningsvilkaretFaktaInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & FaktaPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: opptjening, isFetching } = useQuery(api.opptjeningOptions(props.behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OPPTJENINGSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Opptjening' })}
      skalPanelVisesIMeny={
        props.behandling.vilkår.some(v => v.vilkarType === VilkarType.OPPTJENINGSVILKARET) &&
        props.behandling.vilkår.some(
          v => v.vilkarType === VilkarType.MEDLEMSKAPSVILKARET && v.vilkarStatus === VilkarUtfallType.OPPFYLT,
        )
      }
    >
      {!isFetching ? (
        <OpptjeningFaktaIndex
          opptjening={opptjening}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
