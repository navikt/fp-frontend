import React, { FunctionComponent } from 'react';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { FagsakHendelse } from '@fpsak-frontend/types';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@fpsak-frontend/shared-components';
import barnevognImage from '@fpsak-frontend/assets/images/barnevogn.svg';

import VisittkortBarnInfoFodselPanel from './VisittkortBarnInfoFodselPanel';
import VisittkortBarnInfoOmsorgPanel from './VisittkortBarnInfoOmsorgPanel';

import styles from './visittkortBarnInfoPanel.less';

interface OwnProps {
  familiehendelse: FagsakHendelse;
}

const VisittkortBarnInfoPanel: FunctionComponent<OwnProps> = ({
  familiehendelse,
}) => {
  const erFodselEllerTerminSoknad = familiehendelse.hendelseType === familieHendelseType.FODSEL
    || familiehendelse.hendelseType === familieHendelseType.TERMIN;

  return (
    <div className={styles.container}>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.image}>
            <Image src={barnevognImage} />
          </FlexColumn>
          {erFodselEllerTerminSoknad && <VisittkortBarnInfoFodselPanel familiehendelse={familiehendelse} />}
          {!erFodselEllerTerminSoknad && <VisittkortBarnInfoOmsorgPanel familiehendelse={familiehendelse} />}
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default VisittkortBarnInfoPanel;
