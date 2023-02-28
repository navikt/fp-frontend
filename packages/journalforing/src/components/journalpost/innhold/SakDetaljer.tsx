import React, { FunctionComponent, ReactElement } from 'react';
import {
  Label, Detail, Tag,
} from '@navikt/ds-react';
import { NewTab } from '@navikt/ds-icons';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { FagsakStatus } from '@navikt/ft-kodeverk';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { Clipboard } from '@navikt/ft-plattform-komponenter';
import styles from './sakDetaljer.less';
import { finnYtelseTekst } from '../form/VelgSakForm';
import JournalFagsak from '../../../typer/journalFagsakTsType';

const velgSakLenke = (saksnummer: string): string => (`/fagsak/${saksnummer}/`);

const finnStatusTekst = (statusKode: string): string => {
  switch (statusKode) {
    case FagsakStatus.AVSLUTTET:
      return 'Journal.Sak.Avsluttet';
    case FagsakStatus.LOPENDE:
      return 'Journal.Sak.Løpende';
    case FagsakStatus.OPPRETTET:
      return 'Journal.Sak.Opprettet';
    case FagsakStatus.UNDER_BEHANDLING:
      return 'Journal.Sak.UnderBehandling';
    default:
      return '';
  }
};

const lagEtikett = (fagsakStatus: string): ReactElement => {
  switch (fagsakStatus) {
    case FagsakStatus.AVSLUTTET:
      return <Tag variant="neutral"><FormattedMessage id={finnStatusTekst(fagsakStatus)} /></Tag>;
    case FagsakStatus.LOPENDE:
      return <Tag variant="warning"><FormattedMessage id={finnStatusTekst(fagsakStatus)} /></Tag>;
    case FagsakStatus.OPPRETTET:
      return <Tag variant="alt1"><FormattedMessage id={finnStatusTekst(fagsakStatus)} /></Tag>;
    case FagsakStatus.UNDER_BEHANDLING:
      return <Tag variant="alt2"><FormattedMessage id={finnStatusTekst(fagsakStatus)} /></Tag>;
    default:
      throw new Error(`Ukjent fagsakstatus ${fagsakStatus}`);
  }
};
type OwnProps = Readonly<{
  sak: JournalFagsak;
}>;

/**
 * SakDetaljer - Inneholder detaljer om en sak som kan knyttes til journalposten
 */
const SakDetaljer: FunctionComponent<OwnProps> = ({
  sak,
}) => {
  const lenke = velgSakLenke(sak.saksnummer);
  return (
    <div className={styles.sakContainer}>
      <div className={styles.sakDataFelt}>
        <FlexRow>
          <FlexColumn>
            <Label>
              <FormattedMessage id={finnYtelseTekst(sak.ytelseType)} />
            </Label>
          </FlexColumn>
          <FlexColumn>
            <Clipboard>
              <Label>
                {sak.saksnummer}
              </Label>
            </Clipboard>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <Detail>
              <FormattedMessage id="Journal.Sak.OpprettetDato" values={{ opprettetDato: dayjs(sak.datoOpprettet).format(DDMMYYYY_DATE_FORMAT) }} />
            </Detail>
          </FlexColumn>
          {sak.sistEndret && (
            <FlexColumn>
              <Detail>
                <FormattedMessage id="Journal.Sak.EndretDato" values={{ endretDato: dayjs(sak.sistEndret).format(DDMMYYYY_DATE_FORMAT) }} />
              </Detail>
            </FlexColumn>
          )}
        </FlexRow>
      </div>
      <div className={styles.etikettFelt}>
        <FlexRow>
          <FlexColumn>
            {lagEtikett(sak.status)}
          </FlexColumn>
        </FlexRow>
      </div>
      <div className={styles.faneFelt}>
        <FlexRow>
          <FlexColumn>
            <a href={lenke} target="_blank" rel="noreferrer"><NewTab className={styles.newTabIcon} /></a>
          </FlexColumn>
        </FlexRow>
      </div>
    </div>
  );
};
export default SakDetaljer;
