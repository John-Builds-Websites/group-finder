import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
	className?: string;
	children?: ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
	return (
		<div
			className={cn(
				"container",
				className,
			)}
		>
			{children}
		</div>
	);
}