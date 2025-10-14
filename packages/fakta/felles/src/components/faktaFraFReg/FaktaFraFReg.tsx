import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { BodyShort, HStack, VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import type { BarnHendelseData } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

import styles from './faktaFraFReg.module.css';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);
interface Props {
  barn: BarnHendelseData[];
}

export const FaktaFraFReg = ({ barn }: Props) => {
  return (
    <RawIntlProvider value={intl}>
      <FaktaKort label={intl.formatMessage({ id: 'FaktaFraFReg.Tittel' })}>
        {barn.length === 0 ? (
          <BodyShort>
            <FormattedMessage id="FaktaFraFReg.IngenBarn" />
          </BodyShort>
        ) : (
          <BarnVisning barn={barn} />
        )}
      </FaktaKort>
    </RawIntlProvider>
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
          label={<FormattedMessage id="FaktaFraFReg.Fødselsdato" />}
          value={<DateLabel dateString={barnet.fødselsdato} />}
        />
        {barnet.dødsdato && (
          <ReadOnlyField
            label={<FormattedMessage id="FaktaFraFReg.Dødsdato" />}
            value={<DateLabel dateString={barnet.dødsdato} />}
          />
        )}
        <ReadOnlyField label={<FormattedMessage id="FaktaFraFReg.AntallBarn" />} value={barn.length} />
      </VStack>
    );
  }

  return (
    <div>
      {barn.map(({ fødselsdato, dødsdato }, index) => (
        <HStack key={fødselsdato + dødsdato} gap="space-24" wrap={false} className={styles['grid']}>
          <ReadOnlyField
            size="medium"
            label={<FormattedMessage id="FaktaFraFReg.Barn" />}
            value={index + 1}
            hideLabel={index > 0}
          />
          <ReadOnlyField
            size="medium"
            label={<FormattedMessage id="FaktaFraFReg.Fødselsdato" />}
            value={<DateLabel dateString={fødselsdato} />}
            hideLabel={index > 0}
          />
          {harDødtBarn && (
            <ReadOnlyField
              size="medium"
              value={dødsdato ? <DateLabel dateString={dødsdato} /> : '-'}
              label={<FormattedMessage id="FaktaFraFReg.Dødsdato" />}
              hideLabel={index > 0}
            />
          )}
        </HStack>
      ))}
    </div>
  );
};

export const erBarnUlike = (sammenlignbartBarn: BarnHendelseData) => (barn: BarnHendelseData) =>
  barn.fødselsdato !== sammenlignbartBarn.fødselsdato || barn.dødsdato !== sammenlignbartBarn.dødsdato;
