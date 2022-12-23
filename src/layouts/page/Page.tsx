import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Page(props: Props) {
  return (
    <div
      className={
        'flex h-screen w-full flex-col items-center justify-center bg-gray-100'
      }
    >
      {props.children}
    </div>
  );
}
