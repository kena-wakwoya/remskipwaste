export interface SkipData {
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string;
  created_at: string;
  forbidden: boolean;
  hire_period_days: number;
  id: number;
  per_tonne_cost: number | null;
  postcode: string;
  price_before_vat: number;
  size: number;
  transport_cost: number | null;
  updated_at: string;
  vat: number;

}

export interface Step {
  name: string;
  icon: React.ElementType;
  current: boolean;
}
export interface SkipSelectorProps {
  skipData: SkipData[];
  selectedSkip: SkipData | null;
  handleSelectSkip: (skip: SkipData) => void;
  handleDeselectSkip: () => void;
}

export interface SkipCardProps {
  skip: SkipData;
  isSelected?: boolean;
  onSelect: (skip: SkipData) => void;
  onDeselect: () => void;
}

export interface SelectedCardProps {
  selectedSkip: SkipData | null;
}

export type ImageRendererProps = {
    imagesize: number;
    amount: number;
    alt?: string;
};



export interface HeaderProps {
  steps: Step[];
}
