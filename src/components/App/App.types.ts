export type UnsplashResult = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
};

export type UnsplashImage = {
  results: UnsplashResult[];
  total: number;
  total_pages: number;
};

export type ParamsType = { page: number; perPage: number };
