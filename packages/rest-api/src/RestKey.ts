class RestKey<DATA_TYPE, PARAMS_TYPE> {
  name: string;

  private data: DATA_TYPE;

  private params: PARAMS_TYPE;

  constructor(name: string) {
    this.name = name;
  }
}

export default RestKey;
