import React, {
  FunctionComponent, useCallback, useEffect, useMemo, useState, useRef,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import classnames from 'classnames/bind';
import { dateFormat } from '@navikt/ft-utils';
import { Form } from '@navikt/ft-form-hooks';

import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import okIkonUrl from '@fpsak-frontend/assets/images/check.svg';
import endretFelt from '@fpsak-frontend/assets/images/endret_felt.svg';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  AksjonspunktHelpTextHTML, VerticalSpacer, ExpandableTableRow, Table, TableColumn, Image,
} from '@navikt/ft-ui-komponenter';
import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { FaktaSubmitButtonNew, FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import { KontrollerAktivitetskravAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import { Heading } from '@navikt/ds-react';
import AktivitetskravFaktaDetailForm from './AktivitetskravFaktaDetailForm';

import styles from './aktivitetskravFaktaForm.less';

const classNames = classnames.bind(styles);

const HEADER_TEXT_CODES = [
  'EMPTY1',
  'AktivitetskravFaktaTabell.Periode',
  'AktivitetskravFaktaTabell.MorsAktivitet',
  'AktivitetskravFaktaTabell.Avklaring',
  'EMPTY2',
  'EMPTY3',
];

interface PureOwnProps {
  harApneAksjonspunkter: boolean;
  sorterteAktivitetskrav: UttakKontrollerAktivitetskrav[];
  submitCallback: (aksjonspunkter: KontrollerAktivitetskravAp) => Promise<void>;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  morsAktiviteter: KodeverkMedNavn[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  readOnly: boolean;
  submittable: boolean;
  formData: { aktivitetskrav: UttakKontrollerAktivitetskrav[], begrunnelse: string },
  setFormData: (data: { aktivitetskrav: UttakKontrollerAktivitetskrav[], begrunnelse: string }) => void,
}

const AktivitetskravFaktaForm: FunctionComponent<PureOwnProps> = ({
  harApneAksjonspunkter,
  sorterteAktivitetskrav,
  aktivitetskravAvklaringer,
  morsAktiviteter,
  alleMerknaderFraBeslutter,
  readOnly,
  submittable,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const tableRef = useRef<HTMLTableElement>(null);

  const [isDirty, setDirty] = useState<boolean>(false);

  const [aktivitetskrav, updateAktivitetskrav] = useState<UttakKontrollerAktivitetskrav[]>(formData?.aktivitetskrav || sorterteAktivitetskrav);

  const [valgtAktivitetskravFom, setAktivitetskravFom] = useState<string>();
  const velgAktivitetskravFom = useCallback((fom: string) => {
    if (valgtAktivitetskravFom === fom) {
      setAktivitetskravFom(undefined);
    } else {
      setAktivitetskravFom(fom);
    }
    tableRef?.current?.scrollIntoView();
  }, [valgtAktivitetskravFom]);

  useEffect(() => velgAktivitetskravFom(aktivitetskrav?.find((oa) => !oa.avklaring)?.fom), []);

  const oppdaterAktivitetskrav = useCallback((oppdatertKrav: { perioder: UttakKontrollerAktivitetskrav[] }) => {
    const { perioder } = oppdatertKrav;
    const oppdaterteAktivitetskrav = aktivitetskrav
      .filter((aKrav) => aKrav.fom !== perioder[0].fom)
      .concat(perioder)
      .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

    updateAktivitetskrav(oppdaterteAktivitetskrav);
    velgAktivitetskravFom(oppdaterteAktivitetskrav.find((oa) => !oa.avklaring)?.fom);
    setDirty(true);
  }, [aktivitetskrav]);

  const avbrytEditeringAvAktivitetskrav = useCallback(() => {
    velgAktivitetskravFom(undefined);
  }, []);

  const bekreft = useCallback((begrunnelse: string) => {
    submitCallback({
      kode: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
      avklartePerioder: aktivitetskrav as Required<UttakKontrollerAktivitetskrav>[],
      begrunnelse,
    });
  }, [aktivitetskrav]);

  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: formData?.begrunnelse,
    },
  });

  useEffect(() => () => {
    setFormData({ aktivitetskrav, begrunnelse: formMethods.getValues('begrunnelse') });
  }, []);

  const begrunnelse = formMethods.watch('begrunnelse');

  const isSubmittable = useMemo(() => submittable
    && !valgtAktivitetskravFom && aktivitetskrav?.every((a) => a.avklaring) && !!begrunnelse,
  [aktivitetskrav, valgtAktivitetskravFom, begrunnelse]);

  return (
    <>
      <Heading size="small"><FormattedMessage id="AktivitetskravFaktaForm.Overskrift" /></Heading>
      <VerticalSpacer thirtyTwoPx />
      {harApneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {[intl.formatMessage({ id: 'AktivitetskravFaktaForm.AksjonspunktHjelpetekst' })]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {aktivitetskrav && (
        <Table ref={tableRef} headerTextCodes={HEADER_TEXT_CODES} noHover hasGrayHeader>
          {aktivitetskrav.map((krav) => (
            <ExpandableTableRow
              key={krav.fom + krav.tom}
              isApLeftBorder={!krav.avklaring}
              showContent={valgtAktivitetskravFom === krav.fom}
              toggleContent={() => velgAktivitetskravFom(krav.fom)}
              content={((valgtAktivitetskravFom
                && (
                  <AktivitetskravFaktaDetailForm
                    key={valgtAktivitetskravFom}
                    valgtAktivitetskrav={krav}
                    readOnly={readOnly}
                    aktivitetskravAvklaringer={aktivitetskravAvklaringer}
                    oppdaterAktivitetskrav={oppdaterAktivitetskrav}
                    avbrytEditeringAvAktivitetskrav={avbrytEditeringAvAktivitetskrav}
                    morsAktiviteter={morsAktiviteter}
                  />
                )
              ))}
            >
              <TableColumn className={classNames('ikon', valgtAktivitetskravFom === krav.fom ? 'imageColTopPadding' : undefined)}>
                {krav.avklaring && (
                  <Image alt={intl.formatMessage({ id: 'AktivitetskravFaktaForm.Ok' })} src={okIkonUrl} />
                )}
                {!krav.avklaring && (
                  <Image alt={intl.formatMessage({ id: 'AktivitetskravFaktaForm.Aksjonspunkt' })} src={advarselIkonUrl} />
                )}
              </TableColumn>
              <TableColumn>{`${dateFormat(krav.fom)} - ${dateFormat(krav.tom)}`}</TableColumn>
              <TableColumn>{krav.morsAktivitet ? morsAktiviteter.find((aktivtet) => aktivtet.kode === krav.morsAktivitet)?.navn : ''}</TableColumn>
              <TableColumn>{krav.avklaring ? aktivitetskravAvklaringer.find((avklaring) => avklaring.kode === krav.avklaring)?.navn : ''}</TableColumn>
              <TableColumn>
                {krav.endret && (
                  <Image
                    src={endretFelt}
                    className={styles.image}
                    alt={intl.formatMessage({ id: 'AktivitetskravFaktaTabell.ErEndret' })}
                    tooltip={intl.formatMessage({ id: 'AktivitetskravFaktaTabell.ErEndret' })}
                    tabIndex={0}
                    alignTooltipLeft
                  />
                )}
              </TableColumn>
            </ExpandableTableRow>
          ))}
        </Table>
      )}
      <VerticalSpacer twentyPx />
      <Form formMethods={formMethods} onSubmit={(values: { begrunnelse: string }) => bekreft(values.begrunnelse)}>
        <FaktaBegrunnelseTextFieldNew
          name="begrunnelse"
          isSubmittable
          isReadOnly={readOnly}
          hasBegrunnelse
        />
        <VerticalSpacer twentyPx />
        <FaktaSubmitButtonNew
          isSubmittable={isSubmittable}
          isReadOnly={readOnly}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={isDirty || formMethods.formState.isDirty}
        />
      </Form>
    </>
  );
};

export default AktivitetskravFaktaForm;
