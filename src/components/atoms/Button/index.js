import { clsxm } from "@/utils/clsxm";
import React from "react";

const Button = (
  { children, className, isLoading, variety = "primary", ...props },
  ref
) => {
  return (
    <button
      ref={ref}
      className={clsxm(
        "flex items-center justify-center",
        "h-11 w-full rounded-lg",
        variety === "primary" && "bg-primary text-text-10",
        variety === "secondary" && "bg-primary-10 text-primary",
        !isLoading && "disabled:bg-[#E0EAF4]",
        "text-center font-semibold",
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <div className="animate-spin">Loading..</div> : children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
