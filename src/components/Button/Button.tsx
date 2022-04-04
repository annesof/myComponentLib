import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { transitions } from 'polished';

//https://github.com/mui-org/material-ui/issues/22452
//component's rewrite because of a bug with typescript, prop "component" is not recognized
export const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '20px',
    boxShadow: 'none',
    lineHeight: 1.65,
    padding: '3px 13px 3px 19px',
    ...transitions(['background', 'borderColor'], '250ms cubic-bezier(0.4, 0, 0.2, 1) 0s'),
  },
  outlinedSizeSmall: {
    padding: '3px 11px 3px 15px',
    borderRadius: '20px',
    margin: '0px 6px 0px 6px',
  },
  outlinedSizeLarge: {
    padding: '7px 21px 7px 25px',
    borderRadius: '20px',
  },
  containedSizeSmall: {
    padding: '3px 11px 3px 15px',
    borderRadius: '20px',
    margin: '0px 6px 0px 6px',
  },
  containedSizeLarge: {
    padding: '7px 21px 7px 25px',
    borderRadius: '20px',
  },
  iconSizeSmall: {
    '&>*:first-child': {
      fontSize: '14px',
    },
  },
  iconSizeMedium: {
    '&>*:first-child': {
      fontSize: '16px',
    },
  },
  iconSizeLarge: {
    '&>*:first-child': {
      fontSize: '18px',
    },
  },
  endIcon: {
    '&.MuiButton-iconSizeSmall': {
      marginLeft: '4px',
    },
    '&.MuiButton-iconSizeMedium': {
      marginLeft: '6px',
    },
    '&.MuiButton-iconSizeLarge': {
      marginLeft: '8px',
    },
  },
}));

export interface ButtonProps extends MuiButtonProps {
  component?: string;
  variant?: 'contained' | 'outlined';
}

export const Button = ({ children, ...props }: ButtonProps) => {
  const classes = useStyles();
  return (
    <MuiButton classes={classes} {...props}>
      {children}
    </MuiButton>
  );
};
