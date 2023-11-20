import prisma from "../services/database";

class database {
  async create(data: NotesType) {
    const note = await prisma.notes.create({
      data: data,
    });

    return note;
  }

  async findOne(id: number) {
    const note = await prisma.notes.findUnique({
      where: { id },
    });

    return note;
  }

  async update(id: number, data: NotesType) {
    const note = await prisma.notes.update({
      where: { id },
      data: data,
    });

    return note;
  }

  async delete(id: number) {
    const note = await prisma.notes.delete({
      where: { id },
    });

    return note;
  }
}

export default new database();
