import { FormattedMessage } from 'react-intl';

import { HStack, Tag } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { FamilieHendelse } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

import { AvklartBarn } from './AvklartBarn.tsx';

interface Props {
  gjeldendeFamiliehendelse: FamilieHendelse | undefined;
}

export const FaktaFødselFraGjeldende = ({ gjeldendeFamiliehendelse }: Props) => {
  const { termindato, avklartBarn, erOverstyrt, vedtaksDatoSomSvangerskapsuke } = gjeldendeFamiliehendelse || {};
  return (
    <FaktaKort
      label={
        <HStack gap="4">
          <FormattedMessage id="FodselsammenligningPanel.OpplysningerGjeldende" />
          {erOverstyrt && <Tag variant="info">Overstyrt</Tag>}
        </HStack>
      }
    >
      <HStack gap="4">
        {termindato && <ValueLabel label="Termindato">{dateFormat(termindato)}</ValueLabel>}
        {avklartBarn && <AvklartBarn avklartBarn={avklartBarn} />}
        {avklartBarn && (
          <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.AntallBarn" />}>
            {avklartBarn.length}
          </ValueLabel>
        )}
        {vedtaksDatoSomSvangerskapsuke && (
          <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.FodtISvangerskapsuke" />}>
            {vedtaksDatoSomSvangerskapsuke}
          </ValueLabel>
        )}
      </HStack>
    </FaktaKort>
  );
};
