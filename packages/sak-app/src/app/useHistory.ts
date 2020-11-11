import { useHistory as useHistoryOrig } from 'react-router-dom';
import { History } from 'history';

// TODO Dette er kun ein wrapper for å kunne mocka useHistory. Fjern når ein finn bedre måte

const useHistory = (): History => {
  const history = useHistoryOrig();
  return history;
};

export default useHistory;
