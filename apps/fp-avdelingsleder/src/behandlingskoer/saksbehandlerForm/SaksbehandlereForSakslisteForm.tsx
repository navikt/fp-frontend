import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Box, Checkbox, ExpansionCard, Label, Table, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import { type SaksbehandlerProfil } from '@navikt/fp-los-felles';
import type { SakslisteAvdeling } from '@navikt/fp-types';

import { grupperOptions } from '../../data/fplosAvdelingslederApi';
import type { SaksbehandlerGruppe } from '../../typer/saksbehandlereOgSaksbehandlerGrupper';
import { type FormValues, ValgAvSaksbehandlere } from './ValgAvSaksbehandlere';

interface Props {
  valgtSaksliste: SakslisteAvdeling;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
  valgtAvdelingEnhet: string;
}

export const SaksbehandlereForSakslisteForm = ({
  avdelingensSaksbehandlere = [],
  valgtSaksliste,
  valgtAvdelingEnhet,
}: Props) => {
  const intl = useIntl();

  const sorterteAvdelingensSaksbehandlere = avdelingensSaksbehandlere.toSorted((saksbehandler1, saksbehandler2) =>
    saksbehandler1.navn.localeCompare(saksbehandler2.navn),
  );

  const { data: grupper } = useQuery(grupperOptions(valgtAvdelingEnhet));

  const defaultValues = valgtSaksliste.saksbehandlerIdenter.reduce(
    (acc, brukerIdent) => ({ ...acc, [brukerIdent]: true }),
    {},
  );

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const formvalues = formMethods.watch();

  useEffect(() => {
    formMethods.reset(defaultValues);
  }, [valgtSaksliste.sakslisteId]);

  const harGrupper =
    grupper &&
    grupper.saksbehandlerGrupper.length > 0 &&
    !grupper.saksbehandlerGrupper.every(sg => sg.saksbehandlere.length === 0);

  return (
    <RhfForm<FormValues> formMethods={formMethods}>
      <Box padding="space-20" borderColor="neutral-subtle" borderRadius="0" borderWidth="1">
        <VStack gap="space-8">
          <Label size="small">
            <FormattedMessage id="Label.Saksbehandlere" />
          </Label>
          {sorterteAvdelingensSaksbehandlere.length === 0 && (
            <BodyShort size="small">
              <FormattedMessage id="SaksbehandlereForSakslisteForm.IngenSaksbehandlere" />
            </BodyShort>
          )}
          <VStack gap="space-40">
            {harGrupper && (
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell scope="col">
                      <FormattedMessage id="SaksbehandlereForSakslisteForm.Gruppenavn" />
                    </Table.HeaderCell>
                    <Table.HeaderCell scope="col" align="right">
                      <FormattedMessage id="Label.AntallSaksbehandlere" />
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {grupper.saksbehandlerGrupper.map(sg => (
                    <Table.ExpandableRow
                      key={sg.gruppeId}
                      content={
                        <ValgAvSaksbehandlere
                          saksbehandlere={sg.saksbehandlere.toSorted((sb1, sb2) => sb1.navn.localeCompare(sb2.navn))}
                          valgtSaksliste={valgtSaksliste}
                          valgtAvdelingEnhet={valgtAvdelingEnhet}
                        />
                      }
                      expandOnRowClick
                    >
                      <Table.DataCell>
                        <Checkbox
                          aria-label={sg.gruppeId + '-checkbox'}
                          hideLabel
                          indeterminate={
                            !sg.saksbehandlere.every(saksbehandler => formvalues[saksbehandler.brukerIdent]) &&
                            sg.saksbehandlere.some(saksbehandler => formvalues[saksbehandler.brukerIdent])
                          }
                          checked={sg.saksbehandlere.every(saksbehandler => formvalues[saksbehandler.brukerIdent])}
                          onChange={event => {
                            sg.saksbehandlere.forEach(saksbehandler => {
                              formMethods.setValue(saksbehandler.brukerIdent, event.target.checked);
                            });
                          }}
                        >
                          {' '}
                        </Checkbox>
                      </Table.DataCell>
                      <Table.DataCell scope="row">{sg.gruppeNavn}</Table.DataCell>
                      <Table.DataCell align="right">{antallTilknyttetSaksliste(valgtSaksliste, sg)}</Table.DataCell>
                    </Table.ExpandableRow>
                  ))}
                </Table.Body>
              </Table>
            )}
          </VStack>
          {sorterteAvdelingensSaksbehandlere.length > 0 && !harGrupper && (
            <ValgAvSaksbehandlere
              saksbehandlere={sorterteAvdelingensSaksbehandlere}
              valgtSaksliste={valgtSaksliste}
              valgtAvdelingEnhet={valgtAvdelingEnhet}
            />
          )}
          {harGrupper && (
            <ExpansionCard
              aria-label={intl.formatMessage({ id: 'SaksbehandlereForSakslisteForm.VisAlle' })}
              size="small"
            >
              <ExpansionCard.Header>
                <ExpansionCard.Title size="small">
                  <FormattedMessage id="SaksbehandlereForSakslisteForm.VisAlle" />
                </ExpansionCard.Title>
              </ExpansionCard.Header>
              <ExpansionCard.Content>
                <ValgAvSaksbehandlere
                  saksbehandlere={sorterteAvdelingensSaksbehandlere}
                  valgtSaksliste={valgtSaksliste}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                />
              </ExpansionCard.Content>
            </ExpansionCard>
          )}
        </VStack>
      </Box>
    </RhfForm>
  );
};

const antallTilknyttetSaksliste = (saksliste: SakslisteAvdeling, gruppe: SaksbehandlerGruppe) => {
  let matchCount = 0;
  for (const ident of saksliste.saksbehandlerIdenter) {
    const matches = gruppe.saksbehandlere.filter(saksbehandler => saksbehandler.brukerIdent === ident);
    matchCount += matches.length;
  }
  return matchCount;
};
