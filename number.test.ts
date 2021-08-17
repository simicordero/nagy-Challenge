// const multiples = require('./numbers_from1to100');
let obj = []
for(let i = 1;i<=100;i++){
    if ((i%3 == 0) && (i%5==0)){
        obj[i-1] = "MUSICAL"
    }
    obj[(3*i)-1] = "MUSIC"
    obj[(5*i)-1] = "IT"
    
}
obj.slice(0, 100)
test('multiples of 3 to be MUSIC, position 8 of the array is the number 9', () => {
    expect(obj[8]).toContain('MUSIC')
  });

  test('multiples of 5 to be IT, position 9 of the array is the number 10', () => {
    expect(obj[9]).toContain('IT')
  });

  test('multiples of 5 and 3 to be MUSICAL, position 14 of the array is 15', () => {
    expect(obj[14]).toContain('MUSICAL')
  });
