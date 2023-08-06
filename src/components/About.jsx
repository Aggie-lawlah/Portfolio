const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-7xl px-4 pt-24 mx-auto flex flex-col justify-center w-full md:px-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          I am <strong>Agnes Omolola Oladeinde</strong>, a highly motivated Data
          Analyst with certifications from DataCamp and ALX. I bring a unique
          blend of technical proficiency and domain knowledge to the table. I am
          proficient in SQL, Excel, and Python, I conduct comprehensive data
          analysis, utilizing techniques such as exploratory data analysis,
          statistics, and data visualization.
        </p>

        <br />

        <p className="text-xl">
          My dedication to precision and efficiency, coupled with a
          goal-oriented mindset, empowers me to deliver impactful results and
          make a positive impact in the healthcare industry.
        </p>
      </div>
    </div>
  );
}

export default About
