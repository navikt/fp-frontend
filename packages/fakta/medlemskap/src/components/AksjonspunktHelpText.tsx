import { useIntl } from 'react-intl';

import { ExclamationmarkIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';
import { Alert, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import type { Aksjonspunkt, ManuellBehandlingResultat, Medlemskap, MedlemskapAvvik } from '@navikt/fp-types';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

import { MedlemskapVurdering } from '../types/vurderingMedlemskapForm';
import { InfoBox } from './InfoBox';

interface Props {
  aksjonspunkter: Aksjonspunkt[];
  medlemskap: Medlemskap;
}

function getFormateringsIdForAvvik(avvik: MedlemskapAvvik) {
  switch (avvik) {
    case 'BOSATT_UTENLANDSOPPHOLD':
    case 'BOSATT_MANGLENDE_BOSTEDSADRESSE':
    case 'BOSATT_UGYLDIG_PERSONSTATUS':
    case 'BOSATT_UTENLANDSADRESSE':
      return 'AksjonspunktHelpText.Bosatt';
    case 'MEDL_PERIODER':
      return 'AksjonspunktHelpText.MedlPerioder';
    case 'TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD':
      return 'AksjonspunktHelpText.Oppholdsrett';
    case 'EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT':
      return 'AksjonspunktHelpText.EØSManglendeAnsettelseMedInntekt';
  }
}
const getVurdering = (resultat: ManuellBehandlingResultat) => {
  const { opphørFom, avslagskode } = resultat;

  if (avslagskode && opphørFom) {
    return MedlemskapVurdering.DELVIS_OPPFYLT;
  } else if (avslagskode && !opphørFom) {
    return MedlemskapVurdering.IKKE_OPPFYLT;
  } else if (!opphørFom && !avslagskode) {
    return MedlemskapVurdering.OPPFYLT;
  }

  return undefined;
};

export const AksjonspunktHelpText = ({ aksjonspunkter, medlemskap }: Props) => {
  const intl = useIntl();

  const { avvik, manuellBehandlingResultat: resultat } = medlemskap;

  const åpneAksjonspunkt = aksjonspunkter.filter(erAksjonspunktÅpent);
  const utførteAksjonspunkt = aksjonspunkter.filter(ap => ap.status === 'UTFO');

  if (åpneAksjonspunkt.length > 0) {
    return (
      <VStack gap="space-8">
        {[...new Set(avvik.map(getFormateringsIdForAvvik))].map(a => (
          <AksjonspunktHelpTextHTML key={a}>
            {intl.formatMessage({ id: a }) + intl.formatMessage({ id: 'AksjonspunktHelpText.Postfix' })}
          </AksjonspunktHelpTextHTML>
        ))}
      </VStack>
    );
  } else if (resultat && åpneAksjonspunkt.length === 0 && utførteAksjonspunkt.length > 0) {
    const vurdering = getVurdering(resultat);

    const text = intl.formatMessage({ id: 'AksjonspunktHelpText.ErMedlem' }, { vurdering });

    switch (vurdering) {
      case MedlemskapVurdering.OPPFYLT:
        return (
          <Alert variant="success" size="small">
            {text}
          </Alert>
        );
      case MedlemskapVurdering.DELVIS_OPPFYLT:
        return <InfoBox Icon={ExclamationmarkIcon}>{text}</InfoBox>;
      case MedlemskapVurdering.IKKE_OPPFYLT:
        return <InfoBox Icon={XMarkOctagonIcon}>{text}</InfoBox>;
    }
  }

  return <></>;
};
