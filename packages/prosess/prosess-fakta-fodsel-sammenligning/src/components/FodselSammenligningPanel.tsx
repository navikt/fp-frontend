import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Table, Tag } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import moment from 'moment';

import { BehandlingType } from '@navikt/fp-kodeverk';
import type { AvklartBarn, FamilieHendelse, Soknad } from '@navikt/fp-types';

import { FodselSammenligningOtherPanel } from './FodselSammenligningOtherPanel';
import { FodselSammenligningRevurderingPanel } from './FodselSammenligningRevurderingPanel';

import styles from './fodselSammenligningPanel.module.css';

const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

interface Props {
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
export const FodselSammenligningPanel = ({
  behandlingsTypeKode,
  avklartBarn,
  nrOfDodfodteBarn,
  soknad,
  vedtaksDatoSomSvangerskapsuke,
  termindato,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
}: Props) => (
  <FlexContainer>
    <FlexRow>
      <FlexColumn className={styles.colWidthLeft}>
        {behandlingsTypeKode !== BehandlingType.REVURDERING && (
          <FodselSammenligningOtherPanel soknad={soknad} termindato={termindato} />
        )}
        {behandlingsTypeKode === BehandlingType.REVURDERING && (
          <FodselSammenligningRevurderingPanel
            soknadOriginalBehandling={soknadOriginalBehandling}
            familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
            vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
          />
        )}
      </FlexColumn>
      <FlexColumn className={styles.colWidthRight}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Heading size="small">
                <FormattedMessage id="FodselsammenligningPanel.OpplysningerTPS" />
              </Heading>
            </FlexColumn>
            {nrOfDodfodteBarn > 0 && (
              <FlexColumn>
                <Tag variant="info">
                  <FormattedMessage id="FodselsammenligningPanel.Dodfodt" />
                </Tag>
              </FlexColumn>
            )}
          </FlexRow>
        </FlexContainer>
        {avklartBarn.length > 0 && (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="FodselsammenligningPanel.Fodselsdato" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="FodselsammenligningPanel.Dodsdato" />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {avklartBarn.map((barn: AvklartBarn) => {
                const key = barn.fodselsdato + barn.dodsdato;
                return (
                  <Table.Row key={key} id={key}>
                    <Table.DataCell>
                      <BodyShort size="small">{formatDate(barn.fodselsdato)}</BodyShort>
                    </Table.DataCell>
                    <Table.DataCell>
                      <BodyShort size="small">{barn.dodsdato ? formatDate(barn.dodsdato) : '-'}</BodyShort>
                    </Table.DataCell>
                    <Table.DataCell>
                      {barn.dodsdato && (
                        <Tag variant="info">
                          <FormattedMessage id="FodselsammenligningPanel.Dod" />
                        </Tag>
                      )}
                    </Table.DataCell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        )}
        {avklartBarn.length === 0 && (
          <div className={styles.noChildrenInTps}>
            <BodyShort size="small">-</BodyShort>
          </div>
        )}
      </FlexColumn>
    </FlexRow>
  </FlexContainer>
);
