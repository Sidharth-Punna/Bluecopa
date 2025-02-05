export interface Movie {
    id: number;
    title: string;
    poster: string;
    backdrop?:string;
    description: string;
    releaseDate: string;
    director:string;
    genre: string;
    averageRating?: number;
    reviews: Review[];
  }
  
  export interface Review {
    rating: number;
    comment: string;
  }