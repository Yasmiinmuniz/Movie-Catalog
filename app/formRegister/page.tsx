'use client'
import React from "react";
import FormRegister from "@/components/atoms/Form";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";


export default function Register() {
return (
    <div className="bg-background-dark min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <FormRegister />
      </main>
      <Footer />
    </div>
  );
}
