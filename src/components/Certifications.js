import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

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
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Certifications</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my certification page!
        </h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateData &&
            certificateData.map((certificate, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    {certificate.title}
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Received on</strong>:{" "}
                    {new Date(certificate.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Received from</strong>:{" "}
                    {certificate.place}
                  </span>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={certificate.mainImage.asset.url}
                      alt={certificate.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {certificate.description}
                  </p>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
