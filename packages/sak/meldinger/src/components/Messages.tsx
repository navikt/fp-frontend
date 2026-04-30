import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, Button, HStack, Link, VStack } from '@navikt/ds-react';
import { RhfForm, RhfSelect, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import { BrevRedigeringModal } from '@navikt/fp-brev-editor';
import { UkjentAdresseMeldingIndex } from '@navikt/fp-sak-ukjent-adresse';
import type {
  BrevOverstyring,
  DokumentMalType,
  DokumentMalTypeFpTilbake,
  FagsakBehandlingDto,
  KodeverkMedNavn,
  RevurderingVarslingÅrsak,
} from '@navikt/fp-types';

import styles from './messages.module.css';

const maxLength4000 = maxLength(4000);
const minLength3 = minLength(3);

export type FormValues = {
  brevmalkode?: DokumentMalType | DokumentMalTypeFpTilbake;
  fritekst?: string;
  årsakskode?: RevurderingVarslingÅrsak;
};

export type ForhåndsvisBrevParams = {
  brevmalkode: DokumentMalType | DokumentMalTypeFpTilbake;
  fritekst?: string;
  årsakskode?: RevurderingVarslingÅrsak;
};

interface Props {
  behandling: FagsakBehandlingDto;
  submitCallback: (values: FormValues) => void;
  forhåndsvisBrev: (params: ForhåndsvisBrevParams) => void;
  revurderingVarslingArsak: KodeverkMedNavn<'RevurderingVarslingÅrsak'>[];
  fagsakYtelseType: string;
  kanVeilede: boolean;
  meldingFormData?: FormValues;
  setMeldingFormData: (data?: FormValues) => void;
  brukerManglerAdresse: boolean;
  hentBrevHtml: (brevmalkode: string, årsak?: string) => Promise<BrevOverstyring>;
  mellomlagreBrev: (brevmalkode: string, html?: string) => Promise<void>;
}

/**
 * Messages
 *
 * Gir mulighet for å forhåndsvise og sende brev. Mottaker og brevtype velges fra predefinerte lister,
 * og fritekst som skal flettes inn i brevet skrives inn i et eget felt.
 */
export const Messages = ({
  behandling,
  forhåndsvisBrev,
  submitCallback,
  revurderingVarslingArsak,
  fagsakYtelseType,
  kanVeilede,
  meldingFormData,
  setMeldingFormData,
  brukerManglerAdresse,
  hentBrevHtml,
  mellomlagreBrev,
}: Props) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: meldingFormData ?? buildInitialValues(behandling),
  });

  const brevmalkode = formMethods.watch('brevmalkode');
  const fritekst = formMethods.watch('fritekst');
  const årsakskode = formMethods.watch('årsakskode');

  const filtrerteRevurderingVarslingArsaker = getfiltrerteRevurderingVarslingArsaker(
    revurderingVarslingArsak,
    fagsakYtelseType,
  );

  const { formState, control } = formMethods;

  const [brevData, setBrevData] = useState<{ opprinneligHtml: string; redigertHtml: string | null } | null>(null);
  const [visRedigeringModal, setVisRedigeringModal] = useState(false);

  const brevDataRef = React.useRef(brevData);
  brevDataRef.current = brevData;

  const erVarselOmRevurdering = brevmalkode === 'VARREV';
  const erInnhenteOpplysninger = brevmalkode === 'INNOPP';
  const brukBreveditor = erVarselOmRevurdering || erInnhenteOpplysninger;

  useEffect(() => {
    setBrevData(null);
    return () => {
      if (brevDataRef.current?.redigertHtml && brevmalkode) {
        void mellomlagreBrev(brevmalkode, undefined).catch(() => {});
      }
    };
  }, [årsakskode, mellomlagreBrev, brevmalkode]);

  useEffect(() => {
    if (brukBreveditor && !brevData && (!erVarselOmRevurdering || årsakskode)) {
      void hentBrevHtml(brevmalkode, årsakskode).then(result => {
        setBrevData({ opprinneligHtml: result.opprinneligHtml, redigertHtml: result.redigertHtml });
      }).catch(() => {});
    }
  }, [brukBreveditor, brevData, hentBrevHtml, brevmalkode, årsakskode, erVarselOmRevurdering]);

  const forhåndsvis = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (brevmalkode) {
      if (brevData?.redigertHtml) {
        forhåndsvisBrev({ brevmalkode, fritekst: brevData.redigertHtml, årsakskode });
      } else {
        forhåndsvisBrev({ brevmalkode, fritekst, årsakskode: årsakskode });
      }
    }
    e.preventDefault();
  };

  const language = getLanguageFromSprakkode(behandling.språkkode);

  return (
    <>
      <RhfForm
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(values)}
        setDataOnUnmount={setMeldingFormData}
      >
        <VStack gap="space-16">
          <RhfSelect
            name="brevmalkode"
            control={control}
            label={intl.formatMessage({ id: 'Messages.Template' })}
            validate={[required]}
            selectValues={behandling.brevmaler.map(mal => (
              <option key={mal.kode} value={mal.kode} disabled={!mal.tilgjengelig}>
                {mal.navn}
              </option>
            ))}
            className={styles['bredde']}
          />
          {erVarselOmRevurdering && (
            <RhfSelect
              name="årsakskode"
              control={control}
              label={intl.formatMessage({ id: 'Messages.Årsak' })}
              validate={[required]}
              selectValues={filtrerteRevurderingVarslingArsaker.map(cause => (
                <option key={cause.kode} value={cause.kode}>
                  {cause.navn}
                </option>
              ))}
              className={styles['bredde']}
            />
          )}
          {brukBreveditor && (!erVarselOmRevurdering || årsakskode !== undefined) && (
            <VStack gap="space-8">
              <div>
                <Button
                  variant="secondary"
                  size="small"
                  type="button"
                  onClick={async () => {
                    if (!brevData) {
                      try {
                        const result = await hentBrevHtml(brevmalkode, årsakskode);
                        setBrevData({ opprinneligHtml: result.opprinneligHtml, redigertHtml: result.redigertHtml });
                      } catch {
                        return;
                      }
                    }
                    setVisRedigeringModal(true);
                  }}
                >
                  <FormattedMessage id="Messages.RedigerBrev" />
                </Button>
              </div>
              {brevData?.redigertHtml && (
                <Alert variant="success" size="small">
                  <FormattedMessage id="Messages.BrevErRedigert" />
                </Alert>
              )}
            </VStack>
          )}
          {!brukBreveditor && showFritekst(brevmalkode) && (
            <RhfTextarea
              name="fritekst"
              control={control}
              label={intl.formatMessage({ id: getFritekstMessage(brevmalkode) })}
              validate={[required, maxLength4000, minLength3, hasValidText]}
              maxLength={4000}
              badges={[{ type: 'info', titleText: language }]}
              parse={formaterFritekst}
            />
          )}
          {brukerManglerAdresse && <UkjentAdresseMeldingIndex />}
          <HStack justify="space-between">
            {(!erVarselOmRevurdering || årsakskode !== undefined) && (
              <Link href="#" onClick={forhåndsvis} onKeyDown={e => (e.key === 'Enter' ? forhåndsvis(e) : null)}>
                <FormattedMessage id="Messages.Preview" />
              </Link>
            )}
            <Button
              size="small"
              variant="primary"
              loading={formState.isSubmitting}
              disabled={
                formState.isSubmitting ||
                kanVeilede ||
                (erInnhenteOpplysninger && brukBreveditor && !brevData?.redigertHtml) ||
                (erVarselOmRevurdering && brukBreveditor && årsakskode === 'ANNET' && !brevData?.redigertHtml)
              }
            >
              <FormattedMessage id="Messages.Submit" />
            </Button>
          </HStack>
        </VStack>
      </RhfForm>
      {brevData && visRedigeringModal && (
        <BrevRedigeringModal
          opprinneligHtml={brevData.opprinneligHtml}
          redigertHtml={brevData.redigertHtml}
          mellomlagreOgHentPåNytt={async html => {
            if (brevmalkode) {
              await mellomlagreBrev(brevmalkode, html);
            }
            setBrevData(prev => (prev ? { ...prev, redigertHtml: html ?? null } : null));
          }}
          forhåndsvisBrev={async html => {
            if (brevmalkode) {
              await mellomlagreBrev(brevmalkode, html);
              forhåndsvisBrev({ brevmalkode, fritekst: html, årsakskode });
            }
          }}
          setVisRedigeringModal={setVisRedigeringModal}
          isReadOnly={kanVeilede}
        />
      )}
    </>
  );
};

