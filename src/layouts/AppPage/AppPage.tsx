import React from 'react';

type AppPageProps = {
  children: React.ReactNode;
};

export default function AppPage(props: AppPageProps) {
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
