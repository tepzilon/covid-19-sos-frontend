import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/register");
  }, []);

  return <></>;
};

export default Home;
