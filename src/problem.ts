import { ISpec } from './spec';

export interface ISize {
  i: number,
  j: number,
}

export interface IProblem {
  spec: ISpec
  size: ISize
}

export class Problem implements IProblem {
  public spec: ISpec
  public readonly size: ISize
  constructor () {
    // yay !
  }
}
