import startupModel from "../models/startupModel.js";

class StartupController {
  getAll = async (req, res) => {
    try {
      const startups = await startupModel.getAll();
      res.json(startups);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar startups" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const startup = await startupModel.getById(Number(id));
      if (!startup) {
        return res.status(404).json({ erro: "Startup não encontrada" });
      }
      res.json(startup);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar startup" });
    }
  };

  create = async (req, res) => {
    const { 
      title,
      description,
      date,
      location
    } = req.body;
    // const description = req.body.description;
    try {
      if (!title || !description || !date || !location) {
        return res.status(400).json({ erro: "Descrição é obrigatória" });
      }

      const novaStartup = await startupModel.create(title, description, date, location);
      res.status(201).json(novaStartup);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar startup" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { concluida, description } = req.body;

    try {
      const startupAtualizada = await startupModel.update(
        Number(id),
        concluida,
        description
      );

      if (!startupAtualizada) {
        return res.status(404).json({ erro: "Startup não encontrada!" });
      }

      res.json(startupAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar startup!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await startupModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }

      res.status(200).send({ message: "Tarefa deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir startup!" });
    }
  };
}
export default new StartupController();
