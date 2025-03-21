import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Table, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { DDMMYYYY_DATE_FORMAT, isObject } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  getKodeverknavnFn,
  KodeverkType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { ProsessPanelTemplate, ProsessStegBegrunnelseTextFieldNew } from '@navikt/fp-prosess-felles';
import type {
  Aksjonspunkt,
  ArbeidsgiverOpplysninger,
  ArbeidsgiverOpplysningerPerId,
  ManglendeVedleggSoknad,
  Soknad,
} from '@navikt/fp-types';
import type {
  BekreftSokersOpplysningspliktManuAp,
  OverstyringSokersOpplysingspliktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

const orgPrefix = 'org_';
const aktørPrefix = 'aktør_';

const capitalizeFirstLetters = (navn: string): string =>
  navn
    .toLowerCase()
    .split(' ')
    .map((w: string) => w.charAt(0).toUpperCase() + w.substring(1))
    .join(' ');

const lagArbeidsgiverNavnOgFødselsdatoTekst = (navn: string, fodselsdato?: string): string =>
  `${capitalizeFirstLetters(navn)} (${dayjs(fodselsdato).format(DDMMYYYY_DATE_FORMAT)})`;

const lagArbeidsgiverNavnOgOrgnrTekst = (navn: string, organisasjonsnummer: string): string =>
  `${capitalizeFirstLetters(navn)} (${organisasjonsnummer})`;

const formatArbeidsgiver = (
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  arbeidsgiverReferanse?: string,
): string => {
  if (!arbeidsgiverReferanse) {
    return '';
  }
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];
  if (!arbeidsgiverOpplysninger) {
    return '';
  }
  if (arbeidsgiverOpplysninger.erPrivatPerson) {
    return lagArbeidsgiverNavnOgFødselsdatoTekst(arbeidsgiverOpplysninger.navn, arbeidsgiverOpplysninger.fødselsdato);
  }
  return lagArbeidsgiverNavnOgOrgnrTekst(arbeidsgiverOpplysninger.navn, arbeidsgiverOpplysninger.identifikator);
};

export const getSortedManglendeVedlegg = (soknad: Soknad): ManglendeVedleggSoknad[] =>
  soknad?.manglendeVedlegg
    ? soknad.manglendeVedlegg.slice().sort((mv1, mv2) => mv1.dokumentTittel.localeCompare(mv2.dokumentTittel))
    : [];

const harSoknad = (soknad: Soknad): boolean => soknad !== null && isObject(soknad);

const lagArbeidsgiverKey = (arbeidsgiverOpplysninger: ArbeidsgiverOpplysninger): string => {
  if (arbeidsgiverOpplysninger.erPrivatPerson) {
    return `${aktørPrefix}${arbeidsgiverOpplysninger.referanse}`;
  }
  return `${orgPrefix}${arbeidsgiverOpplysninger.identifikator}`;
};

