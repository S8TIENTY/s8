import { App as AntApp, ConfigProvider } from 'antd';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BackgroundVideo } from './BackgroundVideo';
import { DeviceSwitch } from './DeviceSwitch';
import { antTheme } from './theme';

const defaultAppRoute = '/vi/gioi-thieu';

function FallbackEntry() {
  return <Navigate replace to="/" />;
}

export function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={antTheme}>
        <AntApp>
          <BackgroundVideo />
          <Routes>
            <Route element={<DeviceSwitch />} path="/" />
            <Route element={<DeviceSwitch />} path={defaultAppRoute} />
            <Route element={<FallbackEntry />} path="*" />
          </Routes>
        </AntApp>
      </ConfigProvider>
    </BrowserRouter>
  );
}
