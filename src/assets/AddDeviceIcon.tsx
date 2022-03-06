import { SVGProps } from 'react';

function AddDeviceIcon(props: SVGProps<any>) {
  return (
    <svg fill="none" viewBox="0 0 97 97" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect height="94" width="94" rx="33.5" stroke="#74B816" strokeWidth="3" x="1.5" y="1.5" />
      <path
        d="M48.531 36.75a1.406 1.406 0 011.407 1.406v7.969h7.968a1.406 1.406 0 010 2.813h-7.968v7.968a1.406 1.406 0 01-2.813 0v-7.968h-7.969a1.406 1.406 0 010-2.813h7.969v-7.969a1.406 1.406 0 011.406-1.406z"
        fill="#74B816"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default AddDeviceIcon;
