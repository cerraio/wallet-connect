import { ComponentPropsWithoutRef } from "react";
import { FunctionComponent } from "react";
interface Props extends ComponentPropsWithoutRef<"button"> {
    readonly iconLeft?: string;
    readonly iconRight?: string;
    readonly isFullWidth?: boolean;
    readonly isInverted?: boolean;
}
declare const Button: FunctionComponent<Props>;
export default Button;
