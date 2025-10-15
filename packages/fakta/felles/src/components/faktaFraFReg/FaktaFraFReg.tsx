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
  barna: BarnHendelseData[];
}

export const FaktaFraFReg = ({ barna }: Props) => {
  return (
    <RawIntlProvider value={intl}>
      <FaktaKort label={intl.formatMessage({ id: 'FaktaFraFReg.Tittel' })}>
        {barna.length === 0 ? (
          <BodyShort>
            <FormattedMessage id="FaktaFraFReg.IngenBarn" />
          </BodyShort>
        ) : (
          <BarnVisning barna={barna} />
        )}
      </FaktaKort>
    </RawIntlProvider>
  );
};

const BarnVisning = ({ barna }: { barna: BarnHendelseData[] }) => {
  const barnet = barna.at(0);
  if (!barnet) {
    return null;
  }
  const erBarnLike = !barna.some(erBarnUlike(barnet));

  if (erBarnLike) {
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
        <ReadOnlyField label={<FormattedMessage id="Label.AntallBarn" />} value={barna.length} />
      </VStack>
    );
  }

  const harDødtBarn = barna.some(b => b.dødsdato);
  return (
    <>
      {barna.map(({ fødselsdato, dødsdato }, index) => (
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
    </>
  );
};

export const erBarnUlike = (sammenlignbartBarn: BarnHendelseData) => (barn: BarnHendelseData) =>
  barn.fødselsdato !== sammenlignbartBarn.fødselsdato || barn.dødsdato !== sammenlignbartBarn.dødsdato;
