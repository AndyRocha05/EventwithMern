// const Task = require('../models/user.model')


// module.exports= {
//     create: (req, res) => {
//         Task.exists({ name: req.body.name })
//             .then(TaskExists => {
//                 if(TaskExists){
//                     return Promise.reject({ errors: { name: { message: "A Task with that name already exists in the database" } } });
//                 } else {
//                     return Task.create(req.body);
//                 }
//             })
          
//             .then(data => res.status(200).json({ message: "success", results: data }))
//             .catch(err => res.json({ message: "error", errors: err.errors }));
//     },
//     addSkill: (req, res) => {
//         Task.findOneAndUpdate({ _id: req.params.id }, { $push: { quotes: req.body } }, { new: true, runValidators: true })
//             .then(data => res.status(200).json({ message: "success", results: data }))
//             .catch(err => res.json({ message: "error", errors: err.errors }));
//     },
//     // R
//     getAll: (req, res) => {
//         Task.find()
//             .then(data => res.status(200).json({ message: "success", results: data }))
//             .catch(err => res.json({ message: "error", errors: err.errors }));
//     },
//     getOne: (req, res) => {
//         Task.findById(req.params.id)
//             .then(data => res.status(200).json({ message: "success", results: data }))
//             .catch(err => res.json({ message: "error", errors: err.errors }));
//     },
//     // U
//     update: (req, res) => {
//         Task.findOne({ name: req.body.name })
//             .then(data => {
//                 if(data && data._id != req.params.id) {
//                     return Promise.reject({ errors: { name: { message: "There's another Task with that name in the database" } } }) ;
//                 }
//                 else {
//                   return Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
//                 }
//             })
//                     .then(data => res.status(200).json({ message: "success", results: data }))
//                     .catch(err => 
//                             res.json({ message: "error", errors: err.errors })
                    
//                     );
         
//     },
//     // D
//     delete: (req, res) => {
//         Task.remove({ _id: req.params.id })
//             .then(data => res.status(200).json({ message: "success", results: data }))
//             .catch(err => res.json({ message: "error", errors: err }));
//     },
//     deleteQuote: (req, res) => {
//         Task.findOneAndUpdate({ _id: req.params.id }, { $pull: { skill: {_id:req.params.Qid} } }, { new: true, runValidators: true })
//             .then(data => res.status(200).json({ message: "success", results: data }))
//             .catch(err => res.json({ message: "error", errors: err.errors }));
//     },
//     updateLikes: (req, res) => {
//         Task.findOneAndUpdate({"quotes._id": req.params.Qid }, { $inc: { "quotes.$.likes": 1 } }, { new: true, runValidators: true })
//             .then(data => res.status(200).json({ message: "success", results: data }))
//             .catch(err => res.json({ message: "error", errors: err.errors }));
//     },
  
// }