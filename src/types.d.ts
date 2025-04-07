export interface Album {
  title:        string;
  release_year: number;
  description:  string;
  tracks:       Tracks[];
}
type Tracks = {
  title:string
  lyrics:string
}