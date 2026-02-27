interface upComingVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
}

const upComingVideo: upComingVideo[] = [
  {
    id: "1",
    title: "Introduction to React Development",
    description:
      "Learn the basics of React and modern web development practices.",
    thumbnail: "../../public/GMT20260204.png",
    date: "2024-01-15",
  },
];

function Upcoming() {

  return (
    <>
      <div className="md:px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Up-Coming Webinar
          </h1>
          <p className="text-base md:text-lg text-white">
            Explore our collection of educational webinars on modern web
            development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upComingVideo.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {new Date(video.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Upcoming;
