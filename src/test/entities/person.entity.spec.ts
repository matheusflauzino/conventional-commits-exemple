import Person from '../../entities/person.entity'

describe('Person Entity', () => {
  test('ensures that entity was created', () => {
    const entity = new Person({
      name: 'Matheus',
      age: 30,
      sex: 'male',
    })

    expect(entity.name).toBe('Matheus')
    expect(entity.age).toBe(30)
    expect(entity.sex).toBe('male')
  })
})
