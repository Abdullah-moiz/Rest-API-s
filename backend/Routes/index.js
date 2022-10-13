import express from "express";
const Router = express.Router();
import {assessoriesData ,getassessoriesData , deleteassessoriesData, machineData,getGainerdata,deleteGainerData , searchmachineid , getmachineIdData ,deletemachineData , GainerData} from '../controller/index.js'


//Router for machines Data

Router.post('/machinesData' , machineData)
Router.post('/machineIdSearch',searchmachineid)
Router.get('/machineData',getmachineIdData)


// Router to delete Data from different schemas
Router.delete('/deletemachineData',deletemachineData)
Router.delete('/deleteGainerData',deleteGainerData)
Router.delete('/deleteassessoriesData',deleteassessoriesData)






//Router for gym mass & weight gainer
Router.post('/gainerData' , GainerData)
Router.get('/getGainerData' , getGainerdata)



//Router for guy assessories
Router.post('/assessoriesData' , assessoriesData)
Router.get('/getassessoriesData' , getassessoriesData)

export default Router;