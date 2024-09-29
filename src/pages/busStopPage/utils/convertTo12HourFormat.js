const convertTo12HourFormat = ({ hours, minutes }) => {
  const ampm = hours >= 12 ? '오후' : '오전';
  let twelveHour = hours % 12 || 12;
  if (twelveHour < 10) {
    twelveHour = `0${twelveHour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${ampm} ${twelveHour}:${minutes} `;
};
export default convertTo12HourFormat;
