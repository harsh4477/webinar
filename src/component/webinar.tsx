import { useState, useEffect, useRef } from 'react';

interface WebinarVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  date: string;
  startTime?: string; // e.g. "01:30" or "90" (seconds)
}

const webinarVideos: WebinarVideo[] = [
  {
    id: '1',
    title: 'India 2026: Post Budget + Trump Tariff Insights',
    description: 'Budget Architecture, Tariff Realignment, and Sectoral Capital Migration: INFLECTION POINT for INDIA',
    thumbnail: '/GMT20260204.png',
    videoUrl: 'https://drive.google.com/file/d/1c41YKFp338s27dKrHOoN6g36fiOfUvwU/preview',
    date: '02-26-2026',
    startTime: '05:50'
  },
  {
    id: '2',
    title: '2026 Playbook For Global Investors',
    description: 'Navigating Transitions in Indian Equity Markets.',
    thumbnail: '/02.png',
    videoUrl: 'https://drive.google.com/file/d/1PvE3ERtkdvt58xfyHdmmPEsuTkTrAiZQ/preview',
    date: '2026-01-10',
    startTime: '00:00'
  },
];

function getFormattedVideoUrl(url: string, startTime?: string): string {
  // Append autoplay=1 to video embed URL
  const baseUrl = url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;

  if (!startTime) return baseUrl;
  const parts = startTime.split(':').map(Number);
  let seconds = 0;
  if (parts.length === 3) {
    seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    seconds = parts[0] * 60 + parts[1];
  } else if (!isNaN(Number(startTime))) {
    seconds = Number(startTime);
  }

  if (seconds > 0) {
    return `${baseUrl}#t=${seconds}s`;
  }
  return baseUrl;
}

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
      const updateDimensions = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const maxWidth = viewportWidth * 0.9;
        const maxHeight = viewportHeight * 0.8;

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
      window.addEventListener('resize', updateDimensions);

      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, [selectedVideo]);

  return (
    <>
      <section className="md:px-4 py-8 relative z-10" aria-labelledby="webinar-library-heading">
        <div className="mb-8">
          <h2 id="webinar-library-heading" className="text-3xl md:text-4xl font-bold text-white mb-2">
            Webinar Library
          </h2>
          <p className="text-base md:text-lg text-gray-50">
            Explore our collection of educational webinars, market insights, and financial playbooks
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webinarVideos.map((video) => (
            <article
              key={video.id}
              className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail for webinar: ${video.title}`}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                {video.startTime && video.startTime !== '00:00' && (
                  <span className="absolute top-2 right-2 bg-black/75 text-white text-xs font-semibold px-2 py-1 rounded backdrop-blur-sm">
                    Starts at {video.startTime}
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideoModal(video);
                    }}
                    aria-label={`Play webinar video: ${video.title}`}
                    className="btn-primary text-white rounded-full p-3 transform hover:scale-110 transition-transform duration-200 cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                  <span>
                    <time dateTime={video.date}>
                      {new Date(video.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideoModal(video);
                    }}
                    aria-label={`Watch ${video.title} now`}
                    className="text-gradient font-semibold cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 h-screen"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Video Player: ${selectedVideo.title}`}
        >
          <button
            onClick={closeModal}
            aria-label="Close video player modal"
            className="absolute top-5 right-5 text-white hover:text-gray-300 text-4xl font-bold z-10 cursor-pointer"
          >
            ×
          </button>
          <div className="relative bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <iframe
              ref={iframeRef}
              src={getFormattedVideoUrl(selectedVideo.videoUrl, selectedVideo.startTime)}
              width={iframeDimensions.width}
              height={iframeDimensions.height}
              className="border-0"
              title={selectedVideo.title}
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            {/* Mask/Overlay to cover and block the Google Drive Pop-out button */}
            <div
              className="absolute top-0 right-0 w-16 h-14 bg-black z-10 pointer-events-auto"
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Webinar;