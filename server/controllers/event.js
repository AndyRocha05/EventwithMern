const Event = require('../models/event');
const User = require('../models/user.model');

module.exports ={
    create : async (req,res) => {

        console.log(req.headers);
        // user = req.params;
        // id = user.id;
        const {title, type, date, time, endTime,id}= req.body;
        Event.create({
            title,
            type,
            date,
            time,
            endTime,
            user:id
        })
        .then(data =>User.findOneAndUpdate( {_id:id}, {$push:{events:data._id}}, {new: true, runValidators: true} )
            .then(data =>res.json({data:data,message:"success"})))
        .catch(err=> res.json({message:"error", errors: err.errors}))

    },
    getAllEvent: (req, res) => {
                Event.find()
                    .then(data => res.status(200).json({ message: "success", results: data }))
                    .catch(err => res.json({ message: "error", errors: err.errors }));
            },
    getAllUsers: (req, res) => {
                User.find()
                    .then(data => res.status(200).json({ message: "success", results: data }))
                    .catch(err => res.json({ message: "error", errors: err.errors }));
            },

}