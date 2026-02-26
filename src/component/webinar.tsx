import { useState, useEffect, useRef } from 'react';

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
    thumbnail: '../../public/GMT20260204.png',
    videoUrl: 'https://drive.google.com/file/d/1jj88hSdFI0EjFPgNqv78n6E9W_R9-Eqs/preview',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Small GIANTS India',
    description: 'Fund Category 3 AIF Long Only',
    thumbnail: '../../public/2026_Global_Investor.png',
    videoUrl: 'https://drive.google.com/file/d/1MaLFXPzs6cItqp4mTWhCIt-d_slqnHZQ/preview',
    date: '2024-01-15'
  },
];

function Webinar() {
  const [selectedVideo, setSelectedVideo] = useState<WebinarVideo | null>(null);
  const [iframeDimensions, setIframeDimensions] = useState({ width: 854, height: 480 });
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const openVideoModal = (video: WebinarVideo) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    if (selectedVideo) {
      // Set initial dimensions
      const updateDimensions = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const maxWidth = viewportWidth * 0.9;
        const maxHeight = viewportHeight * 0.8;
        
        // Google Drive preview typically uses 16:9 aspect ratio
        const aspectRatio = 16 / 9;
        
        let width = Math.min(maxWidth, 854);
        let height = width / aspectRatio;
        
        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }
        
        setIframeDimensions({ width: Math.round(width), height: Math.round(height) });
      };
      
      updateDimensions();
      
      // Listen for resize events
      window.addEventListener('resize', updateDimensions);
      
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, [selectedVideo]);

  return (
    <>
      <div className="px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Webinar Library</h1>
          <p className="text-lg text-gray-600">Explore our collection of educational webinars on modern web development</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webinarVideos.map((video) => (
            <div key={video.id} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
                  <button 
                   onClick={(e) => {
                      e.stopPropagation();
                      openVideoModal(video);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transform hover:scale-110 transition-transform duration-200 cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
                
              </div>
              
              <div className="flex flex-col flex-1 p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                  <span>{new Date(video.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideoModal(video);
                    }}
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-white hover:text-gray-300 text-4xl font-bold z-10 cursor-pointer"
            >
              ×
            </button>
            <div className="bg-black rounded-lg overflow-hidden">
              <iframe 
                ref={iframeRef}
                src={`${selectedVideo.videoUrl}`}
                width={iframeDimensions.width}
                height={iframeDimensions.height}
                className="border-0"
                allow="autoplay; fullscreen;"
                allowFullScreen
              ></iframe>
            </div>
        </div>
      )}
    </>
  )
}

export default Webinar