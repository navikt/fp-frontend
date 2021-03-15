export type Aksess = {
  employeeHasAccess: boolean;
  isEnabled: boolean;
}

export type AksessRettigheter = {
  writeAccess: Aksess;
  kanOverstyreAccess: Aksess;
}

export default AksessRettigheter;
