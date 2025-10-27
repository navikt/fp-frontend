import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Checkbox, Radio, VStack } from '@navikt/ds-react';
import { RhfCheckboxGroup, RhfDatepicker, RhfForm, RhfRadioGroup, RhfSelect } from '@navikt/ft-form-hooks';
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
  barnSomSkalVurderes: number[];
  ektefellesBarn?: boolean;
} & FaktaBegrunnelseFormValues;

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const VurderOmsorgsovertakelseVilkåretForm = ({ omsorgsovertakelse }: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, alleMerknaderFraBeslutter, submitCallback, isReadOnly, isSubmittable, alleKodeverk } =
    usePanelDataContext<VurderOmsorgsovertakelseVilkåretAp>();
  const alleBarn = mapBarn(omsorgsovertakelse);
  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(omsorgsovertakelse, aksjonspunkterForPanel, alleBarn),
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

  return (
    <FaktaKort
      label={intl.formatMessage({
        id: 'VurderOmsorgsovertakelseVilkåretForm.Tittel',
      })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET]}
    >
      <RhfForm
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values, alleBarn))}
      >
        <VStack gap="space-20">
          <RhfDatepicker
            name="omsorgsovertakelseDato"
            size="small"
            control={formMethods.control}
            label={<FormattedMessage id="Label.Omsorgsovertakelsesdato" />}
            validate={[required, hasValidDate]}
            readOnly={isReadOnly}
            isEdited={isNotEqual(
              omsorgsovertakelse.søknad.omsorgsovertakelseDato,
              omsorgsovertakelse.gjeldende.omsorgsovertakelseDato,
            )}
          />

          <RhfRadioGroup
            name="ektefellesBarn"
            control={formMethods.control}
            legend={<FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.EktefellesBarn.Label" />}
            validate={[required]}
            readOnly={isReadOnly}
          >
            <Radio value={true}>
              <FormattedMessage id="Label.Ja" />
            </Radio>
            <Radio value={false}>
              <FormattedMessage id="Label.Nei" />
            </Radio>
          </RhfRadioGroup>

          <RhfCheckboxGroup
            readOnly={isReadOnly}
            control={formMethods.control}
            name="barnSomSkalVurderes"
            legend={<FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.BarnSomSkalVurderes.Tittel" />}
            validate={[
              values =>
                values.length > 0
                  ? undefined
                  : intl.formatMessage({ id: 'VurderOmsorgsovertakelseVilkåretForm.BarnSomSkalVurderes.Required' }),
            ]}
          >
            {alleBarn.map(({ fødselsdato, barnNummer }) => (
              <Checkbox key={barnNummer} value={barnNummer} readOnly={isReadOnly}>
                <FormattedMessage
                  id="VurderOmsorgsovertakelseVilkåretForm.BarnSomSkalVurderes.Rad"
                  values={{
                    nummer: barnNummer,
                    fødseldato: dateFormat(fødselsdato),
                  }}
                />
                <Over15Markering fødselsdato={fødselsdato} />
              </Checkbox>
            ))}
          </RhfCheckboxGroup>

          <RhfRadioGroup
            name="delvilkår"
            control={formMethods.control}
            validate={[required]}
            legend={
              isReadOnly ? (
                <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.Delvilkår.ReadOnlyLabel" />
              ) : (
                <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.Delvilkår.Label" />
              )
            }
            readOnly={isReadOnly}
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
            legend={
              isReadOnly ? (
                <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.VilkårVurdering.ReadOnlyLabel" />
              ) : (
                <FormattedMessage id="VurderOmsorgsovertakelseVilkåretForm.VilkårVurdering.Label" />
              )
            }
            readOnly={isReadOnly}
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
  alleBarn: ReturnType<typeof mapBarn>,
): FormValues => {
  const { gjeldende, saksbehandlerVurdering: { vilkårUtfallType, avslagsårsak } = {} } = omsorgsovertakelse;
  return {
    delvilkår: gjeldende.delvilkår,
    omsorgsovertakelseDato: gjeldende.omsorgsovertakelseDato,
    vilkårUtfallType:
      vilkårUtfallType === 'OPPFYLT' || vilkårUtfallType === 'IKKE_OPPFYLT' ? vilkårUtfallType : undefined,
    avslagskode: avslagsårsak,
    barnSomSkalVurderes: alleBarn.filter(b => b.skalBrukes).map(b => b.barnNummer),
    ektefellesBarn: mapEktefellesBarn(gjeldende),
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkterForPanel),
  };
};

const transformValues = (
  values: FormValues,
  alleBarn: ReturnType<typeof mapBarn>,
): VurderOmsorgsovertakelseVilkåretAp => ({
  omsorgsovertakelseDato: notEmpty(values.omsorgsovertakelseDato),
  delvilkår: notEmpty(values.delvilkår),
  avslagskode: values.vilkårUtfallType === 'IKKE_OPPFYLT' ? values.avslagskode : undefined,
  ektefellesBarn: notEmpty(values.ektefellesBarn),
  barn: alleBarn
    .filter(b => values.barnSomSkalVurderes.includes(b.barnNummer))
    .map(({ barnNummer, fødselsdato }) => ({ barnNummer, fødselsdato })),
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
    if (gjeldende.delvilkår === 'FP_VK_16A') {
      return false;
    }
    if (gjeldende.delvilkår === 'FP_VK_16S') {
      return true;
    }
  }
  return gjeldende.erEktefellesBarn;
};

const mapBarn = (omsorgsovertakelse: OmsorgsovertakelseDto) => {
  return omsorgsovertakelse.søknad.barn.map(søknadBarn => {
    const identiskBarn = omsorgsovertakelse.gjeldende.barn.find(
      gjeldendeBarn => gjeldendeBarn.barnNummer === søknadBarn.barnNummer,
    );
    return {
      fødselsdato: identiskBarn?.fødselsdato ?? søknadBarn.fødselsdato,
      barnNummer: søknadBarn.barnNummer,
      skalBrukes: !!identiskBarn,
    };
  });
};
