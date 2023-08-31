import React from "react";

const CareersText = () => {
  return (
    <div className="xs:mx-4 md:mx-20 my-8">
      <h1 className="text-[#3f3f46] fontBoldAlupak xs:text-[1.5rem] md:text-[2rem] font-black text-center my-4">
        Shape Your Future with Alupak
      </h1>

      <p className="text-center xs:text-sm lg:text-base xm:mx-40 mb-8">
        At Alupak, we believe in empowering you to create a meaningful and
        impactful career. We offer you the opportunity to build not just a job,
        but a journey that encompasses personal growth, essential skills
        development, valuable relationships, and cutting-edge digital
        technologies.
        <br />
        <br /> Each member of the Alupak team plays a pivotal role in propelling
        our company towards progress. Collectively, we contribute piece by
        piece, part by part, and person by person. Together, we are dedicated to
        crafting sustainable solutions that have the power to transform lives
        across the world. By joining our accomplished team, you have the chance
        to be a part of something bigger and contribute to the creation of a
        better world.
        <br />
        <br /> If you are ready to take the next step in your career journey, we
        invite you to send us your resume with the relevant job title mentioned
        in the subject line.
      </p>

      <p className="text-center xs:text-sm lg:text-base">
        Reach out to us at:{" "}
        <a
          className="text-blue-600 font-bold underline"
          href="mailto:hr@alu-pak.com"
        >
          hr@alu-pak.com
        </a>
      </p>
    </div>
  );
};

export default CareersText;
