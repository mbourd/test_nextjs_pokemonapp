import { getRandomNumberBetween } from "@/app/packages/helpers/getRandomNumberBetween";
import { PokemonFullDetailAPIType } from "@/app/types";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";
import * as React from "react";

type GridItemPokemonChartPropsType = {
  pokemon?: PokemonFullDetailAPIType;
};

const ApexChartNoSSR = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const GridItemPokemonChart: React.FC<GridItemPokemonChartPropsType> = ({
  pokemon,
}) => {
  const [statsName, setStatsName] = React.useState<string[]>([]);
  const [series, setSeries] = React.useState<
    { name: string; data: number[] }[]
  >([]);
  const options = React.useMemo(
    () => ({
      chart: {
        id: "basic-graph",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: statsName,
      },
    }),
    [statsName]
  );

  React.useEffect(() => {
    if (pokemon) {
      if (pokemon?.stats) {
        setStatsName(
          pokemon.stats.map((stat) => {
            return stat?.stat?.name ?? "";
          })
        );
        setSeries((series) => {
          const serie = {
            name: "Basic stat",
            data: pokemon.stats.map((stat) => {
              return stat?.base_stat ?? 0;
            }),
          };

          return [serie];
        });
      }
    }
  }, [pokemon]);

  return (
    <Grid
      item
      xs={5}
      md={5}
      lg={5}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <ApexChartNoSSR
        className="pokemon-chart"
        type="radar"
        options={options}
        series={series}
        width={"800px"}
        height={"500px"}
      />
    </Grid>
  );
};

export { GridItemPokemonChart };
