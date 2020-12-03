import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { EtikettInfo } from 'nav-frontend-etiketter';
import { Column, Row } from 'nav-frontend-grid';
import Panel from 'nav-frontend-paneler';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import {
  Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
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
  vedtaksDatoSomSvangerskapsuke?: string;
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
          <Element><FormattedMessage id="FodselsammenligningPanel.OpplysningerTPS" /></Element>
        </Column>
        {nrOfDodfodteBarn > 0 && (
          <Column xs="3">
            <EtikettInfo className={styles.dodMerke} typo="undertekst">
              <FormattedMessage id="FodselsammenligningPanel.Dodfodt" />
            </EtikettInfo>
          </Column>
        )}
      </Row>
      <Row>
        <Column xs="4"><Normaltekst><FormattedMessage id="FodselsammenligningPanel.Fodselsdato" /></Normaltekst></Column>
        <Column xs="4"><Normaltekst><FormattedMessage id="FodselsammenligningPanel.Dodsdato" /></Normaltekst></Column>
      </Row>
      <Row>
        {avklartBarn.length > 0 && (
          <Table>
            {avklartBarn.map((barn: AvklartBarn) => {
              const key = barn.fodselsdato + barn.dodsdato;
              return (
                <TableRow key={key} id={key}>
                  <TableColumn>
                    <Normaltekst>
                      {formatDate(barn.fodselsdato)}
                    </Normaltekst>
                  </TableColumn>
                  <TableColumn>
                    <Normaltekst>
                      {formatDate(barn.dodsdato)}
                    </Normaltekst>
                  </TableColumn>
                  <TableColumn>
                    {barn.dodsdato && (
                      <EtikettInfo className={styles.dodMerke} typo="undertekst">
                        <FormattedMessage id="FodselsammenligningPanel.Dod" />
                      </EtikettInfo>
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
              <Normaltekst>
                -
              </Normaltekst>
            </Column>
          </Row>
        )}
      </Row>
    </Panel>
  </div>
);

export default FodselSammenligningPanel;
