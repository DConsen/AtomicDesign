export interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return <button className="p-4 bg-secondary dark:bg-primary rounded-full font-display font-bold">{label}</button>;
}

export default Button;
