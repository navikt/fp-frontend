import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Image, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/ft-types';
import { formHooks } from '@navikt/ft-form-hooks';

import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import removeIcon from '@fpsak-frontend/assets/images/remove.svg';

import { SkjemaGruppe } from 'nav-frontend-skjema';
import RegistrerVirksomhetModalForm, { FormValues as ModalFormValues } from './RegistrerVirksomhetModalForm';

import styles from './registrerVirksomhetPanel.less';

export const EGEN_VIRKSOMHET_NAME_PREFIX = 'egenVirksomhet';

type VirtueltValideringsfeilFelt = {
  notRegisteredInput?: string;
}

export type FormValues = {
  virksomheter: ModalFormValues[];
}

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

const RegistrerVirksomhetPanel: FunctionComponent<OwnProps> = ({
  readOnly = false,
  alleKodeverk,
}) => {
  const intl = useIntl();
  const [virksomhetIndex, setVirksomhetIndex] = useState<number>();

  const {
    control, setError, formState, clearErrors,
  } = formHooks.useFormContext<{ [EGEN_VIRKSOMHET_NAME_PREFIX]: FormValues & VirtueltValideringsfeilFelt}>();
  const {
    fields, remove, append, update,
  } = formHooks.useFieldArray({
    control,
    name: `${EGEN_VIRKSOMHET_NAME_PREFIX}.virksomheter`,
  });

  const visModal = useCallback((index?: number): void => {
    setVirksomhetIndex(index !== undefined ? index : -1);
  }, [setVirksomhetIndex]);

  const lukkModal = useCallback((): void => {
    setVirksomhetIndex(undefined);
  }, [setVirksomhetIndex]);

  const leggTilVirksomhet = useCallback((virksomhet: ModalFormValues) => {
    const justertVirksomhet = {
      ...virksomhet,
      landJobberFra: virksomhet.virksomhetRegistrertINorge ? 'NOR' : virksomhet.landJobberFra,
      varigEndringGjeldendeFom: virksomhet.nyIArbeidslivetFom || virksomhet.varigEndringGjeldendeFom,
    };

    if (virksomhetIndex === -1) {
      append(justertVirksomhet);
    } else {
      update(virksomhetIndex, justertVirksomhet);
    }

    lukkModal();
  }, [append, update, lukkModal, virksomhetIndex]);

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
      <SkjemaGruppe feil={formState.isSubmitted ? formState.errors[EGEN_VIRKSOMHET_NAME_PREFIX]?.notRegisteredInput?.message : undefined}>
        {fields.length > 0 && (
          <React.Fragment key={1}>
            <Row key="VirksomhetHeader">
              <Column xs="8">
                <Element><FormattedMessage id="Registrering.RegistrerVirksomhetPanel.Name" /></Element>
              </Column>
            </Row>
            <hr className={styles.divider} />
            {fields.map((field, index) => (
              <React.Fragment key={2}>
                <Row key={field.id}>
                  <Column xs="8">
                    {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    }
                    <a
                      onClick={() => visModal(index)}
                      onKeyDown={() => visModal(index)}
                      className={styles.customLink}
                      role="link"
                      tabIndex={0}
                    >
                      <Normaltekst>
                        {field.navn}
                      </Normaltekst>
                    </a>
                  </Column>
                  <Column xs="4">
                    {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    }
                    <div
                      className={styles.removeButton}
                      onClick={() => remove(index)}
                      onKeyDown={() => remove(index)}
                      id="removebutton"
                      role="button"
                      tabIndex={0}
                    >
                      <Image src={removeIcon} />
                    </div>
                  </Column>
                </Row>
                <hr className={styles.divider} />
                <VerticalSpacer eightPx />
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
        {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
        }
        <div
          id="addbutton"
          className={styles.addVirksomhet}
          onClick={() => visModal()}
          onKeyDown={(e) => (e.nativeEvent.code === 'Space' ? visModal() : false)}
          role="button"
          tabIndex={0}
        >
          <Image
            className={styles.addCircleIcon}
            src={addCircleIcon}
          />
          <Undertekst className={styles.imageText}><FormattedMessage id="Registrering.RegistrerVirksomhetPanel.Add" /></Undertekst>
        </div>
      </SkjemaGruppe>
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
