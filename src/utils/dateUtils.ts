export const isUnlocked = (): boolean => {
  const now = new Date();
  const unlockDate = new Date('2024-10-07T00:00:00');
  return now >= unlockDate;
};

export const shouldBypass = (): boolean => {
  // Check for URL parameter bypass
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('unlock') === 'true';
};

export const getTimeUntilUnlock = () => {
  const now = new Date();
  const unlockDate = new Date('2025-10-07T00:00:00');
  const diff = unlockDate.getTime() - now.getTime();
  
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
};

export const getCountdownMessage = (): string => {
  const now = new Date();
  const currentDate = now.getDate();
  const currentMonth = now.getMonth() + 1; // JavaScript months are 0-based
  
  // Only show messages in October
  if (currentMonth !== 10) {
    return "October aa jaaye, phir countdown shuru hoga! 😊";
  }
  
  const messages: { [key: number]: string } = {
    1: "Bas 6 din bache… patience rakho meri jaan 💕",
    2: "5 din aur… phir aayega sabse bada surprise 🎉",
    3: "4 din… aur fir tu star banegi iss website ki 🌟",
    4: "3 din left… excited naaa? 😏",
    5: "2 din… thoda aur wait baby 💖",
    6: "Kal raat ko 12 baje… dhamaaka hoga 😘"
  };
  
  return messages[currentDate] || "Birthday aa gaya! Time to unlock! 🎂";
};
