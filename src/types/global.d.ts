declare module '*.eot';
declare module '*.ttf';
declare module '*.otf';
declare module '*.woff';
declare module '*.woff2';
declare module '*.png';
declare module '*.jpg';
declare module '*.wav';

declare module '*.svg' {
  const content: string;
  export default content;
}
