import Character from "./Character";

export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(member) {
    if (member instanceof Character && this.members.has(member) === false) {
      return this.members.add(member);
    }
      throw new Error('Unable to add')
  }
  addAll(...members) {
    members.forEach((member) => {
      return this.members.add(member)
    })
  }
  toArray() {
    return Array.from(this.members);
  }
}