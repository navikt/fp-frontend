import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, HStack, VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import type { FødselRegister } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

import styles from './faktaFødselFraFReg.module.css';

interface Props {
  register: FødselRegister;
}

export const FaktaFødselFraFReg = ({ register }: Props) => {
  const intl = useIntl();
  const { barn } = register || {};

  const erAlleBarnLike = barn.every(b => b.fødselsdato === barn[0].fødselsdato && b.dødsdato === barn[0].dødsdato);
  const harDødtBarn = barn.some(b => b.dødsdato);

  return (
    <FaktaKort label={intl.formatMessage({ id: 'FaktaFødselFraFReg.Tittel' })}>
      {barn.length === 0 && (
        <BodyShort>
          <FormattedMessage id="FaktaFødselFraFReg.IngenBarn" />
        </BodyShort>
      )}
      {barn.length > 0 && erAlleBarnLike && (
        <VStack gap="4">
          <ReadOnlyField
            label={<FormattedMessage id="Label.Fodselsdato" />}
            value={<DateLabel dateString={barn[0].fødselsdato} />}
          />
          {barn[0].dødsdato && (
            <ReadOnlyField
              label={<FormattedMessage id="Label.Dodsdato" />}
              value={<DateLabel dateString={barn[0].dødsdato} />}
            />
          )}
          <ReadOnlyField label={<FormattedMessage id="Label.AntallBarn" />} value={barn.length} />
        </VStack>
      )}
      {barn.length > 0 && !erAlleBarnLike && (
        <div>
          {barn.map(({ fødselsdato, dødsdato }, index) => (
            <HStack key={fødselsdato + dødsdato} gap="6" wrap={false} className={styles.grid}>
              <ReadOnlyField
                size="medium"
                label={<FormattedMessage id="Label.Barn" />}
                value={index + 1}
                hideLabel={index > 0}
              />
              <ReadOnlyField
                size="medium"
                label={<FormattedMessage id="Label.Fodselsdato" />}
                value={<DateLabel dateString={fødselsdato} />}
                hideLabel={index > 0}
              />
              {harDødtBarn && (
                <ReadOnlyField
                  size="medium"
                  value={dødsdato ? <DateLabel dateString={dødsdato} /> : '-'}
                  label={<FormattedMessage id="Label.Dodsdato" />}
                  hideLabel={index > 0}
                />
              )}
            </HStack>
          ))}
        </div>
      )}
    </FaktaKort>
  );
};
