import { forwardRef, InputHTMLAttributes } from "react";

interface Props {
  label: string;
  name: string;
  value?: string;
}

export const Checkbox = forwardRef<
  HTMLInputElement,
  Props & InputHTMLAttributes<unknown>
>(function Checkbox({ label, name, value, ...rest }: Props, ref) {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id={`${name}-input`}
          name={name}
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          ref={ref}
          value={value}
          {...rest}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={`${name}-input`} className="font-medium text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );
});
