"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Gallerysmall from '@/components/inatorscomponents/gallery/gallerysmall';
import Gallerylarge from '@/components/inatorscomponents/gallery/gallerylarge';

import React, { useState, ChangeEvent, FormEvent } from "react";
const Team = () => {
  return (
    <>
      <div className="max-w-7xl flex flex-col justify-center p-1 md:px-10 mx-auto sm:pt-10 lg:flex-column lg:justify-between items-center gap-20 text-3xl">

        <h1 className="text-5xl font-bold leadi sm:text-6xl leading-snug">
          Our<span className="text-rose-600 leading-snug"> Team </span>

        </h1>
        <h2>
          Founders
        </h2>
        <Gallerysmall />
        <h2>
          Members
        </h2>
        <Gallerylarge />
      </div>
    </>
  )
}
export default Team;
