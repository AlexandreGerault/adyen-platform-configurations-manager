import { ButtonHTMLAttributes, forwardRef } from "react";

const Colors = {
  red: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
  purple: "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
};

interface Props {
  color?: "red" | "purple";
}
export const Button = forwardRef<
  HTMLButtonElement,
  Props & ButtonHTMLAttributes<unknown>
>(function Button({ children, className, color = "purple", ...rest }, ref) {
  return (
    <button
      {...rest}
      ref={ref}
      className={`inline-flex items-center px-2.5 py-1.5 border focus:outline-none focus:ring-2 focus:ring-offset-2 border-transparent text-xs font-medium rounded shadow-sm ${Colors[color]} ${className}`}
    >
      {children}
    </button>
  );
});
