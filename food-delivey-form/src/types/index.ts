export type FoodDeliveryFormType = {
  address: DeliveryAdressFromType; // This is a nested object, so I have to define the type of the address in the FoodDeliveryFormType
} & CheckoutFormType & FoodDeliveryMasterType; // I can use the & operator to combine multiple types into one type.

type CheckoutFormType = {
  paymentMethod: string;
  deliveryIn: number;
};

export type DeliveryAdressFromType = {
  streetAddress: string;
  city: string;
  state: string;
  landmark: string;
};

export type FoodDeliveryMasterType = {
  costumerName: string;
  mobile: string;
  email: string;
  orderNo: number;
};

export type SelectOptionType =
  | { value: string; text: string }
  | { value: number; text: string }; // I can use string or number as value, so I have to define the type of the value in the SelectOptionType
