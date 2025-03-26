import Course from "../models/course.model.js";

const CourseController = {
  create: async (req, res) => {
    try {
      let course = await Course.findOne({
        title: req.body.title,
      });
      if (course) {
        return res.status(400).json({
          error: true,
          message: "Curso ya existente",
        });
      }
      const newCourse = new Course(req.body);
      const data = await newCourse.save();
      res.status(201).json({
        course: data,
        error: false,
        message: "Curso creado",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: true,
        message: "Error al crear el curso",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await Course.find();
      res.status(200).json({
        courses: data,
        error: false,
        message: "Cursos encontrados",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: true,
        message: "Error al obtener los cursos",
      });
    }
  },

  getCourse: async (req, res) => {
    try {
      const data = await Course.findById(req.params.id);
      if (!data) {
        return res.status(404).json({
          error: true,
          message: "Curso no encontrado",
        });
      }
      res.status(200).json({
        course: data,
        error: false,
        message: "Curso encontrado",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: true,
        message: "Error al obtener el curso",
      });
    }
  },

  update: async (req, res) => {
    try {
      const data = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!data) {
        return res.status(404).json({
          error: true,
          message: "Curso no encontrado",
        });
      }
      res.status(200).json({
        course: data,
        error: false,
        message: "Curso actualizado",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: true,
        message: "Error al actualizar el curso",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const data = await Course.findByIdAndDelete(req.params.id);
      if (!data) {
        return res.status(404).json({
          error: true,
          message: "Curso no encontrado",
        });
      }
      res.status(200).json({
        course: data,
        error: false,
        message: "Curso eliminado",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: true,
        message: "Error al eliminar el curso",
      });
    }
  },
};

export default CourseController;
