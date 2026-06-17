import { Fragment } from 'react';
import { useIntl } from 'react-intl';

import { BodyShort, Heading, Switch, Table, Tag } from '@navikt/ds-react';

import { type SnarvegDefinisjon, type SnarvegGruppe, snarvegDefinisjoner } from './snarvegDefinisjoner';
import { useSnarvegerContext } from './SnarvegerContext';

const GRUPPE_REKKEFOLGE: SnarvegGruppe[] = ['global', 'behandling'];

const Tastesekvens = ({ taster }: { taster: string[] }) => (
  <span className="inline-flex items-center gap-1">
    {taster.map((tast, index) => (
      <Fragment key={tast}>
        {index > 0 && <span className="text-ax-text-neutral-subtle text-sm">+</span>}
        <kbd className="border-ax-border-neutral bg-ax-bg-default inline-block min-w-6 rounded border border-b-2 px-1.5 py-0.5 text-center font-mono text-sm leading-tight">
          {tast}
        </kbd>
      </Fragment>
    ))}
  </span>
);

const GruppeTabell = ({ gruppe, definisjoner }: { gruppe: SnarvegGruppe; definisjoner: SnarvegDefinisjon[] }) => {
  const intl = useIntl();

  return (
    <div className="flex flex-col">
      <Heading size="small" level="3" spacing>
        {intl.formatMessage({ id: `Snarveger.Gruppe.${gruppe}` })}
      </Heading>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              {intl.formatMessage({ id: 'Snarveger.Kolonne.Taster' })}
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              {intl.formatMessage({ id: 'Snarveger.Kolonne.Handling' })}
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
                <BodyShort as="span">{intl.formatMessage({ id: def.beskrivelseId })}</BodyShort>
                {def.kunNarTilgjengelig && (
                  <Tag variant="neutral" size="xsmall" className="ml-2">
                    {intl.formatMessage({ id: 'Snarveger.KunNarTilgjengelig' })}
                  </Tag>
                )}
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

/**
 * Felles innhald for både snarvegsida og hjelp-modalen: listar opp alle snarvegane
 * gruppert, og lèt brukaren slå snarvegane av/på.
 */
export const SnarvegerOversikt = () => {
  const intl = useIntl();
  const { aktiv, settAktiv } = useSnarvegerContext();

  return (
    <div className="flex flex-col gap-6">
      <Switch checked={aktiv} onChange={event => settAktiv(event.target.checked)}>
        {intl.formatMessage({ id: 'Snarveger.SlaaPaa' })}
      </Switch>
      {GRUPPE_REKKEFOLGE.map(gruppe => (
        <GruppeTabell
          key={gruppe}
          gruppe={gruppe}
          definisjoner={snarvegDefinisjoner.filter(def => def.gruppe === gruppe)}
        />
      ))}
    </div>
  );
};
