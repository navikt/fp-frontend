export type JSONValue = string | number | boolean | null | JSONObject | JSONValue[];

interface JSONObject {
  [x: string]: JSONValue;
}

export type Feilmelding = {
  melding: string;
  tilleggsInfo?: JSONValue;
};
