import AuthContainer from "@/components/container/AuthContainer";
import ProtectedContainer from "@/components/container/ProtectedContainer";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthPage = router.pathname.startsWith("/auth");
  const isProtectedPage = router.pathname.startsWith("/blogs");

  return (
    <AuthProvider>
      {isAuthPage ? (
        <AuthContainer>
          <Component {...pageProps} />
        </AuthContainer>
      ) : isProtectedPage ? (
        <ProtectedContainer>
          <Component {...pageProps} />
        </ProtectedContainer>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}
