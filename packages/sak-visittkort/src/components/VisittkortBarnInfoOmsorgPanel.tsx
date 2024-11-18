import React from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { FagsakHendelse } from '@navikt/fp-types';
import { FamilieHendelseType } from '@navikt/fp-kodeverk';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

interface Props {
  familiehendelse: FagsakHendelse;
}

export const VisittkortBarnInfoOmsorgPanel = ({ familiehendelse }: Props) => {
  const { hendelseType, hendelseDato, antallBarn } = familiehendelse;

  const erAdopsjon = hendelseType === FamilieHendelseType.ADOPSJON;

  const foreldreansvarTekstkode =
    antallBarn === 1
      ? 'VisittkortBarnInfoOmsorgPanel.Foreldreansvar'
      : 'VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn';
  const adopsjonTekstkode =
    antallBarn === 1 ? 'VisittkortBarnInfoOmsorgPanel.Adopsjon' : 'VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn';

  return (
    <BodyShort>
      <FormattedMessage
        id={erAdopsjon ? adopsjonTekstkode : foreldreansvarTekstkode}
        values={{ antall: antallBarn, dato: dayjs(hendelseDato).format(DDMMYYYY_DATE_FORMAT) }}
      />
    </BodyShort>
  );
};
