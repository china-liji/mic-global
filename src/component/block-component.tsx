import React from 'react';
import { BlockComponentProps } from './types';

export function BlockComponent(props: BlockComponentProps): React.ReactElement {
  return <div {...props} />;
}