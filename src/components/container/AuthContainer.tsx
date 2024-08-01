import { useAuth } from "@/context/AuthContext";
import { getAccessToken } from "@/lib/utils";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type props = {
  children: React.ReactNode;
};
const AuthContainer: React.FC<props> = (props) => {
    const router = useRouter();
  
    useEffect(() => {
        const token  = getAccessToken()

        if (token && router.pathname.startsWith("/auth")) {
            router.push("/blogs");
          }
    }, [router]);
    return <div>{props.children}</div>;
};

export default AuthContainer;
