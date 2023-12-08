"use client";

import { usePathname, useParams } from "next/navigation";

export default function Profile() {
  const params = useParams();

  return <div>Profile {params.slug}</div>;
}
