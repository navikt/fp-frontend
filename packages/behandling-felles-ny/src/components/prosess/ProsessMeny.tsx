import React, { FunctionComponent, useMemo } from 'react';
import { StepType } from '@navikt/nap-process-menu/dist/Step';
import ProcessMenu from '@navikt/nap-process-menu';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import '@fpsak-frontend/assets/styles/arrowForProcessMenu.less';

import ProsessPanelMenyData from '../../types/prosessPanelMenyData';

const finnProsessmenyType = (
  status: string,
  harApentAksjonspunkt: boolean,
): StepType => {
  if (harApentAksjonspunkt) {
    return StepType.warning;
  }
  if (status === vilkarUtfallType.OPPFYLT) {
    return StepType.success;
  }
  if (status === vilkarUtfallType.IKKE_OPPFYLT) {
    return StepType.danger;
  }
  return StepType.default;
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
      isFinished: type === StepType.success,
      type,
    };
  }), [menyData]);

  return (
    <ProcessMenu steps={steg} onClick={oppdaterProsessPanelIUrl} />
  );
};

export default ProsessMeny;
