import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import dayjs from 'dayjs';

import { AksjonspunktKode, KodeverkType, TilretteleggingType, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
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
    (dato: ArbeidsforholdTilretteleggingDato) => dato.type !== TilretteleggingType.HEL_TILRETTELEGGING,
  );
  const finnesHelTilretteleggingEtterBehovOppstår = arbfor.tilretteleggingDatoer.some(
    (dato: ArbeidsforholdTilretteleggingDato) =>
      dato.type === TilretteleggingType.HEL_TILRETTELEGGING &&
      dayjs(dato.fom).isAfter(dayjs(arbfor.tilretteleggingBehovFom)),
  );
  return finnesAnnenTilretteleggingEnnHel || finnesHelTilretteleggingEtterBehovOppstår;
};

const finnesInnvilgetUttak = (svangerskapspengerTilrettelegging: FodselOgTilrettelegging): boolean =>
  svangerskapspengerTilrettelegging?.arbeidsforholdListe
    ? svangerskapspengerTilrettelegging.arbeidsforholdListe.some(arbfor => finnesUttakPåArbfor(arbfor))
    : false;

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
  readOnlySubmitButton: boolean;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
}

export const SvangerskapVilkarForm = ({ readOnlySubmitButton, svangerskapspengerTilrettelegging, status }: Props) => {
  const {
    aksjonspunkterForPanel,
    alleMerknaderFraBeslutter,
    behandling,
    harÅpneAksjonspunkter,
    submitCallback,
    alleKodeverk,
    isReadOnly,
  } = usePanelDataContext<BekreftSvangerskapspengervilkarAp>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const finnesUttak = finnesInnvilgetUttak(svangerskapspengerTilrettelegging);

  const intl = useIntl();

  const initialValues = buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData || initialValues,
  });

  const erVilkarOk = formMethods.watch('erVilkarOk');

  useEffect(() => {
    if (erVilkarOk) {
      formMethods.clearErrors();
    }
  }, [erVilkarOk]);

  const avslagsarsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.SVANGERSKAPVILKARET];

  const originalErVilkarOk = harÅpneAksjonspunkter ? undefined : VilkarUtfallType.OPPFYLT === status;

  const bTag = useCallback((chunks: any) => <b>{chunks}</b>, []);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'SvangerskapVilkarForm.Svangerskap' })}
        isAksjonspunktOpen={harÅpneAksjonspunkter}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={isReadOnly}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <VStack gap="4">
          <Label size="small">
            <FormattedMessage id="SvangerskapVilkarForm.RettTilSvp" />
          </Label>
          {!finnesUttak && (
            <Label size="small">
              <FormattedMessage id="SvangerskapVilkarForm.IkkeInnvilgetUttak" />
            </Label>
          )}
          <VilkarResultPicker
            avslagsarsaker={avslagsarsaker}
            readOnly={isReadOnly}
            skalKunneInnvilge={finnesUttak}
            customVilkarOppfyltText={<FormattedMessage id="SvangerskapVilkarForm.Oppfylt" />}
            customVilkarIkkeOppfyltText={
              <FormattedMessage id="SvangerskapVilkarForm.IkkeOppfylt" values={{ b: bTag }} />
            }
          />
          <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} notRequired={erVilkarOk} />
        </VStack>
      </ProsessPanelTemplate>
    </Form>
  );
};
