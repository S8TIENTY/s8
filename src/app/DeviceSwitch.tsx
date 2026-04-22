import { lazy, Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DESKTOP_BREAKPOINT } from './device';
import { LoadingShell } from './LoadingShell';

const DesktopApp = lazy(async () => {
  const module = await import('../desktop/DesktopApp');
  return { default: module.DesktopApp };
});

const MobileApp = lazy(async () => {
  const module = await import('../mobile/MobileApp');
  return { default: module.MobileApp };
});

export function DeviceSwitch() {
  const isDesktop = useMediaQuery({ minWidth: DESKTOP_BREAKPOINT });

  return (
    <Suspense fallback={<LoadingShell isDesktop={isDesktop} />}>
      {isDesktop ? <DesktopApp /> : <MobileApp />}
    </Suspense>
  );
}
