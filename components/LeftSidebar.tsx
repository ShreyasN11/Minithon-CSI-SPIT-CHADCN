"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";



const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className='custom-scrollbar leftsidebar'>

    </section>
  );
};

export default LeftSidebar;