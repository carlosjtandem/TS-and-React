import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { CheckoutForm } from "./components/CheckoutForm";
import { FoodDeliveryFormType } from "../../types";
import { DeliveryAdressForm } from "./components/DeliveryAdressForm";
import { FoodDeliveryMaster } from "./components/FoodDeliveryMaster";
import { SubmitButton } from "../../controls/SubmitButton";

//This is an standalone component, so I can use it in other components.
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
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (formData: FoodDeliveryFormType) => {
    //Timeout with async function to simulate a server request.
    await new Promise((resolve) => setTimeout(resolve, 2000));

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

      <div>List of ordered food items</div>
      <FormProvider {...methods}>
        {/*WE are defining the methods in the FormProvider, so we can use it in the CheckoutForm component. */}
        <FoodDeliveryMaster />
        <CheckoutForm />
        <DeliveryAdressForm />
      </FormProvider>

      <SubmitButton
        value="Submit"
        className="btn-primary"
        isSubmitting={isSubmitting} //isSubmitting: is a boolean that indicates if the form is being submitted or not.
      />
    </form>
  );
};
