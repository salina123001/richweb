export enum Gender {
  MALE = "男性",
  FEMALE = "女性",
}

export interface UserInput {
  birthDate: string; // YYYY-MM-DD
  birthTime?: string; // HH:MM (optional)
  gender: Gender;
}

export interface CalculationResults {
  chineseZodiac: string;
  astrologySign: string;
  lifePathNumber: number;
}

export interface AIInterpretation {
  loveFortune: string;
  careerWealth: string;
  personalGrowth: string;
  yearlyLuckForecast: string; 
  futureThreeMonthsForecast: string; // Added for 3-month forecast
}

export interface FortuneOutput extends CalculationResults, AIInterpretation {}

export interface NavLink {
  label: string;
  href: string;
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web: GroundingChunkWeb;
}