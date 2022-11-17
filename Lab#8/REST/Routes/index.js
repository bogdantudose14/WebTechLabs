import express from 'express';

import { moviesRouter } from './movies.js';

//the role of this scripting file is to group multiple routers and mount them to
// different paths in the main app

const router = express.Router();
router.use('/movies', moviesRouter);
// router.use('/birds',birdsRouter) => if it would have existed and we would have imported it here

export { router as MainRouter };
