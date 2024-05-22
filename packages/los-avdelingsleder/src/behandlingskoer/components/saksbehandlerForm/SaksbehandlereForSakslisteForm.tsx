import { Label, Panel, Table } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { restApiHooks, RestApiPathsKeys } from '../../../data/fplosRestApi';
import Saksbehandler from '../../../typer/saksbehandlerAvdelingTsType';
import Saksliste from '../../../typer/sakslisteAvdelingTsType';

import SaksbehandlereOgSaksbehandlerGrupper, { SaksbehandlerGruppe } from '../../../typer/saksbehandlereOgSaksbehandlerGrupper ';
import styles from './saksbehandlereForSakslisteForm.module.css';
import ValgAvSaksbehandlere from './ValgAvSaksbehandlere';

const sortSaksbehandlere = (saksbehandlere: Saksbehandler[]) =>
  saksbehandlere && saksbehandlere instanceof Array
    ? [...saksbehandlere].sort((saksbehandler1, saksbehandler2) =>
        saksbehandler1.navn.localeCompare(saksbehandler2.navn),
      )
    : saksbehandlere;

const finnesDetGrupperMedSaksbehandlere = (grupper?: SaksbehandlereOgSaksbehandlerGrupper) =>
  grupper &&
  grupper.saksbehandlerGrupper.length > 0 &&
  !grupper.saksbehandlerGrupper.every(sg => sg.saksbehandlere.length === 0);

const antallTilknyttetSaksliste = (saksliste: Saksliste, gruppe: SaksbehandlerGruppe) => {
  let matchCount = 0;
  saksliste.saksbehandlerIdenter.forEach(ident => {
    const matches = gruppe.saksbehandlere.filter(saksbehandler => saksbehandler.brukerIdent === ident);
    matchCount += matches.length;
  });
  return matchCount;
};

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

  const { data: grupper } = restApiHooks.useRestApi(RestApiPathsKeys.HENT_GRUPPER, {
    avdelingEnhet: valgtAvdelingEnhet,
  });

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

  const harGrupper = finnesDetGrupperMedSaksbehandlere(grupper);

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
        {harGrupper && (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="SaksbehandlereForSakslisteForm.Gruppenavn" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="SaksbehandlereForSakslisteForm.AntallSaksbehandlere" />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {grupper?.saksbehandlerGrupper.map(sg => (
                <Table.ExpandableRow
                  key={sg.gruppeId}
                  content={
                    <ValgAvSaksbehandlere
                      saksbehandlere={sg.saksbehandlere.map(sb => ({
                        brukerIdent: sb.brukerIdent,
                        navn: sb.navn,
                      }))}
                      valgtSaksliste={valgtSaksliste}
                      valgtAvdelingEnhet={valgtAvdelingEnhet}
                      hentAvdelingensSakslister={hentAvdelingensSakslister}
                    />
                  }
                >
                  <Table.DataCell scope="row">{sg.gruppeNavn}</Table.DataCell>
                  <Table.DataCell>{antallTilknyttetSaksliste(valgtSaksliste, sg)}</Table.DataCell>
                </Table.ExpandableRow>
              ))}
            </Table.Body>
          </Table>
        )}
        {sorterteAvdelingensSaksbehandlere.length > 0 && !harGrupper && (
          <ValgAvSaksbehandlere
            saksbehandlere={sorterteAvdelingensSaksbehandlere}
            valgtSaksliste={valgtSaksliste}
            valgtAvdelingEnhet={valgtAvdelingEnhet}
            hentAvdelingensSakslister={hentAvdelingensSakslister}
          />
        )}
      </Panel>
    </Form>
  );
};

export default SaksbehandlereForSakslisteForm;
