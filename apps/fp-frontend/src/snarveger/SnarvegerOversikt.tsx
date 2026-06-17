import { Fragment } from 'react';
import { useIntl } from 'react-intl';

import { BodyShort, Heading, Switch, Table, Tag } from '@navikt/ds-react';

import { type SnarvegDefinisjon, type SnarvegGruppe, snarvegDefinisjoner } from './snarvegDefinisjoner';
import { useSnarvegerContext } from './SnarvegerContext';

import styles from './snarvegerOversikt.module.css';

const GRUPPE_REKKEFOLGE: SnarvegGruppe[] = ['global', 'behandling'];

const Tastesekvens = ({ taster }: { taster: string[] }) => (
  <span className={styles['tastesekvens']}>
    {taster.map((tast, index) => (
      <Fragment key={tast}>
        {index > 0 && <span className={styles['deretter']}>+</span>}
        <kbd className={styles['tast']}>{tast}</kbd>
      </Fragment>
    ))}
  </span>
);

const GruppeTabell = ({ gruppe, definisjoner }: { gruppe: SnarvegGruppe; definisjoner: SnarvegDefinisjon[] }) => {
  const intl = useIntl();

  return (
    <div className={styles['gruppe']}>
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
                  <Tag variant="neutral" size="xsmall" className={styles['merknad']}>
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
    <div className={styles['oversikt']}>
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
