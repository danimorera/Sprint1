const { nomFuncio } = require('../')

test('test de turno', () => {
    const result = nomFuncio(2,2)
    expect(result).toBe(4)
})