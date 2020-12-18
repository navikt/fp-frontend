import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { DetaljertSimuleringResultat } from '@fpsak-frontend/types';

import AvregningTable from './AvregningTable';

const simuleringResultat = {
  perioderPerMottaker: [],
} as DetaljertSimuleringResultat;
const mottaker = {
  mottakerNavn: '',
  mottakerNummer: '',
  mottakerType: {
    kode: '',
  },
  resultatPerFagområde: [
    {
      fagOmrådeKode: {
        kode: '',
      },
      rader: [
        {
          feltnavn: '',
          resultaterPerMåned: [],
        },
        {
          feltnavn: '',
          resultaterPerMåned: [],
        },
        {
          feltnavn: '',
          resultaterPerMåned: [],
        },
      ],
    },
  ],
  resultatOgMotregningRader: [],
};
const mockProps = {
  toggleDetails: sinon.spy(),
  showDetails: [],
  simuleringResultat,
  ingenPerioderMedAvvik: false,
};

describe('<AvregningTable>', () => {
  it('skal ikke vise tabele hvis perioderPerMottaker er tømt array', () => {
    const wrapper = shallow(<AvregningTable
      {...mockProps}
    />);

    const table = wrapper.find('Table');
    expect(table).toHaveLength(0);
  });

  it('skal vise så mange tabeller som det er mottakere i perioderPerMottaker array', () => {
    const props = {
      ...mockProps,
      simuleringResultat: {
        perioderPerMottaker: [mottaker, mottaker],
      } as DetaljertSimuleringResultat,
    };
    const wrapper = shallow(<AvregningTable
      {...props}
    />);

    const table = wrapper.find('Table');
    expect(table).toHaveLength(2);
  });

  it('skal vise så mange rader i tabele som det er rader i resultatPerFagområde og resultatOgMotregningRader arrays', () => {
    const props = {
      ...mockProps,
      simuleringResultat: {
        perioderPerMottaker: [mottaker],
      } as DetaljertSimuleringResultat,
    };
    const wrapper = shallow(<AvregningTable
      {...props}
    />);

    const tableRow = wrapper.find('TableRow');
    expect(tableRow).toHaveLength(3);
  });

  it('skal vise mottaker navn og nummer hvis mottaker er arbeidsgiver', () => {
    const arbeidsgiver = {
      mottakerNavn: 'Statoil',
      mottakerNummer: '1234567',
      mottakerType: {
        kode: 'ARBG_ORG',
      },
    };
    const props = {
      ...mockProps,
      simuleringResultat: {
        perioderPerMottaker: [mottaker, { ...mottaker, ...arbeidsgiver }],
      } as DetaljertSimuleringResultat,
    };
    const wrapper = shallow(<AvregningTable
      {...props}
    />);

    const normaltekst = wrapper.find('Normaltekst');
    expect(normaltekst).toHaveLength(1);
    expect(normaltekst.html()).toBe('<p class="typo-normal tableTitle">Statoil (1234567)</p>');
  });
});
