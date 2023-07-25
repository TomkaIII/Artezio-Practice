class OfficePlanController{

    async getAll(req,res){
         (req,res) => {
            res.json({message: 'office plan'});
        }
    }

    async get(req,res){

    }
}

module.exports = new OfficePlanController()