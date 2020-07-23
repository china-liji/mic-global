import { createStyles } from '.';
import { Percent, EM, Pixel, DFS } from './length';
import { Black } from './color';
import { Screen } from './screen';

export const useAppStyles = createStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
    },
    html: {
      fontSize: DFS.Html,
      color: Black.L2,
    },
    body: {
      fontSize: DFS.Body,
      fontFamily: 'arial',
    },
    'html, body, body > article': {
      height: Percent.M1,
    },
    h1: {
      fontSize: EM.H1,
    },
    h2: {
      fontSize: EM.H2,
    },
    h3: {
      fontSize: EM.H3,
    },
    h4: {
      fontSize: EM.H4,
    },
    h5: {
      fontSize: EM.H5,
    },
    h6: {
      fontSize: EM.H6,
    },
    [`@media screen and (max-width: ${Screen.MinWidth}px)`]: {
      html: {
        fontSize: Pixel.M1,
      },
      body: {
        fontSize: Pixel.M2,
      },
    },
  },
});