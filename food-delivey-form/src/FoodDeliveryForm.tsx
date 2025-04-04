import {
  FormProvider,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { TextField } from "./controls/TextField";
import { CheckoutForm } from "./CheckoutForm";
import { FoodDeliveryFormType } from "./types";

export const FoodDeliveryForm = () => {
  const methods: UseFormReturn<FoodDeliveryFormType> =
    useForm<FoodDeliveryFormType>({
      mode: "onChange",
      criteriaMode: "all",
      defaultValues: {
        orderNo: new Date().valueOf(),
        costumerName: "",
        mobile: "",
        email: "",
        paymentMethod: "",
        deliveryIn: 0,
        address: {
          streetAddress: "",
          city: "",
          state: "",
          landmark: "",
        },
      },
    }); // register: conecta los inputs al formulario, handleSubmit: Maneja el envío del formulario.

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

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
          <TextField
            error={undefined}
            disabled
            label="·Order No."
            {...register("orderNo")}
          />
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
      <div>List of ordered food items</div>
      <FormProvider {...methods}>
        {" "}
        {/*WE are defining the methods in the FormProvider, so we can use it in the CheckoutForm component. */}
        <CheckoutForm />
      </FormProvider>

      {/* div.row.mb-3*2 */}
      <div className="text-start fw-bold mt-4 mb-2">Delivery Address</div>
      <div className="row mb-3">
        <div className="col">
          <TextField
            label="Street address"
            {...register("address.streetAddress", {
              required: "Street address is mandatory",
            })}
            error={errors.address?.streetAddress}
          />
        </div>

        <div className="col">
          <TextField
            label="City"
            {...register("address.city", {
              required: "City is mandatory",
            })}
            error={errors.address?.city}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <TextField
            label="State"
            {...register("address.state", {
              required: "State is mandatory",
            })}
            error={errors.address?.state}
          />
        </div>
        <div className="col">
          <TextField
            label="Landmark"
            {...register("address.landmark", {
              required: "Landmark is mandatory",
            })}
            error={errors.address?.landmark}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
