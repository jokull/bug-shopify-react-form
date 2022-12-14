"use client";

import { useField } from "@shopify/react-form";
import { useEffect, useState } from "react";

function Inner() {
  const field = useField("default value");
  return <div>{JSON.stringify(typeof field.value)}</div>;
}

export default function Component() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return loaded ? <Inner /> : null;
}
