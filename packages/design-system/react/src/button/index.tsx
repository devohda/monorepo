import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

const Button = ({ label, ...props }: ButtonProps) => {
	return <button {...props}>{label}</button>;
};

export default Button;
