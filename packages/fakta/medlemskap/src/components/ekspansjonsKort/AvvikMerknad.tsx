import { FormattedMessage } from 'react-intl';

import { BodyLong, Box, HStack } from '@navikt/ds-react';
import { assertUnreachable } from '@navikt/ft-utils';

import { MedlemskapAvvik } from '@navikt/fp-types';

import { AvvikStatus } from './AvvikStatus';

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
}

export const AvvikMerknad = ({ avvik }: Props) => {
  return (
    <Box.New borderRadius="full" paddingInline="2" paddingBlock="1" background="neutral-moderateA">
      <HStack gap="space-8">
        <AvvikStatus harAvvik={true} />
        <BodyLong size="small">
          <FormattedMessage id={getFormateringsIdForAvvik(avvik)} />
        </BodyLong>
      </HStack>
    </Box.New>
  );
};
