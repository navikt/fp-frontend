import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Heading, HStack, VStack } from '@navikt/ds-react';
import { ReadOnlyField, RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, DateLabel } from '@navikt/ft-ui-komponenter';
import { BTag, DDMMYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextField,
  type ProsessStegBegrunnelseTextFieldFormValues,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Behandlingsresultat, FamilieHendelse, Soknad, Vilkar } from '@navikt/fp-types';
import type { SoknadsfristAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

const findSoknadsfristDate = (mottattDato: string, antallDagerSoknadLevertForSent: number): string =>
  dayjs(mottattDato).subtract(antallDagerSoknadLevertForSent, 'days').format(DDMMYY_DATE_FORMAT);

type FormValues = {
  erVilkarOk?: boolean;
} & ProsessStegBegrunnelseTextFieldFormValues;

const findTextCode = (familiehendelse: FamilieHendelse): string => {
  if (familiehendelse.fødselTermin) {
    return familiehendelse.fødselTermin.fødselsdato
      ? 'ErSoknadsfristVilkaretOppfyltForm.Fodselsdato'
      : 'ErSoknadsfristVilkaretOppfyltForm.Termindato';
  }
  return 'ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato';
};

const findDate = (familiehendelse: FamilieHendelse): string | undefined => {
  return (
    familiehendelse.adopsjon?.omsorgsovertakelseDato ||
    familiehendelse.fødselTermin?.fødselsdato ||
    familiehendelse.fødselTermin?.termindato ||
    undefined
  );
};

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
  const intl = useIntl();

  const {
    isSubmittable,
    aksjonspunkterForPanel,
    vilkårForPanel,
    harÅpentAksjonspunkt,
    alleMerknaderFraBeslutter,
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

  const dato = findDate(gjeldendeFamiliehendelse);
  const textCode = findTextCode(gjeldendeFamiliehendelse);

  const antallDagerSoknadLevertForSent = soknad.søknadsfrist.dagerOversittetFrist;

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );
  const rendreFakta = () => (
    <FaktaKort label={intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.FaktaKortTittel' })}>
      <VStack gap="space-16">
        <BodyShort>
          <FormattedMessage
            id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart"
            values={{
              numberOfDays: antallDagerSoknadLevertForSent,
            }}
          />
        </BodyShort>
        <HStack gap="space-24">
          <ReadOnlyField
            label={intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Søknadsfrist' })}
            value={findSoknadsfristDate(soknad.mottattDato, antallDagerSoknadLevertForSent)}
          />
          <ReadOnlyField
            label={intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.MottattDato' })}
            value={<DateLabel dateString={soknad.mottattDato} />}
          />
          <ReadOnlyField label={intl.formatMessage({ id: textCode })} value={dato && <DateLabel dateString={dato} />} />
        </HStack>
        <ReadOnlyField
          label={intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication' })}
          value={soknad.begrunnelseForSenInnsending ?? '-'}
        />
      </VStack>
    </FaktaKort>
  );

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist' })}
        aksjonspunkterForPanel={aksjonspunkterForPanel}
        vilkår={vilkår}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
        rendreFakta={rendreFakta}
      >
        <VStack gap="space-16">
          {harÅpentAksjonspunkt && (
            <AksjonspunktHelpTextHTML>
              <Heading size="xsmall" level="3">
                {intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Consider' })}
              </Heading>
              <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question1" />
              <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question2" />
              <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question3" />
            </AksjonspunktHelpTextHTML>
          )}
          <VilkarResultPicker
            vilkår={vilkår}
            isReadOnly={isReadOnly}
            customVilkårOppfyltText={<FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt" />}
            customVilkårIkkeOppfyltText={
              <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt" values={{ b: BTag }} />
            }
          />
          <ProsessStegBegrunnelseTextField readOnly={isReadOnly} />
        </VStack>
      </ProsessPanelTemplate>
    </RhfForm>
  );
};
