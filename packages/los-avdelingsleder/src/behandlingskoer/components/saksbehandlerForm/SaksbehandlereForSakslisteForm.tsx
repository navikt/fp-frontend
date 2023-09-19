import React, { FunctionComponent, useMemo, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { HStack, Label, Panel, VStack } from '@navikt/ds-react';
import { Form, CheckboxField } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { restApiHooks, RestApiPathsKeys } from '../../../data/fplosRestApi';
import Saksbehandler from '../../../typer/saksbehandlerAvdelingTsType';
import Saksliste from '../../../typer/sakslisteAvdelingTsType';

import styles from './saksbehandlereForSakslisteForm.module.css';

const sortSaksbehandlere = (saksbehandlere: Saksbehandler[]) =>
  saksbehandlere && saksbehandlere instanceof Array
    ? [...saksbehandlere].sort((saksbehandler1, saksbehandler2) =>
        saksbehandler1.navn.localeCompare(saksbehandler2.navn),
      )
    : saksbehandlere;

type FormValues = {
  reserverTil: string;
};

interface OwnProps {
  valgtSaksliste: Saksliste;
  avdelingensSaksbehandlere: Saksbehandler[];
  valgtAvdelingEnhet: string;
  hentAvdelingensSakslister: (params: { avdelingEnhet: string }) => void;
}

/**
 * SaksbehandlereForSakslisteForm
 */
const SaksbehandlereForSakslisteForm: FunctionComponent<OwnProps> = ({
  avdelingensSaksbehandlere = [],
  valgtSaksliste,
  valgtAvdelingEnhet,
  hentAvdelingensSakslister,
}) => {
  const sorterteAvdelingensSaksbehandlere = useMemo(
    () => sortSaksbehandlere(avdelingensSaksbehandlere),
    [avdelingensSaksbehandlere],
  );
  const pos = Math.ceil(sorterteAvdelingensSaksbehandlere.length / 2);
  const avdelingensSaksbehandlereVenstreListe = sorterteAvdelingensSaksbehandlere.slice(0, pos);
  const avdelingensSaksbehandlereHoyreListe = sorterteAvdelingensSaksbehandlere.slice(pos);

  const { startRequest: knyttSaksbehandlerTilSaksliste } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER,
  );

  const defaultValues = valgtSaksliste.saksbehandlerIdenter.reduce(
    (acc, brukerIdent) => ({ ...acc, [brukerIdent]: true }),
    {},
  );

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  useEffect(() => {
    formMethods.reset(defaultValues);
  }, [valgtSaksliste.sakslisteId]);

  return (
    <Form<FormValues> formMethods={formMethods}>
      <Panel className={styles.panel}>
        <Label size="small">
          <FormattedMessage id="SaksbehandlereForSakslisteForm.Saksbehandlere" />
        </Label>
        <VerticalSpacer sixteenPx />
        {sorterteAvdelingensSaksbehandlere.length === 0 && (
          <FormattedMessage id="SaksbehandlereForSakslisteForm.IngenSaksbehandlere" />
        )}
        {sorterteAvdelingensSaksbehandlere.length > 0 && (
          <HStack>
            <VStack gap="2" className={styles.colLeft}>
              {avdelingensSaksbehandlereVenstreListe.map(s => (
                <CheckboxField
                  key={s.brukerIdent}
                  name={s.brukerIdent}
                  label={s.navn}
                  onChange={isChecked =>
                    knyttSaksbehandlerTilSaksliste({
                      sakslisteId: valgtSaksliste.sakslisteId,
                      brukerIdent: s.brukerIdent,
                      checked: isChecked,
                      avdelingEnhet: valgtAvdelingEnhet,
                    }).then(() => hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet }))
                  }
                />
              ))}
            </VStack>
            <VStack gap="2">
              {avdelingensSaksbehandlereHoyreListe.map(s => (
                <CheckboxField
                  key={s.brukerIdent}
                  name={s.brukerIdent}
                  label={s.navn}
                  onChange={isChecked =>
                    knyttSaksbehandlerTilSaksliste({
                      sakslisteId: valgtSaksliste.sakslisteId,
                      brukerIdent: s.brukerIdent,
                      checked: isChecked,
                      avdelingEnhet: valgtAvdelingEnhet,
                    }).then(() => hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet }))
                  }
                />
              ))}
            </VStack>
          </HStack>
        )}
      </Panel>
    </Form>
  );
};

export default SaksbehandlereForSakslisteForm;
