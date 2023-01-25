import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { LegendBox } from '@navikt/ft-tidslinje';

import ikkeOppfyltUrl from '@navikt/fp-assets/images/ikke_oppfylt.svg';
import oppfyltUrl from '@navikt/fp-assets/images/oppfylt.svg';
import uavklartUrl from '@navikt/fp-assets/images/uavklart.svg';
import fodselUrl from '@navikt/fp-assets/images/fodsel.svg';
import soknadUrl from '@navikt/fp-assets/images/soknad.svg';
import revurderingUrl from '@navikt/fp-assets/images/endringstidspunkt.svg';
import gradertImage from '@navikt/fp-assets/images/periode_gradert.svg';
import manueltAvklart from '@navikt/fp-assets/images/periode_manuelt_avklart.svg';

const UttakTidslinjeHjelpetekster: FunctionComponent = () => {
  const intl = useIntl();
  const { formatMessage } = intl;
  const legends = [{
    src: oppfyltUrl,
    text: formatMessage({ id: 'Timeline.OppfyltPeriode' }),
  }, {
    src: fodselUrl,
    text: formatMessage({ id: 'Timeline.TidspunktFamiliehendelse' }),
  }, {
    src: ikkeOppfyltUrl,
    text: formatMessage({ id: 'Timeline.IkkeOppfyltPeriode' }),
  }, {
    src: soknadUrl,
    text: formatMessage({ id: 'Timeline.TidspunktMotakSoknad' }),
  }, {
    src: uavklartUrl,
    text: formatMessage({ id: 'Timeline.IkkeAvklartPeriode' }),
  }, {
    src: revurderingUrl,
    text: formatMessage({ id: 'Timeline.TidspunktRevurdering' }),
  }, {
    src: gradertImage,
    text: formatMessage({ id: 'Timeline.GradertPeriode' }),
  }, {
    src: manueltAvklart,
    text: formatMessage({ id: 'Timeline.ManueltAvklart' }),
  }];

  return <LegendBox legends={legends} alignLeft />;
};

export default UttakTidslinjeHjelpetekster;
