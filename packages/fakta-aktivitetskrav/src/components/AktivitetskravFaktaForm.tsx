import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Table, TableColumn, TableRow, AksjonspunktHelpTextHTML, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { dateFormat } from '@fpsak-frontend/utils';

import AktivitetskravAksjonspunktData from '../AktivitetskravAksjonspunktData';

const HEADER_TEXT_CODES = [
  'AktivitetskravFaktaForm.Periode',
  'AktivitetskravFaktaForm.Avklaring',
  'AktivitetskravFaktaForm.Begrunnelse',
];

interface OwnProps {
  harApneAksjonspunkter: boolean;
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
  submitCallback?: (aksjonspunkter: AktivitetskravAksjonspunktData[]) => Promise<any>;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
}

const AktivitetskravFaktaForm: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  harApneAksjonspunkter,
  uttakKontrollerAktivitetskrav,
  submitCallback,
  aktivitetskravAvklaringer,
  intl,
}) => (
  <>
    {harApneAksjonspunkter && (
      <>
        <AksjonspunktHelpTextHTML>
          {[intl.formatMessage({ id: 'AktivitetskravFaktaForm.AksjonspunktHjelpetekst' })]}
        </AksjonspunktHelpTextHTML>
        <VerticalSpacer sixteenPx />
      </>
    )}
    <Table headerTextCodes={HEADER_TEXT_CODES}>
      {uttakKontrollerAktivitetskrav && uttakKontrollerAktivitetskrav.map((krav) => (
        <TableRow key={krav.fom + krav.tom}>
          <TableColumn>{`${dateFormat(krav.fom)} - ${dateFormat(krav.tom)}`}</TableColumn>
          <TableColumn>{krav.avklaring ? aktivitetskravAvklaringer.find((avklaring) => avklaring.kode === krav.avklaring.kode)?.navn : ''}</TableColumn>
          <TableColumn>{krav.begrunnelse}</TableColumn>
        </TableRow>
      ))}
    </Table>
    <Hovedknapp
      mini
      onClick={() => submitCallback([{
        kode: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
        avklartePerioder: uttakKontrollerAktivitetskrav.map((krav) => ({
          fom: krav.fom,
          tom: krav.tom,
          avklaring: { kode: 'I_AKTIVITET', kodeverk: 'AKTIVITETSKRAV_AVKLARING' },
          begrunnelse: 'testbegrunnelse',
        })),
      }])}
      autoFocus
    >
      {intl.formatMessage({ id: 'AktivitetskravFaktaForm.Ferdig' })}
    </Hovedknapp>
  </>
);

export default injectIntl(AktivitetskravFaktaForm);
