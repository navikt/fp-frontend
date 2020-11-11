import { useLocation as useLocationOrig } from 'react-router-dom';
import { Location } from 'history';

// TODO Dette er kun ein wrapper for å kunne mocka useLocation. Fjern når ein finn bedre måte

const useLocation = (): Location => {
  const location = useLocationOrig();
  return location;
};

export default useLocation;
