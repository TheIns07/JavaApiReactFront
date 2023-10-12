import { Review } from "./Review";

export interface Movies {
    imdbId: string;
    title: string;
    releaseDate: string;
    trailerLink: string;
    genres: string[];
    poster: string;
    backdrops: string[];
    reviewIds: string[];
    reviews: Review[];
}

