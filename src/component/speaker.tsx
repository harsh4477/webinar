function Speaker() {
  const founders = [
    {
      name: "Pritam Deuskar",
      role: "CIO and Founder, Wealthyvia Ventures",
      experience:
        "12+ years of experience in institutional research and business analysis",
      bio: [
        "12+ years of experience in institutional research and business analysis",
        "Extensive proficiency in identifying early-stage small and mid-cap multibagger opportunities",
        "Achieved a sustained CAGR exceeding 32% from 2015 to 2024",
        "Expertise in fundamental analysis, governance quality, and long-term scalability",
        "Professional experience with Ernst & Young",
        "Featured in Dalal Street Investment Journal, CNBC, and Moneycontrol",
        "Postgraduate specialization in Portfolio Management and SEBI NISM certified",
      ],
      image: "/Pritam Deuskar.jpg",
      linkedinLink:
        "https://www.linkedin.com/in/pritam-deuskar-346b42245/?isSelfProfile=false",
    },
  ];

  return (
    <>
      <section className="md:px-4 py-8 relative z-10" aria-labelledby="speaker-heading">
        <div className="mb-8">
          <h2 id="speaker-heading" className="text-3xl md:text-4xl font-bold text-white mb-2">
            Featured Speaker
          </h2>
          <p className="text-base md:text-lg text-white">
            Learn from industry leaders with extensive experience in institutional research and portfolio management
          </p>
        </div>
        {founders.map((founder, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            <div className="h-[300px] lg:h-[390px] xl:h-[330px] md:w-[450px] overflow-hidden relative group">
              <div className="relative w-full h-full">
                <img
                  src={founder.image}
                  alt={`${founder.name} - ${founder.role}`}
                  loading="lazy"
                  className={`w-full object-cover transition-all duration-500 group-hover:scale-105 object-[0px_-70px]`}
                />
              </div>
              <a
                href={founder.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 p-2 rounded-full transition-opacity duration-300 bg-blue-800"
                aria-label={`Connect with ${founder.name} on LinkedIn`}
                title={`Connect with ${founder.name} on LinkedIn`}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  aria-hidden="true"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
                    ></path>
                  </g>
                </svg>
              </a>
              <div className="absolute bottom-0 left-0 w-full bg-blue-800 p-2">
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-center text-white">
                  {founder.name}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-900 font-medium mb-1 text-xl">
                {founder.role}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                {founder.bio.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Speaker;
