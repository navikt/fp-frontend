import {
  useEffect, useState,
} from 'react';

const useMenyRegistrerer = (
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void,
  id: string,
  tekst: string,
  skalVises: boolean,
  erAktiv: boolean,
  harApentAksjonspunkt: boolean,
  status: string,
) => {
  const [erPanelValgt, setPanelValgt] = useState(false);
  useEffect(() => {
    registrerFaktaPanel({
      id,
    });
  }, []);

  useEffect(() => {
    if (skalVises) {
      registrerFaktaPanel({
        id,
        tekst,
        erAktiv,
        harApentAksjonspunkt,
        status,
      });
      setPanelValgt(erAktiv);
    }
  }, [skalVises, erAktiv, harApentAksjonspunkt, status]);

  return erPanelValgt;
};

const prosessPanelHooks = {
  useMenyRegistrerer,
};

export default prosessPanelHooks;
