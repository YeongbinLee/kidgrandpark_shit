export interface AnimalData {
  id: number | string;
  name: string;
  description: string;
  imageSrc: string;
}

export const animals: AnimalData[] = [
  { id: 1, name: '침팬지', description: '도구를 사용하는 영리한 유인원', imageSrc: '/animals/monkey_1.webp' },
  { id: 2, name: '오랑우탄', description: '나무 위에서 생활하는 아시아의 유인원', imageSrc: '/animals/monkey_2.webp' },
  { id: 3, name: '고릴라', description: '가슴을 치며 힘을 과시하는 유인원', imageSrc: '/animals/monkey_4.jpg' },
  { id: 4, name: '기린', description: '세상에서 가장 키가 큰 동물', imageSrc: '/animals/giraffe_1.jpg' },
  { id: 5, name: '코끼리', description: '긴 코를 자유자재로 사용하는 거대한 동물', imageSrc: '/animals/elephant_1.webp' },
  { id: 6, name: '얼룩말', description: '흑백 줄무늬가 아름다운 아프리카의 상징', imageSrc: '/animals/zebra_1.jpg' },
  { id: 7, name: '사자', description: '초원의 왕이라 불리는 용맹한 동물', imageSrc: '/animals/lion_1.jpg' },
  { id: 8, name: '호랑이', description: '아름다운 줄무늬를 가진 숲의 제왕', imageSrc: '/animals/tiger_1.jpeg' },
  { id: 9, name: '펭귄', description: '뒤뚱뒤뚱 걷는 귀여운 바다의 신사', imageSrc: '/animals/penguin_1.jpg' },
  { id: 10, name: '수달', description: '귀여운 외모의 영리한 강가의 사냥꾼', imageSrc: '/animals/otter_1.jpg' },
  { id: 11, name: '독수리', description: '하늘의 제왕이라 불리는 위엄 있는 새', imageSrc: '/animals/eagle_1.webp' },
  { id: 12, name: '알파카', description: '복슬복슬한 털이 매력적인 동물', imageSrc: '/animals/alpaka_1.jpeg' },
];
