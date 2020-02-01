export interface Character {
  id: string;
  job: string;
  level: number;
  floor: number | null;
  oldFloor: number | null;
  latestPlay: number | null;
}
