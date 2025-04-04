export type SelectOptionType =
  | { value: string; text: string }
  | { value: number; text: string }; // I can use string or number as value, so I have to define the type of the value in the SelectOptionType
