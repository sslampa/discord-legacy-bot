module.exports = class Action {
  name = '';
  desc = '';

  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
  }

  info() {
    return `\`\`\`
Name: ${this.name}
Desc: ${this.desc}
\`\`\``;
  }
}