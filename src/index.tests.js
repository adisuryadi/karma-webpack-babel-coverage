import Greet from './greet';

describe('Greetings', () => {
    describe('sayHi', () => {
        it('should return "Hi Adi!"', () => {
            const greetings = Greet.sayHi('Adi');
            expect(greetings).toBe('Hi Adi!')
        });
    });

    describe('sayHi', () => {
        it('should return "Goodbye Adi!"', () => {
            const greetings = Greet.sayGoodbye('Adi');
            expect(greetings).toBe('Goodbye Adi!')
        });
    });
});
