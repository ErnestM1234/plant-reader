// This file is a modified version of the react-chartkick types to satisfy the
// type checker.
declare module "react-chartkick" {
  import { ComponentType } from "react";

  interface ChartOptions {
    width?: string;
    height?: string;
    colors?: string[];
    min?: number;
    max?: number;
    suffix?: string;
    prefix?: string;
    thousands?: string;
    decimal?: string;
    messages?: { empty?: string };
    library?: object;
    [key: string]: unknown;
  }

  interface ChartProps extends ChartOptions {
    data:
      | Record<string, number>
      | Array<[string, number]>
      | Array<{ name: string; data: Record<string, number> }>;
    id?: string;
    xtitle?: string;
    ytitle?: string;
    title?: string;
  }

  export const LineChart: ComponentType<ChartProps>;
  export const PieChart: ComponentType<ChartProps>;
  export const ColumnChart: ComponentType<ChartProps>;
  export const BarChart: ComponentType<ChartProps>;
  export const AreaChart: ComponentType<ChartProps>;
}
