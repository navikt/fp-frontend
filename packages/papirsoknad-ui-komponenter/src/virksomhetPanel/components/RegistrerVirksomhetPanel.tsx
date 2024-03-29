import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Label, BodyShort, Detail, ErrorMessage, Link } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/fp-types';

import { useFieldArray, useFormContext } from 'react-hook-form';

import RegistrerVirksomhetModalForm, { FormValues as ModalFormValues } from './RegistrerVirksomhetModalForm';

import styles from './registrerVirksomhetPanel.module.css';

export const EGEN_VIRKSOMHET_NAME_PREFIX = 'egenVirksomhet';

type VirtueltValideringsfeilFelt = {
  notRegisteredInput?: string;
};

export type FormValues = {
  virksomheter: ModalFormValues[];
};

interface OwnProps {
  readOnly?: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * RegistrererVirksomhetPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder
 * foreldrepenger og søker har arbeidet i egen virksomhet.
 * Viser registrerte virksomheter samt knapp for å legge til nye virksomheter.
 */
const RegistrerVirksomhetPanel: FunctionComponent<OwnProps> = ({ readOnly = false, alleKodeverk }) => {
  const intl = useIntl();
  const [virksomhetIndex, setVirksomhetIndex] = useState<number>();

  const { control, setError, formState, clearErrors } = useFormContext<{
    [EGEN_VIRKSOMHET_NAME_PREFIX]: FormValues & VirtueltValideringsfeilFelt;
  }>();
  const { fields, remove, append, update } = useFieldArray({
    control,
    name: `${EGEN_VIRKSOMHET_NAME_PREFIX}.virksomheter`,
  });

  const visModal = useCallback(
    (index?: number): void => {
      setVirksomhetIndex(index !== undefined ? index : -1);
    },
    [setVirksomhetIndex],
  );

  const lukkModal = useCallback((): void => {
    setVirksomhetIndex(undefined);
  }, [setVirksomhetIndex]);

  const leggTilVirksomhet = useCallback(
    (virksomhet: ModalFormValues) => {
      const justertVirksomhet = {
        ...virksomhet,
        landJobberFra: virksomhet.virksomhetRegistrertINorge ? 'NOR' : virksomhet.landJobberFra,
        varigEndringGjeldendeFom: virksomhet.nyIArbeidslivetFom || virksomhet.varigEndringGjeldendeFom,
      };

      if (virksomhetIndex === -1) {
        append(justertVirksomhet);
      } else if (virksomhetIndex !== undefined) {
        update(virksomhetIndex, justertVirksomhet);
      }

      lukkModal();
    },
    [append, update, lukkModal, virksomhetIndex],
  );

  useEffect(() => {
    if (fields.length === 0) {
      setError(`${EGEN_VIRKSOMHET_NAME_PREFIX}.notRegisteredInput`, {
        type: 'custom',
        message: intl.formatMessage({ id: 'Registrering.RegistrerVirksomhetPanel.ArrayMinLength' }),
      });
    }
    if (fields.length > 0) {
      clearErrors(`${EGEN_VIRKSOMHET_NAME_PREFIX}.notRegisteredInput`);
    }
  }, [fields.length]);

  return (
    <div className={styles.fieldsList}>
      {fields.length > 0 && (
        <React.Fragment key={1}>
          <Label size="small">
            <FormattedMessage id="Registrering.RegistrerVirksomhetPanel.Name" />
          </Label>
          <hr className={styles.divider} />
          {fields.map((field, index) => (
            <FlexContainer key={field.id}>
              <FlexRow>
                <FlexColumn>
                  <Link className={styles.customLink} onClick={() => visModal(index)} onKeyDown={() => visModal(index)}>
                    <BodyShort size="small">{field.navn}</BodyShort>
                  </Link>
                </FlexColumn>
                <FlexColumn>
                  <XMarkIcon
                    className={styles.removeButton}
                    onClick={() => remove(index)}
                    onKeyDown={() => remove(index)}
                  />
                </FlexColumn>
              </FlexRow>
              <hr className={styles.divider} />
              <VerticalSpacer eightPx />
            </FlexContainer>
          ))}
        </React.Fragment>
      )}
      <Link onClick={() => visModal()} onKeyDown={e => (e.nativeEvent.code === 'Space' ? visModal() : false)}>
        <PlusCircleIcon className={styles.addCircleIcon} />
        <Detail className={styles.imageText}>
          <FormattedMessage id="Registrering.RegistrerVirksomhetPanel.Add" />
        </Detail>
      </Link>
      {formState.isSubmitted && formState.errors[EGEN_VIRKSOMHET_NAME_PREFIX]?.notRegisteredInput?.message && (
        <ErrorMessage>{formState.errors[EGEN_VIRKSOMHET_NAME_PREFIX]?.notRegisteredInput?.message}</ErrorMessage>
      )}
      {virksomhetIndex !== undefined && (
        <RegistrerVirksomhetModalForm
          showModal
          virksomhet={virksomhetIndex !== -1 && fields.length > virksomhetIndex ? fields[virksomhetIndex] : undefined}
          onSubmit={leggTilVirksomhet}
          closeEvent={lukkModal}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
      )}
    </div>
  );
};

export default RegistrerVirksomhetPanel;
