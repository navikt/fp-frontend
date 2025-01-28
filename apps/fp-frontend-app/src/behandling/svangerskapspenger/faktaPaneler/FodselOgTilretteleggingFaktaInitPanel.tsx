import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { TilretteleggingFaktaIndex } from '@navikt/fp-fakta-tilrettelegging';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.FODSELTILRETTELEGGING];

const OVERSTYRING_AP_CODES = [AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FodselOgTilretteleggingFaktaInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & FaktaPanelInitProps) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_AP_CODES);

  const api = useBehandlingApi(props.behandling);

  const { data: arbeidOgInntekt } = useQuery(api.arbeidOgInntektOptions(props.behandling));
  const { data: svangerskapspengerTilrettelegging } = useQuery(
    api.svp.svangerskapspengerTilretteleggingOptions(props.behandling),
  );

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.FODSELTILRETTELEGGING}
      faktaPanelMenyTekst={useIntl().formatMessage({
        id: 'FaktaInitPanel.Title.FodselOgTilrettelegging',
      })}
      skalPanelVisesIMeny
    >
      {arbeidOgInntekt && svangerskapspengerTilrettelegging ? (
        <TilretteleggingFaktaIndex
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          arbeidOgInntekt={arbeidOgInntekt}
          svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
          {...standardPanelProps}
          readOnly={
            standardPanelProps.readOnly ||
            !AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, props.behandling.aksjonspunkt))
          }
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
