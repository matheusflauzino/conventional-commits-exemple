export type TSex = 'male' | 'female' | 'other'
export type Props = {
  name: string
  surname: string
  age: number
  sex: TSex
}

export default class Person {
  private _name: string
  private _surname: string
  private _age: number
  private _sex: TSex

  constructor(props: Props) {
    this._name = props.name
    this._surname = props.surname
    this._age = props.age
    this._sex = props.sex
  }

  get name(): string {
    return this._name
  }

  get surname(): string {
    return this._surname
  }

  get age(): number {
    return this._age
  }

  get sex(): TSex {
    return this._sex
  }

  public toString(): Props {
    return {
      name: this._name,
      surname: this._surname,
      age: this._age,
      sex: this._sex
    }
  }

  public update(props: Props): void {
    this._name = props.name
    this._surname = props.surname
    this._age = props.age
    this._sex = props.sex
  }
}
