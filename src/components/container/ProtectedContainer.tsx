import { useAuth } from "@/context/AuthContext";
import { getAccessToken } from "@/lib/utils";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const ProtectedContainer: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token  = getAccessToken()
    if (!token) {
      sessionStorage.setItem("redirectUrl", router.asPath);
      router.push("/auth/login");
    }
  }, [ router]);
  return <div>{children}</div>;
};

export default ProtectedContainer;
