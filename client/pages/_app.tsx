import "@/assets/styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "provider/auth_provider/auth_provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
