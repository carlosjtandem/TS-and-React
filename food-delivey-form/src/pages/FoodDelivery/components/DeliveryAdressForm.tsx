import { useFormContext } from "react-hook-form";
import { TextField } from "../../../controls/TextField";
import { DeliveryAdressFromType } from "../../../types";

export const DeliveryAdressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ address: DeliveryAdressFromType }>();
  return (
    <>
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
    </>
  );
};
