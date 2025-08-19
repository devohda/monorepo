import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const Input = ({ label, ...props }: InputProps) => {
	return <input {...props} />;
};

export default Input;
