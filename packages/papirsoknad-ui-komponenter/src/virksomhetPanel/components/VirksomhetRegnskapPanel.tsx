import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { InputField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required, hasValidInteger, hasValidText } from '@navikt/ft-form-validators';

import { useFormContext } from 'react-hook-form';
import styles from './virksomhetRegnskapPanel.module.css';

export type FormValues = {
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
};

interface OwnProps {
  readOnly?: boolean;
}

/**
 * VirksomhetRegnskapPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
 * søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
const VirksomhetRegnskapPanel: FunctionComponent<OwnProps> = ({ readOnly = true }) => {
  const { watch } = useFormContext<FormValues>();
  const harRegnskapsforer = watch('harRegnskapsforer') || false;

  return (
    <>
      <RadioGroupPanel
        name="harRegnskapsforer"
        label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.Accountant" />}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        isHorizontal
        radios={[
          {
            label: <FormattedMessage id="Registrering.VirksomhetRegnskapPanel.Yes" />,
            value: 'true',
          },
          {
            label: <FormattedMessage id="Registrering.VirksomhetRegnskapPanel.No" />,
            value: 'false',
          },
        ]}
      />
      {harRegnskapsforer && (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox>
            <InputField
              name="navnRegnskapsforer"
              className={styles.navnBredde}
              readOnly={readOnly}
              validate={[required, hasValidText]}
              label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.AccountantName" />}
            />
            <VerticalSpacer sixteenPx />
            <InputField
              name="tlfRegnskapsforer"
              readOnly={readOnly}
              validate={[required, hasValidInteger]}
              className={styles.tlfBredde}
              label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.AccountantPhone" />}
            />
          </ArrowBox>
          <VerticalSpacer sixteenPx />
        </>
      )}
    </>
  );
};

export default VirksomhetRegnskapPanel;
