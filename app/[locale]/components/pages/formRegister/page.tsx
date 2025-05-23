'use client'
import React from "react";
import FormRegister from "@/app/[locale]/components/atoms/Form";
import Header from "@/app/[locale]/components/organisms/Header";
import Footer from "@/app/[locale]/components/organisms/Footer";


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
