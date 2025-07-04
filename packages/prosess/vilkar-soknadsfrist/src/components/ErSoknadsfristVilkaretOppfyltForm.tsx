import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Box, Detail, Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { BTag, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode, AksjonspunktStatus, SoknadType, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
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

const findTextCode = (soknad: Soknad, familiehendelse: FamilieHendelse): string => {
  if (soknad.soknadType === SoknadType.FODSEL) {
    const soknadFodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
    const fodselsdato =
      familiehendelse?.avklartBarn && familiehendelse.avklartBarn.length > 0
        ? familiehendelse.avklartBarn[0].fodselsdato
        : soknadFodselsdato;
    return fodselsdato
      ? 'ErSoknadsfristVilkaretOppfyltForm.Fodselsdato'
      : 'ErSoknadsfristVilkaretOppfyltForm.Termindato';
  }
  return 'ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato';
};

const findDate = (soknad: Soknad, familiehendelse: FamilieHendelse): string | undefined => {
  if (soknad.soknadType === SoknadType.FODSEL) {
    const soknadFodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
    const fodselsdato =
      familiehendelse?.avklartBarn && familiehendelse.avklartBarn.length > 0
        ? familiehendelse.avklartBarn[0].fodselsdato
        : soknadFodselsdato;
    const termindato = familiehendelse?.termindato ?? soknad.termindato;
    return fodselsdato || termindato;
  }
  return familiehendelse?.omsorgsovertakelseDato ?? soknad.omsorgsovertakelseDato;
};

export const buildInitialValues = (aksjonspunkter: Aksjonspunkt[], status: string): FormValues => ({
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

  const dato = findDate(soknad, gjeldendeFamiliehendelse);
  const textCode = findTextCode(soknad, gjeldendeFamiliehendelse);

  const erVilkarOk = formMethods.watch('erVilkarOk');

  const antallDagerSoknadLevertForSent = soknad?.søknadsfrist?.dagerOversittetFrist;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="4">
        <VStack gap="1">
          <Heading size="small">{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist' })}</Heading>
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
          <Box className={styles.panel}>
            <Heading size="small">{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Consider' })}</Heading>
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
          </Box>
          <VStack gap="6">
            <VStack gap="1">
              <Detail>{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.MottattDato' })}</Detail>
              <span className="typo-normal">{soknad.mottattDato && <DateLabel dateString={soknad.mottattDato} />}</span>
            </VStack>
            <VStack gap="1">
              <Detail>
                {intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication' })}
              </Detail>
              <span className="typo-normal">{soknad.begrunnelseForSenInnsending ?? '-'}</span>
            </VStack>
          </VStack>
          <VStack gap="1">
            {textCode && <Detail>{intl.formatMessage({ id: textCode })}</Detail>}
            <span className="typo-normal">{dato && <DateLabel dateString={dato} />}</span>
          </VStack>
        </HStack>
        <RhfRadioGroup
          name="erVilkarOk"
          control={formMethods.control}
          validate={[required]}
          isReadOnly={isReadOnly}
          isHorizontal
          isTrueOrFalseSelection
          radios={[
            {
              value: 'true',
              label: <FormattedMessage id={findRadioButtonTextCode(true)} values={{ b: BTag }} />,
            },
            {
              value: 'false',
              label: <FormattedMessage id={findRadioButtonTextCode(false)} values={{ b: BTag }} />,
            },
          ]}
        />
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
