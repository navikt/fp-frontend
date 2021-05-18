class RestKey<DATA_TYPE, PARAMS_TYPE> {
  name: string;

  // @ts-ignore Blir kun brukt til å utlede type
  private data: DATA_TYPE;

  // @ts-ignore Blir kun brukt til å utlede type
  private params: PARAMS_TYPE;

  constructor(name: string) {
    this.name = name;
  }
}

export default RestKey;
