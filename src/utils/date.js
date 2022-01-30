function getCurrentYearString() {
  const currentDate = new Date();
  return currentDate.getFullYear().toString();
}

function getYearString(date) {
  return date.getFullYear().toString();
}

function getCurrentMonth() {
  const currentDate = new Date();
  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
}

export { getCurrentYearString, getYearString, getCurrentMonth };
