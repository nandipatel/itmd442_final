var UserDB = require('../model/model');

// function to add an employee
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Can leave space empty!"});
        return;
    }

    // new user
    const user = new UserDB({
        name : req.body.name,
        email : req.body.email,
        department : req.body.department,
        position: req.body.position,
        status : req.body.status
    })

    // saving user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "An error occured trying to add an employee, try again!"
            });
        });
}

// showing an employee or all employees
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        UserDB.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "User with the id "+ id + "was not found."})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error occurred trying to retrieve user with id " + id})
            })
    }else{
        UserDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error occurred retriving user information" })
            })
    }
}

// Update an employee
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Space cannot be left empty when updating."})
    }
    const id = req.params.id;
    UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}!`})
            }else{
                //res.send(data)
                res.redirect('/')
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error updating the user's information!"})
        })
}

// Delete an employee
exports.delete = (req, res)=>{
    const id = req.params.id;
    UserDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}! Please try again, make sure id is correct!`})
            }else{
                res.send({
                    message : "User deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Error trying to delete user with id=" + id
            });
        });
}