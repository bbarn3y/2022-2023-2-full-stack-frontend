export class Article {
  id: number;
  title: string;
  content?: string;
  image: string;
  created: number;
  updated?: number;
  user: { id: number; name: string; image: string };


  constructor(id: number,
              title: string,
              content: string,
              image: string,
              created: number,
              user: { id: number; name: string; image: string },
              updated?: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.image = image;
    this.created = created;
    this.user = user;
    this.updated = updated;
  }
}
