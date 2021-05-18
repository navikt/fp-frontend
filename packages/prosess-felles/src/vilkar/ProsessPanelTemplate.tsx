import React, { ReactNode, FunctionComponent } from 'react';
import {
  Undertittel, Undertekst, Element, Normaltekst,
} from 'nav-frontend-typografi';

import {
  VerticalSpacer, FlexContainer, FlexRow, FlexColumn, AksjonspunktBox, Image,
} from '@fpsak-frontend/shared-components';
import { createIntl } from '@fpsak-frontend/utils';
import avslattImage from '@fpsak-frontend/assets/images/avslaatt_hover.svg';
import innvilgetImage from '@fpsak-frontend/assets/images/innvilget_hover.svg';

import ProsessStegSubmitButton from '../ProsessStegSubmitButton';
import messages from '../../i18n/nb_NO.json';

import styles from './prosessPanelTemplate.less';

const intl = createIntl(messages);

interface OwnProps {
  title: string;
  lovReferanse?: string;
  isAksjonspunktOpen: boolean;
  handleSubmit: (data: any) => any;
  formName: string;
  readOnlySubmitButton: boolean;
  originalErVilkarOk?: boolean;
  erIkkeGodkjentAvBeslutter: boolean;
  rendreFakta?: () => void;
  readOnly: boolean;
  isDirty?: boolean;
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
  handleSubmit,
  formName,
  readOnlySubmitButton,
  readOnly,
  rendreFakta,
  isDirty,
  erIkkeGodkjentAvBeslutter,
  children,
}) => (
  <>
    <form onSubmit={handleSubmit}>
      <FlexContainer>
        <FlexRow>
          {originalErVilkarOk !== undefined && (
            <FlexColumn>
              <Image className={styles.status} src={originalErVilkarOk ? innvilgetImage : avslattImage} />
            </FlexColumn>
          )}
          <FlexColumn>
            <Undertittel>{title}</Undertittel>
          </FlexColumn>
          {lovReferanse && (
            <FlexColumn>
              <Undertekst className={styles.vilkar}>{lovReferanse}</Undertekst>
            </FlexColumn>
          )}
        </FlexRow>

        <FlexRow>
          <FlexColumn>
            {originalErVilkarOk && (
              <>
                <VerticalSpacer eightPx />
                <Element>{intl.formatMessage({ id: 'ProsessPanelTemplate.ErOppfylt' })}</Element>
              </>
            )}
            {originalErVilkarOk === false && (
              <>
                <VerticalSpacer eightPx />
                <Element>{intl.formatMessage({ id: 'ProsessPanelTemplate.ErIkkeOppfylt' })}</Element>
              </>
            )}
            {(!isAksjonspunktOpen && originalErVilkarOk === undefined) && (
              <>
                <VerticalSpacer eightPx />
                <Normaltekst>{intl.formatMessage({ id: 'ProsessPanelTemplate.IkkeBehandlet' })}</Normaltekst>
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
          formName={formName}
          isReadOnly={readOnly}
          isSubmittable={!readOnlySubmitButton}
          isDirty={isDirty}
        />

      </AksjonspunktBox>
      {rendreFakta && (
        <>
          <VerticalSpacer sixteenPx />
          {rendreFakta()}
        </>
      )}
    </form>
  </>
);

export default ProsessPanelTemplate;
