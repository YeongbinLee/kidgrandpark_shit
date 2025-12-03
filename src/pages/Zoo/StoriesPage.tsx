import React, { useState } from 'react';
import styles from './StoriesPage.module.css';

interface Story {
  id: number;
  title: string;
  description: string;
  emoji?: string;
  image?: string;
  date: string;
  badge: string;
  isNew: boolean;
  views: number;
  likes: number;
}

const StoriesPage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const stories: Story[] = [
    {
      id: 1,
      title: '새로운 가족! 아기 펭귄이 태어났어요',
      description: '서울어린이대공원에 귀여운 아기 펭귄이 태어났습니다. 건강하게 자라고 있는 아기 펭귄의 모습을 만나보세요.',
      image: '/animals/penguin_1.jpg',
      date: '2025.11.20',
      badge: '신규',
      isNew: true,
      views: 1234,
      likes: 89,
    },
    {
      id: 2,
      title: '사자 가족의 일상을 소개합니다',
      description: '사자 가족의 하루를 공개합니다. 사자들의 식사 시간, 놀이 시간, 휴식 시간 등 다양한 모습을 확인하세요.',
      image: '/animals/lion_1.jpg',
      date: '2025.11.15',
      badge: '인기',
      isNew: false,
      views: 2567,
      likes: 156,
    },
    {
      id: 3,
      title: '코끼리의 건강검진 현장',
      description: '정기 건강검진을 받고 있는 코끼리의 모습입니다. 수의사와 사육사가 코끼리의 건강을 꼼꼼히 체크하고 있습니다.',
      image: '/animals/elephant_1.webp',
      date: '2025.11.10',
      badge: '관리',
      isNew: false,
      views: 987,
      likes: 67,
    },
    {
      id: 4,
      title: '원숭이들의 놀이 시간',
      description: '활기찬 원숭이들의 놀이 시간! 나무를 타고 친구들과 놀며 즐거운 시간을 보내는 원숭이들의 모습을 담았습니다.',
      image: '/animals/monkey_3.jpg',
      date: '2025.11.05',
      badge: '일상',
      isNew: false,
      views: 1456,
      likes: 102,
    },
    {
      id: 5,
      title: '플라밍고 무리의 우아한 군무',
      description: '분홍빛 플라밍고들의 아름다운 모습입니다. 함께 움직이는 플라밍고들의 우아한 군무를 감상해보세요.',
      image: '/animals/flamingo_1.webp',
      date: '2025.10.28',
      badge: '특집',
      isNew: false,
      views: 2103,
      likes: 178,
    },
    {
      id: 6,
      title: '호랑이의 위엄 넘치는 하루',
      description: '백수의 왕 호랑이의 당당한 모습을 만나보세요. 힘차게 걸어다니는 호랑이의 위풍당당한 모습이 인상적입니다.',
      image: '/animals/tiger_1.jpeg',
      date: '2025.10.20',
      badge: '인기',
      isNew: false,
      views: 3245,
      likes: 201,
    },
    {
      id: 7,
      title: '기린의 느긋한 오후',
      description: '긴 목을 자랑하는 기린이 여유롭게 나뭇잎을 먹는 모습입니다. 우아한 기린의 일상을 담았습니다.',
      image: '/animals/giraffe_1.jpg',
      date: '2025.10.15',
      badge: '일상',
      isNew: false,
      views: 1876,
      likes: 142,
    },
    {
      id: 8,
      title: '수달의 즐거운 물놀이',
      description: '귀여운 수달이 물속에서 즐겁게 노는 모습입니다. 수달의 재롱을 보며 힐링하세요.',
      image: '/animals/otter_1.jpg',
      date: '2025.10.10',
      badge: '힐링',
      isNew: false,
      views: 2567,
      likes: 189,
    },
    {
      id: 9,
      title: '독수리의 날카로운 눈빛',
      description: '하늘의 제왕 독수리의 날카로운 눈빛과 강인한 모습을 관찰할 수 있습니다.',
      image: '/animals/eagle_1.webp',
      date: '2025.10.05',
      badge: '관찰',
      isNew: false,
      views: 1543,
      likes: 98,
    },
    {
      id: 10,
      title: '알파카의 사랑스러운 미소',
      description: '복슬복슬한 털과 귀여운 표정으로 사랑받는 알파카의 일상을 소개합니다.',
      image: '/animals/alpaka_1.jpeg',
      date: '2025.09.28',
      badge: '귀염',
      isNew: false,
      views: 2890,
      likes: 215,
    },
  ];

  const displayedStories = stories.slice(0, visibleCount);
  const hasMore = visibleCount < stories.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, stories.length));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>동물 이야기</h1>
      <p className={styles.subtitle}>
        서울어린이대공원 동물들의 따뜻한 이야기를 전합니다
      </p>

      <div className={styles.storiesGrid}>
        {displayedStories.map((story) => (
          <div key={story.id} className={styles.storyCard}>
            <div className={styles.storyImage}>
              {story.image ? (
                <img src={story.image} alt={story.title} />
              ) : (
                <span className={styles.emoji}>{story.emoji}</span>
              )}
            </div>
            <div className={styles.storyContent}>
              <div className={styles.storyHeader}>
                <span className={`${styles.badge} ${story.isNew ? styles.new : ''}`}>
                  {story.badge}
                </span>
                <span className={styles.storyDate}>{story.date}</span>
              </div>
              <h3 className={styles.storyTitle}>{story.title}</h3>
              <p className={styles.storyDescription}>{story.description}</p>
              <div className={styles.storyFooter}>
                <span className={styles.viewCount}>
                  👁️ {story.views.toLocaleString()}
                </span>
                <span className={styles.likeCount}>
                  ❤️ {story.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className={styles.moreButtonContainer}>
          <button
            className={styles.moreButton}
            onClick={handleLoadMore}
          >
            더 보기 ({Math.min(5, stories.length - visibleCount)}개 더)
          </button>
        </div>
      )}
    </div>
  );
};

export default StoriesPage;
