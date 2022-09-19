import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import {
  Tag, Panel, Label, BodyShort,
} from '@navikt/ds-react';
import { Column, Row } from 'nav-frontend-grid';

import {
  Table, TableColumn, TableRow,
} from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { AvklartBarn, FamilieHendelse, Soknad } from '@fpsak-frontend/types';

import FodselSammenligningOtherPanel from './FodselSammenligningOtherPanel';
import FodselSammenligningRevurderingPanel from './FodselSammenligningRevurderingPanel';

import styles from './fodselSammenligningPanel.less';

const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

interface OwnProps {
  behandlingsTypeKode: string;
  avklartBarn: AvklartBarn[];
  nrOfDodfodteBarn: number;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  termindato?: string;
  vedtaksDatoSomSvangerskapsuke?: number;
}

/**
 * FodselSammenlingningPanel
 *
 * Presentasjonskomponent. Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.
 */
const FodselSammenligningPanel: FunctionComponent<OwnProps> = ({
  behandlingsTypeKode,
  avklartBarn,
  nrOfDodfodteBarn,
  soknad,
  vedtaksDatoSomSvangerskapsuke,
  termindato,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
}) => (
  <div className={styles.panelWrapper}>
    <Panel className={styles.panel}>
      {behandlingsTypeKode !== behandlingType.REVURDERING
        && <FodselSammenligningOtherPanel soknad={soknad} termindato={termindato} />}
      {behandlingsTypeKode === behandlingType.REVURDERING && (
        <FodselSammenligningRevurderingPanel
          soknadOriginalBehandling={soknadOriginalBehandling}
          familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
          vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
        />
      )}
    </Panel>
    <Panel className={styles.panel}>
      <Row>
        <Column xs="9">
          <Label size="small"><FormattedMessage id="FodselsammenligningPanel.OpplysningerTPS" /></Label>
        </Column>
        {nrOfDodfodteBarn > 0 && (
          <Column xs="3">
            <Tag variant="info">
              <FormattedMessage id="FodselsammenligningPanel.Dodfodt" />
            </Tag>
          </Column>
        )}
      </Row>
      <Row>
        {avklartBarn.length > 0 && (
          <Table headerTextCodes={['FodselsammenligningPanel.Fodselsdato', 'FodselsammenligningPanel.Dodsdato']}>
            {avklartBarn.map((barn: AvklartBarn) => {
              const key = barn.fodselsdato + barn.dodsdato;
              return (
                <TableRow key={key} id={key}>
                  <TableColumn>
                    <BodyShort size="small">
                      {formatDate(barn.fodselsdato)}
                    </BodyShort>
                  </TableColumn>
                  <TableColumn>
                    <BodyShort size="small">
                      {formatDate(barn.dodsdato)}
                    </BodyShort>
                  </TableColumn>
                  <TableColumn>
                    {barn.dodsdato && (
                      <Tag variant="info">
                        <FormattedMessage id="FodselsammenligningPanel.Dod" />
                      </Tag>
                    )}
                  </TableColumn>
                </TableRow>
              );
            })}
          </Table>
        )}
        {avklartBarn.length === 0 && (
          <Row>
            <Column xs="12" className={styles.noChildrenInTps}>
              <BodyShort size="small">
                -
              </BodyShort>
            </Column>
          </Row>
        )}
      </Row>
    </Panel>
  </div>
);

export default FodselSammenligningPanel;
