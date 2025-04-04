import { useForm } from "react-hook-form";
import { TextField } from "./controls/TextField";
import { Select } from "./controls/Select";
import { SelectOptionType } from "./types";

type FoodDeliveryFormType = {
  costumerName: string;
  mobile: string;
  email: string;
  orderNo: number;
  paymentMethod: string;
  deliveryIn: number;
};

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

export default function FoodDeliveryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      orderNo: new Date().valueOf(),
      costumerName: "",
      mobile: "",
      email: "",
      paymentMethod: "",
      deliveryIn: 0,
    },
  }); // register: conecta los inputs al formulario, handleSubmit: Maneja el envío del formulario.

  const onSubmit = (formData: FoodDeliveryFormType) => {
    console.log("form-data:", formData);
  };

  const onError = (errors: unknown) => {
    console.log("validation errors", errors);
  };
  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {/* Reusable component */}
      <div className="row mb-2">
        <div className="col">
          <TextField disabled label="·Order No." {...register("orderNo")} />
        </div>

        <div className="col">
          <TextField
            label="Mobile"
            {...register("mobile", {
              minLength: { value: 9, message: "min length should be 9" },
              maxLength: { value: 9, message: "min length should be 9" },
              required: "This field is required.",
            })}
            error={errors.mobile}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <TextField
            label="Customer Name"
            {...register("costumerName", {
              required: "Customer name is required",
            })}
            error={errors.costumerName}
          />
        </div>
        <div className="col">
          <TextField
            label="Email"
            // placeholder="Email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Incorrect email format.",
              },
              validate: {
                notFake: (value) => {
                  return value != "email@gmail.com" || "This email is block";
                  // if (value == "email@gmail.com") return "This email is block";
                  // else return true;
                },
              },
              required: true,
            })}
            error={errors.email}
          />
        </div>
      </div>
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

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
