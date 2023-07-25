class EmployeesController{
    async registration(req,res){

    }

    async getAll(req,res){
        (req,res) => res.json({message: 'Employees'});
    }

    async get(req,res){
        (req,res) => res.json({message: 'Employees'});
    }
}

module.exports = new EmployeesController()
