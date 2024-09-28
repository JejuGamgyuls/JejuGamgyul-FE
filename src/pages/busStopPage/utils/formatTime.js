export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (minutes <= 0) {
    return '곧 도착';
  } else if (minutes >= 10 || secs === 0) {
    return `${minutes}분`;
  } else if (minutes < 10 && minutes > 0) {
    return `${minutes}분 ${secs}초`;
  }
};
