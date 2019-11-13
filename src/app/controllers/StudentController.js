import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.json(student);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: 'Não foi possível criar o aluno',
      });
    }
  }

  async update(req, res) {
    try {
      const student = await Student.findOne({
        where: {
          id: req.params.id,
        },
      });

      const { id, name, email, age, weight, height } = await student.update(
        req.body
      );

      return res.json({
        id,
        name,
        email,
        age,
        weight,
        height,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: 'Não foi possível atualizar o aluno',
      });
    }
  }
}

export default new StudentController();
