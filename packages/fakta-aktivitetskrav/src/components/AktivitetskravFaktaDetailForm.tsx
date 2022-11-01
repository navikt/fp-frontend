import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import {
  BodyShort, Button, Label, ErrorMessage,
} from '@navikt/ds-react';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { Historic } from '@navikt/ds-icons';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  Datepicker, RadioGroupPanel, Form, formHooks,
} from '@navikt/ft-form-hooks';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow, AvsnittSkiller, DateLabel,
} from '@navikt/ft-ui-komponenter';

import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';

import OppdaterePeriodeModal from './OppdaterePeriodeModal';

import styles from './aktivitetskravFaktaDetailForm.less';

type FormValues = {
  perioder: UttakKontrollerAktivitetskrav[];
}

interface OwnProps {
  valgtAktivitetskrav: UttakKontrollerAktivitetskrav;
  readOnly: boolean;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  oppdaterAktivitetskrav: (aktivitetskrav: { perioder: UttakKontrollerAktivitetskrav[] }) => void;
  avbrytEditeringAvAktivitetskrav: () => void;
  morsAktiviteter: KodeverkMedNavn[];
}

const AktivitetskravFaktaDetailForm: FunctionComponent<OwnProps> = ({
  valgtAktivitetskrav,
  readOnly,
  aktivitetskravAvklaringer,
  avbrytEditeringAvAktivitetskrav,
  morsAktiviteter,
  oppdaterAktivitetskrav,
}) => {
  const [sistOppdeltePeriodeIndex, setSistOppdeltePeriodeIndex] = useState<number>();
  const [erDatoSatt, settDato] = useState(false);
  const [harDeltOpp, settHarDeltOpp] = useState(false);
  const [visModalPeriode, settVisModalForPeriode] = useState<number | undefined>();
  const [visUgyldigDato, settUgyldigDato] = useState(false);

  const formMethods = useForm<FormValues>({
    defaultValues: {
      perioder: [valgtAktivitetskrav],
    },
  });

  const {
    fields, append, update, remove,
  } = formHooks.useFieldArray({
    control: formMethods.control,
    name: 'perioder',
  });

  const delOppPeriode = (index) => {
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
      tom: periode.tom,
    });
  };

  const oppdaterDato = (index) => {
    const perioder = formMethods.getValues('perioder');
    const periode = perioder[index];
    const nyPeriode = perioder[index + 1];

    if (dayjs(periode.tom).isBefore(valgtAktivitetskrav.fom) || !dayjs(periode.tom).isBefore(valgtAktivitetskrav.tom)) {
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

    for (let i = visModalPeriode + 1; i < fields.length; i += 1) {
      remove(i);
    }

    const perioder = formMethods.watch('perioder');

    update(visModalPeriode, {
      ...perioder[visModalPeriode],
      tom: null,
    });
    update(visModalPeriode + 1, {
      ...perioder[visModalPeriode + 1],
      fom: null,
      tom: valgtAktivitetskrav.tom,
    });

    setSistOppdeltePeriodeIndex(visModalPeriode);
    settDato(false);
  };

  return (
    <>
      <Form formMethods={formMethods} onSubmit={(values: FormValues) => oppdaterAktivitetskrav(values)}>
        {fields.map((field, index) => {
          const perioder = formMethods.watch('perioder');
          const visDatepicker = !erDatoSatt && sistOppdeltePeriodeIndex === index;
          return (
            <React.Fragment key={field.id}>
              {index > 0 && (
                <>
                  <VerticalSpacer sixteenPx />
                  <AvsnittSkiller dividerParagraf className={styles.skiller} />
                  <VerticalSpacer sixteenPx />
                </>
              )}
              {(perioder[index].fom !== perioder[index].tom
              && (fields.length === 1 || (!harDeltOpp && fields.length > 1 && index > sistOppdeltePeriodeIndex))) && (
                <div className={styles.marginBtn}>
                  <Button size="small" variant="tertiary" type="button" onClick={() => delOppPeriode(index)}>
                    <FormattedMessage id="AktivitetskravFaktaDetailForm.DelOppPeriode" />
                  </Button>
                </div>
              )}
              {fields.length > 1 && (
                <FlexContainer>
                  <FlexRow>
                    <FlexColumn>
                      <Label size="small"><FormattedMessage id="AktivitetskravFaktaDetailForm.Fom" /></Label>
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
                          label={<FormattedMessage id="AktivitetskravFaktaDetailForm.Tom" />}
                          validate={[required, hasValidDate]}
                          isReadOnly={readOnly}
                          disabledDays={{
                            fromDate: dayjs(perioder[index].fom, ISO_DATE_FORMAT).toDate(),
                            toDate: dayjs(perioder[index].tom || valgtAktivitetskrav.tom, ISO_DATE_FORMAT).subtract(1, 'day').toDate(),
                          }}
                        />
                        {visUgyldigDato && (
                          <ErrorMessage><FormattedMessage id="AktivitetskravFaktaDetailForm.IkkeGyldigDato" /></ErrorMessage>
                        )}
                      </FlexColumn>
                    )}
                    {(erDatoSatt || sistOppdeltePeriodeIndex !== index) && (
                      <>
                        <FlexColumn>
                          <Label size="small"><FormattedMessage id="AktivitetskravFaktaDetailForm.Tom" /></Label>
                        </FlexColumn>
                        <FlexColumn className={styles.tomDato}>
                          {perioder[index].tom && (
                            <BodyShort size="small"><DateLabel dateString={perioder[index].tom} /></BodyShort>
                          )}
                        </FlexColumn>
                      </>
                    )}
                    {(perioder[index].fom !== perioder[index].tom
                    && (fields.length === 1 || (!harDeltOpp && fields.length > 1 && index > sistOppdeltePeriodeIndex))) && (
                      <div className={styles.marginBtn}>
                        <Button size="small" variant="tertiary" type="button" onClick={() => delOppPeriode(index)}>
                          <FormattedMessage id="AktivitetskravFaktaDetailForm.DelOppPeriode" />
                        </Button>
                      </div>
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
                          <FormattedMessage id="AktivitetskravFaktaDetailForm.OppdaterDato" />
                        </Button>
                      </FlexColumn>
                    )}
                  </FlexRow>
                  <VerticalSpacer sixteenPx />
                </FlexContainer>
              )}
              <VerticalSpacer sixteenPx />
              <RadioGroupPanel
                name={`perioder.${index}.vurdering`}
                label={<FormattedMessage id="AktivitetskravFaktaDetailForm.Vurdering" />}
                validate={[required]}
                isReadOnly={readOnly}
                isHorizontal
                radios={aktivitetskravAvklaringer.map((avklaring) => ({
                  value: avklaring.kode,
                  label: avklaring.navn,
                }))}
              />
            </React.Fragment>
          );
        })}
        <VerticalSpacer fourtyPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Button
                size="small"
                variant="secondary"
                loading={false}
                disabled={!formMethods.formState.isDirty || readOnly}
              >
                <FormattedMessage id="AktivitetskravFaktaDetailForm.Oppdater" />
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
                <FormattedMessage id="AktivitetskravFaktaDetailForm.Avbryt" />
              </Button>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
        </FlexContainer>
      </Form>
      {visModalPeriode !== undefined && (
        <OppdaterePeriodeModal submit={nullstillPerioder} cancel={() => settVisModalForPeriode(undefined)} />
      )}
    </>
  );
};

export default AktivitetskravFaktaDetailForm;
