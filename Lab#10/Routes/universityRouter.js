import express from "express";
import { University } from "../Models/university.js";
import { Student } from "../Models/student.js";
import { Course } from "../Models/course.js";

const universityRouter = express.Router();

/**
 * GET all the universities from the database.
 */
universityRouter.get("/allUniversities", async (request, response, next) => {
  try {
    const universities = await University.findAll();
    if (universities.length > 0) {
      response.json(universities);
    } else {
      response.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

/**
 * POST a new university to the database.
 */
universityRouter.post("/addNewUniversity", async (request, response, next) => {
  try {
    const university = await University.create(request.body);
    response.status(201).location(university.id).send();
  } catch (error) {
    next(error);
  }
});

/**
 * GET a specific university's students.
 */
universityRouter.get(
  "/:universityId/students",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const students = await university.getStudents();
        if (students.length > 0) {
          response.json(students);
        } else {
          response.sendStatus(204);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST a new student into a university.
 */
universityRouter.post(
  "/:universityId/students",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const student = await Student.create(request.body);
        university.addStudent(student);
        await university.save(); //If you want to update a specific set of fields, you can use update(),
        //otherwise save() will also persist any other changes that have been made on this instance
        response.status(201).location(student.id).send();
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET a student by id from a university by id.
 */
universityRouter.get(
  "/:universityId/students/:studentId",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const students = await university.getStudents({
          where: { id: request.params.studentId },
        });
        const student = students.shift();
        if (student) {
          response.json(student);
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * PUT to update a student from a university.
 */
universityRouter.put(
  "/:universityId/students/:studentId",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const students = await university.getStudents({
          where: { id: request.params.studentId },
        });
        const student = students.shift();
        if (student) {
          await student.update(request.body);
          response.status(204);
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * DELETE a student from a university.
 */
universityRouter.delete(
  "/:universityId/students/:studentId",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const students = await university.getStudents({
          where: { id: request.params.studentId },
        });
        const student = students.shift();
        if (student) {
          await student.destroy();
          response.sendStatus(204);
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET the list of courses.
 */
universityRouter.get(
  "/:universityId/courses",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const courses = await university.getCourses();
        if (courses.length > 0) {
          response.json(courses);
        } else {
          response.sendStatus(204);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET a course by id.
 */
universityRouter.get(
  "/:universityId/courses/:courseId",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const courses = await university.getCourses({
          where: { id: request.params.courseId },
        });
        const course = courses.shift();
        if (course) {
          response.json(course);
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST a new course.
 */
universityRouter.post(
  "/:universityId/courses",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const course = await Course.create(request.body);
        university.addCourse(course);
        await university.save();
        response.status(201).location(course.id).send();
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * PUT to update a course.
 */
universityRouter.put(
  "/:universityId/courses/:courseId",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const courses = await university.getCourses({
          where: { id: request.params.courseId },
        });
        const course = courses.shift();
        if (course) {
          await course.update(request.body);
          response.sendStatus(204);
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * DELETE a course.
 */
universityRouter.delete(
  "/:universityId/courses/:courseId",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const courses = await university.getCourses({
          where: { id: request.params.courseId },
        });
        const course = courses.shift();
        if (course) {
          await course.destroy();
          response.sendStatus(204);
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET student enrollments to courses.
 */
universityRouter.get(
  "/:universityId/students/:studentId/enrollments",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const students = await university.getStudents({
          where: { id: request.params.studentId },
        });
        const student = students.shift();
        if (student) {
          const courses = await student.getCourses({ attributes: ["id"] });
          if (courses.length > 0) {
            response.json(courses);
          } else {
            response.sendStatus(204);
          }
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST to enroll a student to a course.
 */
universityRouter.post(
  "/:universityId/students/:studentId/enrollments/:courseId",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const students = await university.getStudents({
          where: { id: request.params.studentId },
        });
        const student = students.shift();
        const courses = await university.getCourses({
          where: { id: request.params.courseId },
        });
        const course = courses.shift();
        if (student && course) {
          student.addCourse(course);
          student.save();
          response.sendStatus(204);
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET the list of enrolled students to a course.
 */
universityRouter.get(
  "/:universityId/courses/:courseId/enrollments",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const courses = await university.getCourses({
          where: { id: request.params.courseId },
        });
        const course = courses.shift();
        if (course) {
          const students = await course.getStudents({ attributes: ["id"] });
          if (students.length > 0) {
            response.json(students);
          } else {
            response.sendStatus(204);
          }
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST to enroll a student to a course.
 */
universityRouter.post(
  "/:universityId/courses/:courseId/enrollments/:studentId",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const courses = await university.getCourses({
          where: { id: request.params.courseId },
        });
        const course = courses.shift();
        const students = await university.getStudents({
          where: { id: request.params.studentId },
        });
        const student = students.shift();
        if (course && student) {
          course.addStudent(student);
          course.save();
          response.sendStatus(204);
        } else {
          response.sendStatus(400);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * DELETE student enrollement to a course.
 */
universityRouter.delete(
  "/:universityId/courses/:courseId/enrollments/:studentId",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const courses = await university.getCourses({
          where: { id: request.params.courseId },
        });
        const course = courses.shift();
        const students = await university.getStudents({
          where: { id: request.params.studentId },
        });
        const student = students.shift();
        if (student && course) {
          course.removeStudent(student);
          course.save();
          response.sendStatus(204);
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);
export { universityRouter };
