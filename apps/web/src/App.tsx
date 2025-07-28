import type { JSX } from 'react';

import ErrorFallback from '@/containers/Error/Error';
import { logError } from '@/sentry/logError';
import * as Sentry from '@sentry/react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { LanguageProvider } from '@/LanguageProvider';
import 'react-toastify/dist/ReactToastify.css';

import AuthContext from './AuthContext';
import Routes from './routes';
import './i18n';

function App(): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      <AuthContext.Provider>
        <BrowserRouter>
          <LanguageProvider>
            <Routes />
          </LanguageProvider>
          <ToastContainer />
        </BrowserRouter>
      </AuthContext.Provider>
    </ErrorBoundary>
  );
}

export default Sentry.withProfiler(App);
