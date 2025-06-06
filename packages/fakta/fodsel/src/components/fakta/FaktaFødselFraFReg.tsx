import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, HStack, Tooltip, VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { FødselRegister } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

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
          <ValueLabel label={<FormattedMessage id="Label.Fodselsdato" />}>
            <DateLabel dateString={barn[0].fødselsdato} />
          </ValueLabel>
          {barn[0].dødsdato && (
            <ValueLabel label={<FormattedMessage id="Label.Dodsdato" />}>
              <HStack align="center" gap="2">
                <DateLabel dateString={barn[0].dødsdato} /> <MarkeringDød />
              </HStack>
            </ValueLabel>
          )}
          <ValueLabel label={<FormattedMessage id="Label.AntallBarn" />}>{barn.length}</ValueLabel>
        </VStack>
      )}
      {barn.length > 0 && !erAlleBarnLike && (
        <div>
          {barn.map(({ fødselsdato, dødsdato }, index) => (
            <HStack key={fødselsdato + dødsdato} gap="6" align="end" paddingBlock="2 0" wrap={false}>
              <Box width="30px">
                <ReadOnlyField
                  size="medium"
                  label={<FormattedMessage id="Label.Barn" />}
                  value={index + 1}
                  hideLabel={index > 0}
                />
              </Box>
              <Box width="100px">
                <ReadOnlyField
                  size="medium"
                  label={<FormattedMessage id="Label.Fodselsdato" />}
                  value={<DateLabel dateString={fødselsdato} />}
                  hideLabel={index > 0}
                />
              </Box>
              {harDødtBarn && (
                <Box>
                  <ReadOnlyField
                    size="medium"
                    value={
                      dødsdato ? (
                        <HStack gap="2">
                          <DateLabel dateString={dødsdato} />
                          <MarkeringDød />
                        </HStack>
                      ) : (
                        '-'
                      )
                    }
                    label={<FormattedMessage id="Label.Dodsdato" />}
                    hideLabel={index > 0}
                  />
                </Box>
              )}
            </HStack>
          ))}
        </div>
      )}
    </FaktaKort>
  );
};

const MarkeringDød = () => (
  <Tooltip content="Død">
    <ExclamationmarkTriangleFillIcon width={24} height={24} color="var(--a-icon-warning)" />
  </Tooltip>
);
