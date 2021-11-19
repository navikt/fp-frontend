import React, { FunctionComponent, useMemo } from 'react';
import { ProcessMenuStepType, ProcessMenu } from '@navikt/fp-react-components';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import '@fpsak-frontend/assets/styles/arrowForProcessMenu.less';

import ProsessPanelMenyData from '../../types/prosessPanelMenyData';

const finnProsessmenyType = (
  status: string,
  harApentAksjonspunkt: boolean,
): ProcessMenuStepType => {
  if (harApentAksjonspunkt) {
    return ProcessMenuStepType.warning;
  }
  if (status === vilkarUtfallType.OPPFYLT) {
    return ProcessMenuStepType.success;
  }
  if (status === vilkarUtfallType.IKKE_OPPFYLT) {
    return ProcessMenuStepType.danger;
  }
  return ProcessMenuStepType.default;
};

interface OwnProps {
  menyData: ProsessPanelMenyData[];
  oppdaterProsessPanelIUrl: (index: number) => void;
}

const ProsessMeny: FunctionComponent<OwnProps> = ({
  menyData,
  oppdaterProsessPanelIUrl,
}) => {
  const steg = useMemo(() => menyData.map((data) => {
    const type = finnProsessmenyType(data.status, data.harApentAksjonspunkt);
    return {
      label: data.tekst,
      isActive: data.erAktiv,
      isDisabled: false,
      isFinished: type === ProcessMenuStepType.success,
      type,
    };
  }), [menyData]);

  return (
    <ProcessMenu steps={steg} onClick={oppdaterProsessPanelIUrl} />
  );
};

export default ProsessMeny;
