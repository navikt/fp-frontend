import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { BodyShort, Button, Label } from '@navikt/ds-react';
import { required } from '@navikt/ft-form-validators';
import { PencilIcon } from '@navikt/aksel-icons';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Form, formHooks, RadioGroupPanel } from '@navikt/ft-form-hooks';
import {
  AvsnittSkiller,
  DateLabel,
  FlexColumn,
  FlexContainer,
  FlexRow,
  Image,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import { DokumentasjonVurderingBehov, UttakVurdering } from '@navikt/fp-types';

import splitPeriodImageUrl from '../images/splitt.svg';
import DelOppPeriodeModal from './DelOppPeriodeModal';

import styles from './uttakDokumentasjonFaktaDetailForm.module.css';

type FormValues = {
  perioder: DokumentasjonVurderingBehov[];
};

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

  const [sistOppdeltPeriodeIndex, setSistOppdeltPeriodeIndex] = useState<number>();
  const [valgtPeriodeIndex, settValgtPeriodeIndex] = useState<number | undefined>();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      perioder: [valgtDokBehov],
    },
  });

  const { fields, append, update, remove } = formHooks.useFieldArray({
    control: formMethods.control,
    name: 'perioder',
  });

  const perioder = formMethods.watch('perioder');

  const lagNyPeriode = (dato: string) => {
    const periode = perioder[valgtPeriodeIndex];
    const nyPeriode = {
      ...periode,
      tom: dato,
    };
    update(valgtPeriodeIndex, nyPeriode);
    append({
      ...periode,
      fom: dayjs(dato).add(1, 'day').format(ISO_DATE_FORMAT),
      tom: periode.tom,
      vurdering: null,
    });

    settValgtPeriodeIndex(undefined);
    setSistOppdeltPeriodeIndex(valgtPeriodeIndex);
  };

  const oppdaterOgNullstillPerioder = (dato: string) => {
    settValgtPeriodeIndex(undefined);

    for (let i = fields.length - 1; i > valgtPeriodeIndex + 1; i -= 1) {
      remove(i);
    }

    update(valgtPeriodeIndex, {
      ...perioder[valgtPeriodeIndex],
      tom: dato,
    });
    update(valgtPeriodeIndex + 1, {
      ...perioder[valgtPeriodeIndex + 1],
      fom: dayjs(dato).add(1, 'day').format(ISO_DATE_FORMAT),
      tom: valgtDokBehov.tom,
    });

    setSistOppdeltPeriodeIndex(valgtPeriodeIndex);
  };

  const vurderingsalternativer = [
    {
      value: UttakVurdering.GODKJENT,
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.Godkjent' }),
    },
    {
      value: UttakVurdering.IKKE_GODKJENT,
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.IkkeGodkjent' }),
    },
  ];

  if (valgtDokBehov.årsak.includes('AKTIVITETSKRAV')) {
    vurderingsalternativer.push({
      value: UttakVurdering.IKKE_DOKUMENTERT,
      label: intl.formatMessage({ id: 'UttakDokumentasjonFaktaDetailForm.IkkeDokumentert' }),
    });
  }

  return (
    <>
      <Form formMethods={formMethods} onSubmit={oppdaterDokBehov}>
        <VerticalSpacer eightPx />
        {fields.map((field, index) => (
          <React.Fragment key={field.id}>
            {index > 0 && (
              <>
                <VerticalSpacer fourtyPx />
                <AvsnittSkiller dividerParagraf className={styles.skiller} />
                <VerticalSpacer twentyPx />
              </>
            )}
            {!readOnly && perioder[index].fom !== perioder[index].tom && fields.length === 1 && (
              <div className={styles.marginBtn}>
                <Button
                  size="small"
                  variant="tertiary"
                  type="button"
                  onClick={() => settValgtPeriodeIndex(index)}
                  icon={<Image src={splitPeriodImageUrl} />}
                >
                  <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.DelOppPeriode" />
                </Button>
              </div>
            )}
            {fields.length > 1 && (
              <FlexContainer>
                <Label size="medium">
                  <FormattedMessage
                    id="UttakDokumentasjonFaktaDetailForm.PeriodeMedIndex"
                    values={{ index: index + 1 }}
                  />
                </Label>
                <FlexRow>
                  <FlexColumn>
                    <Label size="small">
                      <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Fom" />
                    </Label>
                  </FlexColumn>
                  <FlexColumn className={styles.fomDato}>
                    {perioder[index].fom && (
                      <BodyShort size="small">
                        <DateLabel dateString={perioder[index].fom} />
                      </BodyShort>
                    )}
                  </FlexColumn>
                  <FlexColumn>
                    <Label size="small">
                      <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.Tom" />
                    </Label>
                  </FlexColumn>
                  <FlexColumn className={styles.tomDato}>
                    {perioder[index].tom && (
                      <BodyShort size="small">
                        <DateLabel dateString={perioder[index].tom} />
                      </BodyShort>
                    )}
                  </FlexColumn>
                  {sistOppdeltPeriodeIndex >= index && (
                    <FlexColumn className={styles.redigerKnapp}>
                      <Button
                        size="small"
                        variant="tertiary"
                        icon={<PencilIcon aria-hidden />}
                        onClick={() => settValgtPeriodeIndex(index)}
                        type="button"
                        disabled={!perioder[index].tom}
                      >
                        <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.RedigerPeriode" />
                      </Button>
                    </FlexColumn>
                  )}
                </FlexRow>
                {perioder[index].fom !== perioder[index].tom && fields.length > 1 && index === fields.length - 1 && (
                  <>
                    <VerticalSpacer sixteenPx />
                    <div className={styles.marginBtn}>
                      <Button
                        size="small"
                        variant="tertiary"
                        type="button"
                        onClick={() => settValgtPeriodeIndex(index)}
                        icon={<Image src={splitPeriodImageUrl} />}
                      >
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
        ))}
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
      {valgtPeriodeIndex !== undefined && (
        <DelOppPeriodeModal
          periode={perioder[valgtPeriodeIndex]}
          originalTom={valgtDokBehov.tom}
          submit={dato =>
            valgtPeriodeIndex + 1 < fields.length ? oppdaterOgNullstillPerioder(dato) : lagNyPeriode(dato)
          }
          cancel={() => settValgtPeriodeIndex(undefined)}
          visSlettEtterfølgendePerioder={valgtPeriodeIndex < fields.length - 1}
        />
      )}
    </>
  );
};

export default UttakDokumentasjonFaktaDetailForm;
