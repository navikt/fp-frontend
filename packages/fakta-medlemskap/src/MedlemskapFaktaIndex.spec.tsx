import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import * as stories from './MedlemskapFaktaIndex.stories';

const {
  AvklarOmBrukerErBosatt, AvklarOmBrukerHarGyldigPeriode, AvklarOmBrukerHarOppholdsrett, AvklarOmBrukerHarLovligOpphold, AvklarFortsattMedlemskap,
} = composeStories(stories);

describe('<MedlemskapFaktaIndex>', () => {
  it('skal velge at søker er bosatt i Norge', async () => {
    const lagreVurdering = jest.fn(() => Promise.resolve());

    render(<AvklarOmBrukerErBosatt submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om medlemskap')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker er bosatt i Norge')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger oppgitt i søknaden')).toBeInTheDocument();
    expect(screen.getByText('Bostedsadresse fra folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Oppholdstillatelser')).toBeInTheDocument();
    expect(screen.getByText('Perioder med medlemskap')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    await userEvent.click(screen.getAllByText('Søker er bosatt i Norge')[0]);

    await userEvent.type(screen.getByText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, [{
      begrunnelse: '',
      bekreftedePerioder: [{
        aksjonspunkter: [AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT],
        begrunnelse: 'Dette er en begrunnelse',
        bosattVurdering: true,
        medlemskapManuellVurderingType: undefined,
        personopplysningBruker: {
          adresser: [],
          navn: 'Mygg Robust',
          personstatus: 'BOSA',
          region: 'NORDEN',
        },
        vurderingsdato: '2018-11-07',
        årsaker: ['SKJÆRINGSTIDSPUNKT'],
      }],
      kode: AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT,
    }]);
  });

  it('skal velge at søker er har periode med medlemskap', async () => {
    const lagreVurdering = jest.fn(() => Promise.resolve());

    render(<AvklarOmBrukerHarGyldigPeriode submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om medlemskap')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker har gyldig medlemskap i perioden')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger oppgitt i søknaden')).toBeInTheDocument();
    expect(screen.getByText('Bostedsadresse fra folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Perioder med medlemskap')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    await userEvent.click(screen.getByText('Periode med medlemskap'));

    await userEvent.type(screen.getByText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, [{
      begrunnelse: '',
      kode: AksjonspunktCode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
      bekreftedePerioder: [{
        aksjonspunkter: [AksjonspunktCode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE],
        begrunnelse: 'Dette er en begrunnelse',
        bosattVurdering: undefined,
        erEosBorger: null,
        lovligOppholdVurdering: null,
        medlemskapManuellVurderingType: 'MEDLEM',
        oppholdsrettVurdering: null,
        personopplysningAnnenPart: {
          adresser: [{
            adresseType: 'BOSTEDSADRESSE',
            land: 'NOR',
            postNummer: '2500',
            poststed: 'Ukjent',
          }],
          navn: 'Papegøye Runar',
          personstatus: 'BOSA',
          region: 'NORDEN',
        },
        personopplysningBruker: {
          adresser: [{
            adresseType: 'BOSTEDSADRESSE',
            land: 'NOR',
            postNummer: '2500',
            poststed: 'Ukjent',
          }],
          navn: 'Papegøye Margaret',
          personstatus: 'BOSA',
          region: 'NORDEN',
        },
        vurderingsdato: '2022-06-28',
        årsaker: [
          'SKJÆRINGSTIDSPUNKT',
        ],
      }],
    }]);
  });

  it('skal velge at søker har oppholdsrett', async () => {
    const lagreVurdering = jest.fn(() => Promise.resolve());

    render(<AvklarOmBrukerHarOppholdsrett submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om medlemskap')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker er EØS-borger med oppholdsrett')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    await userEvent.click(screen.getAllByText('Søker har oppholdsrett')[0]);

    await userEvent.type(screen.getByText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, [{
      begrunnelse: '',
      bekreftedePerioder: [{
        aksjonspunkter: [AksjonspunktCode.AVKLAR_OPPHOLDSRETT],
        begrunnelse: 'Dette er en begrunnelse',
        bosattVurdering: undefined,
        erEosBorger: true,
        lovligOppholdVurdering: undefined,
        oppholdsrettVurdering: true,
        medlemskapManuellVurderingType: undefined,
        personopplysningBruker: {
          adresser: [],
          navn: 'Mygg Robust',
          personstatus: 'BOSA',
          region: 'NORDEN',
        },
        vurderingsdato: '2018-11-07',
        årsaker: ['SKJÆRINGSTIDSPUNKT'],
      }],
      kode: AksjonspunktCode.AVKLAR_OPPHOLDSRETT,
    }]);
  });

  it('skal velge at søker har lovlig opphold', async () => {
    const lagreVurdering = jest.fn(() => Promise.resolve());

    render(<AvklarOmBrukerHarLovligOpphold submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om medlemskap')).toBeInTheDocument();
    expect(screen.getByText('Avklar om søker har lovlig opphold')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    await userEvent.click(screen.getAllByText('Søker har lovlig opphold')[0]);

    await userEvent.type(screen.getByText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, [{
      begrunnelse: '',
      bekreftedePerioder: [{
        aksjonspunkter: [AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD],
        begrunnelse: 'Dette er en begrunnelse',
        bosattVurdering: undefined,
        erEosBorger: false,
        lovligOppholdVurdering: true,
        oppholdsrettVurdering: undefined,
        medlemskapManuellVurderingType: undefined,
        personopplysningBruker: {
          adresser: [],
          navn: 'Mygg Robust',
          personstatus: 'BOSA',
          region: 'NORDEN',
        },
        vurderingsdato: '2018-11-07',
        årsaker: ['SKJÆRINGSTIDSPUNKT'],
      }],
      kode: AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD,
    }]);
  });

  it('skal løse aksjonspunkt for flere perioder', async () => {
    const lagreVurdering = jest.fn(() => Promise.resolve());

    render(<AvklarFortsattMedlemskap submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om medlemskap')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker fortsatt har gyldig medlemskap i perioden')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker er bosatt i Norge')).toBeInTheDocument();
    expect(screen.getByText('Avklar om søker har lovlig opphold')).toBeInTheDocument();

    expect(screen.getAllByText('SKJÆRINGSTIDSPUNKT')).toHaveLength(4);

    expect(screen.getByText('Periode - 05.10.2017')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();
    expect(screen.getByText('Oppdater')).toBeDisabled();
    expect(screen.getByText('Avbryt')).toBeEnabled();

    await userEvent.click(screen.getAllByText('Søker har lovlig opphold')[0]);

    await userEvent.type(screen.getByText('Begrunn endringene'), 'Dette er en begrunnelse');

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Periode - 07.11.2019')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();
    expect(screen.getByText('Oppdater')).toBeDisabled();
    expect(screen.getByText('Avbryt')).toBeEnabled();

    await userEvent.click(screen.getAllByText('Søker er bosatt i Norge')[0]);

    await userEvent.type(screen.getByText('Begrunn endringene'), 'Dette er en begrunnelse');

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, [{
      begrunnelse: '',
      bekreftedePerioder: [{
        aksjonspunkter: [AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT],
        begrunnelse: 'Dette er en begrunnelse',
        bosattVurdering: true,
        medlemskapManuellVurderingType: undefined,
        personopplysningBruker: {
          adresser: [{
            adresseType: 'BOSTEDSADRESSE',
            adresselinje1: 'Skogvegen 3',
            land: 'NOR',
            postNummer: '4353',
            poststed: 'Klepp Stasjon',
          }],
          personstatus: 'BOSA',
          region: 'NORDEN',
        },
        vurderingsdato: '2019-11-07',
        årsaker: ['SKJÆRINGSTIDSPUNKT'],
      }],
      kode: AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT,
    }, {
      begrunnelse: '',
      bekreftedePerioder: [{
        aksjonspunkter: [AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD],
        begrunnelse: 'Dette er en begrunnelse',
        bosattVurdering: undefined,
        erEosBorger: false,
        lovligOppholdVurdering: true,
        medlemskapManuellVurderingType: undefined,
        oppholdsrettVurdering: undefined,
        personopplysningBruker: {
          adresser: [{
            adresseType: 'BOSTEDSADRESSE',
            adresselinje1: 'Skogvegen 3',
            land: 'NOR',
            postNummer: '4353',
            poststed: 'Klepp Stasjon',
          }],
          personstatus: 'BOSA',
          region: 'NORDEN',
        },
        vurderingsdato: '2017-10-05',
        årsaker: ['SKJÆRINGSTIDSPUNKT'],
      }],
      kode: AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD,
    }, {
      begrunnelse: '',
      bekreftedePerioder: [{
        aksjonspunkter: [AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD],
        begrunnelse: 'Dette er en begrunnelse',
        bosattVurdering: undefined,
        erEosBorger: false,
        lovligOppholdVurdering: true,
        medlemskapManuellVurderingType: undefined,
        oppholdsrettVurdering: undefined,
        personopplysningBruker: {
          adresser: [{
            adresseType: 'BOSTEDSADRESSE',
            adresselinje1: 'Skogvegen 3',
            land: 'NOR',
            postNummer: '4353',
            poststed: 'Klepp Stasjon',
          }],
          personstatus: 'BOSA',
          region: 'NORDEN',
        },
        vurderingsdato: '2017-10-05',
        årsaker: ['SKJÆRINGSTIDSPUNKT'],
      }, {
        aksjonspunkter: [AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT],
        begrunnelse: 'Dette er en begrunnelse',
        bosattVurdering: true,
        medlemskapManuellVurderingType: undefined,
        personopplysningBruker: {
          adresser: [{
            adresseType: 'BOSTEDSADRESSE',
            adresselinje1: 'Skogvegen 3',
            land: 'NOR',
            postNummer: '4353',
            poststed: 'Klepp Stasjon',
          }],
          personstatus: 'BOSA',
          region: 'NORDEN',
        },
        vurderingsdato: '2019-11-07',
        årsaker: ['SKJÆRINGSTIDSPUNKT'],
      }],
      kode: AksjonspunktCode.AVKLAR_FORTSATT_MEDLEMSKAP,
    }]);
  });
});
