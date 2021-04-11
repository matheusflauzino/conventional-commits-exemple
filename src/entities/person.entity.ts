export type TSex = 'male' | 'female' | 'other'
export type Props = {
  name: string
  age: number
  sex: TSex
}

export default class Person {
  private readonly name: string
  private readonly age: number
  private readonly sex: TSex

  constructor(props: Props) {
    this.name = props.name
    this.age = props.age
    this.sex = props.sex
  }
}
