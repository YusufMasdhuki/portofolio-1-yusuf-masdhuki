export type YearsOfBuildingType = {
  years: string;
  logo: string;
  Description: string[];
};

export interface TimelineProps {
  items: YearsOfBuildingType[];
}

export interface TimelineItemProps {
  item: YearsOfBuildingType;
  index: number;
  onVisible: () => void;
  circleRef: (el: HTMLDivElement | null) => void;
  isActive: boolean;
}
