import { useRouteMatch as useRouteMatchOrig, match as RouterMatch } from 'react-router-dom';

// TODO Dette er kun ein wrapper for å kunne mocka useLocation. Fjern når ein finn bedre måte

const useRouteMatch = (): RouterMatch => {
  const routeMatch = useRouteMatchOrig();
  return routeMatch;
};

export default useRouteMatch;
