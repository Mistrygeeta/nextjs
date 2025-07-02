import Link from "next/link";
import { useRouter } from "next/router";

const Homepage = () => {
   const router = useRouter()
  return (
    <div>
      <ul>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href={{pathname: "/about"}}>Product One</Link>
      </ul>
      <button onClick={()=>{
        router.push("/products")}}>
          Click to got to products
        </button>
    </div>
  );
};

export default Homepage;