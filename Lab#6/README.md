The dependencies are included in the package.json file provided by me so you can either install them manually
by running:

           npm install express;
           npm install body-parser;
           npm install cors;

or by simply running:

          npm install;

=> this will look inside the package.json file and install the
dependencies found in the "dependencies" object.

An alternative for fetching inside a node runtime environment can be found in `node-fetch.js`.
This can be used by those who ==do not have a version of node >= 18.0.0== and encounter an error with fetch API due to old node version.
