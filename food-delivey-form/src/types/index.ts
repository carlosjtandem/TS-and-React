export type FoodDeliveryFormType = {
  address: DeliveryAdressFormType; // This is a nested object, so I have to define the type of the address in the FoodDeliveryFormType
} & CheckoutFormType & FoodDeliveryMasterFormType; // I can use the & operator to combine multiple types into one type.

export type CheckoutFormType = {
  paymentMethod: string;
  deliveryIn: number;
};

export type FoodDeliveryMasterFormType = {
  costumerName: string;
  mobile: string;
  email: string;
  orderNo: number;
};

export type DeliveryAdressFormType = {
  streetAddress: string;
  city: string;
  state: string;
  landmark: string;
};

export type SelectOptionType =
  | { value: string; text: string }
  | { value: number; text: string }; // I can use string or number as value, so I have to define the type of the value in the SelectOptionType
