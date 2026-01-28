import { FormattedMessage } from 'react-intl';

import { Box, Label, List } from '@navikt/ds-react';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import type { ArbeidsgiverOpplysningerPerId, ManglendeVedleggSoknad, Soknad } from '@navikt/fp-types';

interface Props {
  søknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const MangledeVedlegg = ({ søknad, arbeidsgiverOpplysningerPerId }: Props) => {
  const sorterteManglendeVedlegg = getSortedManglendeVedlegg(søknad);
  if (søknad.manglendeVedlegg.length === 0) {
    return null;
  }
  return (
    <Box background="info-soft" padding="space-16">
      <Label>
        <FormattedMessage id="MangledeVedlegg.Tittel" />
      </Label>
      <Box marginBlock="space-16" asChild><List data-aksel-migrated-v8>
          {sorterteManglendeVedlegg.map(vedlegg => (
            <List.Item key={vedlegg.dokumentType + vedlegg.arbeidsgiverReferanse}>
              {vedlegg.dokumentTittel}
              {!!vedlegg.arbeidsgiverReferanse && (
                <FormattedMessage
                  id="MangledeVedlegg.Arbeidsgiver"
                  values={{
                    arbeidsgiverNavn: formatArbeidsgiver(arbeidsgiverOpplysningerPerId, vedlegg.arbeidsgiverReferanse),
                  }}
                />
              )}
            </List.Item>
          ))}
        </List></Box>
    </Box>
  );
};

const formatArbeidsgiver = (
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  arbeidsgiverReferanse: string | undefined,
): string => {
  const opplysninger = arbeidsgiverReferanse ? arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse] : undefined;

  return opplysninger ? formaterArbeidsgiver(opplysninger, arbeidsgiverReferanse) : '';
};

const getSortedManglendeVedlegg = (soknad: Soknad): ManglendeVedleggSoknad[] =>
  soknad.manglendeVedlegg.toSorted((mv1, mv2) => mv1.dokumentTittel.localeCompare(mv2.dokumentTittel));
