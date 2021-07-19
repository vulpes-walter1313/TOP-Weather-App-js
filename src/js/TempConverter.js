class TempConverter {
  static ktoc(kunits) {
    return kunits - 273.15;
  }
  static ktof(kunits) {
    return (kunits * 1.8) - 459.67;
  }
}

export default TempConverter;