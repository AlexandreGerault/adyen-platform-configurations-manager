import { forwardRef, InputHTMLAttributes } from "react";

interface Props {
  name: string;
  label: string;
  required: boolean;
}

export const Input = forwardRef<
  HTMLInputElement,
  Props & InputHTMLAttributes<unknown>
>(function Input({ name, label, type, required = false, ...rest }, ref) {
  return (
    <>
      <label
        htmlFor={`${name.toLowerCase()}-input`}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          ref={ref}
          id={`${name.toLowerCase()}-input`}
          name={name}
          type={type}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          required={required}
          {...rest}
        />
      </div>
    </>
  );
});
