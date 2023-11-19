import prisma from "../services/database";

type UserWithoutNotes = Omit<UserType, "notes">;

class database {
  async create(data: UserWithoutNotes) {
    const user = await prisma.users.create({
      data: data,
    });

    return user;
  }

  async findOne(id: number) {
    const user = await prisma.users.findUnique({
      where: { id },
      include: {
        notes: true,
      },
    });

    return user;
  }

  async update(id: number, data: UserWithoutNotes) {
    const user = await prisma.users.update({
      where: { id },
      data: data,
    });

    return user;
  }

  async delete(id: number) {
    const user = await prisma.users.delete({
      where: { id },
    });

    return user;
  }
}

export default new database();
