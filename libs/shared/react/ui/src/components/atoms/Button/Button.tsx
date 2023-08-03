export interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return (
    <button className="py-4 px-8 bg-secondary dark:bg-primary rounded-full font-display font-bold">{label}</button>
  );
}

export default Button;
