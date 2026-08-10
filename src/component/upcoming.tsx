interface UpComingVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
}

const upComingVideos: UpComingVideo[] = [
  {
    id: "1",
    title: "Introduction to React Development",
    description:
      "Learn the basics of React and modern web development practices.",
    thumbnail: "/GMT20260204.png",
    date: "2024-01-15",
  },
];

function Upcoming() {
  return (
    <>
      <section className="md:px-4 py-8 relative z-10" aria-labelledby="upcoming-webinars-heading">
        <div className="mb-8">
          <h2 id="upcoming-webinars-heading" className="text-3xl md:text-4xl font-bold text-white mb-2">
            Upcoming Webinars
          </h2>
          <p className="text-base md:text-lg text-white">
            Stay tuned for our upcoming live sessions and interactive market discussions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upComingVideos.map((video) => (
            <article
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={`Upcoming webinar thumbnail: ${video.title}`}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                  <span>
                    <time dateTime={video.date}>
                      {new Date(video.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Upcoming;
