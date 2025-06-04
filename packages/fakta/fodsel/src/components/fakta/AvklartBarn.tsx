import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { BarnHendelseData } from '@navikt/fp-types';

interface Props {
  avklartBarn: BarnHendelseData[];
}

const alleBarnHarSammeFodselsdatoOgStatus = (avklartBarn: BarnHendelseData[]) => {
  if (avklartBarn.length === 0) {
    return false;
  }
  const fødselsdato = avklartBarn[0].fødselsdato;
  const dodsdato = avklartBarn[0].dødsdato;

  return avklartBarn.every(barn => barn.fødselsdato === fødselsdato && barn.dødsdato === dodsdato);
};

export const AvklartBarn = ({ avklartBarn }: Props) => {
  return (
    <>
      {avklartBarn &&
        (alleBarnHarSammeFodselsdatoOgStatus(avklartBarn) ? (
          <>
            <ValueLabel label={<FormattedMessage id="Label.Fodselsdato" />}>
              <DateLabel dateString={avklartBarn[0].fødselsdato} />
            </ValueLabel>
            {avklartBarn[0].dødsdato && (
              <ValueLabel label={<FormattedMessage id="Label.Dodsdato" />}>
                <DateLabel dateString={avklartBarn[0].dødsdato} />
              </ValueLabel>
            )}
          </>
        ) : (
          <ValueLabel label={<FormattedMessage id="Label.Fodselsdato" />}>
            {avklartBarn.map((barn, index) => (
              <BodyShort key={barn.fødselsdato + barn.dødsdato}>
                <FormattedMessage id="Label.NummerertRad" values={{ nummer: index + 1 }} />{' '}
                {dateFormat(barn.fødselsdato)}
                {barn.dødsdato && (
                  <>
                    {' '}
                    (
                    <FormattedMessage id="FaktaFødselFraFReg.Dod" /> <DateLabel dateString={barn.dødsdato} />)
                  </>
                )}
              </BodyShort>
            ))}
          </ValueLabel>
        ))}
    </>
  );
};
