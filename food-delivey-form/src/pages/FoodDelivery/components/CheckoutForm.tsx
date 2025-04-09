import { useFormContext, useFormState } from "react-hook-form";
import { Select } from "../../../controls/Select";
import { CheckoutFormType, SelectOptionType } from "../../../types";
import { useRenderCount } from "../../../hooks/useRenderCount";

const paymentsOptions: SelectOptionType[] = [
  { value: "", text: "Select" },
  { value: "online", text: "Paid online" },
  { value: "COD", text: "Cash on delivery" },
];

const deliveryInOptions: SelectOptionType[] = [
  { value: 0, text: "Select" },
  { value: 30, text: "30 minutes" }, // In this case the value is a number, so I have to define the type of the value in the SelectOptionType
  { value: 60, text: "1 hour" },
  { value: 120, text: "2 hours" },
];

export const CheckoutForm = () => {
  const {
    register,
  } = useFormContext<CheckoutFormType>(); // This hook is used to access the form context, so I can use the methods of the form in the child components.

  const RenderCount = useRenderCount();
  
  const { errors } = useFormState<CheckoutFormType>({
    name: ["paymentMethod", "deliveryIn"],
  });
  return (
    <>
     <RenderCount />
      <div className="text-start fw-bold mt-4 mb-2">Checkout details</div>
      <div className="row mb-2">
        <div className="col">
          <Select
            label="Payment method"
            options={paymentsOptions}
            {...register("paymentMethod", {
              required: "This field is required",
            })}
            error={errors.paymentMethod}
          />
        </div>

        <div className="col">
          <Select
            label="Delivery time"
            options={deliveryInOptions}
            {...register("deliveryIn", {
              required: "This field is required",
            })}
            error={errors.deliveryIn}
          />
        </div>
      </div>
    </>
  );
};
