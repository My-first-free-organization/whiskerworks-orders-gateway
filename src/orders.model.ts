export interface Orders {
  id: string;
  createdAt: Date;
  status: 'active' | 'archived';
}
