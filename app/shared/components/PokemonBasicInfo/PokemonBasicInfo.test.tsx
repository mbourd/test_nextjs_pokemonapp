import { render } from '@/setupTests';
import { PokemonBasicInfo } from './PokemonBasicInfo';
import { expect } from '@jest/globals';

import pokemonFullDetail from '../../../../cypress/fixtures/pokemon-full-detail-shayminland.json';

describe('', function () {
  it('', function () {
    const { container } = render(
      <PokemonBasicInfo pokemon={pokemonFullDetail} />,
    );
    const elementID = container.querySelector(
      '[data-test-id="ListItemText-Typography-ID"]',
    );
    const elementMoves = container.querySelector(
      '[data-test-id="ListItemText-Typography-Moves"]',
    );
    const elementBaseExp = container.querySelector(
      '[data-test-id="ListItemText-Typography-BaseExp"]',
    );
    const elementTypes = container.querySelectorAll(
      '[data-test-id="ListItemText-Chip-Types"]',
    );
    const elementAbilities = container.querySelectorAll(
      '[data-test-id="ListItemText-Chip-Abilities"]',
    );

    expect(elementID?.textContent).toEqual('' + pokemonFullDetail.id);
    expect(elementMoves?.textContent).toEqual(
      '' + pokemonFullDetail.moves.length,
    );
    expect(elementBaseExp?.textContent).toEqual(
      '' + pokemonFullDetail.base_experience,
    );

    expect(elementTypes.length).toEqual(pokemonFullDetail.types.length);
    elementTypes.forEach((elementType, i) => {
      expect(elementType.textContent).toEqual(
        pokemonFullDetail.types[i].type.name,
      );
    });
    expect(elementAbilities.length).toEqual(pokemonFullDetail.abilities.length);
    elementAbilities.forEach((elementAbility, i) => {
      expect(elementAbility.textContent).toEqual(
        pokemonFullDetail.abilities[i].ability.name,
      );
    });
  });
});
