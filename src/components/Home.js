import image from "../my-click-sara.jpg";
import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const serializers = {
  marks: {
    link: ({ children, mark }) =>
      mark.blank ? (
        <a href={mark.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline hover:text-blue-900">
          {children}
        </a>
      ) : (
        <a href={mark.href} className="text-blue-500 font-bold hover:underline hover:text-blue-900">
          {children}
        </a>
      )
  }
}

export default function Home() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          bio,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main>
      <img
        src={image}
        alt="Nature"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center  pt-12 lg:pt-64 px-8">
      <img
          src={urlFor(author.authorImage).url()}
          className="w-40 rounded-full justify-center"
          alt="Sara"
        />
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hi. I'm Sara.
        </h1>
      </section>
    </main>
  );
}
