import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import sara_about from "../my-click-sara.jpg";
import BlockContent from "@sanity/block-content-to-react";
import './About.css';
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

export default function About() {
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
    <main className="relative">
      <img
          src={sara_about}
          alt="Background Image"
          className="absolute object-cover w-full h-full"
      />

      <div className="p-10 lg:pt-40 container mx-auto relative flex justify-center">
        <img
          src={urlFor(author.authorImage).url()}
          className="w-40 rounded-full justify-center"
          alt="Sara"
        />
      </div>

      <div className="container mx-auto relative flex justify-center">
        <section className="shadow-4xl" >
            <h1 className="cursive text-6xl text-white flex justify-center">
              Hey there. I'm{" "}
            </h1>
            <span className="cursive text-white text-4xl flex justify-center">{author.name}</span>

        </section>
      </div>

      <div className ="container mx-auto relative flex justify-center myBio" >
        <BlockContent
          blocks={author.bio}
          projectId="sa764pyc"
          dataset="production"
          serializers={serializers}
        />
      </div>

      <br />
    </main>
  );
}
