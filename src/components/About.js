import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import sara_about from "../my-click-sara.jpg";
import './About.css';
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
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
          className="w-32 h-32 rounded-full flex justify-center"
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
        <p className="text-black text-lg flex justify-center">{author.bio}</p>
      </div>

      <br />
    </main>
  );
}
