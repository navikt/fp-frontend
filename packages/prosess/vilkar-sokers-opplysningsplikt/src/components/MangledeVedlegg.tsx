import { FormattedMessage } from 'react-intl';

import { Alert, Heading, List } from '@navikt/ds-react';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import type { ArbeidsgiverOpplysningerPerId, ManglendeVedleggSoknad, Soknad } from '@navikt/fp-types';

interface Props {
  søknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const MangledeVedlegg = ({ søknad, arbeidsgiverOpplysningerPerId }: Props) => {
  const sorterteManglendeVedlegg = getSortedManglendeVedlegg(søknad);
  return (
    <Alert variant="warning" size="small">
      <Heading spacing size="xsmall" level="3">
        <FormattedMessage id="MangledeVedlegg.Tittel" />
      </Heading>
      <List as="ul" size="small">
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
      </List>
    </Alert>
  );
};

const formatArbeidsgiver = (
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  arbeidsgiverReferanse: string | undefined,
): string => {
  if (!arbeidsgiverReferanse) {
    return '';
  }
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];
  if (!arbeidsgiverOpplysninger) {
    return '';
  }

  return formaterArbeidsgiver(arbeidsgiverOpplysninger, arbeidsgiverReferanse);
};

const getSortedManglendeVedlegg = (soknad: Soknad): ManglendeVedleggSoknad[] =>
  soknad.manglendeVedlegg.slice().sort((mv1, mv2) => mv1.dokumentTittel.localeCompare(mv2.dokumentTittel));
