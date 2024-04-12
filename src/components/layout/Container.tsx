import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
    className?: string;
    children: ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
    return (
        <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px20 ",className) }>
        {children}
        </div>
    );
}