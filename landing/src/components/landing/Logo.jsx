"use client";

import React from "react";

export default function Logo({
  className = "h-9 sm:h-10 lg:h-11 w-auto",
  alt = "Livi Leads",
  variant,
  hideText,
  ...props
}) {
  return (
    <img
      src="/images/livileads_logo.png"
      alt={alt}
      className={`aspect-square rounded-full object-contain select-none shrink-0 ${className}`}
      {...props}
    />
  );
}

