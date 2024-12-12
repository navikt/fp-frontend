import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { useMutation } from '@tanstack/react-query';

import { KodeverkType } from '@navikt/fp-kodeverk';

import { lagreSakslisteFagsakYtelseType } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
  hentAvdelingensSakslister: () => void;
  hentAntallOppgaver: () => void;
}

export const FagsakYtelseTypeVelger = ({
  valgtSakslisteId,
  valgtAvdelingEnhet,
  hentAvdelingensSakslister,
  hentAntallOppgaver,
}: Props) => {
  const { mutate: lagreFagsakYtelseType } = useMutation({
    mutationFn: (values: { sakslisteId: number; avdelingEnhet: string; fagsakYtelseType: string; checked: boolean }) =>
      lagreSakslisteFagsakYtelseType(values.sakslisteId, values.avdelingEnhet, values.fagsakYtelseType, values.checked),
    onSuccess: () => {
      hentAntallOppgaver();
      hentAvdelingensSakslister();
    },
  });

  const alleFagsakYtelseTyper = useLosKodeverk(KodeverkType.FAGSAK_YTELSE);

  return (
    <VStack gap="2">
      <Label size="small">
        <FormattedMessage id="FagsakYtelseTypeVelger.Stonadstype" />
      </Label>
      {alleFagsakYtelseTyper.map(fyt => (
        <CheckboxField
          key={fyt.kode}
          name={fyt.kode}
          label={alleFagsakYtelseTyper.find(type => type.kode === fyt.kode)?.navn ?? ''}
          onChange={isChecked =>
            lagreFagsakYtelseType({
              sakslisteId: valgtSakslisteId,
              avdelingEnhet: valgtAvdelingEnhet,
              fagsakYtelseType: fyt.kode,
              checked: isChecked,
            })
          }
        />
      ))}
    </VStack>
  );
};
