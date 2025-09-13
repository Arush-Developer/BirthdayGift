// utils/dateUtils.ts

export const isUnlocked = (): boolean => {
  const now = new Date();
  const unlockDate = new Date('2025-10-07T00:00:00'); // ✅ fixed year
  return now >= unlockDate;
};

export const shouldBypass = (): boolean => {
  // Check for URL parameter bypass
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('unlock') === 'true';
};

export const getTimeUntilUnlock = () => {
  const now = new Date();
  const unlockDate = new Date('2025-10-07T00:00:00'); // ✅ same year as above
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
  const unlockDate = new Date('2025-10-07T00:00:00');
  const diffDays = Math.ceil(
    (unlockDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays <= 0) {
    return "Birthday aa gaya! Time to unlock! 🎂";
  }

  // Romantic countdown messages
  if (diffDays === 1) return "Kal raat ko 12 baje… dhamaaka hoga 😘";
  if (diffDays === 2) return "Bas 2 din aur… phir sabse bada surprise 💖";
  if (diffDays <= 5) return `${diffDays} din aur… sabr ka phal meetha hota hai jaan 💕`;

  return "October ka magic shuru ho gaya hai… wait for it! ✨";
};
