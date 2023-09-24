"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c3631547-5395-4b95-978c-c793a54544ff");
  }, []);

  return null;
};
