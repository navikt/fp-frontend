import React, { ReactNode, FunctionComponent } from 'react';
import {
  Heading, Detail, Label, BodyShort,
} from '@navikt/ds-react';
import {
  FlexContainer, FlexRow, FlexColumn, Image, VerticalSpacer, AksjonspunktBox,
} from '@navikt/ft-ui-komponenter';

import { createIntl } from '@navikt/ft-utils';
import avslattImage from '../images/avslaatt_hover.svg';
import innvilgetImage from '../images/innvilget_hover.svg';

import ProsessStegSubmitButton from '../ProsessStegSubmitButtonNew';
import messages from '../../i18n/nb_NO.json';

import styles from './prosessPanelTemplate.less';

const intl = createIntl(messages);

interface OwnProps {
  title: string;
  lovReferanse?: string;
  isAksjonspunktOpen: boolean;
  readOnlySubmitButton: boolean;
  originalErVilkarOk?: boolean;
  erIkkeGodkjentAvBeslutter: boolean;
  rendreFakta?: () => void;
  readOnly: boolean;
  isDirty?: boolean;
  isSubmitting: boolean;
  children: ReactNode | ReactNode[];
}

/*
 * ProsessPanelTemplate
 *
 * Presentasjonskomponent.
 */
const ProsessPanelTemplate: FunctionComponent<OwnProps> = ({
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
}) => (
  <>
    <FlexContainer>
      <FlexRow>
        {originalErVilkarOk !== undefined && (
        <FlexColumn>
          <Image className={styles.status} src={originalErVilkarOk ? innvilgetImage : avslattImage} />
        </FlexColumn>
        )}
        <FlexColumn>
          <Heading size="small">{title}</Heading>
        </FlexColumn>
        {lovReferanse && (
        <FlexColumn>
          <Detail size="small" className={styles.vilkar}>{lovReferanse}</Detail>
        </FlexColumn>
        )}
      </FlexRow>

      <FlexRow>
        <FlexColumn>
          {originalErVilkarOk && (
          <>
            <VerticalSpacer eightPx />
            <Label size="small">{intl.formatMessage({ id: 'ProsessPanelTemplate.ErOppfylt' })}</Label>
          </>
          )}
          {originalErVilkarOk === false && (
          <>
            <VerticalSpacer eightPx />
            <Label size="small">{intl.formatMessage({ id: 'ProsessPanelTemplate.ErIkkeOppfylt' })}</Label>
          </>
          )}
          {(!isAksjonspunktOpen && originalErVilkarOk === undefined) && (
          <>
            <VerticalSpacer eightPx />
            <BodyShort size="small">{intl.formatMessage({ id: 'ProsessPanelTemplate.IkkeBehandlet' })}</BodyShort>
          </>
          )}
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
    {isAksjonspunktOpen && <VerticalSpacer eightPx />}
    <AksjonspunktBox className={styles.aksjonspunktMargin} erAksjonspunktApent={isAksjonspunktOpen} erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}>
      {children}
      {!readOnly && <VerticalSpacer sixteenPx />}
      <ProsessStegSubmitButton
        isReadOnly={readOnly}
        isSubmittable={!readOnlySubmitButton}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
      />

    </AksjonspunktBox>
    {rendreFakta && (
    <>
      <VerticalSpacer sixteenPx />
      {rendreFakta()}
    </>
    )}
  </>
);

export default ProsessPanelTemplate;
