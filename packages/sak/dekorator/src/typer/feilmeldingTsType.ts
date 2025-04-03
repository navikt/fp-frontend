type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

interface JSONObject {
  [x: string]: JSONValue;
}

export type Feilmelding = {
  melding: string;
  tilleggsInfo?: JSONObject;
};
