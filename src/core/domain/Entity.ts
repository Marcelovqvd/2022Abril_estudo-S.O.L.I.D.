export abstract class Entity<t> {
  protected _id: string;
  public props: t;

  constructor(id: string, props: t) {
    this._id = id || crypto.randomUUID();

    this.props = props;
  }
}
