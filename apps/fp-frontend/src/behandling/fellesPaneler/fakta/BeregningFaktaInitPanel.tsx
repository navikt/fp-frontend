import { type ComponentProps, use } from 'react';
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

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkar } from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

import '@navikt/ft-fakta-beregning/dist/style.css';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN,
  AksjonspunktKode.AVKLAR_AKTIVITETER,
  AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
];

const OVERSTYRING_AP_CODES = [
  AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const BeregningFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_AP_CODES);

  const api = useBehandlingApi(behandling);

  const { data: beregningsgrunnlag, isFetching } = useQuery(api.beregningsgrunnlagOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.BEREGNING}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Beregning' })}
      skalPanelVisesIMeny={harLenke(behandling, 'BEREGNINGSGRUNNLAG')}
    >
      {!isFetching ? (
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
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};

const Wrapper = (props: ComponentProps<typeof BeregningFaktaIndex>) => {
  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData();
  return <BeregningFaktaIndex {...props} formData={mellomlagretFormData} setFormData={setMellomlagretFormData} />;
};

const mapBGKodeTilFpsakKode = (bgKode: string): string => {
  switch (bgKode) {
    case FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER:
      return AksjonspunktKode.AVKLAR_AKTIVITETER;
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:
      return AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;
    case FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN:
      return AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN;
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:
      return AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;
    default:
      throw new Error(`Ukjent avklaringspunkt ${bgKode}`);
  }
};

const lagModifisertCallback =
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents -- [JOHANNES] krever fiks i ft-saksbehandling-frontend
  (submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>) =>
    (aksjonspunkterSomSkalLagres: SubmitBeregningType) => {
      const apListe = Array.isArray(aksjonspunkterSomSkalLagres)
        ? aksjonspunkterSomSkalLagres
        : [aksjonspunkterSomSkalLagres];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      const transformerteData = apListe.map(apData => ({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
        kode: mapBGKodeTilFpsakKode(apData.kode),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ...apData.grunnlag[0],
      }));
      return submitCallback(transformerteData);
    };

const lagBGVilkår = (vilkår: Vilkar[], beregningsgrunnlag?: Beregningsgrunnlag): FtVilkar | null => {
  const bgVilkar = vilkår.find(v => v.vilkarType === VilkarType.BEREGNINGSGRUNNLAGVILKARET);
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
  return [nyttBG];
};
