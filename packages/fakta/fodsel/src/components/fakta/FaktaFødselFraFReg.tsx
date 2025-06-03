import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Tag } from '@navikt/ds-react';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { FødselRegister } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

import { AvklartBarn } from './AvklartBarn';

interface Props {
  register: FødselRegister;
}

export const FaktaFødselFraFReg = ({ register }: Props) => {
  const intl = useIntl();
  const { barn } = register || {};

  const harDødFødtBarn = barn.filter(b => b.dodsdato).length > 0;

  return (
    <FaktaKort
      label={intl.formatMessage({ id: 'FodselsammenligningPanel.OpplysningerFREG' })}
      tags={
        harDødFødtBarn ? (
          <Tag variant="info">
            <FormattedMessage id="FodselsammenligningPanel.Dodfodt" />
          </Tag>
        ) : undefined
      }
    >
      <>
        {barn.length > 0 ? (
          <>
            <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.AntallBarn" />}>{barn.length}</ValueLabel>
            <AvklartBarn avklartBarn={barn} />
          </>
        ) : (
          <BodyShort>
            <FormattedMessage id="FaktaFødselFraFReg.IngenBarn" />
          </BodyShort>
        )}
      </>
    </FaktaKort>
  );
};
