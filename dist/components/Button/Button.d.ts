import { ButtonProps as MuiButtonProps } from "@material-ui/core";
export declare const useStyles: (props?: any) => import("@material-ui/core/styles/withStyles").ClassNameMap<"root" | "outlinedSizeSmall" | "outlinedSizeLarge" | "containedSizeSmall" | "containedSizeLarge" | "iconSizeSmall" | "iconSizeMedium" | "iconSizeLarge" | "endIcon">;
export interface ButtonProps extends MuiButtonProps {
    component?: string;
    variant?: "contained" | "outlined";
}
export declare const Button: ({ children, ...props }: ButtonProps) => JSX.Element;
