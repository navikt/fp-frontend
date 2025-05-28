import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { DokumentasjonVurderingBehov } from '@navikt/fp-types';

import { UttakDokumentasjonFaktaForm } from './components/UttakDokumentasjonFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
  submittable: boolean;
}

export const UttakDokumentasjonFaktaIndex = ({ dokumentasjonVurderingBehov, submittable }: Props) => {
  const sorterteBehov = [...dokumentasjonVurderingBehov].sort((krav1, krav2) =>
    dayjs(krav1.fom).diff(dayjs(krav2.fom)),
  );

  return (
    <RawIntlProvider value={intl}>
      <UttakDokumentasjonFaktaForm dokumentasjonVurderingBehov={sorterteBehov} submittable={submittable} />
    </RawIntlProvider>
  );
};
