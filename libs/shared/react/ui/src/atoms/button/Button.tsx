export interface ButtonProps {
    label: string;
}

// Trigger build
export function Button({ label }: ButtonProps) {
    return <button className="p-4 bg-secondary rounded-full font-display font-bold">{label}</button>;
}

export default Button;
