import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Tag, BodyShort, Heading } from '@navikt/ds-react';

import { FlexColumn, FlexContainer, FlexRow, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { behandlingType } from '@navikt/fp-kodeverk';
import { AvklartBarn, FamilieHendelse, Soknad } from '@navikt/fp-types';

import FodselSammenligningOtherPanel from './FodselSammenligningOtherPanel';
import FodselSammenligningRevurderingPanel from './FodselSammenligningRevurderingPanel';

import styles from './fodselSammenligningPanel.module.css';

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
  <FlexContainer>
    <FlexRow>
      <FlexColumn className={styles.colWidthLeft}>
        {behandlingsTypeKode !== behandlingType.REVURDERING && (
          <FodselSammenligningOtherPanel soknad={soknad} termindato={termindato} />
        )}
        {behandlingsTypeKode === behandlingType.REVURDERING && (
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
          <Table
            noHover
            headerTextCodes={['FodselsammenligningPanel.Fodselsdato', 'FodselsammenligningPanel.Dodsdato']}
          >
            {avklartBarn.map((barn: AvklartBarn) => {
              const key = barn.fodselsdato + barn.dodsdato;
              return (
                <TableRow key={key} id={key}>
                  <TableColumn>
                    <BodyShort size="small">{formatDate(barn.fodselsdato)}</BodyShort>
                  </TableColumn>
                  <TableColumn>
                    <BodyShort size="small">{formatDate(barn.dodsdato)}</BodyShort>
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
          <div className={styles.noChildrenInTps}>
            <BodyShort size="small">-</BodyShort>
          </div>
        )}
      </FlexColumn>
    </FlexRow>
  </FlexContainer>
);

export default FodselSammenligningPanel;