const getFritekstMessage = (brevmalkode?: DokumentMalType | DokumentMalTypeFpTilbake): string =>
  brevmalkode === 'INNHEN' ? 'Messages.DocumentList' : 'Messages.Fritekst';

// TODO (TOR) Bør erstattast av ein markør fra backend
const showFritekst = (
  brevmalkode?: DokumentMalType | DokumentMalTypeFpTilbake,
): boolean =>
  brevmalkode === 'KORRIGVARS' ||
  brevmalkode === 'VARS' ||
  brevmalkode === 'INNHEN';

const getfiltrerteRevurderingVarslingArsaker = (
  revurderingVarslingArsaker: KodeverkMedNavn<'RevurderingVarslingÅrsak'>[],
  fagsakYtelseType: string,
): KodeverkMedNavn<'RevurderingVarslingÅrsak'>[] => {
  if (fagsakYtelseType === 'ES') {
    return revurderingVarslingArsaker.filter(arsak => arsak.kode === 'BARNIKKEREG' || arsak.kode === 'ANNET');
  }
  if (fagsakYtelseType === 'SVP') {
    return revurderingVarslingArsaker.filter(arsak => arsak.kode !== 'BARNIKKEREG' && arsak.kode !== 'AKTIVITET');
  }
  return revurderingVarslingArsaker;
};

const buildInitialValues = (behandling: FagsakBehandlingDto): FormValues => {
  const initialValues = {
    brevmalkode: (behandling.brevmaler[0]?.kode as DokumentMalType | DokumentMalTypeFpTilbake | undefined) ?? undefined,
    fritekst: '',
  };

  if ('ugunstAksjonspunkt' in behandling && behandling.ugunstAksjonspunkt) {
    return { ...initialValues, brevmalkode: 'VARREV' satisfies DokumentMalType };
  }

  return { ...initialValues };
};


