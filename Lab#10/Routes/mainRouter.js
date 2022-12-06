import express from "express";
import { sequelize } from "../sequelize.js";
import { universityRouter } from "./universityRouter.js";

import { University } from "../Models/university.js";
import { Student } from "../Models/student.js";
import { Course } from "../Models/course.js";
// the role of this scripting file is to group multiple routers and mount them to
// different paths in the main app

const router = express.Router();
//Mount the universitiesRouter
router.use("/universities", universityRouter);

/**
 * Create a special GET endpoint so that when it is called it will
 * sync our database with the models.
 */
router.put("/createDatabase", async (request, response, next) => {
  try {
    await sequelize.sync({ force: true });
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

// import data from JSON object
router.post("/data", async (request, response, next) => {
  try {
    const registry = {}; //temporary variable in order to resolve the enrollments
    for (let u of request.body) {
      const university = await University.create(u);
      for (let s of u.students) {
        const student = await Student.create(s);
        registry[s.key] = student;
        university.addStudent(student);
      }
      for (let c of u.courses) {
        const course = await Course.create(c);
        registry[c.key] = course;
        university.addCourse(course);
      }
      for (let e of u.enrollments) {
        registry[e.courseKey].addStudent(registry[e.studentKey]);
        await registry[e.courseKey].save();
      }
      await university.save();
    }
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

//export data from database
router.get("/data", async (request, response, next) => {
  try {
    const result = [];
    for (let u of await University.findAll()) {
      const university = {
        name: u.name,
        students: [],
        courses: [],
        enrollments: [],
      };
      for (let c of await u.getCourses()) {
        university.courses.push({
          key: c.id,
          name: c.name,
        });
        for (let s of await c.getStudents()) {
          university.enrollments.push({
            courseKey: c.id,
            studentKey: s.id,
          });
        }
      }
      for (let s of await u.getStudents()) {
        university.students.push({
          key: s.id,
          firstName: s.firstName,
          lastName: s.lastName,
        });
      }
      result.push(university);
    }
    if (result.length > 0) {
      response.json(result);
    } else {
      response.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

export { router as mainRouter };
