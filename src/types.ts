import { HTMLProps } from 'react';

export type ValueTypes = string | number | bigint | boolean | symbol | undefined;

export type ReferenceTypes = UnknownObject | UnknownFunction;

export type PrimaryTypes = ValueTypes | ReferenceTypes;

export type UnknownObject = Record<string | number | symbol, unknown>;

export interface UnknownFunction {
  (...args: unknown[]): unknown;
}

export interface DivProps extends HTMLProps<HTMLDivElement> {}

export interface SpanProps extends HTMLProps<HTMLSpanElement> {}

export type AppComponentType = HTMLDivElement | HTMLSpanElement;

export type AppComponentElementProps<T extends AppComponentType> = T extends HTMLDivElement ? DivProps : SpanProps;

export type AppComponentElementType<T extends AppComponentType> = T extends HTMLDivElement ? 'div' : 'span';

/**
 * 只允许 div 或 span 元素来封装组件 - div 用来封装块级组件，span 用来封装内联组件。
 */
export interface AppComponentElement<T extends AppComponentType> extends React.ReactElement<AppComponentElementProps<T>, AppComponentElementType<T>> {}