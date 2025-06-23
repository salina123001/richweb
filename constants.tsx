import { NavLink } from './types';

export const SECTION_IDS = {
  HOME: 'home',
  CALCULATOR: 'calculator',
  ABOUT: 'about',
  CONTACT: 'contact',
};

export const NAV_LINKS: NavLink[] = [
  { label: '首頁', href: `#${SECTION_IDS.HOME}` },
  { label: '命運測算', href: `#${SECTION_IDS.CALCULATOR}` },
  { label: '命理介紹', href: `#${SECTION_IDS.ABOUT}` },
  { label: '聯絡我們', href: `#${SECTION_IDS.CONTACT}` },
];

export const ORDERED_CHINESE_ZODIAC_SIGNS: string[] = [
  "鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬"
];

export const CHINESE_ZODIAC_EMOJIS: { [key: string]: string } = {
  "鼠": "🐭", "牛": "🐮", "虎": "🐯", "兔": "🐰",
  "龍": "🐲", "蛇": "🐍", "馬": "🐴", "羊": "🐑",
  "猴": "🐵", "雞": "🐔", "狗": "🐶", "豬": "🐷"
};

export const ASTROLOGY_SIGNS_DATA: Array<{ name: string; startMonth: number; startDay: number; endMonth: number; endDay: number; emoji: string }> = [
  { name: "白羊座", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, emoji: "♈" },  // Aries
  { name: "金牛座", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, emoji: "♉" },  // Taurus
  { name: "雙子座", startMonth: 5, startDay: 21, endMonth: 6, endDay: 21, emoji: "♊" },  // Gemini
  { name: "巨蟹座", startMonth: 6, startDay: 22, endMonth: 7, endDay: 22, emoji: "♋" },  // Cancer
  { name: "獅子座", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, emoji: "♌" },  // Leo
  { name: "處女座", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, emoji: "♍" },  // Virgo
  { name: "天秤座", startMonth: 9, startDay: 23, endMonth: 10, endDay: 23, emoji: "♎" }, // Libra
  { name: "天蠍座", startMonth: 10, startDay: 24, endMonth: 11, endDay: 22, emoji: "♏" },// Scorpio
  { name: "射手座", startMonth: 11, startDay: 23, endMonth: 12, endDay: 21, emoji: "♐" },// Sagittarius
  { name: "摩羯座", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, emoji: "♑" },  // Capricorn
  { name: "水瓶座", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, emoji: "♒" },  // Aquarius
  { name: "雙魚座", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, emoji: "♓" }   // Pisces
];

// Helper to get just names, used in fortuneUtils.ts
export const ASTROLOGY_SIGNS = ASTROLOGY_SIGNS_DATA.map(sign => ({
  name: sign.name,
  startMonth: sign.startMonth,
  startDay: sign.startDay,
  endMonth: sign.endMonth,
  endDay: sign.endDay,
}));

export const ASTROLOGY_SIGN_EMOJIS: { [key: string]: string } = 
  ASTROLOGY_SIGNS_DATA.reduce((acc, sign) => {
    acc[sign.name] = sign.emoji;
    return acc;
  }, {} as { [key: string]: string });
