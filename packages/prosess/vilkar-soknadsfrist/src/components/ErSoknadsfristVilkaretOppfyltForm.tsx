import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Box, Detail, Heading, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { BTag, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode, AksjonspunktStatus, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, FamilieHendelse, Soknad } from '@navikt/fp-types';
import type { SoknadsfristAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import styles from './erSoknadsfristVilkaretOppfyltForm.module.css';

const findRadioButtonTextCode = (erVilkarOk?: boolean): string =>
  erVilkarOk
    ? 'ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt'
    : 'ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt';

const findSoknadsfristDate = (mottattDato: string, antallDagerSoknadLevertForSent: number): string =>
  dayjs(mottattDato).subtract(antallDagerSoknadLevertForSent, 'days').format(ISO_DATE_FORMAT);

type FormValues = {
  erVilkarOk?: boolean;
  begrunnelse?: string;
};

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

const buildInitialValues = (aksjonspunkter: Aksjonspunkt[], status: string): FormValues => ({
  erVilkarOk:
    aksjonspunkter[0].status === AksjonspunktStatus.OPPRETTET ? undefined : VilkarUtfallType.OPPFYLT === status,
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues): SoknadsfristAp => ({
  erVilkarOk: values.erVilkarOk || false,
  kode: AksjonspunktKode.SOKNADSFRISTVILKARET,
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
});

interface Props {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  status: string;
  readOnlySubmitButton: boolean;
}

/**
 * ErSoknadsfristVilkaretOppfyltForm
 *
 * Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.
 */
export const ErSoknadsfristVilkaretOppfyltForm = ({
  readOnlySubmitButton,
  soknad,
  gjeldendeFamiliehendelse,
  status,
}: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, behandling, isReadOnly, submitCallback, alleKodeverk } =
    usePanelDataContext<SoknadsfristAp>();

  const initialValues = buildInitialValues(aksjonspunkterForPanel, status);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const dato = findDate(gjeldendeFamiliehendelse);
  const textCode = findTextCode(gjeldendeFamiliehendelse);

  const erVilkarOk = formMethods.watch('erVilkarOk');

  const antallDagerSoknadLevertForSent = soknad?.søknadsfrist?.dagerOversittetFrist;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="space-16">
        <VStack gap="space-4">
          <Heading size="small" level="2">
            {intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist' })}
          </Heading>
          <span className="typo-normal">
            <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1" />
            <span className={styles.days}>
              <FormattedMessage
                id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2"
                values={{ numberOfDays: antallDagerSoknadLevertForSent }}
              />
            </span>
            <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3" />
            {soknad.mottattDato && antallDagerSoknadLevertForSent && (
              <DateLabel dateString={findSoknadsfristDate(soknad.mottattDato, antallDagerSoknadLevertForSent)} />
            )}
          </span>
        </VStack>
        <HStack justify="space-between">
          <Box.New className={styles.panel}>
            <Heading size="small" level="3">
              {intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Consider' })}
            </Heading>
            <ul className={styles.hyphen}>
              <li>
                <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question1" />
              </li>
              <li>
                <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question2" />
              </li>
              <li>
                <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question3" />
              </li>
            </ul>
          </Box.New>
          <VStack gap="space-24">
            <VStack gap="space-4">
              <Detail>{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.MottattDato' })}</Detail>
              <span className="typo-normal">{soknad.mottattDato && <DateLabel dateString={soknad.mottattDato} />}</span>
            </VStack>
            <VStack gap="space-4">
              <Detail>
                {intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication' })}
              </Detail>
              <span className="typo-normal">{soknad.begrunnelseForSenInnsending ?? '-'}</span>
            </VStack>
          </VStack>
          <VStack gap="space-4">
            {textCode && <Detail>{intl.formatMessage({ id: textCode })}</Detail>}
            <span className="typo-normal">{dato && <DateLabel dateString={dato} />}</span>
          </VStack>
        </HStack>
        <RhfRadioGroup name="erVilkarOk" control={formMethods.control} validate={[required]} isReadOnly={isReadOnly}>
          <HStack gap="space-16">
            <Radio value={true} size="small">
              <FormattedMessage id={findRadioButtonTextCode(true)} values={{ b: BTag }} />
            </Radio>
            <Radio value={false} size="small">
              <FormattedMessage id={findRadioButtonTextCode(false)} values={{ b: BTag }} />
            </Radio>
          </HStack>
        </RhfRadioGroup>
        {isReadOnly && erVilkarOk === false && !!behandling.behandlingsresultat?.avslagsarsak && (
          <BodyShort size="small">
            {alleKodeverk['Avslagsårsak'][VilkarType.SOKNADFRISTVILKARET].find(
              type => type.kode === behandling.behandlingsresultat?.avslagsarsak,
            )?.navn ?? ''}
          </BodyShort>
        )}
        <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
        <ProsessStegSubmitButtonNew
          isReadOnly={isReadOnly}
          isSubmittable={!readOnlySubmitButton}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
        />
      </VStack>
    </RhfForm>
  );
};
