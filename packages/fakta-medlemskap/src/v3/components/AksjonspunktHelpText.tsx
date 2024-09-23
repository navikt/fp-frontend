import React from 'react';
import { useIntl } from 'react-intl';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { Aksjonspunkt, ManuellBehandlingResultat, MedlemskapAvvik, MedlemskapV3 } from '@navikt/fp-types';
import { Alert, VStack } from '@navikt/ds-react';
import { aksjonspunktStatus } from '@navikt/fp-kodeverk';

import { Vurdering } from '../types/vurderingMedlemskapForm';
import InfoBox from './InfoBox';

import { ExclamationmarkIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';

interface Props {
  aksjonspunkter: Aksjonspunkt[];
  medlemskap: MedlemskapV3;
}

function getFormateringsIdForAvvik(avvik: MedlemskapAvvik) {
  switch (avvik) {
    case MedlemskapAvvik.BOSATT_UTENLANDSOPPHOLD:
    case MedlemskapAvvik.BOSATT_MANGLENDE_BOSTEDSADRESSE:
    case MedlemskapAvvik.BOSATT_UGYLDIG_PERSONSTATUS:
    case MedlemskapAvvik.BOSATT_UTENLANDSADRESSE:
      return 'AksjonspunktHelpText.Bosatt';
    case MedlemskapAvvik.MEDL_PERIODER:
      return 'AksjonspunktHelpText.MedlPerioder';
    case MedlemskapAvvik.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD:
      return 'AksjonspunktHelpText.Oppholdsrett';
    case MedlemskapAvvik.EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT:
      return 'AksjonspunktHelpText.EØSManglendeAnsettelseMedInntekt';
  }
}
const getVurdering = (resultat: ManuellBehandlingResultat): Vurdering | undefined => {
  if (resultat) {
    const { opphørFom, avslagskode } = resultat;

    if (avslagskode && opphørFom) {
      return Vurdering.DELVIS_OPPFYLT;
    } else if (avslagskode && !opphørFom) {
      return Vurdering.IKKE_OPPFYLT;
    } else if (!opphørFom && !avslagskode) {
      return Vurdering.OPPFYLT;
    }
  }
};

const AksjonspunktHelpText = ({ aksjonspunkter, medlemskap }: Props) => {
  const intl = useIntl();

  if (medlemskap.avvik) {
    const { avvik, manuellBehandlingResultat: resultat } = medlemskap;

    if (aksjonspunkter.length === 0) return <></>;
    const opprettetAp = aksjonspunkter.filter(ap => ap.status === aksjonspunktStatus.OPPRETTET);
    const utførtAp = aksjonspunkter.filter(ap => ap.status === aksjonspunktStatus.UTFORT);

    if (opprettetAp.length > 0) {
      return (
        <VStack gap="2">
          {[...new Set(avvik.map(getFormateringsIdForAvvik))].map(a => (
            <AksjonspunktHelpTextHTML key={a}>
              {intl.formatMessage({ id: a }) + intl.formatMessage({ id: 'AksjonspunktHelpText.Postfix' })}
            </AksjonspunktHelpTextHTML>
          ))}
        </VStack>
      );
    } else if (resultat && opprettetAp.length === 0 && utførtAp.length > 0) {
      const vurdering = getVurdering(resultat);

      const text = intl.formatMessage({ id: 'AksjonspunktHelpText.ErMedlem' }, { vurdering });

      switch (vurdering) {
        case Vurdering.OPPFYLT:
          return (
            <Alert variant="success" size="small">
              {text}
            </Alert>
          );
        case Vurdering.DELVIS_OPPFYLT:
          return <InfoBox Icon={ExclamationmarkIcon}>{text}</InfoBox>;
        case Vurdering.IKKE_OPPFYLT:
          return <InfoBox Icon={XMarkOctagonIcon}>{text}</InfoBox>;
      }
    }
  }
  return <></>;
};

export default AksjonspunktHelpText;
