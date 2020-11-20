export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    description: string;
    pageCount: string;
    language: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
  bookinfo: [IBook];
  billingData: BillingInfo | undefined;
}

class BillingInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
}
