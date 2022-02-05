import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PageNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div className="not-found flex justify-center items-center">
      <div>
        <h1 className="text-5xl my-4">Opsss.....</h1>
        <h2 className="text-3xl text-red-400 my-4">Page not found</h2>
        <p className="text-2xl my-4">
          Go to back.....{" "}
          <Link href="/">
            <a className="px-4 py-2 border bg-yellow-400 rounded">Home</a>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
