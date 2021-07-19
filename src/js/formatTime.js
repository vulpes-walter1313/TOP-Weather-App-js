class FormatTime {
  static format(timestamp) {
    const time = new Date(timestamp * 1000);
    const hourNum = time.getHours();
    const { hour, ampm } = FormatTime.getHourInfo(hourNum);
    const minutes = time.getMinutes();
    const hourString = hour.length === 1 ? `0${hour}` : `${hour}`
    return `${hourString}:${minutes} ${ampm}`;
  }

  static getHourInfo(hourNum) {
    let hour;
    let ampm;
    if (hourNum === 0) {
      hour = '12';
      ampm = 'AM';
    } else if (hourNum > 12) {
      hour = `${hourNum - 12}`;
      ampm = 'PM'
    } else {
      hour = `${hourNum}`;
      ampm = 'AM'
    }
    return {hour, ampm};
  }
}

export default FormatTime;