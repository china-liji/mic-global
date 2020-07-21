// 1rem 为正常的 10px
export enum Spacing {
  /**
   * 基础空间大小，一般用于 root rem，即 html 的 font-size
   */
  Root = '0.715vw',

  /**
   * 默认空间大小，一般用于定义 body 的 font-size
   */
  Default = '0.85vw',

  /**
   * 零
   */
  Z = '0',

  /**
   * 仅用于 1px 的边框宽度
   */
  BW = '1px',

  // 0.1em ~ 0.99em 为 ES
  ES1 = '0.2em',

  ES2 = '0.4em',

  ES3 = '0.6em',

  ES4 = '0.8em',

  // 1rem ~ 1.99rem 为 E
  E1 = '1em',

  E2 = '1.2em',

  E3 = '1.3em',

  E4 = '1.4em',

  E5 = '1.5em',

  E6 = '1.6em',

  E7 = '1.8em',

  E8 = '2em',

  E9 = '2.4em',

  // H1 ~ H6 标签字体大小
  H1 = E9,

  H2 = E7,

  H3 = E6,

  H4 = E4,

  H5 = E3,

  H6 = E2,

  // 0.1rem ~ 0.99rem 为 RXS
  RXS1 = '0.2rem',

  RXS2 = '0.3rem',

  RXS3 = '0.5rem',

  RXS4 = '0.6rem',

  RXS5 = '0.8rem',

  // 1rem ~ 1.99rem 为 RS
  RS1 = '1rem',

  RS2 = '1.2rem',

  RS3 = '1.4rem',

  RS4 = '1.6rem',

  RS5 = '1.8rem',

  // 2rem ~ 4.99rem 为 RM
  RM1 = '2rem',

  RM2 = '2.4rem',

  RM3 = '3.2rem',

  RM4 = '3.6rem',

  RM5 = '4.8rem',

  // 5rem ~ 9.999rem 为 RL
  RL1 = '5.6rem',

  RL2 = '6.8rem',

  RL3 = '7.2rem',

  RL4 = '7.6rem',

  RL5 = '8rem',

  // 10rem ~ 19.99rem 为 RXL
  RXL1 = '10rem',

  RXL2 = '12rem',

  RXL3 = '16rem',

  RXL4 = '18rem',

  // 20rem ~ 20.99rem 为 RXXL
  RXXL1 = '20rem',

  RXXL2 = '26rem',

  RXXL3 = '28rem',

  // 30rem ~ ?rem 为 RXXL
  RXXXL1 = '30rem',

  RXXXL2 = '36rem',

  RXXXL3 = '42rem',

  RXXXL4 = '46rem',

  // 像素值
  P1 = '12px',

  P2 = '13px',

  P3 = '14px',

  P4 = '16px',

  P5 = '18px',

  P6 = '24px',

  P7 = '36px',

  P8 = '48px',

  P9 = '60px',

  // 黄金比例
  G1 = '38.2%',

  G2 = '61.8%',
  
  // 百分比
  PER1 = '5%',

  PER2 = '10%',

  PER3 = '20%',

  PER4 = '25%',

  PER5 = '50%',

  PER6 = '75%',

  PER7 = '80%',

  PER8 = '100%',

  PER9 = '120%',

  PER10 = '125%',

  PER11 = '150%',

  PER12 = '200%',

  PER13 = '1000%',
}