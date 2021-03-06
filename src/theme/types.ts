import { createUseStyles } from 'react-jss';
import { JssStyle } from 'jss';
import { UnknownFunction, UnknownObject } from '../types';

export type Classes = ReturnType<ReturnType<typeof createUseStyles>>;

export type Style = JssStyle;

export type Styles = Parameters<typeof createUseStyles>[0];

export type Options = Parameters<typeof createUseStyles>[1];

export type StylesData = unknown[] | UnknownObject | UnknownFunction;

export interface CreateStyle {
  (...args: unknown[]): JssStyle;
}

export interface UseStyles<T = string | Classes> {
  (className?: string): T;
  (data?: StylesData): T;
  (data?: StylesData, className?: string): T;

  originalClassName?: string;
}

export interface CreateUseStyles {
  (originalClassName: string, style: Style | CreateStyle, options?: Options): UseStyles<string>;
  (styles: Styles, options?: Options): UseStyles<Classes>;
}