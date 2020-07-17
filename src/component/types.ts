import { HTMLProps } from 'react';

export type ComponentProps<E extends HTMLElement = HTMLElement> = HTMLProps<E>;

export type BlockComponentProps<T extends string = never> = {
  [K in keyof ComponentProps<HTMLDivElement>]?: K extends T ? unknown : ComponentProps<HTMLDivElement>[K];
}

export type InlineComponentProps<T extends string = never> = {
  [K in keyof ComponentProps<HTMLSpanElement>]?: K extends T ? unknown : ComponentProps<HTMLSpanElement>[K];
}