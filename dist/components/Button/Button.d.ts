import { ButtonProps as MuiButtonProps } from "@material-ui/core";
export declare const useStyles: (props?: any) => import("@material-ui/core/styles/withStyles").ClassNameMap<"root" | "outlinedSizeSmall" | "outlinedSizeLarge" | "containedPrimary" | "iconSizeSmall" | "iconSizeMedium" | "iconSizeLarge" | "endIcon">;
export interface ButtonProps extends MuiButtonProps {
    component?: string;
}
export declare const Button: ({ children, ...props }: ButtonProps) => JSX.Element;
