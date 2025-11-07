import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { BTag } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextField,
  type ProsessStegBegrunnelseTextFieldFormValues,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Behandlingsresultat, FamilieHendelse, Soknad, Vilkar } from '@navikt/fp-types';
import type { SoknadsfristAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { SøknadsfristDetaljer } from './SøknadsfristDetaljer';

type FormValues = {
  erVilkarOk?: boolean;
} & ProsessStegBegrunnelseTextFieldFormValues;

const buildInitialValues = (
  vilkår: Vilkar | undefined,
  aksjonspunkter: Aksjonspunkt[],
  behandlingsresultat: Behandlingsresultat | undefined,
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(vilkår, aksjonspunkter, behandlingsresultat),
  ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues): SoknadsfristAp => ({
  kode: AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
});

interface Props {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
}

/**
 * ErSoknadsfristVilkaretOppfyltForm
 *
 * Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.
 */
export const ErSoknadsfristVilkaretOppfyltForm = ({ soknad, gjeldendeFamiliehendelse }: Props) => {
  const {
    isSubmittable,
    aksjonspunkterForPanel,
    alleMerknaderFraBeslutter,
    vilkårForPanel,
    harÅpentAksjonspunkt,
    behandling,
    isReadOnly,
    submitCallback,
  } = usePanelDataContext<SoknadsfristAp>();

  const vilkår = vilkårForPanel[0];
  const initialValues = buildInitialValues(vilkår, aksjonspunkterForPanel, behandling.behandlingsresultat);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={<FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist" />}
        vilkår={vilkår}
        aksjonspunkterForPanel={aksjonspunkterForPanel}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
        rendreFakta={<SøknadsfristDetaljer søknad={soknad} gjeldendeFamiliehendelse={gjeldendeFamiliehendelse} />}
      >
        {harÅpentAksjonspunkt && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage
              id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart"
              values={{
                numberOfDays: soknad.søknadsfrist.dagerOversittetFrist,
              }}
            />
            <div>
              <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Consider" />
              <ul>
                <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question1" tagName="li" />
                <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question2" tagName="li" />
                <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question3" tagName="li" />
              </ul>
            </div>
          </AksjonspunktHelpTextHTML>
        )}
        <VilkarResultPicker
          vilkår={vilkår}
          legend={<FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.VilkårTittel" />}
          isReadOnly={isReadOnly}
          vilkårOppfyltLabel={<FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt" />}
          vilkårIkkeOppfyltLabel={
            <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt" values={{ b: BTag }} />
          }
        />
        <ProsessStegBegrunnelseTextField readOnly={isReadOnly} />
      </ProsessPanelTemplate>
    </RhfForm>
  );
};
