type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isSubmitting?: boolean;
};
export const SubmitButton = (props: SubmitButtonProps) => {
  const {
    isSubmitting = undefined,
    className = "btn-light",
    value,
    ...other
  } = props; // We are defining that type text is the default
  return (
    <button
      type="submit"
      className={`btn ${className}`}
      disabled={isSubmitting == undefined ? false : isSubmitting}
      {...other} //el resto de props que no estan destrcuturada esta en ese prop
    >
      {isSubmitting === undefined || isSubmitting === false ? (
        value
      ) : (
        <>
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span role="status" className="ms-1">
            {value}
          </span>
        </>
      )}
    </button>
  );
};
