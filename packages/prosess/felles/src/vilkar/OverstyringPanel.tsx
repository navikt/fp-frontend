import { type ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktBox, EditedIcon } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import styles from './overstyringPanel.module.css';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const getIsBegrunnelseRequired = (isDirty: boolean) => (value?: string) =>
  value !== undefined || isDirty ? required(value) : undefined;

interface Props {
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

export const OverstyringPanel = ({
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
}: Props) => {
  // TODO (TOR) Manglar type
  const {
    formState: { isDirty },
    control,
  } = useFormContext();
  const isRequiredFn = getIsBegrunnelseRequired(isDirty);
  return (
    <AksjonspunktBox
      className={styles.aksjonspunktMargin}
      erAksjonspunktApent={erOverstyrt}
      erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
    >
      <VStack gap="4">
        <Label size="medium">{intl.formatMessage({ id: 'OverstyringPanel.AutomatiskVurdering' })}</Label>
        <div>{children}</div>
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
        {!erOverstyrt && erVilkarOk !== undefined && (
          <HStack gap="2">
            <EditedIcon />
            <BodyShort size="small">{intl.formatMessage({ id: 'OverstyringPanel.Endret' })}</BodyShort>
          </HStack>
        )}
        {erOverstyrt && (
          <>
            <HStack gap="2">
              <ExclamationmarkTriangleFillIcon className={styles.exclamationmarkIcon} />
              <BodyShort size="small">{intl.formatMessage({ id: 'OverstyringPanel.Unntakstilfeller' })}</BodyShort>
            </HStack>
            <HStack gap="2">
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
