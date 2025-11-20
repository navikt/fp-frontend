import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { BTag } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextField,
  type ProsessStegBegrunnelseTextFieldFormValues,
  VilkarResultPicker,
  type VilkarResultPickerFormValues,
} from '@navikt/fp-prosess-felles';
import type {
  Aksjonspunkt,
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  BehandlingFpSak,
  FodselOgTilrettelegging,
  VilkarUtfallType,
} from '@navikt/fp-types';
import type { BekreftSvangerskapspengervilkarAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

const finnesUttakPåArbfor = (arbfor: ArbeidsforholdFodselOgTilrettelegging): boolean => {
  const finnesAnnenTilretteleggingEnnHel = arbfor.tilretteleggingDatoer.some(
    (dato: ArbeidsforholdTilretteleggingDato) => dato.type !== 'HEL_TILRETTELEGGING',
  );
  const finnesHelTilretteleggingEtterBehovOppstår = arbfor.tilretteleggingDatoer.some(
    (dato: ArbeidsforholdTilretteleggingDato) =>
      dato.type === 'HEL_TILRETTELEGGING' && dayjs(dato.fom).isAfter(dayjs(arbfor.tilretteleggingBehovFom)),
  );
  return finnesAnnenTilretteleggingEnnHel || finnesHelTilretteleggingEtterBehovOppstår;
};

const finnesInnvilgetUttak = (svangerskapspengerTilrettelegging: FodselOgTilrettelegging): boolean =>
  svangerskapspengerTilrettelegging.arbeidsforholdListe.some(arbfor => finnesUttakPåArbfor(arbfor));

type FormValues = VilkarResultPickerFormValues & ProsessStegBegrunnelseTextFieldFormValues;

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: BehandlingFpSak['behandlingsresultat'],
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
  ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues): BekreftSvangerskapspengervilkarAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  kode: AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET,
});

interface Props {
  status: VilkarUtfallType;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
}

export const SvangerskapVilkarForm = ({ svangerskapspengerTilrettelegging, status }: Props) => {
  const {
    aksjonspunkterForPanel,
    vilkårForPanel,
    alleMerknaderFraBeslutter,
    behandling,
    isSubmittable,
    harÅpentAksjonspunkt,
    submitCallback,
    isReadOnly,
  } = usePanelDataContext<BekreftSvangerskapspengervilkarAp>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const finnesUttak = finnesInnvilgetUttak(svangerskapspengerTilrettelegging);

  const initialValues = buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const erVilkarOk = formMethods.watch('erVilkarOk');

  useEffect(() => {
    if (erVilkarOk) {
      formMethods.clearErrors();
    }
  }, [erVilkarOk]);

  const originalErVilkårOk = harÅpentAksjonspunkt ? undefined : 'OPPFYLT' === status;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={<FormattedMessage id="SvangerskapVilkarForm.Svangerskap" />}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        lovReferanse={vilkårForPanel[0]?.lovReferanse}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        originalErVilkårOk={originalErVilkårOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <VStack gap="space-16">
          <VilkarResultPicker
            vilkår={vilkårForPanel[0]}
            isReadOnly={isReadOnly}
            legend={<FormattedMessage id="SvangerskapVilkarForm.RettTilSvp" />}
            skalKunneInnvilge={finnesUttak}
            vilkårOppfyltLabel={<FormattedMessage id="SvangerskapVilkarForm.Oppfylt" />}
            vilkårIkkeOppfyltLabel={<FormattedMessage id="SvangerskapVilkarForm.IkkeOppfylt" values={{ b: BTag }} />}
          />
          {!finnesUttak && (
            <Detail>
              <FormattedMessage id="SvangerskapVilkarForm.IkkeInnvilgetUttak" />
            </Detail>
          )}
          <ProsessStegBegrunnelseTextField readOnly={isReadOnly} notRequired={erVilkarOk} />
        </VStack>
      </ProsessPanelTemplate>
    </RhfForm>
  );
};
