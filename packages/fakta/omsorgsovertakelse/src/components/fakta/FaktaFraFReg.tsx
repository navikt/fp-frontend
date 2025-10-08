import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, HStack, VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import type { BarnHendelseData } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

import styles from './faktaFraFReg.module.css';

interface Props {
  barn: BarnHendelseData[];
}

export const FaktaFraFReg = ({ barn }: Props) => {
  const intl = useIntl();

  return (
    <FaktaKort label={intl.formatMessage({ id: 'FaktaFraFReg.Tittel' })}>
      {barn.length === 0 ? (
        <BodyShort>
          <FormattedMessage id="FaktaFraFReg.IngenBarn" />
        </BodyShort>
      ) : (
        <BarnVisning barn={barn} />
      )}
    </FaktaKort>
  );
};

const BarnVisning = ({ barn }: { barn: BarnHendelseData[] }) => {
  const barnet = barn.at(0);
  if (!barnet) {
    return null;
  }
  const barnErLike = !barn.some(erBarnUlike(barnet));
  const harDødtBarn = barn.some(b => b.dødsdato);

  if (barnErLike) {
    return (
      <VStack gap="space-16">
        <ReadOnlyField
          label={<FormattedMessage id="Label.Fødselsdato" />}
          value={<DateLabel dateString={barnet.fødselsdato} />}
        />
        {barnet.dødsdato && (
          <ReadOnlyField
            label={<FormattedMessage id="Label.Dødsdato" />}
            value={<DateLabel dateString={barnet.dødsdato} />}
          />
        )}
        <ReadOnlyField label={<FormattedMessage id="Label.AntallBarn" />} value={barn.length} />
      </VStack>
    );
  }

  return (
    <div>
      {barn.map(({ fødselsdato, dødsdato }, index) => (
        <HStack key={fødselsdato + dødsdato} gap="space-24" wrap={false} className={styles['grid']}>
          <ReadOnlyField
            size="medium"
            label={<FormattedMessage id="Label.Barn" />}
            value={index + 1}
            hideLabel={index > 0}
          />
          <ReadOnlyField
            size="medium"
            label={<FormattedMessage id="Label.Fødselsdato" />}
            value={<DateLabel dateString={fødselsdato} />}
            hideLabel={index > 0}
          />
          {harDødtBarn && (
            <ReadOnlyField
              size="medium"
              value={dødsdato ? <DateLabel dateString={dødsdato} /> : '-'}
              label={<FormattedMessage id="Label.Dødsdato" />}
              hideLabel={index > 0}
            />
          )}
        </HStack>
      ))}
    </div>
  );
};

const erBarnUlike = (sammenlignbartBarn: BarnHendelseData) => (barn: BarnHendelseData) =>
  barn.fødselsdato !== sammenlignbartBarn.fødselsdato || barn.dødsdato !== sammenlignbartBarn.dødsdato;
