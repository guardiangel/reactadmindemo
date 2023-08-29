import React, { useState, useEffect } from "react";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/geo
import { ResponsiveChoropleth } from "@nivo/geo";
import axios from "axios";
import { useTheme } from "@mui/material";
import { colorTokens } from "../theme";
//import { geoFeatures } from '../data/geoFeature';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const GeograpyHelper = ({ isDashBoard = false }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [geographyData, setGeographyData] = useState<[]>([]);
  const [geographyFeature, setGeographyFeature] = useState<any>({});
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    //Render the whole component after getting all data from data file or datasource
    //if the data is too large, it will probably cause some undefined exception since the rendering process executes first
    //sync the get data method and use a state to forcely rendering after getting data.
    getFeatures().then((res) => setGeographyFeature(res.data));
    axios.get("/db/geographyChart.json").then((res) => {
      setGeographyData(res.data);
    });
    setIsLoading(false);
  }, []);

  const getFeatures = () => {
    return axios.get("/db/geographyFeature.json");
  };

  return (
    <>
      {!isloading && (
        <ResponsiveChoropleth
          data={geographyData}
          features={geographyFeature.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
          }}
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={isDashBoard ? 40 : 200}
          projectionTranslation={isDashBoard ? [0.49, 0.6] : [0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          borderWidth={1}
          borderColor={colors.redAccent[200]}
          legends={
            !isDashBoard
              ? [
                  {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 28,
                    itemDirection: "left-to-right",
                    itemTextColor: colors.grey[100],
                    itemOpacity: 0.85,
                    symbolSize: 28,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#ffffff",
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]
              : undefined
          }
        />
      )}
    </>
  );
};

export default GeograpyHelper;
