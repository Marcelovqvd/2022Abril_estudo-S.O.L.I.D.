import crypto from 'crypto';

export abstract class Entity<t> {
  protected _id: string;
  public props: t;

  constructor(props: t, id?: string) {
    this._id = id || crypto.randomUUID();

    this.props = props;
  }
}
