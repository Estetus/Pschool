export interface CardInProps {
  imdbId: string
  id: string
  count: number
  url: string
  "@type": string
  name: string
  image: string;
  description: string
  review?: {
    reviewBody: string;
    dateCreated:string;
    name:string
  };
  aggregateRating?: {
    ratingValue: number;
  };
  datePublished:string;
  duration: string;
    genre: string[];
    top?: {
      id: string;
    };

  
}

