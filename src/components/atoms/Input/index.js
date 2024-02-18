"use client";

import { clsxm } from "@/utils/clsxm";
import React, { useCallback, forwardRef } from "react";

const Input = forwardRef(
  ({
    error,
    className,
    onChangeText,
    type = "text",
    disclaimer,
    disclaimerClassName,
    ...props
  }) => {
    const handleChange = useCallback(
      (e) => {
        if (onChangeText) onChangeText(e.target.value);
        if (props.onChange) props.onChange(e);
      },
      [onChangeText, props]
    );

    return (
      <div className={clsxm("relative", className)}>
        <label className="text-base text-secondary font-semibold">
          <span>{props.label}</span>
        </label>
        <input
          {...props}
          type={type}
          className={clsxm(
            "text-sm",
            "rounded-lg h-[60px] w-full bg-input px-4",
            "disabled:text-text-70 disabled:bg-primary-10",
            "border-primary border",
            error && "bg-error-10"
          )}
          onChange={handleChange}
        />
        <div className="mt-0.5 pl-4">
          <p
            className={clsxm(
              "text-error text-xs",
              disclaimer && "text-text-50",
              disclaimerClassName
            )}
          >
            {error || disclaimer}
          </p>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
