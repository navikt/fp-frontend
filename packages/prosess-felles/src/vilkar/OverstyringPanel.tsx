import React, { ReactNode, FunctionComponent } from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Knapp, Hovedknapp } from 'nav-frontend-knapper';

import {
  FlexContainer, FlexRow, FlexColumn, Image, EditedIcon, VerticalSpacer, AksjonspunktBox,
} from '@navikt/ft-ui-komponenter';

import { TextAreaField, formHooks } from '@navikt/ft-form-hooks';
import { createIntl } from '@navikt/ft-utils';
import {
  hasValidText, maxLength, minLength,
} from '@navikt/ft-form-validators';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel_ny.svg';

import messages from '../../i18n/nb_NO.json';

import styles from './overstyringPanel.less';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const getIsBegrunnelseRequired = (isDirty: boolean) => (value?: string) => value !== undefined || isDirty;

interface OwnProps {
  erOverstyrt?: boolean;
  isSolvable: boolean;
  erVilkarOk?: boolean;
  hasAksjonspunkt: boolean;
  overrideReadOnly: boolean;
  isSubmitting: boolean;
  isPristine: boolean;
  toggleAv: () => void;
  erIkkeGodkjentAvBeslutter: boolean;
  children: ReactNode;
}

const OverstyringPanel: FunctionComponent<OwnProps> = ({
  erOverstyrt,
  isSolvable,
  erVilkarOk,
  hasAksjonspunkt,
  overrideReadOnly,
  isSubmitting,
  isPristine,
  toggleAv,
  erIkkeGodkjentAvBeslutter,
  children,
}) => {
  const { formState: { isDirty } } = formHooks.useFormContext();
  const isRequiredFn = getIsBegrunnelseRequired(isDirty);
  return (
    <AksjonspunktBox className={styles.aksjonspunktMargin} erAksjonspunktApent={erOverstyrt} erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}>
      <Element>{intl.formatMessage({ id: 'OverstyringPanel.AutomatiskVurdering' })}</Element>
      <VerticalSpacer eightPx />
      {children}
      {(erOverstyrt || hasAksjonspunkt) && (
        <>
          <VerticalSpacer eightPx />
          <TextAreaField
            name="begrunnelse"
            label={intl.formatMessage({ id: 'OverstyringPanel.Vilkar' })}
            validate={[isRequiredFn, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={overrideReadOnly || !erOverstyrt}
            placeholder={intl.formatMessage({ id: 'OverstyringPanel.BegrunnVurdering' })}
          />
        </>
      )}
      <VerticalSpacer sixteenPx />
      {!erOverstyrt && (erVilkarOk !== undefined) && (
        <>
          <VerticalSpacer fourPx />
          <FlexRow>
            <FlexColumn>
              <EditedIcon />
            </FlexColumn>
            <FlexColumn>
              <Normaltekst>{intl.formatMessage({ id: 'OverstyringPanel.Endret' })}</Normaltekst>
            </FlexColumn>
          </FlexRow>
        </>
      )}
      {erOverstyrt && (
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image src={advarselIkonUrl} />
            </FlexColumn>
            <FlexColumn>
              <Element>{intl.formatMessage({ id: 'OverstyringPanel.Unntakstilfeller' })}</Element>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              {!overrideReadOnly && (
                <Hovedknapp
                  mini
                  spinner={isSubmitting}
                  disabled={isSubmitting || !isSolvable || isPristine}
                >
                  {intl.formatMessage({ id: 'OverstyringPanel.ConfirmInformation' })}
                </Hovedknapp>
              )}
            </FlexColumn>
            <FlexColumn>
              <Knapp
                htmlType="button"
                spinner={isSubmitting}
                disabled={isSubmitting}
                onClick={toggleAv}
                mini
              >
                {intl.formatMessage({ id: 'OverstyringPanel.Avbryt' })}
              </Knapp>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      )}
    </AksjonspunktBox>
  );
};

export default OverstyringPanel;
