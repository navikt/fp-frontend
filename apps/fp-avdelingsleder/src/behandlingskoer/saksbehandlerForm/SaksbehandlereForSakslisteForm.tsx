import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Box, Checkbox, ExpansionCard, Label, Table, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { type SaksbehandlerDto, type SaksbehandlerGruppeDto, type SakslisteDto } from '@navikt/fp-types';

import { grupperOptions, lagreSakslisteSaksbehandler, LosUrl } from '../../data/fplosAvdelingslederApi';
import { type FormValues, ValgAvSaksbehandlere } from './ValgAvSaksbehandlere';

interface Props {
  valgtSaksliste: SakslisteDto;
  avdelingensSaksbehandlere: SaksbehandlerDto[];
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

  const queryClient = useQueryClient();
  const { mutate: lagreSaksbehandlere } = useMutation({
    mutationFn: async ({ brukerIdenter, checked }: { brukerIdenter: string[]; checked: boolean }) => {
      const resultater = await Promise.allSettled(
        brukerIdenter.map(brukerIdent =>
          lagreSakslisteSaksbehandler(valgtSaksliste.sakslisteId, brukerIdent, checked, valgtAvdelingEnhet),
        ),
      );
      const feil = resultater.find(resultat => resultat.status === 'rejected');
      if (feil) {
        throw feil.reason;
      }
    },
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const defaultValues = valgtSaksliste.saksbehandlere
    .map(sb => sb.brukerIdent)
    .reduce((acc, brukerIdent) => ({ ...acc, [brukerIdent]: true }), {});

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const formvalues = useWatch({ control: formMethods.control });

  useEffect(() => {
    formMethods.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- nullstill skjema berre når valt saksliste endrar seg; defaultValues er ny kvar render
  }, [valgtSaksliste.sakslisteId]);

  const harGrupper = grupper?.saksbehandlerGrupper.some(sg => sg.saksbehandlere.length > 0);

  return (
    <RhfForm<FormValues> formMethods={formMethods}>
      <Box padding="space-20" borderColor="neutral-subtle" borderRadius="0" borderWidth="1">
        <VStack gap="space-8">
          <Label size="small">
            <FormattedMessage id="Label.Saksbehandlere" />
          </Label>
          {sorterteAvdelingensSaksbehandlere.length === 0 && (
            <BodyShort size="small" textColor="subtle">
              <FormattedMessage id="SaksbehandlereForSakslisteForm.IngenSaksbehandlere" />
            </BodyShort>
          )}
          {harGrupper && (
            <Table size="small">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell scope="col">
                    <FormattedMessage id="SaksbehandlereForSakslisteForm.Gruppenavn" />
                  </Table.HeaderCell>
                  <Table.HeaderCell scope="col" align="right">
                    <FormattedMessage id="Label.AntallSaksbehandlere" />
                  </Table.HeaderCell>
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {grupper?.saksbehandlerGrupper.map(sg => (
                  <Table.ExpandableRow
                    key={sg.gruppeId}
                    expandOnRowClick
                    togglePlacement="right"
                    contentGutter="left"
                    content={
                      <ValgAvSaksbehandlere
                        saksbehandlere={sg.saksbehandlere.toSorted((sb1, sb2) => sb1.navn.localeCompare(sb2.navn))}
                        valgtSaksliste={valgtSaksliste}
                        valgtAvdelingEnhet={valgtAvdelingEnhet}
                      />
                    }
                  >
                    <Table.DataCell width="44px">
                      <Checkbox
                        hideLabel
                        indeterminate={
                          sg.saksbehandlere.some(saksbehandler => !formvalues[saksbehandler.brukerIdent]) &&
                          sg.saksbehandlere.some(saksbehandler => formvalues[saksbehandler.brukerIdent])
                        }
                        checked={sg.saksbehandlere.every(saksbehandler => formvalues[saksbehandler.brukerIdent])}
                        onChange={event => {
                          const checked = event.target.checked;
                          const endredeSaksbehandlere = sg.saksbehandlere.filter(
                            saksbehandler => !!formvalues[saksbehandler.brukerIdent] !== checked,
                          );
                          endredeSaksbehandlere.forEach(saksbehandler => {
                            formMethods.setValue(saksbehandler.brukerIdent, checked);
                          });
                          if (endredeSaksbehandlere.length > 0) {
                            lagreSaksbehandlere({
                              brukerIdenter: endredeSaksbehandlere.map(sb => sb.brukerIdent),
                              checked,
                            });
                          }
                        }}
                      >
                        <FormattedMessage
                          id="SaksbehandlereForSakslisteForm.VelgAlleIGruppe"
                          values={{ gruppeNavn: sg.gruppeNavn }}
                        />
                      </Checkbox>
                    </Table.DataCell>
                    <Table.DataCell>{sg.gruppeNavn}</Table.DataCell>
                    <Table.DataCell align="right">{antallTilknyttetSaksliste(valgtSaksliste, sg)}</Table.DataCell>
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

const antallTilknyttetSaksliste = (saksliste: SakslisteDto, gruppe: SaksbehandlerGruppeDto) => {
  let matchCount = 0;
  for (const ident of saksliste.saksbehandlere.map(sb => sb.brukerIdent)) {
    const matches = gruppe.saksbehandlere.filter(saksbehandler => saksbehandler.brukerIdent === ident);
    matchCount += matches.length;
  }
  return matchCount;
};
