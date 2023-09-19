import React, { FunctionComponent, useState, useMemo } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { BodyShort, Button, HStack, Label } from '@navikt/ds-react';
import { Form, InputField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import Saksbehandler from '../../typer/saksbehandlerAvdelingTsType';
import { RestApiPathsKeys, restApiHooks } from '../../data/fplosRestApi';

import styles from './leggTilSaksbehandlerForm.module.css';

const erSaksbehandlerLagtTilAllerede = (
  saksbehandler?: Saksbehandler,
  avdelingensSaksbehandlere: Saksbehandler[] = [],
) =>
  avdelingensSaksbehandlere instanceof Array &&
  avdelingensSaksbehandlere.some(
    s => saksbehandler && s.brukerIdent.toLowerCase() === saksbehandler.brukerIdent.toLowerCase(),
  );

interface OwnProps {
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: Saksbehandler[];
  hentAvdelingensSaksbehandlere: (params: { avdelingEnhet: string }) => void;
}

type FormValues = {
  brukerIdent: string;
};

/**
 * LeggTilSaksbehandlerForm
 */
const LeggTilSaksbehandlerForm: FunctionComponent<OwnProps> = ({
  valgtAvdelingEnhet,
  avdelingensSaksbehandlere,
  hentAvdelingensSaksbehandlere,
}) => {
  const intl = useIntl();
  const [leggerTilNySaksbehandler, setLeggetTilNySaksbehandler] = useState(false);

  const {
    data: saksbehandler,
    startRequest: finnSaksbehandler,
    state,
    resetRequestData: resetSaksbehandlerSok,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.SAKSBEHANDLER_SOK);

  const { startRequest: leggTilSaksbehandler } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.OPPRETT_NY_SAKSBEHANDLER,
  );

  const erLagtTilAllerede = erSaksbehandlerLagtTilAllerede(saksbehandler, avdelingensSaksbehandlere);

  const leggTilSaksbehandlerFn = (resetFormValues: () => void) => {
    if (saksbehandler) {
      setLeggetTilNySaksbehandler(true);
      leggTilSaksbehandler({
        brukerIdent: saksbehandler.brukerIdent,
        avdelingEnhet: valgtAvdelingEnhet,
      }).then(() => {
        resetSaksbehandlerSok();
        resetFormValues();
        setLeggetTilNySaksbehandler(false);
        hentAvdelingensSaksbehandlere({ avdelingEnhet: valgtAvdelingEnhet });
      });
    }
  };

  const resetSaksbehandlerSokFn = (resetFormValues: () => void) => {
    resetSaksbehandlerSok();
    resetFormValues();
  };

  const formattedText = useMemo((): string => {
    if (state === RestApiState.SUCCESS && !saksbehandler) {
      return intl.formatMessage({ id: 'LeggTilSaksbehandlerForm.FinnesIkke' });
    }
    if (!saksbehandler) {
      return '';
    }

    const brukerinfo = `${saksbehandler.navn}, ${saksbehandler.avdelingsnavn.join(', ')}`;
    return erLagtTilAllerede
      ? `${brukerinfo} (${intl.formatMessage({ id: 'LeggTilSaksbehandlerForm.FinnesAllerede' })})`
      : brukerinfo;
  }, [state, saksbehandler, erLagtTilAllerede]);

  const formMethods = useForm<FormValues>();

  return (
    <Form<FormValues>
      formMethods={formMethods}
      onSubmit={(values: { brukerIdent: string }) => finnSaksbehandler({ brukerIdent: values.brukerIdent })}
    >
      <Label size="small">
        <FormattedMessage id="LeggTilSaksbehandlerForm.LeggTil" />
      </Label>
      <VerticalSpacer eightPx />
      <HStack gap="4">
        <InputField
          name="brukerIdent"
          label={intl.formatMessage({ id: 'LeggTilSaksbehandlerForm.Brukerident' })}
          validate={[required]}
        />
        <div className={styles.button}>
          <Button
            size="small"
            variant="secondary"
            loading={formMethods.formState.isSubmitting}
            disabled={formMethods.formState.isSubmitting || leggerTilNySaksbehandler}
            tabIndex={0}
          >
            <FormattedMessage id="LeggTilSaksbehandlerForm.Sok" />
          </Button>
        </div>
      </HStack>
      {state === RestApiState.SUCCESS && (
        <>
          <VerticalSpacer eightPx />
          <BodyShort size="small">{formattedText}</BodyShort>
          <VerticalSpacer sixteenPx />
          <HStack gap="4">
            <Button
              size="small"
              variant="primary"
              autoFocus
              onClick={() => leggTilSaksbehandlerFn(formMethods.reset)}
              loading={leggerTilNySaksbehandler}
              disabled={leggerTilNySaksbehandler || erLagtTilAllerede || !saksbehandler}
              type="button"
            >
              <FormattedMessage id="LeggTilSaksbehandlerForm.LeggTilIListen" />
            </Button>
            <Button
              size="small"
              variant="secondary"
              tabIndex={0}
              disabled={leggerTilNySaksbehandler}
              onClick={() => resetSaksbehandlerSokFn(formMethods.reset)}
              type="button"
            >
              <FormattedMessage id="LeggTilSaksbehandlerForm.Nullstill" />
            </Button>
          </HStack>
        </>
      )}
    </Form>
  );
};

export default LeggTilSaksbehandlerForm;
