import { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';

import {
  BeregningFaktaIndex,
  FaktaBeregningAvklaringsbehovCode,
  type FtBeregningsgrunnlag,
  type FtVilkar,
  type OverstyrBeregningsaktiviteterAP,
  type SubmitBeregningType,
} from '@navikt/ft-fakta-beregning';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  FaktaOmBeregningTilfelle,
  OpptjeningAktivitetType,
  Vilkår,
} from '@navikt/fp-types';
import type { BeregningAp, FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { lagKodeverkValidator, tilInntektskategori, tilValgfriKode } from './beregningKodeverk';

import '@navikt/ft-fakta-beregning/dist/style.css';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN,
  AksjonspunktKode.AVKLAR_AKTIVITETER,
  AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const BeregningFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const { behandling, rettigheter } = useBehandlingDataContext();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = getBehandlingApi(behandling);

  const { data: beregningsgrunnlag, isFetching } = useQuery(api.beregningsgrunnlagOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.BEREGNING}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Beregning' })}
      skalPanelVisesIMeny={harLenke(behandling, 'BEREGNINGSGRUNNLAG')}
    >
      {isFetching ? (
        <LoadingPanel />
      ) : (
        <Wrapper
          kodeverkSamling={standardPanelProps.alleKodeverk}
          vilkar={lagBGVilkår(behandling.vilkår, beregningsgrunnlag)}
          beregningsgrunnlag={lagFormatertBG(beregningsgrunnlag)}
          submitCallback={lagModifisertCallback(standardPanelProps.submitCallback)}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
          skalKunneOverstyreAktiviteter
          readOnly={standardPanelProps.isReadOnly}
          submittable={standardPanelProps.isSubmittable}
        />
      )}
    </FaktaDefaultInitPanel>
  );
};

const Wrapper = (props: Omit<ComponentProps<typeof BeregningFaktaIndex>, 'formData' | 'setFormData'>) => {
  const { mellomlagretFormData, setMellomlagretFormData } =
    useMellomlagretFormData<React.ComponentProps<typeof BeregningFaktaIndex>['formData']>();
  return <BeregningFaktaIndex {...props} formData={mellomlagretFormData} setFormData={setMellomlagretFormData} />;
};

// SubmitBeregningType mangler aksjonspunktene for aktiviteter, men ft-fakta-beregning sender dem også
type InnsendtBeregningAP =
  | SubmitBeregningType
  | OverstyrBeregningsaktiviteterAP
  | (Omit<OverstyrBeregningsaktiviteterAP, 'kode'> & { kode: FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER });

type BeregningsaktiviteterGrunnlag = OverstyrBeregningsaktiviteterAP['grunnlag'][number];
type FaktaBeregning = SubmitBeregningType['grunnlag'][number]['fakta'];
type OverstyrtAndel = NonNullable<SubmitBeregningType['grunnlag'][number]['overstyrteAndeler']>[number];

const tilOpptjeningAktivitetType = lagKodeverkValidator<OpptjeningAktivitetType>('opptjeningaktivitettype', {
  AAP: true,
  ARBEID: true,
  DAGPENGER: true,
  FORELDREPENGER: true,
  FRILANS: true,
  FRILOPP: true,
  MILITÆR_ELLER_SIVILTJENESTE: true,
  NÆRING: true,
  OMSORGSPENGER: true,
  OPPLÆRINGSPENGER: true,
  PLEIEPENGER: true,
  FRISINN: true,
  ETTERLØNN_SLUTTPAKKE: true,
  SVANGERSKAPSPENGER: true,
  SYKEPENGER: true,
  VENTELØNN_VARTPENGER: true,
  VIDERE_ETTERUTDANNING: true,
  UTENLANDSK_ARBEIDSFORHOLD: true,
  UTDANNINGSPERMISJON: true,
  '-': true,
});

const tilFaktaOmBeregningTilfelle = lagKodeverkValidator<FaktaOmBeregningTilfelle>('fakta om beregning-tilfelle', {
  VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD: true,
  VURDER_SN_NY_I_ARBEIDSLIVET: true,
  VURDER_NYOPPSTARTET_FL: true,
  FASTSETT_MAANEDSINNTEKT_FL: true,
  FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING: true,
  VURDER_LØNNSENDRING: true,
  FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING: true,
  VURDER_AT_OG_FL_I_SAMME_ORGANISASJON: true,
  FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE: true,
  VURDER_ETTERLØNN_SLUTTPAKKE: true,
  FASTSETT_ETTERLØNN_SLUTTPAKKE: true,
  VURDER_MOTTAR_YTELSE: true,
  VURDER_BESTEBEREGNING: true,
  VURDER_MILITÆR_SIVILTJENESTE: true,
  VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT: true,
  FASTSETT_BG_KUN_YTELSE: true,
  TILSTØTENDE_YTELSE: true,
  FASTSETT_ENDRET_BEREGNINGSGRUNNLAG: true,
  '-': true,
});

