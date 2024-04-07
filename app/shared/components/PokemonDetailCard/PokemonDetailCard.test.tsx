import { render, screen } from "@testing-library/react";
import { PokemonDetailCard } from "./PokemonDetailCard";
import { PokemonShortDetailAPIType } from "@/app/types";
import { expect } from '@jest/globals';

describe("<PokemonDetialCard />", function () {
  it("should display the Pokemon name", function () {
    const pokemon: PokemonShortDetailAPIType = {
      pokemon: { name: "venusaur", url: "" },
    };
    const { container } = render(<PokemonDetailCard pokemon={pokemon} />);
    const content = container.querySelectorAll(
      '[data-test-id="PokemonDetailCard-CardContent"]'
    );

    expect(content.length).toEqual(1);
    expect(content[0].textContent).toEqual("Venusaur");
  });

  it("should display the Pokemon name", function () {
    const pokemon: PokemonShortDetailAPIType = {
      pokemon: { name: "charizard", url: "" },
    };
    const { container } = render(<PokemonDetailCard pokemon={pokemon} />);
    const content = container.querySelectorAll(
      '[data-test-id="PokemonDetailCard-CardContent"]'
    );

    expect(content.length).toEqual(1);
    expect(content[0].textContent).toEqual("Charizard");
  });

  it("should display the Pokemon name", function () {
    const pokemon: PokemonShortDetailAPIType = {
      pokemon: { name: "blastoise", url: "" },
    };
    const { container } = render(<PokemonDetailCard pokemon={pokemon} />);
    const content = container.querySelectorAll(
      '[data-test-id="PokemonDetailCard-CardContent"]'
    );

    expect(content.length).toEqual(1);
    expect(content[0].textContent).toEqual("Blastoise");
  });
});
