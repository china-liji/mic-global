import React from 'react';
import { InlineComponentProps } from './types';

export function InlineComponent(props: InlineComponentProps): React.ReactElement {
  return <span {...props} />;
}