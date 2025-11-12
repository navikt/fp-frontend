import { type ReactNode } from 'react';

import { CheckmarkCircleFillIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { ProsessStegSubmitButton } from '../ProsessStegSubmitButton';

import styles from './prosessPanelTemplate.module.css';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  title: ReactNode;
  lovReferanse: string | undefined;
  harÅpentAksjonspunkt: boolean;
  isSubmittable: boolean;
  originalErVilkårOk: boolean | undefined;
  erIkkeGodkjentAvBeslutter: boolean;
  rendreFakta?: ReactNode;
  isReadOnly: boolean;
  isDirty: boolean;
  isSubmitting: boolean;
  children: ReactNode | ReactNode[];
}

export const ProsessPanelTemplate = ({
  lovReferanse,
  title,
  originalErVilkårOk,
  harÅpentAksjonspunkt,
  isSubmittable,
  isReadOnly,
  rendreFakta,
  isDirty,
  erIkkeGodkjentAvBeslutter,
  isSubmitting,
  children,
}: Props) => (
  <HStack gap="space-8">
    {originalErVilkårOk !== undefined && (
      <>
        {originalErVilkårOk && <CheckmarkCircleFillIcon className={styles['godkjentImage']} />}
        {!originalErVilkårOk && <XMarkOctagonFillIcon className={styles['avslattImage']} />}
      </>
    )}
    <VStack gap="space-16">
      <HStack gap="space-8" wrap={false} align="center">
        <Heading size="small" level="3">
          {title}
        </Heading>
        {lovReferanse && <Detail>{lovReferanse}</Detail>}
      </HStack>

      {!harÅpentAksjonspunkt && (
        <HStack gap="space-8">
          {originalErVilkårOk && (
            <Label size="small">{intl.formatMessage({ id: 'ProsessPanelTemplate.ErOppfylt' })}</Label>
          )}
          {originalErVilkårOk === false && (
            <Label size="small">{intl.formatMessage({ id: 'ProsessPanelTemplate.ErIkkeOppfylt' })}</Label>
          )}
          {originalErVilkårOk === undefined && (
            <BodyShort size="small">{intl.formatMessage({ id: 'ProsessPanelTemplate.IkkeBehandlet' })}</BodyShort>
          )}
        </HStack>
      )}

      <AksjonspunktBox
        className={harÅpentAksjonspunkt ? undefined : styles['aksjonspunktMargin']}
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
      {rendreFakta}
    </VStack>
  </HStack>
);
