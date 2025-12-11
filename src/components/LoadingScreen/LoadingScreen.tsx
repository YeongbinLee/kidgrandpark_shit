import React, { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
    onLoadComplete: () => void;
    minLoadTime?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
    onLoadComplete,
    minLoadTime = 2000,
}) => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        let startTime = Date.now();
        let animationFrame: number;
        let loadComplete = false;

        // Simulate progress
        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const targetProgress = Math.min((elapsed / minLoadTime) * 100, 100);

            setProgress(targetProgress);

            if (targetProgress < 100) {
                animationFrame = requestAnimationFrame(updateProgress);
            }
        };

        animationFrame = requestAnimationFrame(updateProgress);

        // Handle window load event
        const handleLoad = () => {
            loadComplete = true;
            checkComplete();
        };

        // Check if both conditions met (min time + load complete)
        const checkComplete = () => {
            const elapsed = Date.now() - startTime;
            if (elapsed >= minLoadTime && loadComplete) {
                setProgress(100);
                setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(onLoadComplete, 500); // Wait for fade animation
                }, 200);
            } else if (elapsed >= minLoadTime && !loadComplete) {
                // Min time passed, wait for load
                window.addEventListener('load', handleLoad);
            } else if (loadComplete && elapsed < minLoadTime) {
                // Loaded but min time not passed
                setTimeout(checkComplete, minLoadTime - elapsed);
            }
        };

        // If document already loaded
        if (document.readyState === 'complete') {
            loadComplete = true;
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Start checking
        const minTimeTimeout = setTimeout(() => {
            if (loadComplete) {
                setProgress(100);
                setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(onLoadComplete, 500);
                }, 200);
            }
        }, minLoadTime);

        return () => {
            cancelAnimationFrame(animationFrame);
            clearTimeout(minTimeTimeout);
            window.removeEventListener('load', handleLoad);
        };
    }, [minLoadTime, onLoadComplete]);

    return (
        <div className={`${styles.loadingScreen} ${fadeOut ? styles.fadeOut : ''}`}>
            <img
                src="/logo-vertical.png"
                alt="어린이대공원"
                className={styles.logo}
                onError={(e) => {
                    // Fallback if vertical logo doesn't exist
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
