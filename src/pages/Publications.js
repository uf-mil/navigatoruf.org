import React from "react";
import Header from "../components/Header";

const PublicationsPage = () => {
  return (
    <div className="bg-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative">
        <Header title="Publications" />
      </div>
      <section className="py-8 bg-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-light mb-6 text-left px-10">Read Our Publications</h2>
          <p className="text-gray-600 mb-6 text-left px-10">Our publications will go under here once they are completed, this page is completed, and we have a link to them.</p>
          <p className="text-gray-600 text-left px-10">Stay tuned!</p>
        </div>
      </section>
    </div>
    
  );
};

export default PublicationsPage;
