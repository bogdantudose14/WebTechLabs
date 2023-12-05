import express from "express";
import { sequelize } from "../sequelize.js";
import { universityRouter } from "./universityRouter.js";

import { University } from "../Models/university.js";
import { Student } from "../Models/student.js";
import { Course } from "../Models/course.js";

// ********************
// The role of this scripting file is
// to group multiple routers and mount them to
// different paths in the main app
// ********************

const router = express.Router();

// Mount the universitiesRouter => all the routes defined there will start
// with /universities/..

router.use("/universities", universityRouter);

/**
 * Create a special GET endpoint so that when it is called it will
 * sync our database with the models.
 */
router.put("/createDatabase", async (request, response, next) => {
  try {
    await sequelize.sync({ force: true }); // force:true will drop the tables first
    // call this endpoint to create the tables first => PUT http://localhost:5001/api/createDatabase
    response.sendStatus(204); // 204-No Content Status Code
  } catch (error) {
    next(error); // use the next optional parameter
    // to pass control to the next middleware function if defined (it is, in app.js)
  }
});

// import data from JSON object
// call POST on http://localhost:5001/data
router.post("/data", async (request, response, next) => {
  try {
    const registry = {}; //temporary variable in order to resolve the enrollments
    // send the data inside data.json inside the request body
    // of a POST method => req/ body/ select "raw" / select "JSON" not "TEXT"

    for (let u of request.body) {
      // the objects inside the array would be universities
      const university = await University.create(u);
      for (let s of u.students) {
        // iterate through the "students" array
        const student = await Student.create(s);
        registry[s.key] = student;
        // create the link with the university
        // this will add the universityId attribute to the new student record
        university.addStudent(student); // sequelize names the method using 'add' + *uppercase modelName*
      }
      for (let c of u.courses) {
        const course = await Course.create(c);
        registry[c.key] = course;
        university.addCourse(course); // sequelize names the method using 'add' + *uppercase modelName*
      }
      for (let e of u.enrollments) {
        registry[e.courseKey].addStudent(registry[e.studentKey]);
        await registry[e.courseKey].save();
      }
      await university.save(); // save the status
    }
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

//export data from database by calling a GET on http://localhost:5001/api/data
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
