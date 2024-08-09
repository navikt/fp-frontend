/* eslint-disable @typescript-eslint/no-use-before-define */ // TODO
import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import React from 'react';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { useIntl } from 'react-intl';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { HGrid, Label, Table, VStack } from '@navikt/ds-react';
import { ArbeidsgiverOpplysningerPerId, Inntektsmelding } from '@navikt/fp-types';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import { DateLabel } from '@navikt/ft-ui-komponenter';

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.INNTEKTSMELDINGER];
type EndepunktPanelData = {
  inntektsmeldinger: Inntektsmelding[];
};

type OwnProps = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const InntektsmeldingerFaktaInitPanel = ({arbeidsgiverOpplysningerPerId, ...props}: FaktaPanelInitProps & OwnProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    faktaPanelKode={FaktaPanelCode.INNTEKTSMELDINGER}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'InntektsmeldingerInfoPanel.Title' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={data => <InntektsmledingerFaktaInnhold {...data} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}  />}
  />
);

const InntektsmledingerFaktaInnhold = ({ arbeidsgiverOpplysningerPerId, inntektsmeldinger }: {inntektsmeldinger:Inntektsmelding[]} & OwnProps) => {
  console.log(inntektsmeldinger);
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">Innhold</Table.HeaderCell>
          <Table.HeaderCell scope="col">Dato innsendt</Table.HeaderCell>
          <Table.HeaderCell scope="col">Bedrift</Table.HeaderCell>
          <Table.HeaderCell scope="col">Skjæringst.</Table.HeaderCell>
          <Table.HeaderCell scope="col">Månedsi.</Table.HeaderCell>
          <Table.HeaderCell scope="col">Behandling</Table.HeaderCell>
          <Table.HeaderCell scope="col">Dato for beh.</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
        <Table.Body>
          {inntektsmeldinger.map((inntektsmelding, index) => {
            return (
              <Table.ExpandableRow togglePlacement="right" key={index} content={<InntektsmeldingContent arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} inntektsmelding={inntektsmelding} /> }>
                <Table.DataCell>{inntektsmelding.dokumentId ?? "finnes ei"}</Table.DataCell>
                <Table.DataCell><DateLabel dateString={inntektsmelding.motattDato} /></Table.DataCell>
                <Table.DataCell>{arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent].navn}</Table.DataCell>
                <Table.DataCell><DateLabel dateString={inntektsmelding.startDatoPermisjon} /></Table.DataCell>
                <Table.DataCell>{formatCurrencyWithKr(inntektsmelding.inntektPrMnd)}</Table.DataCell>
                <Table.DataCell>En eller annen status</Table.DataCell>
                <Table.DataCell>Dato for behandling</Table.DataCell>
              </Table.ExpandableRow>
            );
          })}
        </Table.Body>
    </Table>
  )
}

const InntektsmeldingContent = ({inntektsmelding,arbeidsgiverOpplysningerPerId}: {inntektsmelding:Inntektsmelding} & OwnProps) => {

  return (
    <HGrid columns={{ md: 3, "2xl": 4 }}  gap="8" style={{background: "rgba(18, 43, 68, 0.08)", padding: "1.5rem 1rem"}}>
      <InntektsmeldingInfoBlokk tittel={"Arbeidsgiver"}>
        <span>Virksomhetsnavn: {arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent].navn}</span>
        <span>Org.nr. for underenhet: {inntektsmelding.arbeidsgiverIdent} </span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Kontaktperson fra arbeidsgiver"}>
        <span>Navn: {inntektsmelding.kontaktpersonNavn}</span>
        <span>Telefonnummer {inntektsmelding.kontaktpersonNummer}</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Behandling"}>
        <span>Brukt i denne behandlingen: TODO</span>
        <span>Avsluttet dato 14.14.TODO</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Månedsinntekt"}>
        <span>{formatCurrencyWithKr(inntektsmelding.inntektPrMnd)}</span>
        <span>TODO</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Første dag med foreldrepenger"}>
        <span>12.12.TODO</span>
        <span>Oppgitt av søker: TODO</span>
      </InntektsmeldingInfoBlokk>


      <InntektsmeldingInfoBlokk tittel={"Kilde"}>
        <span>{inntektsmelding.kildeSystem}</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Refusjon"}>
        <span>{inntektsmelding.refusjonPrMnd ? formatCurrencyWithKr(inntektsmelding.refusjonPrMnd): "Ingen refusjon"}</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Naturalytelser"}>
        {inntektsmelding.naturalytelser.length === 0 ? <span>Ingen</span> :
        <VStack>
          {inntektsmelding.naturalytelser.map(({ type, periode, beloepPerMnd, indexKey }) => (
            <VStack key={indexKey}>
              <span>{type}</span>
              <ul style={{margin: 0}}>
                <li><DateLabel dateString={periode.fomDato} /> TODO: denne er feil</li>
                <li>Verdi pr måned: {formatCurrencyWithKr(beloepPerMnd.verdi)}</li>
              </ul>
            </VStack>
          ))}
        </VStack>
        }
      </InntektsmeldingInfoBlokk>
    </HGrid>
  )
}

const InntektsmeldingInfoBlokk = ({tittel, children}: {tittel:string, children: React.ReactNode}) => {
  return (
    <VStack><Label size="medium" >
      {tittel}
    </Label>
      {children}
    </VStack>
  )
}
