// src/global.d.ts

declare module '*.png' {
  const content: import('next/image').StaticImageData;
  export default content;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';