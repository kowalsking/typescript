class User {
  skills!: string[];

  addSkill(skills: string[]): void
  addSkill(skills: string): void
  addSkill(skills: string | string[]): void {
    if (Array.isArray(skills)) {
      this.skills = skills;
    }
  }

}