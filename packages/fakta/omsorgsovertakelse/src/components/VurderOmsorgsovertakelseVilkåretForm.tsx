import { useMemo } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label, Radio, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfDatepicker, RhfForm, RhfRadioGroup, RhfSelect } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { dateFormat } from '@navikt/ft-utils';

import {
  type FaktaBegrunnelseFormValues,
  FaktaBegrunnelseTextField,
  FaktaSubmitButton,
  isNotEqual,
} from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  type Aksjonspunkt,
  type Avslagsarsak,
  type OmsorgsovertakelseDto,
  type OmsorgsovertakelseVilkårType,
  type VilkarUtfallType,
} from '@navikt/fp-types';
import type { VurderOmsorgsovertakelseVilkåretAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { notEmpty, usePanelDataContext } from '@navikt/fp-utils';

import { Over15Markering } from './Markering';

type FormValues = {
  avslagskode?: Avslagsarsak;
  vilkårUtfallType?: VilkarUtfallType;
  delvilkår?: OmsorgsovertakelseVilkårType;
  omsorgsovertakelseDato?: string;
  fødselsdatoer: {
    fødselsdato: string;
    barnNummer: number;
    skalBrukes: boolean;
  }[];
  ektefellesBarn?: boolean;
} & FaktaBegrunnelseFormValues;

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const VurderOmsorgsovertakelseVilkåretForm = ({ omsorgsovertakelse }: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, alleMerknaderFraBeslutter, submitCallback, isReadOnly, isSubmittable, alleKodeverk } =
    usePanelDataContext<VurderOmsorgsovertakelseVilkåretAp>();

  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(omsorgsovertakelse, aksjonspunkterForPanel),
  });

  const delvilkår = formMethods.watch('delvilkår');
  const vilkårUtfallType = formMethods.watch('vilkårUtfallType');
  const begrunnelse = formMethods.watch('begrunnelse');
  const avslagsÅrsaker = useMemo(() => {
    if (!delvilkår) return [];

    return (omsorgsovertakelse.aktuelleDelvilkårAvslagsårsaker[delvilkår] ?? [])
      .map(kode => alleKodeverk['LineærAvslagsårsak'].find(kodeverk => kodeverk.kode === kode))
      .sort(sortByNavn);
  }, [delvilkår]);

  const { fields } = useFieldArray({
    control: formMethods.control,
    name: 'fødselsdatoer',
  });

  return (
    <FaktaKort
      label={intl.formatMessage({
        id: 'VurderOmsorgsovertakelseVilkåretForm.Tittel',
      })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET]}
    >
      <RhfForm formMethods={formMethods} onSubmit={(values: FormValues) => submitCallback(transformValues(values))}>
        <VStack gap="space-20">
          <RhfDatepicker
            name="omsorgsovertakelseDato"
            size="small"
            control={formMethods.control}
            label={<FormattedMessage id="Label.Omsorgsovertakelsesdato" />}
            validate={[required, hasValidDate]}
            isReadOnly={isReadOnly}
            isEdited={isNotEqual(
              omsorgsovertakelse.søknad.omsorgsovertakelseDato,
              omsorgsovertakelse.gjeldende.omsorgsovertakelseDato,
            )}
          />

          <RhfRadioGroup
            name="ektefellesBarn"
            control={formMethods.control}
            label={<FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.EktefellesBarn.Label" />}
            validate={[required]}
            isReadOnly={isReadOnly}
          >
            <Radio value={true}>
              <FormattedMessage id="Label.Ja" />
            </Radio>
            <Radio value={false}>
              <FormattedMessage id="Label.Nei" />
            </Radio>
          </RhfRadioGroup>

          <div>
            <Label size="small">
              <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.HvilkeBarnSkalBrukes" />
            </Label>
            {fields.map(({ fødselsdato, barnNummer }, index) => (
              <RhfCheckbox
                key={barnNummer}
                label={
                  <>
                    <FormattedMessage
                      id="VurderOmsorgsovertakelseVilkåretForm.BarnRad"
                      values={{
                        nummer: barnNummer,
                        fødseldato: dateFormat(fødselsdato),
                      }}
                    />
                    <Over15Markering fødselsdato={fødselsdato} />
                  </>
                }
                readOnly={isReadOnly}
                control={formMethods.control}
                name={`fødselsdatoer.${index}.skalBrukes`}
              />
            ))}
          </div>

          <RhfRadioGroup
            name="delvilkår"
            control={formMethods.control}
            validate={[required]}
            label={
              isReadOnly ? (
                <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.Delvilkår.ReadOnlyLabel" />
              ) : (
                <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.Delvilkår.Label" />
              )
            }
            isReadOnly={isReadOnly}
            size="small"
          >
            {Object.keys(omsorgsovertakelse.aktuelleDelvilkårAvslagsårsaker)
              .map(kode => alleKodeverk['OmsorgsovertakelseVilkårType'].find(kodeverk => kodeverk.kode === kode))
              .sort(sortByNavn)
              .map(kodeverk => (
                <Radio size="small" key={kodeverk?.kode} value={kodeverk?.kode}>
                  {kodeverk?.navn}
                </Radio>
              ))}
          </RhfRadioGroup>

          <RhfRadioGroup
            name="vilkårUtfallType"
            control={formMethods.control}
            validate={[required]}
            label={
              isReadOnly ? (
                <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.VilkårVurdering.ReadOnlyLabel" />
              ) : (
                <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.VilkårVurdering.Label" />
              )
            }
            isReadOnly={isReadOnly}
            size="small"
          >
            <Radio size="small" value="OPPFYLT">
              <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.VilkårVurdering.Oppfylt" />
            </Radio>
            <Radio size="small" value="IKKE_OPPFYLT">
              <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.VilkårVurdering.IkkeOppfylt" />
            </Radio>
          </RhfRadioGroup>

          {delvilkår && vilkårUtfallType === 'IKKE_OPPFYLT' && (
            <RhfSelect
              name="avslagskode"
              control={formMethods.control}
              label={
                isReadOnly ? (
                  <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.Avslagsarsak.ReadOnlyLabel" />
                ) : (
                  <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.Avslagsarsak.Label" />
                )
              }
              selectValues={avslagsÅrsaker.map(kodeverk => (
                <option key={kodeverk?.kode} value={kodeverk?.kode}>
                  {kodeverk?.navn}
                </option>
              ))}
              readOnly={isReadOnly}
              validate={[required]}
              size="small"
            />
          )}

          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable={isSubmittable}
            size="small"
            isReadOnly={isReadOnly}
            hasBegrunnelse={!!begrunnelse}
          />

          <FaktaSubmitButton
            isSubmittable={isSubmittable}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
            isReadOnly={isReadOnly}
          />
        </VStack>
      </RhfForm>
    </FaktaKort>
  );
};

