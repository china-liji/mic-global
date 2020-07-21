/**
 * EM
 */
export enum EM {
  // 0.1em ~ 0.99em for S
  S1 = '0.1em',

  S2 = '0.2em',

  S3 = '0.3em',

  S4 = '0.4em',

  S5 = '0.5em',

  S6 = '0.6em',

  S7 = '0.8em',

  // 1em ~ 1.99em for M
  M1 = '1em',

  M2 = '1.2em',

  M3 = '1.3em',

  M4 = '1.4em',

  M5 = '1.5em',

  M6 = '1.6em',

  M7 = '1.8em',

  // 2em+ for L
  L1 = '2em',

  L2 = '2.4em',

  L3 = '3.6em',

  // font size of h1 ~ h6 tag
  H1 = L2,

  H2 = M7,

  H3 = M6,

  H4 = M4,

  H5 = M3,

  H6 = M2,
}

/**
 * Rem
 */
export enum REM {
  // 0.1rem ~ 0.99rem for XS
  XS1 = '0.1rem',

  XS2 = '0.2rem',

  XS3 = '0.3rem',

  XS4 = '0.4rem',

  XS5 = '0.5rem',

  XS6 = '0.6rem',

  XS7 = '0.8rem',

  // 1rem ~ 1.99rem for S
  S1 = '1rem',

  S2 = '1.2rem',

  S3 = '1.3rem',

  S4 = '1.4rem',

  S5 = '1.5rem',

  S6 = '1.6rem',

  S7 = '1.7rem',

  // 2rem ~ 4.99rem for M
  M1 = '2rem',

  M2 = '2.4rem',

  M3 = '3.2rem',

  M4 = '3.6rem',

  M5 = '4.8rem',

  // 5rem ~ 9.999rem for L
  L1 = '5.6rem',

  L2 = '6.8rem',

  L3 = '7.2rem',

  L4 = '7.6rem',

  L5 = '8rem',

  // 10rem ~ 19.99rem for XL
  XL1 = '10rem',

  XL2 = '12rem',

  XL3 = '16rem',

  XL4 = '18rem',

  // 20rem ~ 20.99rem for XXL
  XXL1 = '20rem',

  XXL2 = '26rem',

  XXL3 = '28rem',

  // 30rem ~ ?rem for XXL
  XXXL1 = '30rem',

  XXXL2 = '36rem',

  XXXL3 = '42rem',

  XXXL4 = '46rem',
}

/**
 * Pixel
 */
export enum Pixel {
  // 0.1px ~ 0.99px for S
  S1 = '1px',

  S2 = '2px',

  S3 = '3px',

  S4 = '4px',

  S5 = '5px',

  S6 = '6px',

  S7 = '8px',

  // 10px ~ 19.9px for PM
  M1 = '10px',

  M2 = '12px',

  M3 = '13px',

  M4 = '14px',

  M5 = '15px',

  M6 = '16px',

  M7 = '18px',

  // 20px+ for PL
  L1 = '20px',

  L2 = '24px',

  L3 = '36px',

  L4 = '48px',

  L5 = '60px',
}

/**
 * Percent
 */
export enum Percent {
  // golden ratio
  G1 = '38.2%',

  G2 = '61.8%',
  
  // 0% ~ 99.99% for S
  S1 = '5%',

  S2 = '10%',

  S3 = '20%',

  S4 = '25%',

  S5 = '33.33%',

  S6 = '50%',

  S7 = '66.66%',

  S8 = '75%',

  S9 = '80%',

  // 100% ~ 199% for M
  M1 = '100%',

  M2 = '120%',

  M3 = '125%',

  M4 = '150%',

  // 200%+ for L
  L1 = '200%',

  L2 = '1000%',
}

/**
 * Document font size
 */
export enum DFS {
  /**
   * Root width, usually represents font size of the 'html' element
   */
  Html = '0.715vw',

  /**
   * Default width, usually represents font size of the 'body' element
   */
  Body = '0.85vw',
}

/**
 * Border width
 */
export enum BW {
  /**
   * Only for border width
   */
  Default = '1px',
}