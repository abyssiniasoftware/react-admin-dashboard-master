import React from 'react';
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";

// Mock Data
export const mockAuthorData = [
  {
    author: "Maaza Mengiste",
    books: [
      {
        title: "Beneath the Lion's Gaze",
        totalSales: 137,
        salesColor: "hsl(229, 70%, 50%)",
      },
      {
        title: "The Shadow King",
        totalSales: 96,
        salesColor: "hsl(296, 70%, 50%)",
      },
    ],
  },
  {
    author: "Dinaw Mengestu",
    books: [
      {
        title: "The Beautiful Things That Heaven Bears",
        totalSales: 72,
        salesColor: "hsl(97, 70%, 50%)",
      },
      {
        title: "How to Read the Air",
        totalSales: 140,
        salesColor: "hsl(340, 70%, 50%)",
      },
    ],
  },
  {
    author: "Hawi Abdi",
    books: [
      {
        title: "The Will to Change",
        totalSales: 109,
        salesColor: "hsl(72, 70%, 50%)",
      },
      {
        title: "A Stranger's Touch",
        totalSales: 23,
        salesColor: "hsl(96, 70%, 50%)",
      },
    ],
  },
  {
    author: "Chinua Achebe",
    books: [
      {
        title: "Things Fall Apart",
        totalSales: 133,
        salesColor: "hsl(257, 70%, 50%)",
      },
      {
        title: "No Longer at Ease",
        totalSales: 52,
        salesColor: "hsl(326, 70%, 50%)",
      },
    ],
  },
  {
    author: "Abdulrazak Gurnah",
    books: [
      {
        title: "Paradise",
        totalSales: 81,
        salesColor: "hsl(190, 70%, 50%)",
      },
      {
        title: "Desertion",
        totalSales: 80,
        salesColor: "hsl(325, 0%, 50%)",
      },
    ],
  },
];

// Transform mock data for Nivo Bar Chart
const transformDataForBarChart = (authorData) => {
  return authorData.flatMap(author => 
    author.books.map(book => ({
      author: author.author,
      title: book.title,
      totalSales: book.totalSales,
      salesColor: book.salesColor,
    }))
  );
};

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data = transformDataForBarChart(mockAuthorData);

  return (
    <ResponsiveBar
      data={data}
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
      keys={["totalSales"]}
      indexBy="title"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Book Titles",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Sales Amount",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={true} // Enable labels
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      label={({ id, formattedValue }) => `${id}: ${formattedValue}`} // Display book name and sales amount
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={({ id, formattedValue, indexValue }) => `${id}: ${formattedValue} in book: ${indexValue}`}
    />
  );
};

export default BarChart;
