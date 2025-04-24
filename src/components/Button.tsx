"use client"
import { twMerge } from "tailwind-merge"

type Props = React.ComponentProps<"button"> & {}
const Button: React.FC<Props> = ({ className, ...props }) => {
	return <button {...props} className={twMerge("rounded-lg bg-blue-500 px-4 py-2 text-white", className)} />
}

export default Button
