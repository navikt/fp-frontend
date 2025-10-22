import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  type Aksjonspunkt,
  type FaresignalVurdering,
  type KodeverkMedNavn,
  type Risikoklassifisering,
} from '@navikt/fp-types';

import type { AvklartRisikoklassifiseringAp } from '../types/AvklartRisikoklassifiseringAp';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

const begrunnelseFieldName = 'begrunnelse';
const VURDERING_HOVEDKATEGORI = 'vurderingerHovedkategori';
const IKKE_REELLE_VURDERINGER_UNDERKATEGORI = 'ikkeReelleVurderingerUnderkategori';

type Values = {
  [begrunnelseFieldName]?: string;
  [VURDERING_HOVEDKATEGORI]: FaresignalVurdering;
  [IKKE_REELLE_VURDERINGER_UNDERKATEGORI]?: FaresignalVurdering;
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
    vurdering => vurdering.kode !== 'INNVIRKNING' && vurdering.kode !== 'INGEN_INNVIRKNING',
  );

  const formMethods = useForm<Values>({
    defaultValues: buildInitialValues(aksjonspunkt, risikoklassifisering),
  });

  const harValgtReelle = formMethods.watch(VURDERING_HOVEDKATEGORI) === 'INNVIRKNING';

  return (
    <RhfForm formMethods={formMethods} onSubmit={(values: Values) => submitCallback?.(transformValues(values))}>
      <VStack gap="space-16">
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
          legend={<FormattedMessage id="Risikopanel.RhfForm.Resultat" />}
          validate={[required]}
          readOnly={readOnly}
        >
          <VStack gap="space-12">
            <Radio value="INNVIRKNING" size="small">
              {faresignalVurderinger.find(vurdering => vurdering.kode === 'INNVIRKNING')?.navn ?? ''}
            </Radio>
            {harValgtReelle && (
              <ArrowBox alignOffset={20}>
                <RhfRadioGroup
                  name={IKKE_REELLE_VURDERINGER_UNDERKATEGORI}
                  control={formMethods.control}
                  legend=""
                  hideLegend
                  validate={[required]}
                  readOnly={readOnly}
                >
                  {underkategoriFaresignalVurderinger.map(vurdering => (
                    <Radio key={vurdering.kode} value={vurdering.kode} size="small">
                      {vurdering.navn}
                    </Radio>
                  ))}
                </RhfRadioGroup>
              </ArrowBox>
            )}
          </VStack>
          <Radio value="INGEN_INNVIRKNING" size="small">
            {faresignalVurderinger.find(vurdering => vurdering.kode === 'INGEN_INNVIRKNING')?.navn ?? ''}
          </Radio>
        </RhfRadioGroup>
        <div>
          <Button
            type="submit"
            size="small"
            variant="primary"
            loading={formMethods.formState.isSubmitting}
            disabled={!formMethods.formState.isDirty || readOnly || formMethods.formState.isSubmitting}
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
  if (aksjonspunkt.begrunnelse && risikoklassifisering?.faresignalVurdering) {
    const kode = risikoklassifisering.faresignalVurdering;
    return {
      [begrunnelseFieldName]: aksjonspunkt.begrunnelse,
      [VURDERING_HOVEDKATEGORI]: kode === 'INGEN_INNVIRKNING' ? 'INGEN_INNVIRKNING' : 'INNVIRKNING',
      [IKKE_REELLE_VURDERINGER_UNDERKATEGORI]: kode === 'INGEN_INNVIRKNING' ? undefined : kode,
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
  vurderingHovedkategori: FaresignalVurdering,
  vurderingUnderkategori?: FaresignalVurdering,
): FaresignalVurdering | undefined =>
  vurderingHovedkategori === 'INGEN_INNVIRKNING' ? 'INGEN_INNVIRKNING' : vurderingUnderkategori;
