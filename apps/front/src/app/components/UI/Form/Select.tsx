import { forwardRef, ReactNode, SelectHTMLAttributes } from "react";

interface Props {
  label: string;
  name: string;
  defaultValue?: string;
  options?: Array<{ value: string; label: string }>;
  children?: ReactNode;
}

function Options({
  options,
  children,
}: {
  options?: Props["options"];
  children?: Props["children"];
}) {
  if (options) {
    return (
      <>
        {options?.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </>
    );
  }

  return <>{children}</>;
}

export const Select = forwardRef<
  HTMLSelectElement,
  Props & SelectHTMLAttributes<unknown>
>(function Select(
  { label, name, defaultValue, options, children, ...rest }: Props,
  ref
) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue={defaultValue}
        {...rest}
        ref={ref}
      >
        <Options options={options}>{children}</Options>
      </select>
    </div>
  );
});
