import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox, FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, hasValue } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FodselSammenligningIndex } from '@navikt/fp-prosess-fakta-fodsel-sammenligning';
import type { Aksjonspunkt, AvklartBarn, FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';
import type { SjekkManglendeFodselAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { AvklartBarnFieldArray } from './AvklartBarnFieldArray';

import styles from './SjekkFodselDokForm.module.css';

export type FormValues = {
  fodselsdato?: string;
  dokumentasjonForeligger?: boolean;
  brukAntallBarnITps?: boolean;
  avklartBarn?: AvklartBarn[];
  antallBarnFodt?: number;
} & FaktaBegrunnelseFormValues;

interface Props {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  avklartBarn: AvklartBarn[];
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  behandlingType: string;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
}

/**
 * FodselInfoPanel
 *
 * Setter opp aksjonspunktet for avklaring av manglende fødsel (Fødselsvilkåret).
 */
export const SjekkFodselDokForm = ({
  readOnly,
  submittable,
  behandlingType,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  alleMerknaderFraBeslutter,
  familiehendelse,
}: Props) => {
  const intl = useIntl();
  const { watch, control } = useFormContext<FormValues>();
  const { gjeldende, register } = familiehendelse;

  const dokumentasjonForeligger = watch('dokumentasjonForeligger') || false;
  const begrunnelse = watch('begrunnelse') || false;

  const { termindato, vedtaksDatoSomSvangerskapsuke } = gjeldende;

  return (
    <VStack gap="4">
      <FodselSammenligningIndex
        behandlingsTypeKode={behandlingType}
        avklartBarn={register?.avklartBarn}
        termindato={termindato}
        vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
        soknad={soknad}
        soknadOriginalBehandling={soknadOriginalBehandling}
        familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
      />
      <FaktaGruppe
        title={intl.formatMessage({ id: 'SjekkFodselDokForm.DokumentasjonAvFodsel' })}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]}
      >
        <VStack gap="2">
          <RhfRadioGroup
            name="dokumentasjonForeligger"
            control={control}
            isEdited={hasValue(gjeldende.dokumentasjonForeligger)}
            hideLegend
            validate={[required]}
            isReadOnly={readOnly}
            isHorizontal
            isTrueOrFalseSelection
            radios={[
              {
                label: <FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeligger" />,
                value: 'true',
              },
              {
                label: <FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeliggerIkke" />,
                value: 'false',
              },
            ]}
          />
          {dokumentasjonForeligger && (
            <div className={styles.clearfix}>
              <ArrowBox>
                <VStack gap="2">
                  <Label size="small">
                    <FormattedMessage id="SjekkFodselDokForm.FyllInnDokumenterteOpplysninger" />
                  </Label>
                  <AvklartBarnFieldArray readOnly={readOnly} />
                </VStack>
              </ArrowBox>
            </div>
          )}
        </VStack>
      </FaktaGruppe>
      <FaktaBegrunnelseTextField isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse={!!begrunnelse} />
    </VStack>
  );
};

const lagBarn = (antallBarnFraSoknad: number): AvklartBarn[] => {
  let antallBarn = antallBarnFraSoknad;
  if (antallBarn === 0 || !antallBarn) {
    antallBarn = 1;
  }
  const childrenArray: AvklartBarn[] = [];
  while (antallBarn > 0) {
    // @ts-expect-error Fiks
    childrenArray.push({ fodselsdato: undefined, dodsdato: undefined });
    antallBarn -= 1;
  }
  return childrenArray;
};

const ryddOppIAvklarteBarn = (avklartBarn: AvklartBarn[]): SjekkManglendeFodselAp['uidentifiserteBarn'] =>
  avklartBarn.map(ab => ({
    fodselsdato: ab.fodselsdato,
    dodsdato: ab.dodsdato === '' || ab.dodsdato === null ? undefined : ab.dodsdato,
  }));

SjekkFodselDokForm.buildInitialValues = (
  soknad: Soknad,
  familiehendelse: FamilieHendelse,
  aksjonspunkt: Aksjonspunkt,
): FormValues => ({
  dokumentasjonForeligger:
    familiehendelse.dokumentasjonForeligger !== null ? familiehendelse.dokumentasjonForeligger : undefined,
  brukAntallBarnITps: familiehendelse.brukAntallBarnFraTps !== null ? familiehendelse.brukAntallBarnFraTps : undefined,
  avklartBarn:
    familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0
      ? familiehendelse.avklartBarn
      : lagBarn(soknad.antallBarn || 0),
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

SjekkFodselDokForm.transformValues = (values: FormValues, avklartBarn: AvklartBarn[]): SjekkManglendeFodselAp => ({
  kode: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
  dokumentasjonForeligger: values.dokumentasjonForeligger!,
  uidentifiserteBarn: ryddOppIAvklarteBarn(values.avklartBarn!),
  brukAntallBarnITps: avklartBarn && !!avklartBarn.length ? values.brukAntallBarnITps! : false,
  ...FaktaBegrunnelseTextField.transformValues(values),
});
