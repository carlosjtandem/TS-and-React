export type FoodDeliveryFormType = {
  costumerName: string;
  mobile: string;
  email: string;
  orderNo: number;
  address: {
    streetAddress?: string;
    city?: string;
    state?: string;
    landmark?: string;
  };
} & CheckoutFormType;

type CheckoutFormType = {
  paymentMethod: string;
  deliveryIn: number;
};

export type SelectOptionType =
  | { value: string; text: string }
  | { value: number; text: string }; // I can use string or number as value, so I have to define the type of the value in the SelectOptionType
