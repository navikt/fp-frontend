import type { ReactNode } from 'react';

import { CheckmarkCircleFillIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, Heading, HStack, VStack } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import type { Aksjonspunkt, Vilkar, VilkarUtfallType } from '@navikt/fp-types';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

import styles from './prosessPanelTemplate.module.css';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  title: ReactNode;
  harÅpentAksjonspunkt: boolean;
  aksjonspunkterForPanel: Aksjonspunkt[];
  vilkår: Vilkar | undefined;
  overstyringsKnapp?: ReactNode;
  erOverstyringAktivert?: boolean;
}

export const VilkårStatus = ({
  title,
  harÅpentAksjonspunkt,
  vilkår,
  overstyringsKnapp,
  erOverstyringAktivert = false,
}: Props) => {
  const originalErVilkårOk = vilkår?.vilkarStatus ?? 'IKKE_VURDERT';

  return (
    <HStack gap="space-8">
      {!erOverstyringAktivert && !harÅpentAksjonspunkt && (
        <>
          {originalErVilkårOk == 'OPPFYLT' && <CheckmarkCircleFillIcon className={styles['godkjentImage']} />}
          {originalErVilkårOk === 'IKKE_OPPFYLT' && <XMarkOctagonFillIcon className={styles['avslattImage']} />}
        </>
      )}
      <VStack gap="space-8">
        <HStack gap="space-8" wrap={false} align="center">
          <Heading size="small" level="3">
            {title}
          </Heading>
          {vilkår?.lovReferanse && <Detail>{vilkår.lovReferanse}</Detail>}
        </HStack>

        <HStack gap="space-8" align="center">
          <BodyShort size="small" weight={originalErVilkårOk === 'IKKE_VURDERT' ? 'regular' : 'semibold'}>
            {!harÅpentAksjonspunkt && (
              <>
                {originalErVilkårOk == 'OPPFYLT' && intl.formatMessage({ id: 'ProsessPanelTemplate.ErOppfylt' })}
                {originalErVilkårOk === 'IKKE_OPPFYLT' &&
                  intl.formatMessage({ id: 'ProsessPanelTemplate.ErIkkeOppfylt' })}
                {originalErVilkårOk === 'IKKE_VURDERT' &&
                  intl.formatMessage({ id: 'ProsessPanelTemplate.IkkeBehandlet' })}
              </>
            )}
            {harÅpentAksjonspunkt &&
              originalErVilkårOk === 'IKKE_VURDERT' &&
              intl.formatMessage({ id: 'ProsessPanelTemplate.UnderBehandling' })}
          </BodyShort>
          {originalErVilkårOk !== 'IKKE_VURDERT' && overstyringsKnapp}
        </HStack>
      </VStack>
    </HStack>
  );
};

export const finnStatus = (vilkår: Vilkar | undefined, aksjonspunkter: Aksjonspunkt[]): VilkarUtfallType => {
  if (vilkår) {
    if (vilkår.vilkarStatus === 'IKKE_VURDERT') {
      return 'IKKE_VURDERT';
    }
    return vilkår.vilkarStatus === 'OPPFYLT' ? 'OPPFYLT' : 'IKKE_OPPFYLT';
  }

  if (aksjonspunkter.length > 0) {
    return aksjonspunkter.some(erAksjonspunktÅpent) ? 'IKKE_VURDERT' : 'OPPFYLT';
  }
  return 'IKKE_VURDERT';
};
