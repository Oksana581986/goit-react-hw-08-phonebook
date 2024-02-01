import React, { Suspense } from 'react';
import { AppHeader } from 'components/AppHeader/AppHeader';
import { Outlet  } from 'react-router-dom';


 const Layout = () => {
  return (
    <div>
      <AppHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export { Layout };