module.exports = class PlayerCard {
  city = '';
  country = '';
  continent = '';
  affiliation = '';

  constructor(city, country, continent, affiliation) {
    this.city = city;
    this.country = country;
    this.continent = continent;
    this.affiliation = affiliation;
  }

  info() {
    return `
\`\`\`
Place: ${this.city}, ${this.country}
Continent: ${this.continent}
Affiliation: ${this.affiliation}
\`\`\`
    `
  }
}