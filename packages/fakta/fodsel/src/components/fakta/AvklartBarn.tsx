import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { AvklartBarn as AvklartBarnType } from '@navikt/fp-types';

interface Props {
  avklartBarn: AvklartBarnType[];
}

const alleBarnHarSammeFodselsdatoOgStatus = (avklartBarn: AvklartBarnType[]) => {
  if (avklartBarn.length === 0) {
    return false;
  }
  const fodselsdato = avklartBarn[0].fodselsdato;
  const dodsdato = avklartBarn[0].dodsdato;

  return avklartBarn.every(barn => barn.fodselsdato === fodselsdato && barn.dodsdato === dodsdato);
};

export const AvklartBarn = ({ avklartBarn }: Props) => {
  return (
    <>
      {avklartBarn &&
        (alleBarnHarSammeFodselsdatoOgStatus(avklartBarn) ? (
          <>
            <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.Fodselsdato" />}>
              <DateLabel dateString={avklartBarn[0].fodselsdato} />
            </ValueLabel>
            {avklartBarn[0].dodsdato && (
              <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.Dodsdato" />}>
                <DateLabel dateString={avklartBarn[0].dodsdato} />
              </ValueLabel>
            )}
          </>
        ) : (
          <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.Fodselsdato" />}>
            {avklartBarn.map((barn, index) => (
              <BodyShort key={barn.fodselsdato + barn.dodsdato}>
                {index + 1}
                {': '}
                {dateFormat(barn.fodselsdato)} (
                {barn.dodsdato && (
                  <>
                    <FormattedMessage id="FodselsammenligningPanel.Dod" /> <DateLabel dateString={barn.dodsdato} />
                  </>
                )}
                )
              </BodyShort>
            ))}
          </ValueLabel>
        ))}
    </>
  );
};
