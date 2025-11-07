import { type ReactNode } from 'react';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';

import type { Aksjonspunkt, Vilkar } from '@navikt/fp-types';

import { ProsessStegSubmitButton } from '../ProsessStegSubmitButton';
import { VilkårStatus } from './VilkårStatus';

import styles from './prosessPanelTemplate.module.css';

interface Props {
  title: ReactNode;
  harÅpentAksjonspunkt: boolean;
  harÅpenSaksbehendlerOverstyring?: boolean;
  saksbehendlerOverstyringsKnapp?: ReactNode;
  aksjonspunkterForPanel: Aksjonspunkt[];
  vilkår: Vilkar | undefined;
  isSubmittable: boolean;
  alleMerknaderFraBeslutter: {
    [p: string]: {
      notAccepted?: boolean;
    };
  };
  rendreFakta?: ReactNode;
  isReadOnly: boolean;
  isDirty: boolean;
  isSubmitting: boolean;
  children: ReactNode | ReactNode[];
}

export const ProsessPanelTemplate = ({
  vilkår,
  aksjonspunkterForPanel,
  title,
  harÅpentAksjonspunkt,
  harÅpenSaksbehendlerOverstyring = false,
  saksbehendlerOverstyringsKnapp,
  isSubmittable,
  isReadOnly,
  rendreFakta,
  isDirty,
  alleMerknaderFraBeslutter,
  isSubmitting,
  children,
}: Props) => {
  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  return (
    <VStack gap="space-16">
      <VilkårStatus
        title={title}
        vilkår={vilkår}
        aksjonspunkterForPanel={aksjonspunkterForPanel}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        erOverstyringAktivert={harÅpenSaksbehendlerOverstyring}
        overstyringsKnapp={saksbehendlerOverstyringsKnapp}
      />
      <AksjonspunktBox
        className={harÅpentAksjonspunkt ? styles['aksjonspunktMarginÅpenAP'] : styles['aksjonspunktMargin']}
        erAksjonspunktApent={harÅpentAksjonspunkt || harÅpenSaksbehendlerOverstyring}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
      >
        <VStack gap="space-16">
          {children}
          <ProsessStegSubmitButton
            isReadOnly={isReadOnly}
            isSubmittable={isSubmittable}
            isDirty={isDirty}
            isSubmitting={isSubmitting}
          />
        </VStack>
      </AksjonspunktBox>
      <div className={styles['aksjonspunktMargin']}>{rendreFakta}</div>
    </VStack>
  );
};
