import { useContext, useEffect, useState } from 'react';
import { RestApiDispatchContext } from '@navikt/fp-rest-api-hooks';

interface Props {
  children: any;
  data: {
    key: string;
    data: any;
  }[];
}

export const RestApiGlobalStateMock = ({ children, data }: Props) => {
  const [erFerdig, setFerdig] = useState(false);
  const dispatch = useContext(RestApiDispatchContext);

  useEffect(() => {
    if (dispatch && !erFerdig) {
      const dispatchData = data.map(d => () => dispatch({ type: 'success', key: d.key, data: d.data }));
      Promise.all(dispatchData.map(d => d())).then(() => setFerdig(true));
    }
  }, [erFerdig]);

  return erFerdig ? children : null;
};
