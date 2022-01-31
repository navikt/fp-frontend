import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { EtikettInfo } from 'nav-frontend-etiketter';
import { Normaltekst } from 'nav-frontend-typografi';

import { FagsakHendelse } from '@fpsak-frontend/types';
import { FlexColumn } from '@fpsak-frontend/shared-components';
import { dateFormat, DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import styles from './visittkortBarnInfoFodselPanel.less';

const finnFodselsdatoTekstkode = (antallBarn: number): string => {
  if (antallBarn === 1) {
    return 'VisittkortBarnInfoFodselPanel.Fodt';
  }
  return antallBarn === 2 ? 'VisittkortBarnInfoFodselPanel.Tvillinger' : 'VisittkortBarnInfoFodselPanel.Flerlinger';
};

const finnAlderTekstProps = (fødselsdato: string) => {
  const ar = moment().diff(fødselsdato, 'years');
  const maneder = moment().diff(fødselsdato, 'months');
  const dager = moment().diff(fødselsdato, 'days');

  let tekstkode;
  if (ar > 0) {
    tekstkode = 'VisittkortBarnInfoFodselPanel.Ar.Fodt';
  } else if (maneder > 0) {
    tekstkode = 'VisittkortBarnInfoFodselPanel.Maned.Fodt';
  } else if (dager >= 0) {
    if (dager === 1) { tekstkode = 'VisittkortBarnInfoFodselPanel.Dag.Fodt'; }
    if (dager === 0 || dager > 1) { tekstkode = 'VisittkortBarnInfoFodselPanel.Dager.Fodt'; }
  }

  return {
    id: tekstkode,
    values: {
      value: ar || maneder || dager,
    },
  };
};

interface OwnProps {
  familiehendelse: FagsakHendelse;
}

const VisittkortBarnInfoFodselPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  familiehendelse,
}) => {
  const {
    hendelseType, hendelseDato, antallBarn, dødfødsel,
  } = familiehendelse;

  const visFødselsdato = hendelseType === familieHendelseType.FODSEL;

  return (
    <>
      <FlexColumn className={styles.text}>
        <Normaltekst>
          {visFødselsdato && !!hendelseDato && antallBarn > 0 && (
            <>
              <FormattedMessage id={finnFodselsdatoTekstkode(antallBarn)} values={{ dato: moment(hendelseDato).format(DDMMYYYY_DATE_FORMAT) }} />
              {!dødfødsel && (
                <FormattedMessage {...finnAlderTekstProps(hendelseDato)} />
              )}
            </>
          )}
          {visFødselsdato && (!hendelseDato || antallBarn === 0) && (
            <FormattedMessage id="VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger" />
          )}
          {!visFødselsdato && <FormattedMessage id="VisittkortBarnInfoFodselPanel.Termin" values={{ dato: dateFormat(hendelseDato) }} />}
        </Normaltekst>
      </FlexColumn>
      {dødfødsel && (
        <FlexColumn>
          <EtikettInfo className={styles.etikett} title={intl.formatMessage({ id: 'VisittkortBarnInfoFodselPanel.DodTittel' })}>
            <FormattedMessage id="VisittkortBarnInfoFodselPanel.Dod" />
          </EtikettInfo>
        </FlexColumn>
      )}
    </>
  );
};

export default injectIntl(VisittkortBarnInfoFodselPanel);
