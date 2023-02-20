import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import {
  ProsessStegBegrunnelseTextFieldNew, ProsessPanelTemplate,
} from '@navikt/fp-prosess-felles';
import {
  vilkarUtfallType, KodeverkType, VilkarType, getKodeverknavnFn, dokumentTypeId, AksjonspunktCode, aksjonspunktStatus,
} from '@navikt/fp-kodeverk';
import {
  Table, TableColumn, TableRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, isObject } from '@navikt/ft-utils';
import { required } from '@navikt/ft-form-validators';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, ManglendeVedleggSoknad, Soknad, ArbeidsgiverOpplysninger, AlleKodeverk,
} from '@navikt/fp-types';
import { BekreftSokersOpplysningspliktManuAp, OverstyringSokersOpplysingspliktAp } from '@navikt/fp-types-avklar-aksjonspunkter';

const orgPrefix = 'org_';
const aktørPrefix = 'aktør_';

const findRadioButtonTextCode = (erVilkarOk: boolean): string => (erVilkarOk
  ? 'SokersOpplysningspliktForm.VilkarOppfylt' : 'SokersOpplysningspliktForm.VilkarIkkeOppfylt');

const getLabel = (intl: IntlShape): ReactElement => (
  <div>
    <div>
      <FormattedMessage
        id={findRadioButtonTextCode(false)}
        values={{
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    </div>
    <div>{intl.formatMessage({ id: 'SokersOpplysningspliktForm.VilkarIkkeOppfyltMerInfo' })}</div>
  </div>
);
const capitalizeFirstLetters = (navn: string): string => navn.toLowerCase().split(' ').map((w: string) => w.charAt(0).toUpperCase() + w.substr(1)).join(' ');

const lagArbeidsgiverNavnOgFødselsdatoTekst = (
  navn: string,
  fodselsdato?: string,
): string => `${capitalizeFirstLetters(navn)} (${moment(fodselsdato).format(DDMMYYYY_DATE_FORMAT)})`;

const lagArbeidsgiverNavnOgOrgnrTekst = (
  navn: string,
  organisasjonsnummer: string,
): string => `${capitalizeFirstLetters(navn)} (${organisasjonsnummer})`;

const formatArbeidsgiver = (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId, arbeidsgiverReferanse?: string): string => {
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

export const getSortedManglendeVedlegg = (soknad: Soknad): ManglendeVedleggSoknad[] => (soknad && soknad.manglendeVedlegg
  ? soknad.manglendeVedlegg.slice().sort((mv1) => (mv1.dokumentType === dokumentTypeId.DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL ? 1 : -1))
  : []);

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
  const isOpenAksjonspunkt = aksjonspunkt && aksjonspunkt.status === aksjonspunktStatus.OPPRETTET;
  const isVilkarGodkjent = soknadExists && vilkarUtfallType.OPPFYLT === status;

  // TODO Mogleg inntektsmeldingerSomIkkeKommer kan fjernast, men trur fjerning av bruken av denne i render er ein midlertidig
  // fiks og at dette derfor skal brukast etterkvart. Sjå TFP-3076
  const inntektsmeldingerSomIkkeKommer = sorterteManglendeVedlegg
    .filter((mv) => mv.dokumentType === dokumentTypeId.INNTEKTSMELDING)
    .reduce((acc, mv) => ({
      ...acc,
      [lagArbeidsgiverKey(arbeidsgiverOpplysningerPerId[mv.arbeidsgiverReferanse])]: mv.brukerHarSagtAtIkkeKommer,
    }), {});

  return {
    inntektsmeldingerSomIkkeKommer,
    erVilkarOk: isOpenAksjonspunkt && soknadExists ? undefined : isVilkarGodkjent,
    hasAksjonspunkt: aksjonspunkt !== undefined,
    ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
  };
};

const transformValues = (
  values: Required<FormValues>,
  manglendeVedlegg: ManglendeVedleggSoknad[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  aksjonspunkter: Aksjonspunkt[],
): BekreftSokersOpplysningspliktManuAp | OverstyringSokersOpplysingspliktAp => {
  const arbeidsgiverReferanser = manglendeVedlegg
    .filter((mv) => mv.dokumentType === dokumentTypeId.INNTEKTSMELDING)
    .map((mv) => mv.arbeidsgiverReferanse);

  const aksjonspunkt = aksjonspunkter.length > 0 ? aksjonspunkter[0] : undefined;
  const kode = aksjonspunkt && aksjonspunkt.definisjon === AksjonspunktCode.SOKERS_OPPLYSNINGSPLIKT_MANU
    ? AksjonspunktCode.SOKERS_OPPLYSNINGSPLIKT_MANU
    : AksjonspunktCode.SOKERS_OPPLYSNINGSPLIKT_OVST;

  return {
    kode,
    erVilkarOk: values.erVilkarOk,
    inntektsmeldingerSomIkkeKommer: arbeidsgiverReferanser.map((agRef) => {
      const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[agRef];
      return {
        // backend sender fødselsdato i orgnummer feltet for privatpersoner... fiks dette
        organisasjonsnummer: arbeidsgiverOpplysninger.erPrivatPerson ? undefined : arbeidsgiverOpplysninger.identifikator,
        aktørId: arbeidsgiverOpplysninger.erPrivatPerson ? arbeidsgiverOpplysninger.referanse : undefined,
        brukerHarSagtAtIkkeKommer: values.inntektsmeldingerSomIkkeKommer[lagArbeidsgiverKey(arbeidsgiverOpplysninger)],
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
}

interface OwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  soknad: Soknad;
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: BekreftSokersOpplysningspliktManuAp | OverstyringSokersOpplysingspliktAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  erIkkeGodkjentAvBeslutter: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * SokersOpplysningspliktForm
 *
 * Informasjon om søkers informasjonsplikt er godkjent eller avvist.
 */
const SokersOpplysningspliktForm: FunctionComponent<OwnProps> = ({
  readOnly,
  soknad,
  readOnlySubmitButton,
  status,
  aksjonspunkter,
  behandlingsresultat,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk,
  erIkkeGodkjentAvBeslutter,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const sorterteManglendeVedlegg = useMemo(() => getSortedManglendeVedlegg(soknad), [soknad]);
  const hasSoknad = harSoknad(soknad);
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

  const initialValues = useMemo(() => buildInitialValues(sorterteManglendeVedlegg, hasSoknad, status, aksjonspunkter, arbeidsgiverOpplysningerPerId),
    [sorterteManglendeVedlegg, hasSoknad, aksjonspunkter, status, arbeidsgiverOpplysningerPerId]);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const hasAksjonspunkt = formMethods.watch('hasAksjonspunkt');
  const erVilkarOk = formMethods.watch('erVilkarOk');

  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => ap.status === aksjonspunktStatus.OPPRETTET);
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;

  const dokumentTypeIds = alleKodeverk[KodeverkType.DOKUMENT_TYPE_ID];

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: Required<FormValues>) => submitCallback(transformValues(
        values, sorterteManglendeVedlegg, arbeidsgiverOpplysningerPerId, aksjonspunkter))}
      setDataOnUnmount={setFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'SokersOpplysningspliktForm.SokersOpplysningsplikt' })}
        isAksjonspunktOpen={!readOnlySubmitButton}
        isDirty={hasAksjonspunkt ? formMethods.formState.isDirty : erVilkarOk !== initialValues.erVilkarOk}
        readOnlySubmitButton={hasSoknad ? readOnlySubmitButton : !formMethods.formState.isDirty || readOnlySubmitButton}
        readOnly={readOnly}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        {sorterteManglendeVedlegg.length > 0 && (
          <>
            <VerticalSpacer twentyPx />
            <BodyShort size="small"><FormattedMessage id="SokersOpplysningspliktForm.ManglendeDokumentasjon" /></BodyShort>
            <VerticalSpacer eightPx />
            <Table noHover>
              {sorterteManglendeVedlegg.map((vedlegg) => (
                <TableRow key={vedlegg.dokumentType + (vedlegg.arbeidsgiverReferanse ? vedlegg.arbeidsgiverReferanse : '')}>
                  <TableColumn>
                    {dokumentTypeIds.find((dti) => dti.kode === vedlegg.dokumentType)?.navn}
                  </TableColumn>
                  <TableColumn>
                    {vedlegg.dokumentType === dokumentTypeId.INNTEKTSMELDING
                  && formatArbeidsgiver(arbeidsgiverOpplysningerPerId, vedlegg.arbeidsgiverReferanse)}
                  </TableColumn>
                </TableRow>
              ))}
            </Table>
          </>
        )}
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
        {!readOnly && (
          <>
            <VerticalSpacer sixteenPx />
            <RadioGroupPanel
              name="erVilkarOk"
              validate={[required]}
              isHorizontal
              isTrueOrFalseSelection
              radios={[{
                value: 'true',
                label: <FormattedMessage
                  id={findRadioButtonTextCode(true)}
                />,
                disabled: !hasSoknad,
              }, {
                value: 'false',
                label: getLabel(intl),
              },
              ]}
            />
          </>
        )}
        {readOnly && (
          <div>
            {originalErVilkarOk === false && behandlingsresultat?.avslagsarsak && (
              <>
                <VerticalSpacer sixteenPx />
                <BodyShort size="small">
                  {getKodeverknavn(behandlingsresultat.avslagsarsak, KodeverkType.AVSLAGSARSAK, VilkarType.SOKERSOPPLYSNINGSPLIKT)}
                </BodyShort>
              </>
            )}
          </div>
        )}
      </ProsessPanelTemplate>
    </Form>
  );
};

export default SokersOpplysningspliktForm;
