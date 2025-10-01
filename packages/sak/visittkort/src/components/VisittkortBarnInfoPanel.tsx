import { useIntl } from 'react-intl';

import { StrollerIcon } from '@navikt/aksel-icons';
import { VisittKort } from '@navikt/ft-plattform-komponenter';

import type { FagsakHendelse } from '@navikt/fp-types';

import { VisittkortBarnInfoFodselPanel } from './VisittkortBarnInfoFodselPanel';
import { VisittkortBarnInfoOmsorgPanel } from './VisittkortBarnInfoOmsorgPanel';

interface Props {
  familiehendelse: FagsakHendelse;
}
export const VisittkortBarnInfoPanel = ({ familiehendelse }: Props) => {
  const intl = useIntl();
  const ikon = (
    <StrollerIcon
      title={intl.formatMessage({ id: 'VisittkortBarnInfoPanel.Barnevogn' })}
      height={24}
      width={24}
      color="white"
      style={{ backgroundColor: 'var(--ax-neutral-500)', borderRadius: '50%', padding: '2px' }}
    />
  );

  const erFodselEllerTerminSoknad = familiehendelse.hendelseType === 'FODSL' || familiehendelse.hendelseType === 'TERM';

  return (
    <VisittKort icon={ikon}>
      {erFodselEllerTerminSoknad && <VisittkortBarnInfoFodselPanel familiehendelse={familiehendelse} />}
      {!erFodselEllerTerminSoknad && <VisittkortBarnInfoOmsorgPanel familiehendelse={familiehendelse} />}
    </VisittKort>
  );
};
