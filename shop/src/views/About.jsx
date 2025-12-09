import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-6">About</h1>
      <div>
        <h3 className="text-1xl font-bold mb-2">About This Project</h3>
        <p className="text-gray-700 mb-3">
            Write description of project
        </p>

        <h3 className="font-semibold">Authors</h3>
        <p>Ray Palima and Gabriel Avinante</p>

        <h3 className="font-semibold mt-4">Notes</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li> Write notes here</li>
        </ul>
        <h3 className="font-semibold mt-4">Git Repository</h3>
        <a className="text-blue-600 underline" href="https://github.com/RayPalima/COMP-4513-Assignment-2" target="_blank">Link to Github Repo</a>
        <h3 className="font-semibold mt-4">Image Placeholder Got from:</h3>
        <a className="text-blue-600 underline" href="https://placehold.co/" target="_blank">placehold</a>
      </div>
    </div>
  );
}

export default About;