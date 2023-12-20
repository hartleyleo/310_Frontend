# 310_Frontend

This program was created by Leon Hartley & Matthew Hayes as part of the URI CSC 310 Classes Final Project.

We decided on a data set, QBData, which is information about 12 legendary quarterbacks in history. 

To run this webapp:
1. Ensure NODE JS is installed and running on your local machine, download instructions can be found at: https://nodejs.org/en/download, verify it is installed correctly by running `node -v` in Terminal. If installed successfully it will display the current running version, if not it will display an error.
2. Clone this repository to your local machine.
3. In terminal, change directories into the my-app folder of this repository's folder: `cd my-app`, then install dependencies: `npm i`
4. Start up the server on your device with the following command while still in the same directory: `npm start`

Notes: 
- If an error message similar to "Unable to resolve 'chart.js/auto' " whilst trying to run `npm start`, ensure you're in the my-app directoy in Ternminal (refer to step 3), and run `npm install react-chartjs-2`. This will install the dependency that might not have copied over into the package.json file whilst cloning.
