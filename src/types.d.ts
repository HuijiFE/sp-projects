declare interface IndexItem {
  id: string;
  label: string;
}

interface GuestInfo {
  photo: string;
  name_zh: string;
  name_en: string;
  description: string;
  works: string;
}

interface AgendaInfo {
  time: string;
  items: {
    time: string;
    label: string;
  }[];
}

interface NewsInfo {
  hrefTgbus: string;
  href178: string;
  thumbnail: string;
  title: string;
  summary?: string;
}

interface VideoInfo {
  thumbnail: string;
  label: string;
  href: string;
}

interface WorkInfo {
  label: string;
  title: string;
  description: string;
}
