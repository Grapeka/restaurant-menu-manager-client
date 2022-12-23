import React from 'react';
import SideBar from '../../components/sideBar/SideBar';

type Props = {
  children: React.ReactNode;
};

export default function AppPage(props: Props) {
  return (
    <div
      className={
        'flex h-screen w-screen flex-row items-center overflow-hidden bg-gray-100'
      }
    >
      <SideBar />
      <div
        className={
          'flex h-full w-4/5 flex-col items-center justify-start bg-gray-500'
        }
      >
        {props.children}
      </div>
    </div>
  );
}