const førsteGrunnlag = <T,>(ap: { grunnlag: T[] }): T => notEmpty(ap.grunnlag[0], 'Mangler grunnlag i beregning');

const lagBeregningsaktiviteter = (grunnlag: BeregningsaktiviteterGrunnlag) => ({
  ...grunnlag,
  beregningsaktivitetLagreDtoList: grunnlag.beregningsaktivitetLagreDtoList.map(aktivitet => ({
    ...aktivitet,
    opptjeningAktivitetType: tilOpptjeningAktivitetType(aktivitet.opptjeningAktivitetType),
  })),
});

const lagFakta = (fakta: FaktaBeregning) => ({
  ...fakta,
  faktaOmBeregningTilfeller: fakta.faktaOmBeregningTilfeller?.map(tilFaktaOmBeregningTilfelle),
  fastsattUtenInntektsmelding: fakta.fastsattUtenInntektsmelding && {
    andelListe: fakta.fastsattUtenInntektsmelding.andelListe.map(andel => ({
      ...andel,
      inntektskategori: tilValgfriKode(andel.inntektskategori, tilInntektskategori),
    })),
  },
  kunYtelseFordeling: fakta.kunYtelseFordeling && {
    ...fakta.kunYtelseFordeling,
    skalBrukeBesteberegning: fakta.kunYtelseFordeling.skalBrukeBesteberegning ?? undefined,
  },
});

const lagOverstyrtAndel = (andel: OverstyrtAndel) => ({
  ...andel,
  forrigeInntektskategori: tilValgfriKode(andel.forrigeInntektskategori, tilInntektskategori),
  fastsatteVerdier: {
    ...andel.fastsatteVerdier,
    inntektskategori: tilValgfriKode(andel.fastsatteVerdier.inntektskategori, tilInntektskategori),
  },
});

const tilBeregningAp = (apData: InnsendtBeregningAP): BeregningAp => {
  switch (apData.kode) {
    case FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER: {
      return { ...lagBeregningsaktiviteter(førsteGrunnlag(apData)), kode: AksjonspunktKode.AVKLAR_AKTIVITETER };
    }
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER: {
      return {
        ...lagBeregningsaktiviteter(førsteGrunnlag(apData)),
        kode: AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
      };
    }
    case FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN: {
      const grunnlag = førsteGrunnlag(apData);
      return { ...grunnlag, kode: AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN, fakta: lagFakta(grunnlag.fakta) };
    }
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG: {
      const grunnlag = førsteGrunnlag(apData);
      return {
        ...grunnlag,
        kode: AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
        fakta: lagFakta(grunnlag.fakta),
        overstyrteAndeler: notEmpty(grunnlag.overstyrteAndeler, 'Mangler overstyrte andeler').map(lagOverstyrtAndel),
      };
    }
  }
};

const lagModifisertCallback =
  (submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>) =>
  (aksjonspunkterSomSkalLagres: InnsendtBeregningAP[]) =>
    submitCallback(aksjonspunkterSomSkalLagres.map(tilBeregningAp));

const lagBGVilkår = (vilkår: Vilkår[], beregningsgrunnlag?: Beregningsgrunnlag): FtVilkar | null => {
  const bgVilkar = vilkår.find(v => v.vilkarType === 'FP_VK_41');
  if (!bgVilkar || !beregningsgrunnlag) {
    return null;
  }
  const nyVK: FtVilkar = {
    ...bgVilkar,
    perioder: [
      {
        avslagKode: bgVilkar.avslagKode ?? undefined,
        vurderesIBehandlingen: true,
        periode: {
          fom: beregningsgrunnlag.skjaeringstidspunktBeregning,
          tom: TIDENES_ENDE,
        },
        merknadParametere: {},
        vilkarStatus: bgVilkar.vilkarStatus,
      },
    ],
  };
  return nyVK;
};

const lagFormatertBG = (beregningsgrunnlag?: Beregningsgrunnlag): FtBeregningsgrunnlag[] => {
  if (!beregningsgrunnlag) {
    return [];
  }
  const nyttBG = {
    ...beregningsgrunnlag,
    vilkårsperiodeFom: beregningsgrunnlag.skjaeringstidspunktBeregning,
  };
  // @ts-expect-error Avventar svar på spørsmål om endringar bør gjerast i ft-repo eller på vår backend
  return [nyttBG];
};