const buildInitialValues = (
  sorterteManglendeVedlegg: ManglendeVedleggSoknad[],
  soknadExists: boolean,
  status: string,
  aksjonspunkter: Aksjonspunkt[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FormValues => {
  const aksjonspunkt = aksjonspunkter.length > 0 ? aksjonspunkter[0] : undefined;
  const isOpenAksjonspunkt = aksjonspunkt && aksjonspunkt.status === AksjonspunktStatus.OPPRETTET;
  const isVilkarGodkjent = soknadExists && VilkarUtfallType.OPPFYLT === status;

  // TODO Mogleg inntektsmeldingerSomIkkeKommer kan fjernast, men trur fjerning av bruken av denne i render er ein midlertidig
  // fiks og at dette derfor skal brukast etterkvart. Sjå TFP-3076
  const inntektsmeldingerSomIkkeKommer = sorterteManglendeVedlegg
    .filter(mv => !!mv.arbeidsgiverReferanse)
    .reduce(
      (acc, mv) => ({
        ...acc,
        [lagArbeidsgiverKey(arbeidsgiverOpplysningerPerId[mv.arbeidsgiverReferanse])]: mv.brukerHarSagtAtIkkeKommer,
      }),
      {},
    );

  return {
    inntektsmeldingerSomIkkeKommer,
    erVilkarOk: isOpenAksjonspunkt && soknadExists ? undefined : isVilkarGodkjent,
    hasAksjonspunkt: aksjonspunkt !== undefined,
    ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
  };
};

const transformValues = (
  values: FormValues,
  manglendeVedlegg: ManglendeVedleggSoknad[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  aksjonspunkter: Aksjonspunkt[],
): BekreftSokersOpplysningspliktManuAp | OverstyringSokersOpplysingspliktAp => {
  const arbeidsgiverReferanser = manglendeVedlegg
    .filter(mv => !!mv.arbeidsgiverReferanse)
    .map(mv => mv.arbeidsgiverReferanse);

  const aksjonspunkt = aksjonspunkter.length > 0 ? aksjonspunkter[0] : undefined;
  const kode =
    aksjonspunkt && aksjonspunkt.definisjon === AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_MANU
      ? AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_MANU
      : AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_OVST;

  return {
    kode,
    erVilkarOk: values.erVilkarOk || false,
    inntektsmeldingerSomIkkeKommer: arbeidsgiverReferanser.map(agRef => {
      const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[agRef];
      return {
        // backend sender fødselsdato i orgnummer feltet for privatpersoner... fiks dette
        organisasjonsnummer: arbeidsgiverOpplysninger.erPrivatPerson
          ? undefined
          : arbeidsgiverOpplysninger.identifikator,
        aktørId: arbeidsgiverOpplysninger.erPrivatPerson ? arbeidsgiverOpplysninger.referanse : undefined,
        brukerHarSagtAtIkkeKommer: values.inntektsmeldingerSomIkkeKommer
          ? values.inntektsmeldingerSomIkkeKommer[lagArbeidsgiverKey(arbeidsgiverOpplysninger)]
          : false,
      };
    }, {}),
    ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
  };
};

type FormValues = {
  erVilkarOk?: boolean;
  begrunnelse?: string;
  inntektsmeldingerSomIkkeKommer?: { [key: string]: boolean };
  hasAksjonspunkt?: boolean;
};

interface Props {
  soknad: Soknad;
  status: string;
  readOnlySubmitButton: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * SokersOpplysningspliktForm
 *
 * Informasjon om søkers informasjonsplikt er godkjent eller avvist.
 */
export const SokersOpplysningspliktForm = ({
  soknad,
  readOnlySubmitButton,
  status,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const intl = useIntl();

  const {
    aksjonspunkterForPanel,
    alleKodeverk,
    submitCallback,
    alleMerknaderFraBeslutter,
    harÅpneAksjonspunkter,
    isReadOnly,
    behandling,
  } = usePanelDataContext<BekreftSokersOpplysningspliktManuAp | OverstyringSokersOpplysingspliktAp>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const sorterteManglendeVedlegg = getSortedManglendeVedlegg(soknad);
  const hasSoknad = harSoknad(soknad);
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

  const initialValues = buildInitialValues(
    sorterteManglendeVedlegg,
    hasSoknad,
    status,
    aksjonspunkterForPanel,
    arbeidsgiverOpplysningerPerId,
  );

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData || initialValues,
  });

  const hasAksjonspunkt = formMethods.watch('hasAksjonspunkt');
  const erVilkarOk = formMethods.watch('erVilkarOk');

  const originalErVilkarOk = harÅpneAksjonspunkter ? undefined : VilkarUtfallType.OPPFYLT === status;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) =>
        submitCallback(
          transformValues(values, sorterteManglendeVedlegg, arbeidsgiverOpplysningerPerId, aksjonspunkterForPanel),
        )
      }
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'SokersOpplysningspliktForm.SokersOpplysningsplikt' })}
        isAksjonspunktOpen={!readOnlySubmitButton}
        isDirty={hasAksjonspunkt ? formMethods.formState.isDirty : erVilkarOk !== initialValues.erVilkarOk}
        readOnlySubmitButton={hasSoknad ? readOnlySubmitButton : !formMethods.formState.isDirty || readOnlySubmitButton}
        readOnly={isReadOnly}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        {sorterteManglendeVedlegg.length > 0 && (
          <VStack gap="4">
            <BodyShort size="small">
              <FormattedMessage id="SokersOpplysningspliktForm.ManglendeDokumentasjon" />
            </BodyShort>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
                  <Table.HeaderCell scope="col">Fødselsnr.</Table.HeaderCell>
                  <Table.HeaderCell scope="col">Start</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {sorterteManglendeVedlegg.map(vedlegg => (
                  <Table.Row
                    key={vedlegg.dokumentType + (vedlegg.arbeidsgiverReferanse ? vedlegg.arbeidsgiverReferanse : '')}
                  >
                    <Table.DataCell>{vedlegg.dokumentTittel}</Table.DataCell>
                    <Table.DataCell>
                      {!!vedlegg.arbeidsgiverReferanse &&
                        formatArbeidsgiver(arbeidsgiverOpplysningerPerId, vedlegg.arbeidsgiverReferanse)}
                    </Table.DataCell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </VStack>
        )}
        <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
        {!isReadOnly && (
          <RadioGroupPanel
            name="erVilkarOk"
            validate={[required]}
            isHorizontal
            isTrueOrFalseSelection
            radios={[
              {
                value: 'true',
                label: <FormattedMessage id="SokersOpplysningspliktForm.VilkarOppfylt" />,
                disabled: !hasSoknad,
              },
              {
                value: 'false',
                label: (
                  <FormattedMessage
                    id="SokersOpplysningspliktForm.VilkarIkkeOppfylt"
                    values={{
                      b: (chunks: any) => <b key="bold">{chunks}</b>,
                      br: <br key="break-line" />,
                    }}
                  />
                ),
              },
            ]}
          />
        )}
        {isReadOnly && (
          <div>
            {originalErVilkarOk === false && behandling.behandlingsresultat?.avslagsarsak && (
              <BodyShort size="small">
                {getKodeverknavn(
                  behandling.behandlingsresultat.avslagsarsak,
                  KodeverkType.AVSLAGSARSAK,
                  VilkarType.SOKERSOPPLYSNINGSPLIKT,
                )}
              </BodyShort>
            )}
          </div>
        )}
      </ProsessPanelTemplate>
    </Form>
  );
};
