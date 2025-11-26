import { type ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { Alert, BodyShort, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktBox, EditedIcon } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import styles from './prosessPanelTemplate.module.css';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  begrunnelse?: string;
};

const getIsBegrunnelseRequired = (isDirty: boolean) => (value?: string) =>
  value !== undefined || isDirty ? required(value) : undefined;

interface Props {
  erOverstyrt: boolean;
  isSolvable: boolean;
  erVilkårOk?: boolean;
  hasAksjonspunkt: boolean;
  overrideReadOnly: boolean;
  isSubmitting: boolean;
  isPristine: boolean;
  toggleAv: () => void;
  erIkkeGodkjentAvBeslutter: boolean;
  children: ReactNode;
}

export const OverstyringPanel = ({
  erOverstyrt,
  isSolvable,
  erVilkårOk,
  hasAksjonspunkt,
  overrideReadOnly,
  isSubmitting,
  isPristine,
  toggleAv,
  erIkkeGodkjentAvBeslutter,
  children,
}: Props) => {
  const {
    formState: { isDirty },
    control,
  } = useFormContext<FormValues>();

  const isRequiredFn = getIsBegrunnelseRequired(isDirty);

  return (
    <AksjonspunktBox
      className={erOverstyrt ? styles['aksjonspunktMarginÅpenAP'] : styles['aksjonspunktMargin']}
      erAksjonspunktApent={erOverstyrt}
      erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
    >
      <VStack gap="space-16">
        <Label size="medium">{intl.formatMessage({ id: 'OverstyringPanel.AutomatiskVurdering' })}</Label>
        {children}
        {(erOverstyrt || hasAksjonspunkt) && (
          <RhfTextarea
            name="begrunnelse"
            control={control}
            label={intl.formatMessage({ id: 'OverstyringPanel.Vilkar' })}
            validate={[isRequiredFn, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={overrideReadOnly || !erOverstyrt}
          />
        )}
        {!erOverstyrt && erVilkårOk !== undefined && (
          <HStack gap="space-8">
            <EditedIcon />
            <BodyShort size="small">{intl.formatMessage({ id: 'OverstyringPanel.Endret' })}</BodyShort>
          </HStack>
        )}
        {erOverstyrt && (
          <>
            <Alert inline variant="warning" size="small">
              {intl.formatMessage({ id: 'OverstyringPanel.Unntakstilfeller' })}
            </Alert>
            <HStack gap="space-8">
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
            </HStack>
          </>
        )}
      </VStack>
    </AksjonspunktBox>
  );
};
