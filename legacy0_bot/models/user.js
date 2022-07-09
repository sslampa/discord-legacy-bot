module.exports = class User {
  name = '';
  location = 'Washington';
  cards = [];

  constructor(name) {
    this.name = name;
  }

  info() {
    return `\`\`\`
Name: ${this.name}
Location: ${this.location}
Cards: ${this.cards.join(', ')}
\`\`\``;
  }
}