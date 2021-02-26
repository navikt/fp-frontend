import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { FagsakHendelse } from '@fpsak-frontend/types';
import { FlexColumn } from '@fpsak-frontend/shared-components';
import { DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import styles from './visittkortBarnInfoOmsorgPanel.less';

interface OwnProps {
  familiehendelse: FagsakHendelse;
}

const VisittkortBarnInfoOmsorgPanel: FunctionComponent<OwnProps> = ({
  familiehendelse,
}) => {
  const { hendelseType, hendelseDato, antallBarn } = familiehendelse;

  const erAdopsjon = hendelseType.kode === familieHendelseType.ADOPSJON;

  const foreldreansvarTekstkode = antallBarn === 1 ? 'VisittkortBarnInfoOmsorgPanel.Foreldreansvar' : 'VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn';
  const adopsjonTekstkode = antallBarn === 1 ? 'VisittkortBarnInfoOmsorgPanel.Adopsjon' : 'VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn';

  return (
    <FlexColumn className={styles.text}>
      <Normaltekst>
        <FormattedMessage
          id={erAdopsjon ? adopsjonTekstkode : foreldreansvarTekstkode}
          values={{ antall: antallBarn, dato: moment(hendelseDato).format(DDMMYYYY_DATE_FORMAT) }}
        />
      </Normaltekst>
    </FlexColumn>
  );
};

export default VisittkortBarnInfoOmsorgPanel;
