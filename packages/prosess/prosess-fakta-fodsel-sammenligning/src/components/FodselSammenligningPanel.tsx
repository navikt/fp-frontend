import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, HStack, Table, Tag } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { BehandlingType } from '@navikt/fp-kodeverk';
import type { AvklartBarn, FamilieHendelse, Soknad } from '@navikt/fp-types';

import { FodselSammenligningOtherPanel } from './FodselSammenligningOtherPanel';
import { FodselSammenligningRevurderingPanel } from './FodselSammenligningRevurderingPanel';

import styles from './fodselSammenligningPanel.module.css';

const formatDate = (date: string): string => (date ? dayjs(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

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
  <HStack gap="10">
    <div className={styles.col}>
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
    </div>
    <div className={styles.col}>
      <HStack gap="4">
        <Heading size="small">
          <FormattedMessage id="FodselsammenligningPanel.OpplysningerTPS" />
        </Heading>
        {nrOfDodfodteBarn > 0 && (
          <Tag variant="info">
            <FormattedMessage id="FodselsammenligningPanel.Dodfodt" />
          </Tag>
        )}
      </HStack>
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
              <Table.HeaderCell scope="col" />
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
    </div>
  </HStack>
);
