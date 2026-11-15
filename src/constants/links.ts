export const APK_DOWNLOAD_URL =
  'https://www.mediafire.com/file/fe0peoiczl7mgdv/Erena+Esports+apk.apk/file';

export type ModalSection =
  | 'about'
  | 'leaderboard'
  | 'support'
  | 'refer'
  | 'help'
  | null;

export interface LeaderboardEntry {
  rank: number;
  player: string;
  game: string;
  winnings: string;
}

export const TOP_PLAYERS: LeaderboardEntry[] = [
  { rank: 1, player: 'Aarav_FF', game: 'Free Fire Solo', winnings: '₹14,850' },
  { rank: 2, player: 'RohanKing99', game: 'Erena Ludo', winnings: '₹11,200' },
  { rank: 3, player: 'VikramOP', game: 'Free Fire Squad', winnings: '₹9,640' },
  { rank: 4, player: 'SniperNeha', game: 'Predict & Earn', winnings: '₹7,450' },
  { rank: 5, player: 'KabirPro', game: 'Free Fire Clash', winnings: '₹6,120' },
];
