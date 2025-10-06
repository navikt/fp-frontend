import { type ComponentProps, use } from 'react';
import { useIntl } from 'react-intl';

import type { FtVilkar } from '@navikt/ft-fakta-beregning';
import {
  type BeregningAksjonspunktSubmitType,
  BeregningsgrunnlagProsessIndex,
  type FtBeregningsgrunnlag,
  ProsessBeregningsgrunnlagAvklaringsbehovCode,
} from '@navikt/ft-prosess-beregningsgrunnlag';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import type {
  AksjonspunktKode,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  Vilkar,
  VilkårType,
} from '@navikt/fp-types';
import type { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

import '@navikt/ft-prosess-beregningsgrunnlag/dist/style.css';

const mapBGKodeTilFpsakKode = (bgKode: string): AksjonspunktKode => {
  switch (bgKode) {
    case ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:
      return '5038';
    case ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:
      return '5047';
    case ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return '5049';
    case ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
      return '5039';
    default:
      throw new Error(`Ukjent avklaringspunkt ${bgKode}`);
  }
};

const lagModifisertCallback =
  (submitCallback: (aksjonspunkterSomSkalLagres: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>) =>
  (aksjonspunkterSomSkalLagres: BeregningAksjonspunktSubmitType[]) => {
    //TODO (TOR) Det ser ut i BeregningsgrunnlagProsessIndex som om aksjonspunkterSomSkalLagres alltid er eit array?
    const apListe = Array.isArray(aksjonspunkterSomSkalLagres)
      ? aksjonspunkterSomSkalLagres
      : [aksjonspunkterSomSkalLagres];
    const transformerteData = apListe.map(apData => ({
      kode: mapBGKodeTilFpsakKode(apData.kode),
      ...apData.grunnlag[0],
    }));
    // @ts-expect-error Her er det noko rart med typinga
    return submitCallback(transformerteData);
  };

const lagBGVilkår = (vilkår: Vilkar[], beregningsgrunnlag?: Beregningsgrunnlag): FtVilkar | null => {
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
  // @ts-expect-error Johannes ser på denne - mismatch mellom type i ft-repo og generert type
  return [nyttBG];
};

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5038', '5039', '5047', '5049'];

const VILKAR_KODER: VilkårType[] = ['FP_VK_41'];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const BeregningsgrunnlagProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

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
          readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
        />
      )}
    </ProsessDefaultInitPanel>
  );
};

const Wrapper = (props: Omit<ComponentProps<typeof BeregningsgrunnlagProsessIndex>, 'formData' | 'setFormData'>) => {
  const { mellomlagretFormData, setMellomlagretFormData } =
    useMellomlagretFormData<React.ComponentProps<typeof BeregningsgrunnlagProsessIndex>['formData']>();
  return (
    <BeregningsgrunnlagProsessIndex {...props} formData={mellomlagretFormData} setFormData={setMellomlagretFormData} />
  );
};
