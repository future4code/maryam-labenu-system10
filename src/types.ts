/// Classes (Turma)

export abstract class User {
  constructor(
    protected id: string,
    protected name: string,
    protected email: string,
    protected birthdate: string,
    protected classId: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getBirthdate(): string {
    return this.birthdate;
  }

  public getClassId(): string {
    return this.classId;
  }
}

export type Classes = {
  id: string;
  name: string;
  teachers: string;
  students: string;
  module: string;
};

/// Student (Estudante)

export class Students extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    birthdate: string,
    classId: string,
    protected hobby: string[]
  ) {
    super(id, name, email, birthdate, classId);
  }

  public getHobby(): string[] {
    return this.hobby;
  }
}

/// Teachers (Docentes)

export class Teacher extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    birthdate: string,
    classId: string,
    protected specialties: string[]
  ) {
    super(id, name, email, birthdate, classId);
  }

    public getSpecialties(): string[] {
        return this.specialties
    }
}

export type teacherType = {
    id:string,
    name:string,
    email:string,
    birthdate:string,
    classId:string,
    specialties:string[]

}
