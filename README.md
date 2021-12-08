## LabenuSystem:

Você estuda na Labenu_ há tanto tempo que já parecem anos, não é? Então, hoje, vamos pedir para criar um sistema que represente o básico da nossa organização.

Ele deve possuir, ao menos, as 3 entidades importantes:

### Turma

- Toda turma é composta das seguintes características: id, nome, docentes, estudantes e módulo atual em que a turma está.
- Pode assumir um valor entre 1 a 6 nas turmas ativas, ou `**0**`, indicando que as aulas dessa turma ainda não começaram (deve iniciar como **`0`**)

### Estudantes

- Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento, id da turma da pessoa e os hobbies.

### Docente

- Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento, id da turma da pessoa e todas as especialidades dele. Há 5 especialidades: JS, CSS, React, Typescript, Programação Orientada a Objetos (POO).

##

- As funcionalidades básicas são:

→ Criar turma;

→ Buscar turmas ativas;

→ Mudar turma de módulo

##

→ Criar estudante;

→ Buscar estudantes através do nome;

→ Mudar estudante de turma;

##

→ Criar docente;

→ Buscar todas as pessoas docentes;

→ Mudar docente de turma;
