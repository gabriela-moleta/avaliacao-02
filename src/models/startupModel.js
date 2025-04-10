import prisma from "../../prisma/client.js";

class StartupModel {
  getAll = async () => {
    return await prisma.startup.findMany();
  };

  getById = async (id) => {
    return await prisma.startup.findUnique({
      where: { id },
    });
  };

  create = async (title, description, date, location) => {
    return await prisma.startup.create({
      data: {
        title,
        description,
        date,
        location,

      },
    });
  };

  update = async (id, concluida, description) => {
    try {
      const startup = await prisma.startup.update({
        where: { id },
        data: {
          concluida: concluida !== undefined ? concluida : true,
          description,
        },
      });

      return startup;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const startupDeletada = await prisma.startup.delete({
        where: { id },
      });

      return startupDeletada;
    } catch (error) {
      console.log("Erro ao deletar a startup!", error);
      throw error;
    }
  };
}
export default new StartupModel();
