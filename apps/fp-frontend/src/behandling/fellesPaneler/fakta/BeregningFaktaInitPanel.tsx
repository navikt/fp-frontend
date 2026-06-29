import { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';

import {
  BeregningFaktaIndex,
  FaktaBeregningAvklaringsbehovCode,
  type FtBeregningsgrunnlag,
  type FtVilkar,
  type SubmitBeregningType,
} from '@navikt/ft-fakta-beregning';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, OverstyringKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkår } from '@navikt/fp-types';
import type {
  AksjonspunktTilBekreftelse,
  FaktaAksjonspunkt,
  OverstyringAksjonspunktTilBekreftelse,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

import '@navikt/ft-fakta-beregning/dist/style.css';

type BeregningAp =
  | AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_AKTIVITETER | AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN>
  | OverstyringAksjonspunktTilBekreftelse<
      OverstyringKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER | OverstyringKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG
    >;

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN,
  AksjonspunktKode.AVKLAR_AKTIVITETER,
  OverstyringKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  OverstyringKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
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

const mapBGKodeTilFpsakKode = (
  bgKode: string,
):
  | AksjonspunktKode.AVKLAR_AKTIVITETER
  | OverstyringKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER
  | AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN
  | OverstyringKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG => {
  switch (bgKode) {
    case FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER:
      return AksjonspunktKode.AVKLAR_AKTIVITETER;
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:
      return OverstyringKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;
    case FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN:
      return AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN;
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:
      return OverstyringKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;
    default:
      throw new Error(`Ukjent avklaringspunkt ${bgKode}`);
  }
};

const lagModifisertCallback =
  (submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>) =>
  (aksjonspunkterSomSkalLagres: SubmitBeregningType[]) => {
    const apListe = Array.isArray(aksjonspunkterSomSkalLagres)
      ? aksjonspunkterSomSkalLagres
      : [aksjonspunkterSomSkalLagres];

    const transformerteData = apListe.map<BeregningAp>(
      apData =>
        ({
          kode: mapBGKodeTilFpsakKode(apData.kode),
          ...notEmpty(apData.grunnlag[0], 'Mangler grunnlag i be'),
        }) as BeregningAp,
    );
    return submitCallback(transformerteData);
  };

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
