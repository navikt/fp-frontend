import React, { useMemo } from 'react';

import { ProcessMenu, ProcessMenuStepType } from '@navikt/ft-plattform-komponenter';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';

import { ProsessPanelMenyData } from '../typer/prosessPanelMenyData';

import styles from './arrowForProcessMenu.module.css';

const finnProsessmenyType = (status?: string, harApentAksjonspunkt?: boolean): ProcessMenuStepType => {
  if (harApentAksjonspunkt) {
    return ProcessMenuStepType.warning;
  }
  if (status === VilkarUtfallType.OPPFYLT) {
    return ProcessMenuStepType.success;
  }
  if (status === VilkarUtfallType.IKKE_OPPFYLT) {
    return ProcessMenuStepType.danger;
  }
  return ProcessMenuStepType.default;
};

interface Props {
  menyData: ProsessPanelMenyData[];
  oppdaterProsessPanelIUrl: (index: number) => void;
}

export const ProsessMeny = ({ menyData, oppdaterProsessPanelIUrl }: Props) => {
  const steg = useMemo(
    () =>
      menyData.map(data => {
        const type = finnProsessmenyType(data.status, data.harApentAksjonspunkt);
        return {
          label: data.tekst || '',
          isActive: data.erAktiv,
          isDisabled: false,
          isFinished: type === ProcessMenuStepType.success,
          type,
        };
      }),
    [menyData],
  );

  return (
    <ProcessMenu steps={steg} onClick={oppdaterProsessPanelIUrl} stepArrowContainerStyle={styles.stepArrowContainer} />
  );
};
