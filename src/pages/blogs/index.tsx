import { useAuth } from "@/context/AuthContext";
import { getPosts } from "@/services";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Page = () => {
  const { logout,user } = useAuth();
  const router = useRouter()

  const fetchPosts =async () =>{
    const Posts = await getPosts();

  }
  useEffect(()=>{
    fetchPosts()
  })
  const handleClick = () => {
    logout();
    router.push("auth/login")
  };
  return (
    <div>
        <h1>
            {user?.email}
        </h1>
      <button onClick={handleClick} className="p-4 w-4">logout</button>
    </div>
  );
};

export default Page;
