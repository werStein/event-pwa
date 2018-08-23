export interface NewsfeedEntry {
  id?: string;
  title: string;
  content: string;
  author: {
    name: string;
    imgUrl?: string;
  };
  imgUrl?: string; // optional
  date: Date;
}
