import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { BodyShort, HStack, VStack } from '@navikt/ds-react';
import { DateLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
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
        <LabeledValue
          size="medium"
          label={<FormattedMessage id="Label.Fødselsdato" />}
          value={<DateLabel dateString={barnet.fødselsdato} />}
        />
        {barnet.dødsdato && (
          <LabeledValue
            size="medium"
            label={<FormattedMessage id="Label.Dødsdato" />}
            value={<DateLabel dateString={barnet.dødsdato} />}
          />
        )}
        <LabeledValue size="medium"  label={<FormattedMessage id="Label.AntallBarn" />} value={barna.length} />
      </VStack>
    );
  }

  const harDødtBarn = barna.some(b => b.dødsdato);
  return (
    <>
      {barna.map(({ fødselsdato, dødsdato }, index) => (
        <HStack key={fødselsdato + dødsdato} gap="space-24" wrap={false} className={styles['grid']}>
          <LabeledValue size="medium" label={index > 0 ? '' : <FormattedMessage id="Label.Barn" />} value={index + 1} />
          <LabeledValue
            size="medium"
            label={index > 0 ? '' : <FormattedMessage id="Label.Fødselsdato" />}
            value={<DateLabel dateString={fødselsdato} />}
          />
          {harDødtBarn && (
            <LabeledValue
              size="medium"
              value={dødsdato ? <DateLabel dateString={dødsdato} /> : '-'}
              label={index > 0 ? '' : <FormattedMessage id="Label.Dødsdato" />}
            />
          )}
        </HStack>
      ))}
    </>
  );
};

export const erBarnUlike = (sammenlignbartBarn: BarnHendelseData) => (barn: BarnHendelseData) =>
  barn.fødselsdato !== sammenlignbartBarn.fødselsdato || barn.dødsdato !== sammenlignbartBarn.dødsdato;
