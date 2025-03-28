import { type ReactNode } from 'react';

import { CheckmarkCircleFillIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { ProsessStegSubmitButton } from '../ProsessStegSubmitButtonNew';

import styles from './prosessPanelTemplate.module.css';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  title: string;
  lovReferanse?: string;
  isAksjonspunktOpen: boolean;
  readOnlySubmitButton: boolean;
  originalErVilkarOk?: boolean;
  erIkkeGodkjentAvBeslutter: boolean;
  rendreFakta?: () => ReactNode;
  readOnly: boolean;
  isDirty?: boolean;
  isSubmitting: boolean;
  children: ReactNode | ReactNode[];
}

export const ProsessPanelTemplate = ({
  lovReferanse,
  title,
  originalErVilkarOk,
  isAksjonspunktOpen,
  readOnlySubmitButton,
  readOnly,
  rendreFakta,
  isDirty,
  erIkkeGodkjentAvBeslutter,
  isSubmitting,
  children,
}: Props) => (
  <VStack gap="4">
    <HStack gap="2">
      {originalErVilkarOk !== undefined && (
        <>
          {originalErVilkarOk && <CheckmarkCircleFillIcon className={styles.godkjentImage} />}
          {!originalErVilkarOk && <XMarkOctagonFillIcon className={styles.avslattImage} />}
        </>
      )}
      <Heading size="small">{title}</Heading>
      {lovReferanse && <Detail className={styles.vilkar}>{lovReferanse}</Detail>}
    </HStack>
    <HStack gap="2">
      {originalErVilkarOk && <Label size="small">{intl.formatMessage({ id: 'ProsessPanelTemplate.ErOppfylt' })}</Label>}
      {originalErVilkarOk === false && (
        <Label size="small">{intl.formatMessage({ id: 'ProsessPanelTemplate.ErIkkeOppfylt' })}</Label>
      )}
      {!isAksjonspunktOpen && originalErVilkarOk === undefined && (
        <BodyShort size="small">{intl.formatMessage({ id: 'ProsessPanelTemplate.IkkeBehandlet' })}</BodyShort>
      )}
    </HStack>
    <AksjonspunktBox
      className={styles.aksjonspunktMargin}
      erAksjonspunktApent={isAksjonspunktOpen}
      erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
    >
      <VStack gap="4">
        <div>{children}</div>
        <ProsessStegSubmitButton
          isReadOnly={readOnly}
          isSubmittable={!readOnlySubmitButton}
          isDirty={isDirty}
          isSubmitting={isSubmitting}
        />
      </VStack>
    </AksjonspunktBox>
    {rendreFakta?.()}
  </VStack>
);
