import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Redirect({ to, ssr }) {
  const router = useRouter();

  useEffect(() => {
    if (ssr) {
      window.location.pathname = to;
    } else {
      router.push(to);
    }
  }, []);

  return null;
}
