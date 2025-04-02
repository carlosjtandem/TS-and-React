import { ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {  // I got this information from the definition of the select
  label: string;
  error: FieldError | undefined;
};

export const Select = forwardRef(
  (props: SelectFieldProps, ref: ForwardedRef<HTMLSelectElement>) => {
    // const { type = "text", className = "", label, error, ...other } = props;  // We are defining that type text is the default

    return (
      <div className="form-floating">
       test
      </div>
    );
  }
);
