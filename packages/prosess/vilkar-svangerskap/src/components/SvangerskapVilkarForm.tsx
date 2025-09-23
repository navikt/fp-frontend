import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { BTag } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import type {
  Aksjonspunkt,
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  Behandling,
  FodselOgTilrettelegging,
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

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues): BekreftSvangerskapspengervilkarAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
  kode: AksjonspunktKode.SVANGERSKAPSVILKARET,
});

interface Props {
  status: string;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
}

export const SvangerskapVilkarForm = ({ svangerskapspengerTilrettelegging, status }: Props) => {
  const {
    aksjonspunkterForPanel,
    alleMerknaderFraBeslutter,
    behandling,
    isSubmittable,
    harÅpentAksjonspunkt,
    submitCallback,
    alleKodeverk,
    isReadOnly,
  } = usePanelDataContext<BekreftSvangerskapspengervilkarAp>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vent til vi har bestemt strict index access
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const finnesUttak = finnesInnvilgetUttak(svangerskapspengerTilrettelegging);

  const intl = useIntl();

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

  const avslagsårsaker = alleKodeverk['Avslagsårsak'][VilkarType.SVANGERSKAPVILKARET];

  const originalErVilkårOk = harÅpentAksjonspunkt ? undefined : VilkarUtfallType.OPPFYLT === status;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'SvangerskapVilkarForm.Svangerskap' })}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        originalErVilkårOk={originalErVilkårOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <VStack gap="space-16">
          <Label size="small">
            <FormattedMessage id="SvangerskapVilkarForm.RettTilSvp" />
          </Label>
          {!finnesUttak && (
            <Label size="small">
              <FormattedMessage id="SvangerskapVilkarForm.IkkeInnvilgetUttak" />
            </Label>
          )}
          <VilkarResultPicker
            avslagsårsaker={avslagsårsaker}
            isReadOnly={isReadOnly}
            skalKunneInnvilge={finnesUttak}
            customVilkårOppfyltText={<FormattedMessage id="SvangerskapVilkarForm.Oppfylt" />}
            customVilkårIkkeOppfyltText={
              <FormattedMessage id="SvangerskapVilkarForm.IkkeOppfylt" values={{ b: BTag }} />
            }
          />
          <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} notRequired={erVilkarOk} />
        </VStack>
      </ProsessPanelTemplate>
    </RhfForm>
  );
};
