import { ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error: FieldError | undefined;
};

export const TextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = "text", className = "", label, error, ...other } = props;  // We are defining that type text is the default

    return (
      <div className="form-floating">
        <input
          type={type}
          className={`form-control ${className}`} //This could be a set of classes. We are using.
          placeholder={label}
          ref={ref}
          {...other}  //el resto de props que no estan destrcuturada esta en ese prop
        />
        <label>{label}</label>
        {error && (
          <div className="error-feedback">
            {error.message}
          </div>
        )}
      </div>
    );
  }
);
