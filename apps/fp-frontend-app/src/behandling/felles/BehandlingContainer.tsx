import { ReactElement, useState } from 'react';

import { FaktaContainer } from './fakta/FaktaContainer';
import { ProsessContainer } from './prosess/ProsessContainer';
import { FaktaPanelInitProps } from './typer/faktaPanelInitProps';
import { ProsessPanelExtraInitProps, ProsessPanelInitProps } from './typer/prosessPanelInitProps';

interface FaktaPanelInfo {
  urlCode: string;
  text: string;
}

interface Props {
  hentFaktaPaneler?: (props: FaktaPanelInitProps) => ReactElement;
  hentProsessPaneler?: (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => ReactElement;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
}

export const BehandlingContainer = ({
  hentFaktaPaneler,
  hentProsessPaneler,
  valgtProsessSteg,
  valgtFaktaSteg,
}: Props) => {
  const [apentFaktaPanelInfo, setApentFaktaPanel] = useState<FaktaPanelInfo>();

  return (
    <>
      <ProsessContainer
        hentPaneler={hentProsessPaneler}
        valgtProsessSteg={valgtProsessSteg}
        valgtFaktaSteg={valgtFaktaSteg}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
      />
      <FaktaContainer
        hentPaneler={hentFaktaPaneler}
        valgtFaktaSteg={valgtFaktaSteg}
        valgtProsessSteg={valgtProsessSteg}
        setApentFaktaPanel={setApentFaktaPanel}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
      />
    </>
  );
};
