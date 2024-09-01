export interface IRawData {
  id: string;
  total_users: number;
  active_users: number;
  total_streams: number;
  revenue: number;
  revenue_distribution: {
    subscriptions: number;
    ads: number;
  };
  top_artist: string;
  top_songs: Array<string>;
}
