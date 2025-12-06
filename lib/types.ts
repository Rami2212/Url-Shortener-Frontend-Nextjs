export interface ShortenResponseData {
  short_url: string;
  short_code: string;
  original_url: string;
}

export interface ShortenResponse {
  success: boolean;
  data?: ShortenResponseData;
  message?: string;
}
