export interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return <button className="p-4 bg-red-500">{label}</button>;
}

export default Button;
