import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Box, ExpansionCard, Label, Table, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import { type SaksbehandlerProfil } from '@navikt/fp-los-felles';

import { grupperOptions } from '../../data/fplosAvdelingslederApi';
import type { SaksbehandlerGruppe } from '../../typer/saksbehandlereOgSaksbehandlerGrupper';
import type { SakslisteAvdeling } from '../../typer/sakslisteAvdelingTsType';
import { ValgAvSaksbehandlere } from './ValgAvSaksbehandlere';

type FormValues = {
  reserverTil: string;
};

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

  useEffect(() => {
    formMethods.reset(defaultValues);
  }, [valgtSaksliste.sakslisteId]);

  const harGrupper =
    grupper &&
    grupper.saksbehandlerGrupper.length > 0 &&
    !grupper.saksbehandlerGrupper.every(sg => sg.saksbehandlere.length === 0);

  return (
    <RhfForm<FormValues> formMethods={formMethods}>
      <Box.New padding="5" borderColor="neutral-subtle" borderRadius="0" borderWidth="1">
        <VStack gap="space-8">
          <Label size="small">
            <FormattedMessage id="SaksbehandlereForSakslisteForm.Saksbehandlere" />
          </Label>
          {sorterteAvdelingensSaksbehandlere.length === 0 && (
            <BodyShort>
              <FormattedMessage id="SaksbehandlereForSakslisteForm.IngenSaksbehandlere" />
            </BodyShort>
          )}
          <VStack gap="space-40">
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
                  {grupper.saksbehandlerGrupper.map(sg => (
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
                        />
                      }
                      expandOnRowClick
                    >
                      <Table.DataCell scope="row">{sg.gruppeNavn}</Table.DataCell>
                      <Table.DataCell>{antallTilknyttetSaksliste(valgtSaksliste, sg)}</Table.DataCell>
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
      </Box.New>
    </RhfForm>
  );
};

const antallTilknyttetSaksliste = (saksliste: SakslisteAvdeling, gruppe: SaksbehandlerGruppe) => {
  let matchCount = 0;
  saksliste.saksbehandlerIdenter.forEach(ident => {
    const matches = gruppe.saksbehandlere.filter(saksbehandler => saksbehandler.brukerIdent === ident);
    matchCount += matches.length;
  });
  return matchCount;
};
