import { useForm } from "react-hook-form";

type FoodDeliveryFormType = {
  costumerName: string;
  mobile: string;
};

export default function FoodDeliveryForm() {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>();

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
            required: "Mobile is required",
          })}
        />
        <label>Mobile</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
