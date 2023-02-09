class User {
  skills!: string[];

  addSkill(skills: string[]): void
  addSkill(skills: string): void
  addSkill(skills: string | string[]): void {
    if (Array.isArray(skills)) {
      this.skills.concat(skills);
    } else {
      this.skills.push(skills);
    }
  }
}

new User().addSkill([]);