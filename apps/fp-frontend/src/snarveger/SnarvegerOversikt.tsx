import { Fragment, useId } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Heading, HStack, Switch, Table, Tag, VStack } from '@navikt/ds-react';

import { type SnarvegDefinisjon, snarvegDefinisjoner, type SnarvegGruppe } from './snarvegDefinisjoner';
import { useSnarvegerContext } from './SnarvegerContext';

/**
 * Felles innhald for både snarvegsida og hjelp-modalen: listar opp alle snarvegane
 * gruppert, og lèt brukaren slå snarvegane av/på.
 */
export const SnarvegerOversikt = () => {
  const { aktiv, settAktiv } = useSnarvegerContext();

  return (
    <VStack gap="space-24">
      <Switch checked={aktiv} onChange={event => settAktiv(event.target.checked)}>
        <FormattedMessage id="Snarveger.SlåPå" />
      </Switch>
      {GRUPPE_REKKEFOLGE.map(gruppe => (
        <GruppeTabell
          key={gruppe}
          gruppe={gruppe}
          definisjoner={snarvegDefinisjoner.filter(def => def.gruppe === gruppe)}
        />
      ))}
    </VStack>
  );
};

const GRUPPE_REKKEFOLGE: SnarvegGruppe[] = ['global', 'behandling'];

const GruppeTittel = ({ gruppe }: { gruppe: SnarvegGruppe }) => {
  switch (gruppe) {
    case 'global':
      return <FormattedMessage id="Snarveger.Gruppe.global" />;
    case 'behandling':
      return <FormattedMessage id="Snarveger.Gruppe.behandling" />;
  }
};

const Tastesekvens = ({ taster }: { taster: string[] }) => (
  <HStack as="span" gap="space-4" align="center">
    {taster.map((tast, index) => (
      <Fragment key={tast}>
        {index > 0 && <span aria-label="deretter">→</span>}
        <Box
          asChild
          background="default"
          borderColor="neutral-subtle"
          borderWidth="1 1 2 1"
          borderRadius="4"
          minWidth="1.5rem"
          paddingInline="space-8"
          paddingBlock="space-2"
        >
          <kbd className="inline-block text-center font-mono text-sm leading-5">{tast}</kbd>
        </Box>
      </Fragment>
    ))}
  </HStack>
);

const GruppeTabell = ({ gruppe, definisjoner }: { gruppe: SnarvegGruppe; definisjoner: SnarvegDefinisjon[] }) => {
  const headingId = `${useId()}-${gruppe}`;

  return (
    <VStack gap="space-8">
      <Heading id={headingId} size="small" level="3">
        <GruppeTittel gruppe={gruppe} />
      </Heading>
      <Table size="small" aria-labelledby={headingId}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="Snarveger.Kolonne.Taster" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="Snarveger.Kolonne.Handling" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {definisjoner.map(def => (
            <Table.Row key={def.id}>
              <Table.DataCell>
                <Tastesekvens taster={def.taster} />
              </Table.DataCell>
              <Table.DataCell>
                <HStack as="span" gap="space-8" align="center" wrap>
                  <BodyShort as="span">{def.beskrivelse}</BodyShort>
                  {def.kunNårTilgjengelig && (
                    <Tag variant="neutral" size="xsmall">
                      <FormattedMessage id="Snarveger.KunNårTilgjengelig" />
                    </Tag>
                  )}
                </HStack>
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </VStack>
  );
};
