import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { OverstyringKnapp } from '@navikt/ft-ui-komponenter';
import { BTag, decodeHtmlEntity } from '@navikt/ft-utils';

import { MedlemskapVurdering, MedlemskapVurderinger } from '@navikt/fp-fakta-medlemskap';
import { AksjonspunktKode, type VilkårOverstyringAksjonspunkter } from '@navikt/fp-kodeverk';
import { OverstyringPanel, VilkarResultPicker, VilkårStatus } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, BehandlingFpSak, ManuellBehandlingResultat, Vilkar } from '@navikt/fp-types';
import type {
  OverstyringAp,
  OverstyringMedlemskapsvilkaretAp,
  OverstyringMedlemskapsvilkaretLopendeAp,
  OverstyringMedlemskapvilkaretForutgaendeAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import {
  erAksjonspunktÅpent,
  useMellomlagretFormData,
  usePanelDataContext,
  usePanelOverstyring,
} from '@navikt/fp-utils';

const isHidden = (kanOverstyre: boolean, aksjonspunkt: Aksjonspunkt | undefined): boolean =>
  !aksjonspunkt && !kanOverstyre;

type FormValues = {
  erVilkarOk?: boolean;
  vurdering?: MedlemskapVurdering;
  avslagskode?: string;
  opphørFom?: string;
  medlemFom?: string;
  begrunnelse?: string;
  isOverstyrt?: boolean;
};

function erOverstyringAvMedlemskap(overstyringApKode: AksjonspunktKode) {
  return [
    AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET,
    AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
  ].includes(overstyringApKode);
}

const createInitialValues = (
  vilkår: Vilkar | undefined,
  aksjonspunkter: Aksjonspunkt[],
  overstyringApKode: VilkårOverstyringAksjonspunkter,
  behandlingsresultat: BehandlingFpSak['behandlingsresultat'] | undefined,
  medlemskapManuellBehandlingResultat: ManuellBehandlingResultat | undefined,
): FormValues => {
  const aksjonspunkt = aksjonspunkter.find(ap => ap.definisjon === overstyringApKode);
  const felles = {
    isOverstyrt: aksjonspunkt !== undefined,
    begrunnelse: decodeHtmlEntity(aksjonspunkt?.begrunnelse ?? ''),
  };

  if (erOverstyringAvMedlemskap(overstyringApKode)) {
    return aksjonspunkt
      ? {
          ...felles,
          ...MedlemskapVurderinger.initialValues(medlemskapManuellBehandlingResultat),
        }
      : felles;
  }
  return {
    ...felles,
    ...VilkarResultPicker.buildInitialValues(vilkår, aksjonspunkter, behandlingsresultat),
  };
};

type OverstyringVilkår =
  | OverstyringAp
  | OverstyringMedlemskapsvilkaretLopendeAp
  | OverstyringMedlemskapsvilkaretAp
  | OverstyringMedlemskapvilkaretForutgaendeAp;

const transformValues = (values: FormValues, overstyringApKode: VilkårOverstyringAksjonspunkter): OverstyringVilkår => {
  const felles = {
    kode: overstyringApKode,
    begrunnelse: values.begrunnelse,
  };

  switch (overstyringApKode) {
    case AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET:
    case AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR:
      return {
        ...felles,
        ...MedlemskapVurderinger.transformValues(values),
      };
    default:
      return {
        ...felles,
        ...VilkarResultPicker.transformValues(values),
      };
  }
};

interface Props {
  medlemskapManuellBehandlingResultat: ManuellBehandlingResultat | undefined;
  panelTekstKode: string;
}

/**
 * VilkarresultatForm
 *
 * Viser resultat av vilkårskjøring når det ikke finnes tilknyttede aksjonspunkter.
 * Resultatet kan overstyres av Nav-ansatt med overstyr-rettighet.
 */
export const VilkarresultatMedOverstyringForm = ({ panelTekstKode, medlemskapManuellBehandlingResultat }: Props) => {
  const {
    behandling,
    fagsak,
    submitCallback,
    alleMerknaderFraBeslutter,
    vilkårForPanel,
    aksjonspunkterForPanel,
    harÅpentAksjonspunkt,
  } = usePanelDataContext<OverstyringVilkår>();

  const { erOverstyrt, toggleOverstyring, overstyringApKode, overrideReadOnly, kanOverstyreAccess } =
    usePanelOverstyring<VilkårOverstyringAksjonspunkter>();

  const vilkår = vilkårForPanel[0];
  const initialValues = createInitialValues(
    vilkår,
    aksjonspunkterForPanel,
    overstyringApKode,
    behandling.behandlingsresultat,
    medlemskapManuellBehandlingResultat,
  );

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const togglePa = () => toggleOverstyring();

  const toggleAv = () => {
    formMethods.reset();
    toggleOverstyring();
  };

  const erVilkårOk = formMethods.watch('erVilkarOk');

  const aksjonspunkt = aksjonspunkterForPanel.find(ap => ap.definisjon === overstyringApKode);
  const hasAksjonspunkt = !!aksjonspunkt;
  const isSolvable = aksjonspunkt === undefined ? false : !erAksjonspunktÅpent(aksjonspunkt) || aksjonspunkt.kanLoses;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, overstyringApKode))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="space-16">
        <VilkårStatus
          title={<FormattedMessage id={panelTekstKode} />}
          vilkår={vilkår}
          aksjonspunkterForPanel={aksjonspunkterForPanel}
          harÅpentAksjonspunkt={harÅpentAksjonspunkt}
          erOverstyringAktivert={erOverstyrt}
          overstyringsKnapp={
            !isHidden(kanOverstyreAccess.isEnabled, aksjonspunkt) && (
              <OverstyringKnapp onClick={togglePa} erOverstyrt={erOverstyrt || overrideReadOnly} />
            )
          }
        />
        {(erOverstyrt || hasAksjonspunkt) && (
          <OverstyringPanel
            erOverstyrt={erOverstyrt}
            isSolvable={erOverstyrt || isSolvable}
            erVilkårOk={erVilkårOk}
            hasAksjonspunkt={hasAksjonspunkt}
            overrideReadOnly={overrideReadOnly}
            isSubmitting={formMethods.formState.isSubmitting}
            isPristine={!formMethods.formState.isDirty}
            toggleAv={toggleAv}
            erIkkeGodkjentAvBeslutter={
              aksjonspunkt ? !!alleMerknaderFraBeslutter[aksjonspunkt.definisjon]?.notAccepted : false
            }
          >
            {erOverstyringAvMedlemskap(overstyringApKode) && vilkår ? (
              <MedlemskapVurderinger
                vilkår={vilkår}
                readOnly={overrideReadOnly || !erOverstyrt}
                ytelse={fagsak.fagsakYtelseType}
                erRevurdering={behandling.type === 'BT-004'}
                erForutgående={overstyringApKode === AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR}
              />
            ) : (
              <VilkarResultPicker
                vilkår={vilkår}
                legend={<FormattedMessage id="VilkarresultatMedOverstyringForm.ErVilkåretOppfylt" />}
                isReadOnly={overrideReadOnly || !erOverstyrt}
                vilkårOppfyltLabel={<FormattedMessage id="VilkarresultatMedOverstyringForm.ErOppfylt" />}
                vilkårIkkeOppfyltLabel={
                  <FormattedMessage id="VilkarresultatMedOverstyringForm.ErIkkeOppfylt" values={{ b: BTag }} />
                }
              />
            )}
          </OverstyringPanel>
        )}
      </VStack>
    </RhfForm>
  );
};
