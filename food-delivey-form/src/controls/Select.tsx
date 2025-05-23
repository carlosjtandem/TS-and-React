import { ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { SelectOptionType } from "../types";

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  // I got this information from the definition of the select
  label: string;
  error: FieldError | undefined;
  options: SelectOptionType[];
};

export const Select = forwardRef(
  (props: SelectFieldProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { className = "", label, options, error, ...other } = props;

    return (
      <div className="form-floating">
        <select
          className={`form-select ${className}`} //to add another classes, default is form-select
          ref={ref}
          {...other}
        >
          {options.map((x, index) => (
            <option key={index} value={typeof x == "string" ? x : x.value}>
              {typeof x == "string" ? x : x.text}
            </option>
          ))}
        </select>
        <label>{label}</label>
        {error && <div className="error-feedback">{error.message}</div>}
      </div>
    );
  }
);
