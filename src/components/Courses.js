import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import './About.css';

export default function Courses() {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "course"]{
          title,
          date,
          place,
          teacher,
          description
      }`
      )
      .then((data) => setCourseData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="myBio min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Courses</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my completed course page!
        </h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData &&
            courseData.map((course, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    {course.title}
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(course.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Conducted on</strong>:{" "}
                    {course.place}
                  </span>
                  <span>
                    <strong className="font-bold">Taught by</strong>:{" "}
                    {course.teacher}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
