import { type ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckmarkIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';
import { Radio } from '@navikt/ds-react';
import { RhfRadioGroup, RhfSelect } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { LabeledValue } from '@navikt/ft-ui-komponenter';
import { BTag, createIntl } from '@navikt/ft-utils';

import type { Aksjonspunkt, AlleKodeverk, Behandlingsresultat, Vilkar } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { finnStatus } from './VilkårStatus';

import styles from './vilkarResultPicker.module.css';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export type VilkarResultPickerFormValues = {
  erVilkarOk?: boolean;
  avslagskode?: string;
};

interface Props {
  vilkår: Vilkar | undefined;
  legend: ReactNode;
  vilkårIkkeOppfyltLabel?: ReactNode;
  vilkårOppfyltLabel?: ReactNode;
  isReadOnly: boolean;
  skalKunneInnvilge?: boolean;
}

export const VilkarResultPicker = ({
  vilkår,
  legend,
  vilkårIkkeOppfyltLabel,
  vilkårOppfyltLabel,
  isReadOnly,
  skalKunneInnvilge = true,
}: Props) => {
  const { watch, control } = useFormContext<VilkarResultPickerFormValues>();

  const erVilkårOk = watch('erVilkarOk');

  const { alleKodeverk } = usePanelDataContext();
  const avslagsårsakerOptions = getAvslagsårsakerOptions(alleKodeverk, vilkår);

  return (
    <>
      {isReadOnly && erVilkårOk !== undefined && (
        <LabeledValue
          label={legend}
          size="small"
          value={
            erVilkårOk ? (
              <>
                <CheckmarkIcon className={styles['icon']} color="var(--ax-bg-success-strong)" />
                {vilkårOppfyltLabel?? intl.formatMessage({ id: 'VilkarResultPicker.ErOppfylt' })}
              </>
            ) : (
              <>
                <XMarkOctagonIcon className={styles['icon']} color="var(--ax-bg-danger-strong)" />
                {vilkårIkkeOppfyltLabel ?? intl.formatMessage({ id: 'VilkarResultPicker.ErIkkeOppfylt' }, { b: BTag })}
              </>
            )
          }
        />
      )}
      {(!isReadOnly || erVilkårOk === undefined) && (
        <RhfRadioGroup name="erVilkarOk" control={control} legend={legend} validate={[required]} readOnly={isReadOnly}>
          <Radio value={true} size="small" disabled={!skalKunneInnvilge}>
            {vilkårOppfyltLabel ?? intl.formatMessage({ id: 'VilkarResultPicker.ErOppfylt' })}
          </Radio>
          <Radio value={false} size="small">
            {vilkårIkkeOppfyltLabel ?? intl.formatMessage({ id: 'VilkarResultPicker.ErIkkeOppfylt' }, { b: BTag })}
          </Radio>
        </RhfRadioGroup>
      )}
      {erVilkårOk !== undefined && !erVilkårOk && avslagsårsakerOptions && (
        <RhfSelect
          name="avslagskode"
          control={control}
          label={intl.formatMessage({ id: 'VilkarResultPicker.Arsak' })}
          selectValues={avslagsårsakerOptions}
          readOnly={isReadOnly}
          className={styles['selectBredde']}
          validate={[required]}
        />
      )}
    </>
  );
};

VilkarResultPicker.buildInitialValues = (
  vilkår: Vilkar | undefined,
  aksjonspunkter: Aksjonspunkt[],
  behandlingsresultat: Behandlingsresultat | undefined,
): VilkarResultPickerFormValues => {
  const erVilkårOk = finnStatus(vilkår, aksjonspunkter);

  /**
   * Hvis det bare finnes en avslagsårsak ønsker man at den skal autovelges.
   * transformValues håndterer å ikke sende den når erVilkarOk === 'OPPFYLT'
   */
  const avslagskode = (() => {
    if (erVilkårOk === 'IKKE_OPPFYLT') {
      return behandlingsresultat?.avslagsarsak;
    } else if (vilkår?.aktuelleAvslagsårsaker.length === 1) {
      return vilkår.aktuelleAvslagsårsaker[0];
    }
    return undefined;
  })();

  return {
    erVilkarOk: erVilkårOk === 'IKKE_VURDERT' ? undefined : erVilkårOk === 'OPPFYLT',
    avslagskode,
  };
};

VilkarResultPicker.transformValues = (values: VilkarResultPickerFormValues) =>
  values.erVilkarOk
    ? { erVilkarOk: true }
    : {
        erVilkarOk: false,
        avslagskode: values.avslagskode,
      };

const getAvslagsårsakerOptions = (alleKodeverk: AlleKodeverk, vilkår: Vilkar | undefined) => {
  if (vilkår) {
    return alleKodeverk['Avslagsårsak']
      .filter(kodeverk => vilkår.aktuelleAvslagsårsaker.includes(kodeverk.kode))
      .toSorted((k1, k2) => k1.navn.localeCompare(k2.navn))
      .map(aa => (
        <option key={aa.kode} value={aa.kode}>
          {aa.navn}
        </option>
      ));
  }
  return undefined;
};
