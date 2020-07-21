import { createStyles } from '.';
import { Spacing } from './box';
import { Black } from './color';
import { Screen } from './screen';

export const useAppStyles = createStyles({
  '@global': {
    '*': {
      margin: Spacing.Z,
      padding: Spacing.Z,
    },
    html: {
      fontSize: Spacing.Root,
      color: Black.L2,
    },
    body: {
      fontSize: Spacing.Default,
      fontFamily: 'arial',
    },
    'html, body, body > article, body > article > div': {
      height: Spacing.PER8,
    },
    h1: {
      fontSize: Spacing.H1,
    },
    h2: {
      fontSize: Spacing.H2,
    },
    h3: {
      fontSize: Spacing.H3,
    },
    h4: {
      fontSize: Spacing.H4,
    },
    h5: {
      fontSize: Spacing.H5,
    },
    h6: {
      fontSize: Spacing.H6,
    },
    [`@media screen and (max-width: ${Screen.MinWidth}px)`]: {
      html: {
        fontSize: Spacing.PM1,
      },
      body: {
        fontSize: Spacing.PM2,
      },
    },
  },
});