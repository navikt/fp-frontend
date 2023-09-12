import React, { ReactNode, FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';
import { BodyShort, Label, Button } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import {
  FlexContainer,
  FlexRow,
  FlexColumn,
  EditedIcon,
  VerticalSpacer,
  AksjonspunktBox,
} from '@navikt/ft-ui-komponenter';

import { TextAreaField } from '@navikt/ft-form-hooks';
import { createIntl } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';

import messages from '../../i18n/nb_NO.json';

import styles from './overstyringPanel.module.css';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const getIsBegrunnelseRequired = (isDirty: boolean) => (value?: string) => value !== undefined || isDirty;

interface OwnProps {
  erOverstyrt: boolean;
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
  const {
    formState: { isDirty },
  } = useFormContext();
  const isRequiredFn = getIsBegrunnelseRequired(isDirty);
  return (
    <AksjonspunktBox
      className={styles.aksjonspunktMargin}
      erAksjonspunktApent={erOverstyrt}
      erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
    >
      <Label size="small">{intl.formatMessage({ id: 'OverstyringPanel.AutomatiskVurdering' })}</Label>
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
          />
        </>
      )}
      <VerticalSpacer sixteenPx />
      {!erOverstyrt && erVilkarOk !== undefined && (
        <>
          <VerticalSpacer fourPx />
          <FlexRow>
            <FlexColumn>
              <EditedIcon />
            </FlexColumn>
            <FlexColumn>
              <BodyShort size="small">{intl.formatMessage({ id: 'OverstyringPanel.Endret' })}</BodyShort>
            </FlexColumn>
          </FlexRow>
        </>
      )}
      {erOverstyrt && (
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <ExclamationmarkTriangleFillIcon className={styles.exclamationmarkIcon} />
            </FlexColumn>
            <FlexColumn>
              <BodyShort size="small">{intl.formatMessage({ id: 'OverstyringPanel.Unntakstilfeller' })}</BodyShort>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              {!overrideReadOnly && (
                <Button
                  size="small"
                  variant="primary"
                  loading={isSubmitting}
                  disabled={isSubmitting || !isSolvable || isPristine}
                >
                  {intl.formatMessage({ id: 'OverstyringPanel.ConfirmInformation' })}
                </Button>
              )}
            </FlexColumn>
            <FlexColumn>
              <Button
                size="small"
                variant="secondary"
                loading={isSubmitting}
                disabled={isSubmitting}
                onClick={toggleAv}
                type="button"
              >
                {intl.formatMessage({ id: 'OverstyringPanel.Avbryt' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      )}
    </AksjonspunktBox>
  );
};

export default OverstyringPanel;
