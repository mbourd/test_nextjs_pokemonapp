import { capitalizeFirstLetter } from '../capitalizeFirstLetter';
import { expect } from '@jest/globals';

describe('function capitalizeFirstLetter', function () {
  it('should capitalize the first letter of the word', function () {
    const expectWord = 'Venusaur';
    const word = 'venusaur';

    expect(capitalizeFirstLetter(word)).toStrictEqual(expectWord);
  });
  it('should capitalize the first letter of the word', function () {
    const expectWord = 'Charizard';
    const word = 'charizard';

    expect(capitalizeFirstLetter(word)).toStrictEqual(expectWord);
  });
  it('should capitalize the first letter of the word', function () {
    const expectWord = 'Blastoise';
    const word = 'blastoise';

    expect(capitalizeFirstLetter(word)).toStrictEqual(expectWord);
  });
});
