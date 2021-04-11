export type TSex = 'male' | 'female' | 'other'
export type Props = {
  name: string
  age: number
  sex: TSex
}

export default class Person {
  private readonly _name: string
  private readonly _age: number
  private readonly _sex: TSex

  constructor(props: Props) {
    this._name = props.name
    this._age = props.age
    this._sex = props.sex
  }

  get name(): string {
    return this._name
  }

  get age(): number {
    return this._age
  }

  get sex(): TSex {
    return this._sex
  }
}
