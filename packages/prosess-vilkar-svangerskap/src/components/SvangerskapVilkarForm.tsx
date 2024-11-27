import React, { FunctionComponent, useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import moment from 'moment';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  KodeverkType,
  TilretteleggingType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  Behandling,
  FodselOgTilrettelegging,
} from '@navikt/fp-types';
import { BekreftSvangerskapspengervilkarAp } from '@navikt/fp-types-avklar-aksjonspunkter';

const finnesUttakPåArbfor = (arbfor: ArbeidsforholdFodselOgTilrettelegging): boolean => {
  const finnesAnnenTilretteleggingEnnHel = arbfor.tilretteleggingDatoer.some(
    (dato: ArbeidsforholdTilretteleggingDato) => dato.type !== TilretteleggingType.HEL_TILRETTELEGGING,
  );
  const finnesHelTilretteleggingEtterBehovOppstår = arbfor.tilretteleggingDatoer.some(
    (dato: ArbeidsforholdTilretteleggingDato) =>
      dato.type === TilretteleggingType.HEL_TILRETTELEGGING &&
      moment(dato.fom).isAfter(moment(arbfor.tilretteleggingBehovFom)),
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

interface OwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: BekreftSvangerskapspengervilkarAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
  alleKodeverk: AlleKodeverk;
  erIkkeGodkjentAvBeslutter: boolean;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * SvangerskapsvilkårForm
 */
const SvangerskapVilkarForm: FunctionComponent<OwnProps> = ({
  readOnly,
  readOnlySubmitButton,
  isApOpen,
  erIkkeGodkjentAvBeslutter,
  svangerskapspengerTilrettelegging,
  aksjonspunkter,
  behandlingsresultat,
  alleKodeverk,
  submitCallback,
  status,
  formData,
  setFormData,
}) => {
  const finnesUttak = useMemo(
    () => finnesInnvilgetUttak(svangerskapspengerTilrettelegging),
    [svangerskapspengerTilrettelegging],
  );

  const intl = useIntl();

  const initialValues = useMemo(
    () => buildInitialValues(aksjonspunkter, status, behandlingsresultat),
    [behandlingsresultat, aksjonspunkter, status],
  );
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const erVilkarOk = formMethods.watch('erVilkarOk');

  useEffect(() => {
    if (erVilkarOk) {
      formMethods.clearErrors();
    }
  }, [erVilkarOk]);

  const avslagsarsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.SVANGERSKAPVILKARET];

  const isOpenAksjonspunkt = aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : VilkarUtfallType.OPPFYLT === status;

  const bTag = useCallback((chunks: any) => <b>{chunks}</b>, []);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'SvangerskapVilkarForm.Svangerskap' })}
        isAksjonspunktOpen={isApOpen}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={readOnly}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <Label size="small">
          <FormattedMessage id="SvangerskapVilkarForm.RettTilSvp" />
        </Label>
        {!finnesUttak && (
          <>
            <VerticalSpacer sixteenPx />
            <Label size="small">
              <FormattedMessage id="SvangerskapVilkarForm.IkkeInnvilgetUttak" />
            </Label>
          </>
        )}
        <VilkarResultPicker
          avslagsarsaker={avslagsarsaker}
          readOnly={readOnly}
          skalKunneInnvilge={finnesUttak}
          customVilkarOppfyltText={<FormattedMessage id="SvangerskapVilkarForm.Oppfylt" />}
          customVilkarIkkeOppfyltText={<FormattedMessage id="SvangerskapVilkarForm.IkkeOppfylt" values={{ b: bTag }} />}
        />
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} notRequired={erVilkarOk} />
      </ProsessPanelTemplate>
    </Form>
  );
};

export default SvangerskapVilkarForm;
