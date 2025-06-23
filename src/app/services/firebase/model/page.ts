export interface Page {
  id?: string;
  title: string;
  slug: string;           // 'about', 'contact-us', etc.
  content: string;        // raw HTML or Markdown
  isPublic: boolean;
  order?: number;
  variantType: string; // layout hint for Ionic
  createdAt?: any;        // Firestore Timestamp
  updatedAt?: any;
}
