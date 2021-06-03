import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';

import FaktaPanelInitProps from '../../types/faktaPanelInitProps';
import FaktaMeny from './FaktaMeny';
import FaktaContainer from './FaktaContainer';

describe('<FaktaContainer>', () => {
  let useEffect: any;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f: any) => f());
  };

  const FaktaPanelTest1: FunctionComponent<FaktaPanelInitProps> = ({
    registrerFaktaPanel,
    valgtFaktaSteg,
  }) => {
    useEffect(() => {
      registrerFaktaPanel({
        id: '1',
        tekst: 'Dette er en paneltittel',
        erAktiv: valgtFaktaSteg === '1',
        harApneAksjonspunkter: true,
        harHentetInitData: true,
      });
    }, []);

    if (valgtFaktaSteg !== '1') {
      return null;
    }

    return (
      <div>
        Dette er et testpanel
      </div>
    );
  };

  it('skal', () => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();

    const wrapper = shallow(<FaktaContainer
      behandlingVersjon={1}
      hentPaneler={(props) => <FaktaPanelTest1 {...props} />}
      valgtFaktaSteg="default"
      valgtProsessSteg="default"
      oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
      setApentFaktaPanel={() => {}}
    />);

    const meny = wrapper.find(FaktaMeny);

    expect(meny).toHaveLength(0);
  });
});
