import App from './App';
import { ResetCSS } from './global/resetCSS';
import GitProvider from './providers/git-provider';

const Providers = () => {
  return (
    <main>
      <GitProvider>
        <ResetCSS />
        <App />
      </GitProvider>
    </main>
  );
};

export default Providers;
