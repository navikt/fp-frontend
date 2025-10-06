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

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkar } from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

import '@navikt/ft-fakta-beregning/dist/style.css';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5058', '5052', '6014', '6015'];

const OVERSTYRING_AP_CODES: AksjonspunktKode[] = ['6014', '6015'];

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

const mapBGKodeTilFpsakKode = (bgKode: string): AksjonspunktKode => {
  switch (bgKode) {
    case FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER:
      return '5052';
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:
      return '6014';
    case FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN:
      return '5058';
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:
      return '6015';
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

    const transformerteData = apListe.map(apData => ({
      kode: mapBGKodeTilFpsakKode(apData.kode),
      ...apData.grunnlag[0],
    }));
    // @ts-expect-error -- gale typer
    return submitCallback(transformerteData);
  };

const lagBGVilkår = (vilkår: Vilkar[], beregningsgrunnlag?: Beregningsgrunnlag): FtVilkar | null => {
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
  // @ts-expect-error Johannes ser på denne - mismatch mellom type i ft-repo og generert type
  return [nyttBG];
};
