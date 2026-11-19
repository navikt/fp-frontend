import { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';

import {
  FaktaFordelBeregningAvklaringsbehovCode,
  type FordelBeregningsgrunnlagAP,
  FordelBeregningsgrunnlagFaktaIndex,
  type FtBeregningsgrunnlag,
  type FtVilkar,
  type VurderRefusjonBeregningsgrunnlagAP,
} from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkår } from '@navikt/fp-types';
import type { FaktaAksjonspunkt, FordelBeregningAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { harAksjonspunkt, notEmpty, useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

import '@navikt/ft-fakta-fordel-beregningsgrunnlag/dist/style.css';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG, AksjonspunktKode.VURDER_REFUSJON_BERGRUNN];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FordelingFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const api = getBehandlingApi(behandling);

  const { data: beregningsgrunnlag, isFetching } = useQuery(api.beregningsgrunnlagOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.FORDELING}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Fordeling' })}
      skalPanelVisesIMeny={AKSJONSPUNKT_KODER.some(kode => harAksjonspunkt(kode, behandling.aksjonspunkt))}
    >
      {isFetching ? (
        <LoadingPanel />
      ) : (
        <Wrapper
          kodeverkSamling={standardPanelProps.alleKodeverk}
          beregningsgrunnlagVilkår={lagBGVilkår(standardPanelProps.behandling.vilkår, beregningsgrunnlag)}
          beregningsgrunnlagListe={lagFormatertBG(beregningsgrunnlag)}
          submitCallback={lagModifisertCallback(standardPanelProps.submitCallback)}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          readOnly={standardPanelProps.isReadOnly}
          submittable={standardPanelProps.isSubmittable}
        />
      )}
    </FaktaDefaultInitPanel>
  );
};

const Wrapper = (
  props: Omit<ComponentProps<typeof FordelBeregningsgrunnlagFaktaIndex>, 'formData' | 'setFormData'>,
) => {
  const { mellomlagretFormData, setMellomlagretFormData } =
    useMellomlagretFormData<React.ComponentProps<typeof FordelBeregningsgrunnlagFaktaIndex>['formData']>();
  return (
    <FordelBeregningsgrunnlagFaktaIndex
      {...props}
      formData={mellomlagretFormData}
      setFormData={setMellomlagretFormData}
    />
  );
};

const tilFpsakAksjonspunkt = (
  ap: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP,
): FordelBeregningAp => {
  const feilmelding = `Mangler grunnlag for avklaringspunkt ${ap.kode}`;
  switch (ap.kode) {
    case FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG: {
      return { kode: AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG, ...notEmpty(ap.grunnlag[0], feilmelding) };
    }
    case FaktaFordelBeregningAvklaringsbehovCode.VURDER_REFUSJON_BERGRUNN: {
      return { kode: AksjonspunktKode.VURDER_REFUSJON_BERGRUNN, ...notEmpty(ap.grunnlag[0], feilmelding) };
    }
  }
};

const lagModifisertCallback =
  (submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>) =>
  (aksjonspunktSomSkalLagres: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP) =>
    submitCallback(tilFpsakAksjonspunkt(aksjonspunktSomSkalLagres));

const lagBGVilkår = (vilkår: Vilkår[], beregningsgrunnlag?: Beregningsgrunnlag): FtVilkar | null => {
  const bgVilkår = vilkår.find(v => v.vilkarType === 'FP_VK_41');
  if (!bgVilkår || !beregningsgrunnlag) {
    return null;
  }
  return {
    ...bgVilkår,
    perioder: [
      {
        avslagKode: bgVilkår.avslagKode ?? undefined,
        vurderesIBehandlingen: true,
        merknadParametere: {},
        periode: {
          fom: beregningsgrunnlag.skjaeringstidspunktBeregning,
          tom: TIDENES_ENDE,
        },
        vilkarStatus: bgVilkår.vilkarStatus,
      },
    ],
  };
};

const lagFormatertBG = (beregningsgrunnlag?: Beregningsgrunnlag): FtBeregningsgrunnlag[] => {
  if (!beregningsgrunnlag) {
    return [];
  }
  const nyttBG = {
    ...beregningsgrunnlag,
    beregningsgrunnlagId: '1',
    vilkårsperiodeFom: beregningsgrunnlag.skjaeringstidspunktBeregning,
  };
  // @ts-expect-error Avventar svar på spørsmål om endringar bør gjerast i ft-repo eller på vår backend
  return [nyttBG];
};
