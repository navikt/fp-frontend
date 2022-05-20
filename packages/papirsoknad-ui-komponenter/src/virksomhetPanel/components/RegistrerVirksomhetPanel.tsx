import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Image, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/ft-types';
import { formHooks, SkjemaGruppeMedFeilviser } from '@navikt/ft-form-hooks';

import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import removeIcon from '@fpsak-frontend/assets/images/remove.svg';

import RegistrerVirksomhetModalForm, { FormValues as ModalFormValues } from './RegistrerVirksomhetModalForm';

import styles from './registrerVirksomhetPanel.less';

export const EGEN_VIRKSOMHET_NAME_PREFIX = 'egenVirksomhet';

interface OwnProps {
  readOnly?: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * RegistrererVirksomhetPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og søker har arbeidet i egen virksomhet.
 * Viser registrerte virksomheter samt knapp for å legge til nye virksomheter.
 */

const RegistrerVirksomhetPanel: FunctionComponent<OwnProps> = ({
  readOnly = false,
  alleKodeverk,
}) => {
  const [virksomhetIndex, setVirksomhetIndex] = useState<number>();

  const { control, formState } = formHooks.useFormContext<{ [EGEN_VIRKSOMHET_NAME_PREFIX]: { virksomheter: ModalFormValues[] } }>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${EGEN_VIRKSOMHET_NAME_PREFIX}.virksomheter`,
  });

  const visModal = (index?: number): void => {
    setVirksomhetIndex(index || -1);
  };

  const lukkModal = (): void => {
    setVirksomhetIndex(undefined);
  };

  const leggTilVirksomhet = (virksomhet: ModalFormValues) => {
    const justertVirksomhet = {
      ...virksomhet,
      landJobberFra: virksomhet.virksomhetRegistrertINorge ? 'NOR' : virksomhet.landJobberFra,
      varigEndringGjeldendeFom: virksomhet.nyIArbeidslivetFom || virksomhet.varigEndringGjeldendeFom,
    };
    append(justertVirksomhet);

    lukkModal();
  };

  return (
    <div className={styles.fieldsList}>
      <SkjemaGruppeMedFeilviser
        name="feil"
        errorMessage={formState.errors && (formState.isDirty || !formState.isSubmitSuccessful) ? formState.errors : null}
      >
        {fields.length > 0 && (
          <React.Fragment key={1}>
            <Row key="VirksomhetHeader">
              <Column xs="8">
                <Element><FormattedMessage id="Registrering.RegistrerVirksomhetPanel.Name" /></Element>
              </Column>
            </Row>
            <hr className={styles.divider} />
            {fields.map((virksomhet, index) => (
              <React.Fragment key={2}>
                <Row key={`${virksomhet}.navn`}>
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
                        {virksomhet.navn}
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
      </SkjemaGruppeMedFeilviser>
      <RegistrerVirksomhetModalForm
        showModal={!!virksomhetIndex}
        virksomhet={virksomhetIndex !== -1 && fields.length > virksomhetIndex ? fields[virksomhetIndex] : undefined}
        onSubmit={leggTilVirksomhet}
        closeEvent={lukkModal}
        readOnly={readOnly}
        alleKodeverk={alleKodeverk}
      />
    </div>
  );
};

export default RegistrerVirksomhetPanel;
