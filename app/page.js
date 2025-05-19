//the localhost:3000/ page
import Features from "@/components/Features";
import Head from "@/components/Head";
import Nav from "@/components/Nav";
import Template from "@/components/Template";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Head />
      <Features />
      <Template />
    </div>
  );
};

export default page;
