import { createUseStyles } from 'react-jss';
import { Styles as JssStyles } from 'jss';
import { UnknownFunction, UnknownObject } from '../types';

export type Classes = ReturnType<ReturnType<typeof createUseStyles>>;

export type Styles = JssStyles | ((...args: unknown[]) => JssStyles);

export type StylesSet = Parameters<typeof createUseStyles>[0];

export type Options = Parameters<typeof createUseStyles>[1];

export type StylesData = unknown[] | UnknownObject | UnknownFunction;

export interface UseStyles<T = string | Classes> {
  (className?: string): T;
  (data?: StylesData): T;
  (data?: StylesData, className?: string): T;

  originalClassName?: string;
}

export interface CreateUseStyles {
  (originalClassName: string, styles: Styles, options?: Options): UseStyles<string>;
  (styles: StylesSet, options?: Options): UseStyles<Classes>;
}