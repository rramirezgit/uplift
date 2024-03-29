declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module 'styled-components';

declare module '*.png' {
  const value: any;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}
