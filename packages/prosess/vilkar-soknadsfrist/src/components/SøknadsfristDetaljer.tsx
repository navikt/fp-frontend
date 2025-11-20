import { FormattedMessage } from 'react-intl';

import { Box, HStack, VStack } from '@navikt/ds-react';
import { DateLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { FamilieHendelse, Soknad } from '@navikt/fp-types';

interface Props {
  søknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
}

export const SøknadsfristDetaljer = ({ søknad, gjeldendeFamiliehendelse }: Props) => {
  const dato = findDate(gjeldendeFamiliehendelse);
  const textCode = findTextCode(gjeldendeFamiliehendelse);

  return (
    <Box.New background="info-soft" padding="space-16">
      <VStack gap="space-16">
        <HStack gap="space-24">
          <LabeledValue
            label={<FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Søknadsfrist" />}
            value={findSoknadsfristDate(søknad.mottattDato, søknad.søknadsfrist.dagerOversittetFrist)}
          />
          <LabeledValue
            label={<FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.MottattDato" />}
            value={<DateLabel dateString={søknad.mottattDato} />}
          />
          <LabeledValue
            label={<FormattedMessage id={textCode} />}
            value={dato ? <DateLabel dateString={dato} /> : '-'}
          />
        </HStack>
        <LabeledValue
          label={<FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication" />}
          value={søknad.begrunnelseForSenInnsending ?? '-'}
        />
      </VStack>
    </Box.New>
  );
};

const findTextCode = (familiehendelse: FamilieHendelse): string => {
  if (familiehendelse.fødselTermin) {
    return familiehendelse.fødselTermin.fødselsdato
      ? 'ErSoknadsfristVilkaretOppfyltForm.Fodselsdato'
      : 'ErSoknadsfristVilkaretOppfyltForm.Termindato';
  }
  return 'ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato';
};

const findDate = (familiehendelse: FamilieHendelse): string | undefined => {
  return (
    familiehendelse.adopsjon?.omsorgsovertakelseDato ||
    familiehendelse.fødselTermin?.fødselsdato ||
    familiehendelse.fødselTermin?.termindato ||
    undefined
  );
};

const findSoknadsfristDate = (mottattDato: string, antallDagerSoknadLevertForSent: number): string =>
  dayjs(mottattDato).subtract(antallDagerSoknadLevertForSent, 'days').format(DDMMYYYY_DATE_FORMAT);
