import Person from '../../entities/person.entity'

describe('Person Entity', () => {
  let entity: Person

  beforeEach(() => {
    entity = new Person({
      name: 'Matheus',
      surname: 'Flauzino',
      age: 30,
      sex: 'male'
    })
  })

  test('ensures that entity was created', () => {
    expect(entity.name).toBe('Matheus')
    expect(entity.surname).toBe('Flauzino')
    expect(entity.age).toBe(30)
    expect(entity.sex).toBe('male')
  })

  test('ensures that when calling toString, the object returns the values', () => {
    expect(entity.toString()).toEqual({
      name: 'Matheus',
      surname: 'Flauzino',
      age: 30,
      sex: 'male'
    })
  })

  test('ensures that when calling toString, the object returns the values', () => {
    entity.update({
      name: 'Matheus',
      surname: 'Flauzino',
      age: 32,
      sex: 'male'
    })

    expect(entity.toString()).toEqual({
      name: 'Matheus',
      surname: 'Flauzino',
      age: 32,
      sex: 'male'
    })
  })
})
