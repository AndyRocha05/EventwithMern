const User= require('../models/user.model');

module.exports ={
    index: (req,res) => {
        User.find()
            .then(data => res.json({results:data}))
            .catch(err =>res.json(err.errors))
    }
}