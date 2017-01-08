export interface ISpec {
  lines: Array<number[]>,
  columns: Array<number[]>
}

export class Spec implements ISpec {
  constructor (
    public lines: Array<number[]>,
    public columns: Array<number[]>
  ) {
    console.log('foo')
  }
}
