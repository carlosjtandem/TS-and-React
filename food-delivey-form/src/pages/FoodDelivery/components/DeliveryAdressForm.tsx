import { useFormContext, useFormState } from "react-hook-form";
import { TextField } from "../../../controls/TextField";
import { DeliveryAdressFormType } from "../../../types";
import { useRenderCount } from "../../../hooks/useRenderCount";

// eslint-disable-next-line react-hooks/rules-of-hooks
const RenderCount = useRenderCount();
export const DeliveryAdressForm = () => {
  const { register } = useFormContext<{ address: DeliveryAdressFormType }>();

  const { errors } = useFormState<{ address: DeliveryAdressFormType }>({
    name:  "address", //With we will subscribe to the errors of the fields selected
    exact: true,
  });

  return (
    <>
      {/* div.row.mb-3*2 */}
      <RenderCount />
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
