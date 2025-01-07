import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, AksjonspunktÅrsak, Behandling } from '@navikt/fp-types';

import { ArbeidsforholdOgInntektRadData } from '../types/arbeidsforholdOgInntekt';

const finnAksjonspunktTekstKoder = (
  tabellData: ArbeidsforholdOgInntektRadData[],
  aksjonspunkt?: Aksjonspunkt,
): string[] => {
  const harManglendeInntektsmeldinger = tabellData.some(d => d.årsak === AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING);
  const harManglandeOpplysninger = tabellData.some(
    d => d.årsak === AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
  );
  const erApÅpent = aksjonspunkt?.status === AksjonspunktStatus.OPPRETTET;

  const koder = [];
  if (erApÅpent && harManglendeInntektsmeldinger) {
    koder.push('AksjonspunktVisning.InnhentManglendeInntektsmelding');
  }
  if (erApÅpent && harManglandeOpplysninger) {
    koder.push('AksjonspunktVisning.AvklarManglendeOpplysninger');
  }
  return koder;
};

interface Props {
  behandling: Behandling;
  tabellData: ArbeidsforholdOgInntektRadData[];
  aksjonspunkt?: Aksjonspunkt;
}

export const AksjonspunktVisning = ({ behandling, aksjonspunkt, tabellData }: Props) => {
  const intl = useIntl();
  const aksjonspunktTekstKoder = useMemo(
    () => finnAksjonspunktTekstKoder(tabellData, aksjonspunkt),
    [behandling.versjon],
  );
  if (aksjonspunktTekstKoder.length > 0)
    return (
      <AksjonspunktHelpTextHTML>
        {aksjonspunktTekstKoder.map(kode => intl.formatMessage({ id: kode })).join(' ')}
      </AksjonspunktHelpTextHTML>
    );
  return <></>;
};
