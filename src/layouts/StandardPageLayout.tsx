import React from 'react';
import styles from './StandardPageLayout.module.css';

interface StandardPageLayoutProps {
    children: React.ReactNode;
    narrow?: boolean;
    className?: string;
}

const StandardPageLayout: React.FC<StandardPageLayoutProps> = ({
    children,
    narrow = false,
    className = '',
}) => {
    return (
        <div className={`${styles.pageLayout} ${className}`}>
            <div className={narrow ? styles.containerNarrow : styles.container}>
                {children}
            </div>
        </div>
    );
};

export default StandardPageLayout;
