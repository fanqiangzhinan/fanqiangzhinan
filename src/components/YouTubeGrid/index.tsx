import React from 'react';
import styles from './styles.module.css';

interface YouTubeVideo {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  duration?: string;
}

interface YouTubeGridProps {
  videos: YouTubeVideo[];
  title?: string;
  columns?: 2 | 3 | 4;
}

const YouTubeGrid: React.FC<YouTubeGridProps> = ({ 
  videos, 
  title = "视频教程", 
  columns = 3 
}) => {
  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const getYouTubeUrl = (videoId: string) => {
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  const getEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={styles.youtubeGrid}>
      {title && <h2 className={styles.gridTitle}>{title}</h2>}
      <div className={`${styles.grid} ${styles[`grid${columns}Cols`]}`}>
        {videos.map((video, index) => (
          <div key={index} className={styles.videoCard}>
            <a 
              href={getYouTubeUrl(video.id)} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.videoLink}
            >
              <div className={styles.videoThumbnail}>
                <img
                  src={video.thumbnail || getYouTubeThumbnail(video.id)}
                  alt={video.title}
                  className={styles.thumbnail}
                />
                <div className={styles.playButton}>
                  <svg width="68" height="48" viewBox="0 0 68 48">
                    <path
                      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                      fill="#f00"
                    />
                    <path d="M 45,24 27,14 27,34" fill="#fff" />
                  </svg>
                </div>
                {video.duration && (
                  <div className={styles.duration}>{video.duration}</div>
                )}
              </div>
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>
                  {video.title}
                </h3>
                {video.description && (
                  <p className={styles.videoDescription}>{video.description}</p>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeGrid;

