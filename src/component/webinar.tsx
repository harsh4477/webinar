interface WebinarVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  date: string;
}

const webinarVideos: WebinarVideo[] = [
  {
    id: '1',
    title: 'Introduction to React Development',
    description: 'Learn the basics of React and modern web development practices.',
    thumbnail: '../../public/GMT20260204.jpg',
    videoUrl: '../../public/GMT20260204.mp4',
    date: '2024-01-15'
  },
];

function webinar() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Webinar Library</h1>
        <p className="text-lg text-gray-600">Explore our collection of educational webinars on modern web development</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {webinarVideos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
                <button 
                  onClick={() => window.open(video.videoUrl)}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transform hover:scale-110 transition-transform duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{new Date(video.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <button 
                  onClick={() => window.open(video.videoUrl,)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default webinar