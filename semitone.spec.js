let JamBuddy = require('./semitone')

describe('class JamBuddy()', () => {
     let jamBuddy;
    beforeEach(() => {
       jamBuddy = new JamBuddy();
    })
    it('should be defined', () => {
        expect(JamBuddy).toBeDefined();
    });

});

describe('class JamBuddy() methods ', () => {
    let jamBuddy
    beforeEach(() => {
      jamBuddy = new JamBuddy(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
   })
   it('selectNotes() should be defined', () => {
       expect(JamBuddy).toBeDefined();
   })
   
   it('should be defined', () => {  

    expect(jamBuddy.selectNotes()).not.toBe(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
});
});

describe('class JamBuddy() methods ', () => {
   let jamBuddy;
   beforeEach(() => {
      jamBuddy = new JamBuddy();
   })
   it('checkAnswer should be defined', () => {
       expect(JamBuddy).toBeDefined();
   });
   it('.... should be defined', () => {
    expect(JamBuddy).toBeDefined();

});
});