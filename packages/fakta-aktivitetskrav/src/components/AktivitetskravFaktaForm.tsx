import React, {
  FunctionComponent, useCallback, useEffect, useMemo, useState, useRef,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { dateFormat } from '@navikt/ft-utils';
import { Form } from '@navikt/ft-form-hooks';
import { SuccessStroke, Error, FileError } from '@navikt/ds-icons';
import { Heading } from '@navikt/ds-react';
import {
  AksjonspunktHelpTextHTML, VerticalSpacer, ExpandableTableRow, Table, TableColumn, Image,
} from '@navikt/ft-ui-komponenter';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KodeverkMedNavn, Aktivitetskrav } from '@fpsak-frontend/types';
import { FaktaSubmitButtonNew, FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import { KontrollerAktivitetskravAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import AktivitetskravFaktaDetailForm from './AktivitetskravFaktaDetailForm';

import styles from './aktivitetskravFaktaForm.less';

const HEADER_TEXT_CODES = [
  'AktivitetskravFaktaTabell.Periode',
  'AktivitetskravFaktaTabell.AvklaringBehov',
  'AktivitetskravFaktaTabell.Arsak',
  'AktivitetskravFaktaTabell.Vurdering',
  'EMPTY1',
];

interface PureOwnProps {
  harApneAksjonspunkter: boolean;
  sorterteAktivitetskrav: Aktivitetskrav[];
  submitCallback: (aksjonspunkter: KontrollerAktivitetskravAp) => Promise<void>;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  morsAktiviteter: KodeverkMedNavn[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  readOnly: boolean;
  submittable: boolean;
  formData: { aktivitetskrav: Aktivitetskrav[], begrunnelse: string },
  setFormData: (data: { aktivitetskrav: Aktivitetskrav[], begrunnelse: string }) => void,
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

  const [aktivitetskrav, updateAktivitetskrav] = useState<Aktivitetskrav[]>(formData?.aktivitetskrav || sorterteAktivitetskrav);

  const [valgtAktivitetskravFoms, setAktivitetskravFom] = useState<string[]>([]);
  const velgAktivitetskravFom = useCallback((fom?: string, lukkAlleAndre = false) => {
    if (valgtAktivitetskravFoms.includes(fom)) {
      setAktivitetskravFom((foms) => foms.filter((f) => f !== fom));
    } else {
      const nye = fom ? [fom] : [];
      setAktivitetskravFom((foms) => (lukkAlleAndre ? nye : foms.concat(fom)));
    }
    tableRef?.current?.scrollIntoView();
  }, [valgtAktivitetskravFoms, setAktivitetskravFom]);

  useEffect(() => velgAktivitetskravFom(aktivitetskrav?.find((oa) => !oa.vurdering)?.fom), []);

  const oppdaterAktivitetskrav = useCallback((oppdatertKrav: { perioder: Aktivitetskrav[] }) => {
    const { perioder } = oppdatertKrav;
    const oppdaterteAktivitetskrav = aktivitetskrav
      .filter((aKrav) => aKrav.fom !== perioder[0].fom)
      .concat(perioder)
      .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

    updateAktivitetskrav(oppdaterteAktivitetskrav);
    velgAktivitetskravFom(oppdaterteAktivitetskrav.find((oa) => !oa.vurdering)?.fom, true);
    setDirty(true);
  }, [aktivitetskrav]);

  const bekreft = useCallback((begrunnelse: string) => {
    submitCallback({
      kode: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
      avklartePerioder: aktivitetskrav as Required<Aktivitetskrav>[],
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
    && valgtAktivitetskravFoms.length === 0 && aktivitetskrav?.every((a) => a.vurdering) && !!begrunnelse,
  [aktivitetskrav, valgtAktivitetskravFoms, begrunnelse]);

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
          {aktivitetskrav.map((krav, index) => (
            <ExpandableTableRow
              key={krav.fom + krav.tom}
              isApLeftBorder={!krav.vurdering}
              showContent={valgtAktivitetskravFoms.includes(krav.fom)}
              toggleContent={() => velgAktivitetskravFom(krav.fom)}
              content={((valgtAktivitetskravFoms.includes(krav.fom)
                && (
                  <AktivitetskravFaktaDetailForm
                    key={krav.fom}
                    valgtAktivitetskrav={krav}
                    readOnly={readOnly}
                    aktivitetskravAvklaringer={aktivitetskravAvklaringer}
                    oppdaterAktivitetskrav={oppdaterAktivitetskrav}
                    avbrytEditeringAvAktivitetskrav={() => velgAktivitetskravFom(krav.fom)}
                    morsAktiviteter={morsAktiviteter}
                  />
                )
              ))}
            >
              <TableColumn>{`${dateFormat(krav.fom)} - ${dateFormat(krav.tom)}`}</TableColumn>
              <TableColumn>{krav.behov}</TableColumn>
              <TableColumn>{krav.behovÅrsak}</TableColumn>
              <TableColumn>
                {index === 0 && (
                  <>
                    <SuccessStroke />
                    <div className={styles.ikon}><FormattedMessage id="AktivitetskravFaktaTabell.Godkjent" /></div>
                  </>
                )}
                {index === 50 && (
                  <>
                    <Error />
                    <div className={styles.ikon}><FormattedMessage id="AktivitetskravFaktaTabell.IkkeGodkjent" /></div>
                  </>
                )}
                {index === 51 && (
                  <>
                    <FileError />
                    <div className={styles.ikon}><FormattedMessage id="AktivitetskravFaktaTabell.ManglerDok" /></div>
                  </>
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
