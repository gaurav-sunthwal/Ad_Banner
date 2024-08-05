export interface AdBannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

export interface EditBannerProps {
  isOpen: boolean;
  onClose: () => void;
  banner: AdBannerProps | null;
  onSave: (banner: AdBannerProps) => void;
}