const buildInitialValues = (
  omsorgsovertakelse: OmsorgsovertakelseDto,
  aksjonspunkterForPanel: Aksjonspunkt[],
): FormValues => {
  const { gjeldende, saksbehandlerVurdering: { vilkårUtfallType, avslagsårsak } = {} } = omsorgsovertakelse;
  return {
    delvilkår: gjeldende.delvilkår,
    omsorgsovertakelseDato: gjeldende.omsorgsovertakelseDato,
    vilkårUtfallType:
      vilkårUtfallType === 'OPPFYLT' || vilkårUtfallType === 'IKKE_OPPFYLT' ? vilkårUtfallType : undefined,
    avslagskode: avslagsårsak,
    fødselsdatoer: mapBarn(omsorgsovertakelse),
    ektefellesBarn: mapEktefellesBarn(gjeldende),
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkterForPanel),
  };
};

const transformValues = (values: FormValues): VurderOmsorgsovertakelseVilkåretAp => ({
  omsorgsovertakelseDato: notEmpty(values.omsorgsovertakelseDato),
  delvilkår: notEmpty(values.delvilkår),
  avslagskode: values.vilkårUtfallType === 'IKKE_OPPFYLT' ? values.avslagskode : undefined,
  ektefellesBarn: notEmpty(values.ektefellesBarn),
  fødselsdatoer: notEmpty(values.fødselsdatoer)
    .filter(b => b.skalBrukes)
    .map(({ fødselsdato, barnNummer }) => ({ barnNummer, fødselsdato })),
  kode: AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET,
  ...FaktaBegrunnelseTextField.transformValues(values),
});

const sortByNavn = (a: { navn: string } | undefined, b: { navn: string } | undefined) => {
  if (!a) return 1;
  if (!b) return -1;
  return a.navn.localeCompare(b.navn);
};

const mapEktefellesBarn = (gjeldende: OmsorgsovertakelseDto['gjeldende']) => {
  if (gjeldende.erEktefellesBarn === undefined) {
    if (gjeldende.delvilkår === 'FP_VK_16') {
      return false;
    }
    if (gjeldende.delvilkår === 'FP_VK_16S') {
      return true;
    }
  }
  return gjeldende.erEktefellesBarn;
};

const mapBarn = (omsorgsovertakelse: OmsorgsovertakelseDto) => {
  return omsorgsovertakelse.søknad.barn.map((søknadBarn, index) => {
    const barn = omsorgsovertakelse.gjeldende.barn.find(
      gjeldendeBarn => gjeldendeBarn.barnNummer === søknadBarn.barnNummer,
    );
    return {
      fødselsdato: barn?.fødselsdato ?? søknadBarn.fødselsdato,
      barnNummer: søknadBarn.barnNummer ?? index + 1,
      skalBrukes: !!barn,
    };
  });
};
