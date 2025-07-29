import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { ariaCheck, hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, FaresignalVurdering } from '@navikt/fp-kodeverk';
import { type Aksjonspunkt, type KodeverkMedNavn, type Risikoklassifisering } from '@navikt/fp-types';

import type { AvklartRisikoklassifiseringAp } from '../types/AvklartRisikoklassifiseringAp';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

const begrunnelseFieldName = 'begrunnelse';
const VURDERING_HOVEDKATEGORI = 'vurderingerHovedkategori';
const IKKE_REELLE_VURDERINGER_UNDERKATEGORI = 'ikkeReelleVurderingerUnderkategori';

type Values = {
  [begrunnelseFieldName]?: string;
  [VURDERING_HOVEDKATEGORI]: string;
  [IKKE_REELLE_VURDERINGER_UNDERKATEGORI]?: string;
};

interface Props {
  aksjonspunkt: Aksjonspunkt;
  readOnly: boolean;
  risikoklassifisering?: Risikoklassifisering;
  submitCallback?: (data: AvklartRisikoklassifiseringAp) => void;
  faresignalVurderinger: KodeverkMedNavn<'FaresignalVurdering'>[];
}

/**
 * IngenRisikoPanel
 *
 * Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
export const AvklarFaresignalerForm = ({
  readOnly,
  aksjonspunkt,
  faresignalVurderinger,
  risikoklassifisering,
  submitCallback,
}: Props) => {
  const underkategoriFaresignalVurderinger = faresignalVurderinger.filter(
    vurdering =>
      vurdering.kode !== FaresignalVurdering.INNVIRKNING && vurdering.kode !== FaresignalVurdering.INGEN_INNVIRKNING,
  );

  const formMethods = useForm<Values>({
    defaultValues: buildInitialValues(aksjonspunkt, risikoklassifisering),
  });

  const harValgtReelle = formMethods.watch(VURDERING_HOVEDKATEGORI) === FaresignalVurdering.INNVIRKNING;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: Values) => submitCallback && submitCallback(transformValues(values))}
    >
      <VStack gap="4">
        <RhfTextarea
          name={begrunnelseFieldName}
          control={formMethods.control}
          label={<FormattedMessage id="Risikopanel.Forms.Vurdering" />}
          validate={[required, maxLength1500, minLength3, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
        <RhfRadioGroup
          name={VURDERING_HOVEDKATEGORI}
          control={formMethods.control}
          label={<FormattedMessage id="Risikopanel.RhfForm.Resultat" />}
          validate={[required]}
          isReadOnly={readOnly}
          radios={[
            {
              value: FaresignalVurdering.INNVIRKNING,
              label:
                faresignalVurderinger.find(vurdering => vurdering.kode === FaresignalVurdering.INNVIRKNING)?.navn ?? '',
              element: (
                <div style={{ paddingTop: '15px' }}>
                  {harValgtReelle && (
                    <ArrowBox alignOffset={20}>
                      <RhfRadioGroup
                        name={IKKE_REELLE_VURDERINGER_UNDERKATEGORI}
                        control={formMethods.control}
                        validate={[required]}
                        isReadOnly={readOnly}
                        radios={underkategoriFaresignalVurderinger.map(vurdering => ({
                          value: vurdering.kode,
                          label: vurdering.navn,
                        }))}
                      />
                    </ArrowBox>
                  )}
                </div>
              ),
            },
            {
              value: FaresignalVurdering.INGEN_INNVIRKNING,
              label:
                faresignalVurderinger.find(vurdering => vurdering.kode === FaresignalVurdering.INGEN_INNVIRKNING)
                  ?.navn ?? '',
            },
          ]}
        />
        <div>
          <Button
            size="small"
            variant="primary"
            loading={formMethods.formState.isSubmitting}
            disabled={!formMethods.formState.isDirty || readOnly || formMethods.formState.isSubmitting}
            onClick={ariaCheck}
          >
            <FormattedMessage id="Risikopanel.RhfForm.Bekreft" />
          </Button>
        </div>
      </VStack>
    </RhfForm>
  );
};

const buildInitialValues = (
  aksjonspunkt: Aksjonspunkt,
  risikoklassifisering?: Risikoklassifisering,
): Values | undefined => {
  if (aksjonspunkt?.begrunnelse && risikoklassifisering?.faresignalVurdering) {
    const kode = risikoklassifisering.faresignalVurdering;
    return {
      [begrunnelseFieldName]: aksjonspunkt.begrunnelse,
      [VURDERING_HOVEDKATEGORI]:
        kode === FaresignalVurdering.INGEN_INNVIRKNING
          ? FaresignalVurdering.INGEN_INNVIRKNING
          : FaresignalVurdering.INNVIRKNING,
      [IKKE_REELLE_VURDERINGER_UNDERKATEGORI]: kode === FaresignalVurdering.INGEN_INNVIRKNING ? undefined : kode,
    };
  }
  return undefined;
};

const transformValues = (values: Values): AvklartRisikoklassifiseringAp => ({
  kode: AksjonspunktKode.VURDER_FARESIGNALER,
  faresignalVurdering: utledFaresignalVurderingVerdi(
    values[VURDERING_HOVEDKATEGORI],
    values[IKKE_REELLE_VURDERINGER_UNDERKATEGORI],
  ),
  begrunnelse: values[begrunnelseFieldName],
});

const utledFaresignalVurderingVerdi = (
  vurderingHovedkategori: string,
  vurderingUnderkategori?: string,
): string | undefined =>
  vurderingHovedkategori === FaresignalVurdering.INGEN_INNVIRKNING
    ? FaresignalVurdering.INGEN_INNVIRKNING
    : vurderingUnderkategori;
