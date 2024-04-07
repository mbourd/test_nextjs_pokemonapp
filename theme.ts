"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme(
  deepmerge(
    {
      palette: {
        mode: "light",
      },
      typography: {
        fontFamily: roboto.style.fontFamily,
      },
      components: {},
    },
    {
      pokemon: {
        categories: {
          colors: {
            fire: "#E62829",
            normal: "#FFFFFF",
            fighting: "#FF8000",
            water: "#2980EF",
            flying: "#81B9EF",
            grass: "#3FA129",
            poison: "#9141CB",
            electric: "#FAC000",
            ground: "#915121",
            psychic: "#EF4179",
            rock: "#AFA981",
            ice: "#3DCEF3",
            bug: "#91A119",
            dragon: "#5060E1",
            ghost: "#704170",
            dark: "#624D4E",
            steel: "#60A1B8",
            fairy: "#EF70EF",
            stellar: "#44628D",
            unknown: "#FFFFFF",
            shadow: "#68A090"
          },
        },
      },
    }
  )
);

export default theme;
