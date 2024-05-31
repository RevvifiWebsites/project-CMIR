"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Featurecard from "@/components/inatorscomponents/feature/featurecard";

import React, { useState, ChangeEvent, FormEvent } from "react";
const Approach = () => {
  return (
    <>
      <div className="max-w-7xl flex flex-col justify-center p-1 md:px-10 mx-auto sm:pt-10 lg:flex-row lg:justify-between items-center">

        <h1 className="text-5xl font-bold leadi sm:text-6xl leading-snug">
          Our<span className="text-rose-600 leading-snug"> Approach </span>

        </h1>
      </div>
      <div className="p-3">
        <Featurecard />
      </div>
    </>
  )
}
export default Approach;