import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import './About.css';

export default function Certifications() {
  const [certificateData, setCertificateData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "certificate"]{
          title,
          date,
          place,
          mainImage{
              asset->{
                  _id,
                  url
              },
              alt
          },
          description
      }`
      )
      .then((data) => setCertificateData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="myBio min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Certifications</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my certification page!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateData &&
            certificateData.map((certificate, index) => (
              <article className="myBorder">
               <h3 className="text-gray-800 flex justify-center text-3xl font-bold ">
                  {certificate.title}
               </h3>
               <span>
                <strong className="font-bold">Received on</strong>:{" "}
                {new Date(certificate.date).toLocaleDateString()}
               </span>
               <span>
                <strong className="font-bold">, Received from</strong>:{" "}
                {certificate.place}
               </span>
               <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
               >
                  <img
                    src={certificate.mainImage.asset.url}
                    alt={certificate.mainImage.alt}
                    className="w-full h-full rounded-r absolute"
                  />
                </span>
                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {certificate.description}
                </p>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
