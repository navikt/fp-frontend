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
import type { FaktaAksjonspunkt, FordelBeregningsgrunnlagAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { harAksjonspunkt, notEmpty, useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { lagKodeverkValidator, tilInntektskategori, tilValgfriKode } from './beregningKodeverk';

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

type FordelAp = Extract<FordelBeregningsgrunnlagAp, { kode: typeof AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG }>;
type FordelAndelDto = NonNullable<NonNullable<FordelAp['endretBeregningsgrunnlagPerioder']>[number]['andeler']>[number];
type FordelAndel =
  FordelBeregningsgrunnlagAP['grunnlag'][number]['endretBeregningsgrunnlagPerioder'][number]['andeler'][number];

const tilAktivitetStatus = lagKodeverkValidator<NonNullable<FordelAndelDto['aktivitetStatus']>>('aktivitetstatus', {
  AAP: true,
  AT: true,
  DP: true,
  FL: true,
  MS: true,
  SN: true,
  AT_FL: true,
  AT_SN: true,
  FL_SN: true,
  AT_FL_SN: true,
  BA: true,
  KUN_YTELSE: true,
  TY: true,
  VENTELØNN_VARTPENGER: true,
  '-': true,
});

const tilAndelKilde = lagKodeverkValidator<NonNullable<FordelAndelDto['kilde']>>('andelkilde', {
  SAKSBEHANDLER_KOFAKBER: true,
  PROSESS_BESTEBEREGNING: true,
  SAKSBEHANDLER_FORDELING: true,
  PROSESS_PERIODISERING: true,
  PROSESS_OMFORDELING: true,
  PROSESS_START: true,
});

const tilAndelsnr = (andelsnr: number | string): number => {
  const tall = Number(andelsnr);
  if (!Number.isInteger(tall)) {
    throw new Error(`Ugyldig andelsnr: ${andelsnr}`);
  }
  return tall;
};

const lagFordelAndel = (andel: FordelAndel) => ({
  ...andel,
  andelsnr: tilAndelsnr(andel.andelsnr),
  aktivitetStatus: tilValgfriKode(andel.aktivitetStatus, tilAktivitetStatus),
  kilde: tilValgfriKode(andel.kilde, tilAndelKilde),
  forrigeInntektskategori: tilValgfriKode(andel.forrigeInntektskategori, tilInntektskategori),
});

const tilFordelBeregningsgrunnlagAp = (
  apData: VurderRefusjonBeregningsgrunnlagAP | FordelBeregningsgrunnlagAP,
): FordelBeregningsgrunnlagAp => {
  switch (apData.kode) {
    case FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG: {
      const grunnlag = notEmpty(apData.grunnlag[0], 'Mangler grunnlag i fordeling');
      return {
        ...grunnlag,
        kode: AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG,
        endretBeregningsgrunnlagPerioder: grunnlag.endretBeregningsgrunnlagPerioder.map(periode => ({
          ...periode,
          andeler: periode.andeler.map(lagFordelAndel),
        })),
      };
    }
    case FaktaFordelBeregningAvklaringsbehovCode.VURDER_REFUSJON_BERGRUNN: {
      return {
        ...notEmpty(apData.grunnlag[0], 'Mangler grunnlag i fordeling'),
        kode: AksjonspunktKode.VURDER_REFUSJON_BERGRUNN,
      };
    }
  }
};

const lagModifisertCallback =
  (submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>) =>
  (
    aksjonspunkterSomSkalLagres:
      | VurderRefusjonBeregningsgrunnlagAP
      | FordelBeregningsgrunnlagAP
      | (VurderRefusjonBeregningsgrunnlagAP | FordelBeregningsgrunnlagAP)[],
  ) => {
    const apListe = Array.isArray(aksjonspunkterSomSkalLagres)
      ? aksjonspunkterSomSkalLagres
      : [aksjonspunkterSomSkalLagres];
    return submitCallback(apListe.map(tilFordelBeregningsgrunnlagAp));
  };

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
