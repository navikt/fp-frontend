import { type ReactNode } from 'react';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';

import type { Aksjonspunkt, Vilkar } from '@navikt/fp-types';

import { ProsessStegSubmitButton } from '../ProsessStegSubmitButton';
import { VilkårStatus } from './VilkårStatus';

import styles from './prosessPanelTemplate.module.css';

interface Props {
  title: string;
  aksjonspunkterForPanel: Aksjonspunkt[];
  vilkår: Vilkar | undefined;
  harÅpentAksjonspunkt: boolean;
  isSubmittable: boolean;
  erIkkeGodkjentAvBeslutter: boolean;
  rendreFakta?: () => ReactNode;
  isReadOnly: boolean;
  isDirty?: boolean;
  isSubmitting: boolean;
  children: ReactNode | ReactNode[];
}

export const ProsessPanelTemplate = ({
  title,
  aksjonspunkterForPanel,
  vilkår,
  harÅpentAksjonspunkt,
  isSubmittable,
  isReadOnly,
  rendreFakta,
  isDirty,
  erIkkeGodkjentAvBeslutter,
  isSubmitting,
  children,
}: Props) => {
  return (
    <VStack gap="space-16">
      <VilkårStatus
        title={title}
        aksjonspunkterForPanel={aksjonspunkterForPanel}
        vilkår={vilkår}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
      />

      <AksjonspunktBox
        className={styles['aksjonspunktMargin']}
        erAksjonspunktApent={harÅpentAksjonspunkt}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
      >
        <VStack gap="space-16">
          <div>{children}</div>
          <ProsessStegSubmitButton
            isReadOnly={isReadOnly}
            isSubmittable={isSubmittable}
            isDirty={isDirty}
            isSubmitting={isSubmitting}
          />
        </VStack>
      </AksjonspunktBox>
      {rendreFakta?.()}
    </VStack>
  );
};
