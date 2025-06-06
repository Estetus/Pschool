export interface CardInProps {
  url: string
  "@type": string
  name: string
  image: string
  description: string
  review?: {
    reviewBody: string;
    dateCreated:string;
    name:string
  };
  aggregateRating?: {
    ratingValue: string | number;
  };
  datePublished:string;
  runtime?: {
			seconds?: number
  }
  genre: string[]

  
}

