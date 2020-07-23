import { createUseStyles } from 'react-jss';
import { Black } from './color';
import { UseStyles, Classes, CreateUseStyles, Options, StylesData, Styles, StylesSet } from './types';

export const createStyles = (
  (arg1: string | StylesSet, arg2?: Styles | Options, opts?: Options): UseStyles => {
    const hasOrignalClassName = typeof arg1 === 'string';
    const originalClassName = hasOrignalClassName ? arg1 as string : '';

    const originalUseStyles = createUseStyles(
      (
        hasOrignalClassName ?
          { [originalClassName]: arg2 } :
          arg1
      ) as Parameters<typeof createUseStyles>[0],
      hasOrignalClassName ? opts : arg2 as Options
    );

    const useStyles = (data?: StylesData | string, className?: string): Classes | string => {
      let styles: Classes;

      if (typeof data === 'string') {
        styles = originalUseStyles();
        className = data;
      }
      else {
        styles = originalUseStyles(data);
      }

      if (hasOrignalClassName) {
        return className ? `${styles[originalClassName]} ${className}` : styles[originalClassName];
      }

      if (className) {
        const newStyles = {} as Classes;
  
        for (const key in styles) {
          newStyles[key] = `${styles[key]} ${className}`;
        }
  
        return newStyles;
      }

      return styles;
    };

    useStyles.originalClassName = originalClassName;
    return useStyles;
  }
) as CreateUseStyles;

export function hexToRgba(color: string, opacity: number): string {
  block:
  if (color[0] === '#') {
    let red: string;
    let green: string;
    let blue: string;
    const sub = color.substring(1);

    switch (sub.length / 2) {
      // #333, #abc
      case 1.5:
        red = sub[0];
        green = sub[1];
        blue = sub[2];
        break;

      // #333333, #abcdef
      case 3:
      // #33333333, #abcdef12
      case 4:
        red = sub[0] + sub[1];
        green = sub[2] + sub[3];
        blue = sub[4] + sub[5];
        break;

      default:
        break block;
    }
    
    return `rgba(${parseInt(red, 16)},${parseInt(green, 16)},${parseInt(blue, 16)},${opacity})`;
  }

  return hexToRgba(Black.L1, opacity);
}