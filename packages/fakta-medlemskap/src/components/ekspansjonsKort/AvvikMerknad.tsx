import { BodyLong, Box, HStack } from '@navikt/ds-react';
import React, { FC } from 'react';
import AvvikStatus from './AvvikStatus';
import { FormattedMessage } from 'react-intl';
import { MedlemskapAvvik } from '@navikt/fp-types';
import assertUnreachable from '@navikt/fp-fakta-uttaksdokumentasjon/src/utils/switchCaseUtils';

const getFormateringsIdForAvvik = (avvik: MedlemskapAvvik) => {
  switch (avvik) {
    case MedlemskapAvvik.BOSATT_UTENLANDSOPPHOLD:
      return 'AvvikMerknad.BosattUtenlandsopphold';
    case MedlemskapAvvik.BOSATT_MANGLENDE_BOSTEDSADRESSE:
      return 'AvvikMerknad.BosattManglendeBostedsadresse';
    case MedlemskapAvvik.BOSATT_UGYLDIG_PERSONSTATUS:
      return 'AvvikMerknad.BosattUgyldigPersonstatus';
    case MedlemskapAvvik.BOSATT_UTENLANDSADRESSE:
      return 'AvvikMerknad.BosattUtenlandsadresse';
    case MedlemskapAvvik.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD:
      return 'AvvikMerknad.Oppholdsrett';
    case MedlemskapAvvik.MEDL_PERIODER:
      return 'AvvikMerknad.MedlPerioder';
    case MedlemskapAvvik.EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT:
      return 'AvvikMerknad.EOSManglendeAnsettelseMedInntekt';
    default:
      assertUnreachable(avvik);
  }
};

interface Props {
  avvik: MedlemskapAvvik;
  values?: Record<string, string>;
}

const AvvikMerknad: FC<Props> = ({ avvik, values }) => {
  return (
    <Box borderRadius="full" paddingInline="2" paddingBlock="1" background="surface-neutral-subtle">
      <HStack gap="2">
        <AvvikStatus harAvvik={true} />
        <BodyLong size="small">
          <FormattedMessage id={getFormateringsIdForAvvik(avvik)} values={values} />
        </BodyLong>
      </HStack>
    </Box>
  );
};

export default AvvikMerknad;
