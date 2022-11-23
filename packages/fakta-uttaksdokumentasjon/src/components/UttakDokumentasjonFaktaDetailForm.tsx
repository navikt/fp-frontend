import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import {
  BodyShort, Button, ErrorMessage, Label,
} from '@navikt/ds-react';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { Historic } from '@navikt/ds-icons';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  Datepicker, Form, formHooks, RadioGroupPanel,
} from '@navikt/ft-form-hooks';
import {
  AvsnittSkiller, DateLabel, FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import splitPeriodImageUrl from '@fpsak-frontend/assets/images/splitt.svg';
import {
  DokumentasjonVurderingBehov, UttakType, UttakVurdering,
} from '@fpsak-frontend/types';

import OppdaterePeriodeModal from './OppdaterePeriodeModal';

import styles from './uttakDokumentasjonFaktaDetailForm.less';

type FormValues = {
  perioder: DokumentasjonVurderingBehov[];
}

interface OwnProps {
  valgtDokBehov: DokumentasjonVurderingBehov;
  readOnly: boolean;
  oppdaterDokBehov: (dokBehov: { perioder: DokumentasjonVurderingBehov[] }) => void;
  avbrytEditeringAvAktivitetskrav: () => void;
}

const UttakDokumentasjonFaktaDetailForm: FunctionComponent<OwnProps> = ({
  valgtDokBehov,
  readOnly,
  avbrytEditeringAvAktivitetskrav,
  oppdaterDokBehov,
}) => {
  const intl = useIntl();
  const [sistOppdeltePeriodeIndex, setSistOppdeltePeriodeIndex] = useState<number>();
  const [erDatoSatt, settDato] = useState(false);
  const [harDeltOpp, settHarDeltOpp] = useState(false);
  const [visModalPeriode, settVisModalForPeriode] = useState<number | undefined>();
  const [visUgyldigDato, settUgyldigDato] = useState(false);

  const formMethods = useForm<FormValues>({
    defaultValues: {
      perioder: [valgtDokBehov],
    },
  });

  const {
    fields, append, update, remove,
  } = formHooks.useFieldArray({
    control: formMethods.control,
    name: 'perioder',
  });

  const delOppPeriode = (index: number) => {
    const perioder = formMethods.getValues('perioder');
    const periode = perioder[index];
    const nyPeriode = {
      ...periode,
      tom: null,
    };
    setSistOppdeltePeriodeIndex(index);
    settHarDeltOpp(true);
    settDato(false);
    update(index, nyPeriode);
    append({
      ...periode,
      fom: null,
      tom: periode.tom,
      vurdering: null,
    });
  };

  const oppdaterDato = (index: number) => {
    const perioder = formMethods.getValues('perioder');
    const periode = perioder[index];
    const nyPeriode = perioder[index + 1];

    if (dayjs(periode.tom).isBefore(valgtDokBehov.fom) || !dayjs(periode.tom).isBefore(valgtDokBehov.tom)) {
      settUgyldigDato(true);
      return;
    }
    settUgyldigDato(false);

    const oppdatertPeriode = {
      ...nyPeriode,
      fom: dayjs(periode.tom).add(1, 'day').format(ISO_DATE_FORMAT),
    };

    update(index + 1, oppdatertPeriode);

    settHarDeltOpp(false);
    settDato(true);
  };

  const nullstillPerioder = () => {
    settVisModalForPeriode(undefined);

    const perioder = formMethods.getValues('perioder');

    for (let i = fields.length - 1; i > visModalPeriode + 1; i -= 1) {
      remove(i);
    }

    update(visModalPeriode, {
      ...perioder[visModalPeriode],
      tom: null,
    });
    update(visModalPeriode + 1, {
      ...perioder[visModalPeriode + 1],
      fom: null,
      tom: valgtDokBehov.tom,
    });

    setSistOppdeltePeriodeIndex(visModalPeriode);
    settDato(false);
  };

  const vurderingsalternativer = [{
    value: UttakVurdering.GODKJENT,
    label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.Godkjent' }),
  }, {
    value: UttakVurdering.IKKE_GODKJENT,
    label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.IkkeGodkjent' }),
  }];

  if (valgtDokBehov.type === UttakType.UTTAK && valgtDokBehov.årsak.includes('AKTIVITETSKRAV')) {
    vurderingsalternativer.push({
      value: UttakVurdering.IKKE_DOKUMENTERT,
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.IkkeDokumentert' }),
    });
  }

  return (
    <>
      <Form formMethods={formMethods} onSubmit={oppdaterDokBehov}>
        {fields.map((field, index) => {
          const perioder = formMethods.watch('perioder');
          const visDatepicker = !erDatoSatt && sistOppdeltePeriodeIndex === index;
          return (
            <React.Fragment key={field.id}>
              {index > 0 && (
                <>
                  <VerticalSpacer fourtyPx />
                  <AvsnittSkiller dividerParagraf className={styles.skiller} />
                  <VerticalSpacer twentyPx />
                </>
              )}
              {(!readOnly && perioder[index].fom !== perioder[index].tom && fields.length === 1) && (
                <div className={styles.marginBtn}>
                  <Button
                    size="small"
                    variant="tertiary"
                    type="button"
                    onClick={() => delOppPeriode(index)}
                    icon={<Image src={splitPeriodImageUrl} />}
                  >
                    <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.DelOppPeriode" />
                  </Button>
                </div>
              )}
              {fields.length > 1 && (
                <FlexContainer>
                  <FlexRow>
                    <FlexColumn>
                      <Label size="small"><FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Fom" /></Label>
                    </FlexColumn>
                    <FlexColumn className={styles.fomDato}>
                      {perioder[index].fom && (
                        <BodyShort size="small"><DateLabel dateString={perioder[index].fom} /></BodyShort>
                      )}
                    </FlexColumn>
                    {visDatepicker && (
                      <FlexColumn>
                        <Datepicker
                          name={`perioder.${index}.tom`}
                          label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Tom" />}
                          validate={[required, hasValidDate]}
                          isReadOnly={readOnly}
                          disabledDays={{
                            fromDate: dayjs(perioder[index].fom, ISO_DATE_FORMAT).toDate(),
                            toDate: dayjs(perioder[index].tom || valgtDokBehov.tom, ISO_DATE_FORMAT).subtract(1, 'day').toDate(),
                          }}
                        />
                        {visUgyldigDato && (
                          <ErrorMessage><FormattedMessage id="UttakDokumentasjonFaktaDetailForm.IkkeGyldigDato" /></ErrorMessage>
                        )}
                      </FlexColumn>
                    )}
                    {(erDatoSatt || sistOppdeltePeriodeIndex !== index) && (
                      <>
                        <FlexColumn>
                          <Label size="small"><FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Tom" /></Label>
                        </FlexColumn>
                        <FlexColumn className={styles.tomDato}>
                          {perioder[index].tom && (
                            <BodyShort size="small"><DateLabel dateString={perioder[index].tom} /></BodyShort>
                          )}
                        </FlexColumn>
                      </>
                    )}
                    {sistOppdeltePeriodeIndex >= index && (
                      <FlexColumn className={visDatepicker ? styles.oppdaterDato : undefined}>
                        <Button
                          size="small"
                          variant="tertiary"
                          icon={<Historic aria-hidden />}
                          onClick={() => (visDatepicker ? oppdaterDato(index) : settVisModalForPeriode(index))}
                          type="button"
                          disabled={!perioder[index].tom}
                        >
                          <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.OppdaterDato" />
                        </Button>
                      </FlexColumn>
                    )}
                  </FlexRow>
                  {(perioder[index].fom !== perioder[index].tom && (!harDeltOpp && fields.length > 1 && index > sistOppdeltePeriodeIndex)) && (
                    <>
                      <VerticalSpacer sixteenPx />
                      <div className={styles.marginBtn}>
                        <Button size="small" variant="tertiary" type="button" onClick={() => delOppPeriode(index)} icon={<Image src={splitPeriodImageUrl} />}>
                          <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.DelOppPeriode" />
                        </Button>
                      </div>
                      <VerticalSpacer eightPx />
                    </>
                  )}
                </FlexContainer>
              )}
              <VerticalSpacer twentyPx />
              <RadioGroupPanel
                name={`perioder.${index}.vurdering`}
                label={<FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Vurdering" />}
                validate={[required]}
                isReadOnly={readOnly}
                isHorizontal
                radios={vurderingsalternativer}
              />
            </React.Fragment>
          );
        })}
        <VerticalSpacer fourtyPx />
        {!readOnly && (
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Button
                  size="small"
                  variant="secondary"
                  loading={false}
                  disabled={!formMethods.formState.isDirty || readOnly}
                >
                  <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Oppdater" />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button
                  size="small"
                  variant="tertiary"
                  onClick={avbrytEditeringAvAktivitetskrav}
                  disabled={readOnly}
                  type="button"
                >
                  <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Avbryt" />
                </Button>
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer sixteenPx />
          </FlexContainer>
        )}
      </Form>
      {visModalPeriode !== undefined && (
        <OppdaterePeriodeModal submit={nullstillPerioder} cancel={() => settVisModalForPeriode(undefined)} />
      )}
    </>
  );
};

export default UttakDokumentasjonFaktaDetailForm;
