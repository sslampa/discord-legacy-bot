module.exports = class ThreatCard {
  city = '';
  name = '';
  desc = '';

  constructor(city, name, desc) {
    this.city = city;
    this.name = name;
    this.desc = desc;
  }

  info() {
    return `
\`\`\`
City: ${this.city}
Incident Name: ${this.name}
Incident Desc: ${this.desc}
\`\`\`
    `
  }
}