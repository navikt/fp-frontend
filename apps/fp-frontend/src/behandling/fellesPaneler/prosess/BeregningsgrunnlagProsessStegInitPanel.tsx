import { type ComponentProps, useState } from 'react';
import { useIntl } from 'react-intl';

import { ToggleGroup, VStack } from '@navikt/ds-react';
import type { FtVilkar } from '@navikt/ft-fakta-beregning';
import { BeregningProsessIndex } from '@navikt/ft-prosess-beregning';
import {
  type BeregningAksjonspunktSubmitType,
  BeregningsgrunnlagProsessIndex,
  type FtBeregningsgrunnlag,
} from '@navikt/ft-prosess-beregningsgrunnlag';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkår, VilkårType } from '@navikt/fp-types';
import type { AksjonspunktTilBekreftelse, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

import '@navikt/ft-prosess-beregningsgrunnlag/dist/style.css';
import '@navikt/ft-prosess-beregning/dist/style.css';

type BGAksjonpunktKoder =
  | AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS
  | AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD
  | AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET
  | AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE;
type BeregningsgrunnlagAp = AksjonspunktTilBekreftelse<BGAksjonpunktKoder>;

const lagModifisertCallback =
  (submitCallback: (aksjonspunkterSomSkalLagres: ProsessAksjonspunkt[]) => Promise<void>) =>
  (aksjonspunkterSomSkalLagres: BeregningAksjonspunktSubmitType[]) => {
    const transformerteData = aksjonspunkterSomSkalLagres.map<BeregningsgrunnlagAp>(apData => {
      const grunnlag = notEmpty(apData.grunnlag[0]);
      const felles = {
        periode: grunnlag.periode,
        begrunnelse: grunnlag.begrunnelse,
      };

      if ('inntektPrAndelList' in grunnlag) {
        return {
          ...felles,
          kode: AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
          inntektPrAndelList: grunnlag.inntektPrAndelList,
          inntektFrilanser: grunnlag.inntektFrilanser ?? undefined,
        } satisfies AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS>;
      } else if ('erVarigEndretNaering' in grunnlag) {
        return {
          ...felles,
          kode: AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE,
          erVarigEndretNaering: grunnlag.erVarigEndretNaering,
          bruttoBeregningsgrunnlag: grunnlag.bruttoBeregningsgrunnlag ?? undefined,
        } satisfies AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE>;
      } else if ('fastsatteTidsbegrensedePerioder' in grunnlag) {
        return {
          ...felles,
          kode: AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
          fastsatteTidsbegrensedePerioder: grunnlag.fastsatteTidsbegrensedePerioder,
          frilansInntekt: grunnlag.frilansInntekt ?? undefined,
        } satisfies AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD>;
      } else if ('bruttoBeregningsgrunnlag' in grunnlag) {
        return {
          ...felles,
          kode: AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET,
          bruttoBeregningsgrunnlag: grunnlag.bruttoBeregningsgrunnlag,
        } satisfies AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET>;
      } else {
        throw new Error(`Ukjent avklaringspunkt ${apData.kode}`);
      }
    });

    return submitCallback(transformerteData);
  };

const lagBGVilkår = (vilkår: Vilkår[], beregningsgrunnlag?: Beregningsgrunnlag): FtVilkar | null => {
  const bgVilkar = vilkår.find(v => v.vilkarType === 'FP_VK_41');
  if (!bgVilkar || !beregningsgrunnlag) {
    return null;
  }
  return {
    ...bgVilkar,
    perioder: [
      {
        avslagKode: bgVilkar.avslagKode ?? undefined,
        vurderesIBehandlingen: true,
        merknadParametere: {},
        periode: {
          fom: beregningsgrunnlag.skjaeringstidspunktBeregning,
          tom: TIDENES_ENDE,
        },
        vilkarStatus: bgVilkar.vilkarStatus,
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
    vilkårsperiodeFom: beregningsgrunnlag.skjaeringstidspunktBeregning,
  };
  // @ts-expect-error Avventar svar på spørsmål om endringar bør gjerast i ft-repo eller på vår backend
  return [nyttBG];
};

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE,
  AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET,
];

const VILKAR_KODER = ['FP_VK_41'] satisfies VilkårType[];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const BeregningsgrunnlagProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const { behandling } = useBehandlingDataContext();

  const api = getBehandlingApi(behandling);

  const { data: beregningsgrunnlag, isFetching } = useQuery(api.beregningsgrunnlagOptions(behandling));

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.BEREGNINGSGRUNNLAG}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Beregning' })}
      skalPanelVisesIMeny
    >
      {isFetching ? (
        <LoadingPanel />
      ) : (
        <Wrapper
          kodeverkSamling={standardPanelProps.alleKodeverk}
          beregningsgrunnlagsvilkar={lagBGVilkår(standardPanelProps.vilkårForPanel, beregningsgrunnlag)}
          beregningsgrunnlagListe={lagFormatertBG(beregningsgrunnlag)}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          submitCallback={lagModifisertCallback(standardPanelProps.submitCallback)}
          isReadOnly={standardPanelProps.isReadOnly}
          readOnlySubmitButton={!standardPanelProps.isSubmittable}
        />
      )}
    </ProsessDefaultInitPanel>
  );
};

type Visning = 'ny' | 'gammel';

const Wrapper = (props: Omit<ComponentProps<typeof BeregningsgrunnlagProsessIndex>, 'formData' | 'setFormData'>) => {
  const { mellomlagretFormData, setMellomlagretFormData } =
    useMellomlagretFormData<React.ComponentProps<typeof BeregningsgrunnlagProsessIndex>['formData']>();

  const erProd = globalThis.location.hostname.includes('intern.nav.no');
  const erAktivitetKunAT = props.beregningsgrunnlagListe
    .flatMap(bg => bg.aktivitetStatus)
    .every(status => status === 'AT');

  const [valgtVisning, setValgtVisning] = useState<Visning>(erAktivitetKunAT ? 'ny' : 'gammel');

  return (
    <VStack gap="space-16">
      {!erProd && (
        <ToggleGroup value={valgtVisning} onChange={value => setValgtVisning(value as Visning)} size="small">
          <ToggleGroup.Item value="gammel" label="Gammel visning" />
          <ToggleGroup.Item value="ny" label="Ny visning" />
        </ToggleGroup>
      )}
      {valgtVisning === 'gammel' && (
        <BeregningsgrunnlagProsessIndex
          {...props}
          formData={mellomlagretFormData}
          setFormData={setMellomlagretFormData}
        />
      )}
      {valgtVisning === 'ny' && (
        <BeregningProsessIndex
          {...props}
          isSubmittable={!props.readOnlySubmitButton}
          beregningsgrunnlagsvilkår={props.beregningsgrunnlagsvilkar}
          formData={mellomlagretFormData}
          setFormData={setMellomlagretFormData}
        />
      )}
    </VStack>
  );
};
