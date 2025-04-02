import { ChangeEvent, SyntheticEvent, useState } from "react";

type FoodDeliveryFormType = {
  costumerName: string;
  mobile: string;
};

type FoodDeliveryFoodErrorType = {
  costumerName: string;
  mobile: string;
};

export default function FoodDeliveryForm() {
  const [values, setValues] = useState<FoodDeliveryFormType>({
    costumerName: "",
    mobile: "",
  });

  const [errors, setErrors] = useState<FoodDeliveryFoodErrorType>({
    costumerName: "",
    mobile: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateFormData = () => {
    const temporaryErrors: FoodDeliveryFoodErrorType = {
      costumerName: "",
      mobile: "",
    };
    if (values.costumerName == "")
      temporaryErrors.costumerName = "Customer name is required";

    if (values.mobile == "") temporaryErrors.mobile = "Mobile number is required";
    setErrors(temporaryErrors);

    return Object.values(temporaryErrors).every((x) => x == "");
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFormData()) console.log("form-data:", values);
    else console.log("Form is invalid");
    
  };
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="costumerName" //should be the same as the type
          className="form-control"
          placeholder="Customer Name"
          value={values.costumerName}
          onChange={handleInputChange}
        />
        <label>Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="mobile" //should be the same as the type
          className="form-control"
          placeholder="Mobile"
          value={values.mobile}
          onChange={handleInputChange}
        />
        <label>Mobile</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
