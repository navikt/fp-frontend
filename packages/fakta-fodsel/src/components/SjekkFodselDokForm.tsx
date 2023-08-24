import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label } from '@navikt/ds-react';

import { FaktaBegrunnelseTextFieldNew, isFieldEdited } from '@navikt/fp-fakta-felles';
import { ArrowBox, VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { FodselSammenligningIndex } from '@navikt/fp-prosess-fakta-fodsel-sammenligning';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, FamilieHendelse, FamilieHendelseSamling, Soknad, AvklartBarn } from '@navikt/fp-types';
import { SjekkManglendeFodselAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { useFormContext } from 'react-hook-form';
import AvklartBarnFieldArray from './AvklartBarnFieldArray';

import styles from './SjekkFodselDokForm.module.css';

export type FormValues = {
  fodselsdato?: string;
  dokumentasjonForeligger?: boolean;
  brukAntallBarnITps?: boolean;
  avklartBarn?: AvklartBarn[];
  begrunnelse?: string;
  antallBarnFodt?: number;
};

interface OwnProps {
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

interface StaticFunctions {
  buildInitialValues: (soknad: Soknad, familiehendelse: FamilieHendelse, aksjonspunkt: Aksjonspunkt) => FormValues;
  transformValues: (values: FormValues, avklartBarn: AvklartBarn[]) => SjekkManglendeFodselAp;
}

/**
 * FodselInfoPanel
 *
 * Setter opp aksjonspunktet for avklaring av manglende fødsel (Fødselsvilkåret).
 */
export const SjekkFodselDokForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  submittable,
  behandlingType,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  alleMerknaderFraBeslutter,
  familiehendelse,
}) => {
  const intl = useIntl();
  const { watch } = useFormContext<FormValues>();
  const { gjeldende, register } = familiehendelse;

  const dokumentasjonForeligger = watch('dokumentasjonForeligger') || false;
  const begrunnelse = watch('begrunnelse') || false;

  const dokumentasjonForeliggerIsEdited = isFieldEdited(soknad, gjeldende).dokumentasjonForeligger;
  const { termindato, vedtaksDatoSomSvangerskapsuke } = gjeldende;

  return (
    <>
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
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.SJEKK_MANGLENDE_FODSEL]}
      >
        <RadioGroupPanel
          name="dokumentasjonForeligger"
          isEdited={dokumentasjonForeliggerIsEdited}
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
            <VerticalSpacer eightPx />
            <ArrowBox>
              <Label size="small">
                <FormattedMessage id="SjekkFodselDokForm.FyllInnDokumenterteOpplysninger" />
              </Label>
              <VerticalSpacer eightPx />
              <AvklartBarnFieldArray readOnly={readOnly} />
            </ArrowBox>
          </div>
        )}
      </FaktaGruppe>
      <VerticalSpacer sixteenPx />
      <FaktaBegrunnelseTextFieldNew isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse={!!begrunnelse} />
    </>
  );
};

const lagBarn = (antallBarnFraSoknad: number): AvklartBarn[] => {
  let antallBarn = antallBarnFraSoknad;
  if (antallBarn === 0 || !antallBarn) {
    antallBarn = 1;
  }
  const childrenArray: AvklartBarn[] = [];
  while (antallBarn > 0) {
    // @ts-ignore Fiks
    childrenArray.push({ fodselsdato: undefined, dodsdato: undefined });
    antallBarn -= 1;
  }
  return childrenArray;
};

const ryddOppIAvklarteBarn = (avklartBarn: AvklartBarn[]): AvklartBarn[] =>
  avklartBarn.map(ab => ({
    fodselsdato: ab.fodselsdato,
    dodsdato: ab.dodsdato === '' ? undefined : ab.dodsdato,
  }));

SjekkFodselDokForm.buildInitialValues = (soknad, familiehendelse, aksjonspunkt): FormValues => ({
  dokumentasjonForeligger:
    familiehendelse.dokumentasjonForeligger !== null ? familiehendelse.dokumentasjonForeligger : undefined,
  brukAntallBarnITps: familiehendelse.brukAntallBarnFraTps !== null ? familiehendelse.brukAntallBarnFraTps : undefined,
  avklartBarn:
    familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0
      ? familiehendelse.avklartBarn
      : lagBarn(soknad.antallBarn || 0),
  ...FaktaBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkt),
});

SjekkFodselDokForm.transformValues = (values: FormValues, avklartBarn: AvklartBarn[]): SjekkManglendeFodselAp => ({
  kode: AksjonspunktCode.SJEKK_MANGLENDE_FODSEL,
  dokumentasjonForeligger: values.dokumentasjonForeligger!,
  uidentifiserteBarn: ryddOppIAvklarteBarn(values.avklartBarn!),
  brukAntallBarnITps: avklartBarn && !!avklartBarn.length ? values.brukAntallBarnITps! : false,
  ...FaktaBegrunnelseTextFieldNew.transformValues(values),
});

export default SjekkFodselDokForm;
