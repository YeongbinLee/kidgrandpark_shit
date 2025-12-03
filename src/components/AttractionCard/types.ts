export interface AttractionCardData {
  id: number;
  name: string;
  minHeight: number;
  maxHeight?: number;
  imageSrc: string;
  tags: string[];
  location: string;
}
