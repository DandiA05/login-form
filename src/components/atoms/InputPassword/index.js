"use client";

import IconEyeOff from "@/asset/IconEyeOff";
import IconEyeOn from "@/asset/IconEyeOn";
import { clsxm } from "@/utils/clsxm";

import React, { useCallback, useState, forwardRef } from "react";

const InputPassword = forwardRef(
  ({ className, error, onChangeText, disclaimer, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = useCallback(() => {
      setVisible((prev) => !prev);
    }, []);

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
          ref={ref}
          className={clsxm(
            "text-sm text-text-100",
            "rounded-xl h-[60px] w-full bg-input px-4 peer",

            "border-primary border",
            error && "bg-error-10"
          )}
          type={visible ? "text" : "password"}
          onChange={handleChange}
        />

        <div className="mt-0.5 pl-4">
          <p
            className={clsxm(
              "text-error text-xs",
              disclaimer && "text-text-50"
            )}
          >
            {error || disclaimer}
          </p>
        </div>
        <button
          className={clsxm("absolute right-4 top-10")}
          type="button"
          onClick={toggleVisible}
        >
          {visible ? <IconEyeOn /> : <IconEyeOff />}
        </button>
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";

export default InputPassword;
