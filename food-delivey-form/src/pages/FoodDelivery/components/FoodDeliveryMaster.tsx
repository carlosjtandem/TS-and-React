import { useFormContext } from "react-hook-form";
import { TextField } from "../../../controls/TextField";
import { FoodDeliveryMasterType } from "../../../types";

export const FoodDeliveryMaster = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FoodDeliveryMasterType>();
  return (
    <>
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
    </>
  );
};
