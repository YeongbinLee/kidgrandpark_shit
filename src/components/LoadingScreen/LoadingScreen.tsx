import React, { useState, useEffect, useCallback } from 'react';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
    onLoadComplete: () => void;
    minLoadTime?: number;
}

// Key assets to preload
const PRELOAD_IMAGES = [
    '/logo-horizontal.png',
    '/logo-vertical.png',
    '/course/family.png',
    '/course/couple.png',
    '/course/wellness.png',
    '/course/fish.png',
];

const PRELOAD_VIDEOS = [
    '/tiger.mp4',
    '/garden.mp4',
    '/roller.mp4',
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({
    onLoadComplete,
    minLoadTime = 1000, // Reduced to 1 second
}) => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    const finishLoading = useCallback(() => {
        setProgress(100);
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(onLoadComplete, 500);
        }, 200);
    }, [onLoadComplete]);

    useEffect(() => {
        const startTime = Date.now();
        let loadedCount = 0;
        const totalAssets = PRELOAD_IMAGES.length + PRELOAD_VIDEOS.length;
        let completed = false;

        const updateProgress = () => {
            if (completed) return;
            const newProgress = Math.min((loadedCount / totalAssets) * 100, 95);
            setProgress(newProgress);
        };

        const checkComplete = () => {
            if (completed) return;

            const elapsed = Date.now() - startTime;
            if (loadedCount >= totalAssets && elapsed >= minLoadTime) {
                completed = true;
                finishLoading();
            } else if (loadedCount >= totalAssets && elapsed < minLoadTime) {
                // All loaded but min time not reached
                setTimeout(() => {
                    if (!completed) {
                        completed = true;
                        finishLoading();
                    }
                }, minLoadTime - elapsed);
            }
        };

        const handleAssetLoad = () => {
            loadedCount++;
            updateProgress();
            checkComplete();
        };

        // Preload images
        PRELOAD_IMAGES.forEach((src) => {
            const img = new Image();
            img.onload = handleAssetLoad;
            img.onerror = handleAssetLoad; // Count errors too to not block
            img.src = src;
        });

        // Preload videos (just metadata, not entire video)
        PRELOAD_VIDEOS.forEach((src) => {
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.onloadedmetadata = handleAssetLoad;
            video.onerror = handleAssetLoad;
            video.src = src;
        });

        // Fallback: force complete after 5 seconds max
        const fallbackTimeout = setTimeout(() => {
            if (!completed) {
                completed = true;
                finishLoading();
            }
        }, 5000);

        return () => {
            completed = true;
            clearTimeout(fallbackTimeout);
        };
    }, [minLoadTime, finishLoading]);

    return (
        <div className={`${styles.loadingScreen} ${fadeOut ? styles.fadeOut : ''}`}>
            <img
                src="/logo-vertical.png"
                alt="어린이대공원"
                className={styles.logo}
                onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo-horizontal.png';
                }}
            />
            <div className={styles.loaderContainer}>
                <div className={styles.loader}></div>
                <div className={styles.loadingText}>LOADING</div>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
