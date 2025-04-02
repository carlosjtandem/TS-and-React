import { Form, useForm } from "react-hook-form";

type FoodDeliveryFormType = {
  costumerName: string;
  mobile: string;
  email: string;
};

export default function FoodDeliveryForm() {
  const { register, handleSubmit, formState } = useForm<FoodDeliveryFormType>({
     mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      costumerName: "DefaultVAlue",
      mobile: "8383",
      email: "",
    },
  }); // register: conecta los inputs al formulario, handleSubmit: Maneja el envío del formulario.

  const onSubmit = (formData: FoodDeliveryFormType) => {
    console.log("form-data:", formData);
  };

  const onError = (errors) => {
    console.log("validation errors", errors);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Customer Name"
          {...register("costumerName", {
            required: "Customer name is required",
          })}
        />
        <label>Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Mobile"
          {...register("mobile", {
            minLength: { value: 5, message: "min length should be 5" },
            required: { value: true, message: "Mobile is required" },
          })}
        />
        <label>Mobile</label>
        {formState.errors.mobile && (
          <div className="error-feedback">{formState.errors.mobile?.message}</div>
        )}
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email",
            },
            required: true,
          })}
        />
        <label>Email</label>
        {formState.errors.email && (
          <div className="error-feedback">{formState.errors.email?.message}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
