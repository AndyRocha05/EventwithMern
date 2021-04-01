const  mongoose  = require("mongoose")
// near the top is a good place to group our imports
bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is Required"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        // adjust after for better security
        minlength: [2, "Password must be # of characters long and contain special characters"],
    },
    events:[
        {type: mongoose.Schema.Types.ObjectId,ref:'Event'}

    ]
},
{timestamps: true});


// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
})
// this should go after 
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    })
})
const User = mongoose.model('User',UserSchema);
module.exports = User;