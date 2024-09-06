import { BodyLong, Box, HStack } from '@navikt/ds-react';
import React, { FC } from 'react';
import AvvikStatus from './AvvikStatus';
import { FormattedMessage } from 'react-intl';
import { MedlemskapAvvik } from '@navikt/fp-types';
import assertUnreachable from '@navikt/fp-fakta-uttaksdokumentasjon/src/utils/switchCaseUtils';

const getFormateringsIdForÅrsak = (avvik: MedlemskapAvvik) => {
  switch (avvik) {
    case MedlemskapAvvik.BOSATT_UTENLANDSOPPHOLD:
      return 'Merknadstekst.BosattUtenlandsopphold';
    case MedlemskapAvvik.BOSATT_MANGLENDE_BOSTEDSADRESSE:
      return 'Merknadstekst.BosattManglendeAdresse';
    case MedlemskapAvvik.BOSATT_UGYLDIG_PERSONSTATUS:
      return 'Merknadstekst.BosattUgyldigPersonstatus';
    case MedlemskapAvvik.BOSATT_UTENLANDSADRESSE:
      return 'Merknadstekst.BosattUtenlandsadresse';
    case MedlemskapAvvik.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD:
      return 'Merknadstekst.Oppholdsrett';
    case MedlemskapAvvik.MEDL_PERIODER:
      return 'Merknadstekst.MedlPerioder';
    case MedlemskapAvvik.EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT:
      return 'Merknadstekst.EØSManglendeAnsettelseMedInntekt';
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
          <FormattedMessage id={getFormateringsIdForÅrsak(avvik)} values={values} />
        </BodyLong>
      </HStack>
    </Box>
  );
};

export default AvvikMerknad;
