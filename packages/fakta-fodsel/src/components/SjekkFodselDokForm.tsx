import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
import { Column } from 'nav-frontend-grid';

import { FaktaBegrunnelseTextFieldNew, isFieldEdited } from '@fpsak-frontend/fakta-felles';
import {
  ArrowBox, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form-hooks';
import { required } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, FamilieHendelse, FamilieHendelseSamling, Kodeverk, Soknad, AvklartBarn,
} from '@fpsak-frontend/types';
import { SjekkManglendeFodselAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import AvklartBarnFieldArray from './AvklartBarnFieldArray';

import styles from './SjekkFodselDokForm.less';

export type FormValues = {
  fodselsdato?: string;
  dokumentasjonForeligger?: boolean;
  brukAntallBarnITps?: boolean;
  avklartBarn?: AvklartBarn[];
  begrunnelse?: string;
  antallBarnFodt?: number;
}

interface OwnProps {
  familiehendelse: FamilieHendelseSamling;
  aksjonspunkt: Aksjonspunkt;
  soknad: Soknad;
  avklartBarn: AvklartBarn[];
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingType: Kodeverk;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, familiehendelse: FamilieHendelse, aksjonspunkt: Aksjonspunkt) => FormValues;
  transformValues?: (values: FormValues, avklartBarn: AvklartBarn[]) => SjekkManglendeFodselAp;
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
        behandlingsTypeKode={behandlingType.kode}
        avklartBarn={register?.avklartBarn}
        termindato={termindato}
        vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
        soknad={soknad}
        soknadOriginalBehandling={soknadOriginalBehandling}
        familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
      />
      <FaktaGruppe
        title={intl.formatMessage({ id: 'SjekkFodselDokForm.DokumentasjonAvFodsel' })}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL]}
      >
        <div className={styles.horizontalForm}>
          <RadioGroupField
            name="dokumentasjonForeligger"
            validate={[required]}
            readOnly={readOnly}
            isEdited={dokumentasjonForeliggerIsEdited}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption label={<FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeligger" />} value="true" />
            <RadioOption label={<FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeliggerIkke" />} value="false" />
          </RadioGroupField>
        </div>

        {dokumentasjonForeligger && (
          <div className={styles.clearfix}>
            <Column xs="12">
              <ArrowBox>
                <FormattedMessage id="SjekkFodselDokForm.FyllInnDokumenterteOpplysninger" />
                <AvklartBarnFieldArray readOnly={readOnly} />
              </ArrowBox>
            </Column>
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
    childrenArray.push({ fodselsdato: undefined, dodsdato: undefined });
    antallBarn -= 1;
  }
  return childrenArray;
};

const ryddOppIAvklarteBarn = (avklartBarn: AvklartBarn[]): AvklartBarn[] => avklartBarn.map((ab) => ({
  fodselsdato: ab.fodselsdato,
  dodsdato: ab.dodsdato === '' ? undefined : ab.dodsdato,
}));

SjekkFodselDokForm.buildInitialValues = (soknad, familiehendelse, aksjonspunkt): FormValues => ({
  dokumentasjonForeligger: familiehendelse.dokumentasjonForeligger !== null
    ? familiehendelse.dokumentasjonForeligger : undefined,
  brukAntallBarnITps: familiehendelse.brukAntallBarnFraTps !== null
    ? familiehendelse.brukAntallBarnFraTps : undefined,
  avklartBarn: (familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0)
    ? familiehendelse.avklartBarn : lagBarn(soknad.antallBarn || 0),
  ...FaktaBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkt),
});

SjekkFodselDokForm.transformValues = (values: FormValues, avklartBarn: AvklartBarn[]): SjekkManglendeFodselAp => ({
  kode: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
  dokumentasjonForeligger: values.dokumentasjonForeligger,
  uidentifiserteBarn: ryddOppIAvklarteBarn(values.avklartBarn),
  brukAntallBarnITps: avklartBarn && !!avklartBarn.length ? values.brukAntallBarnITps : false,
  ...FaktaBegrunnelseTextFieldNew.transformValues(values),
});

export default SjekkFodselDokForm;
