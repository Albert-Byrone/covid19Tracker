const Case = require('../model/coviddata');



// Handle index actions

// get all the cases
exports.index =(req, res) =>{
    Case.get((err, cases)=>{
        console.log("=============",cases);
        if (err){
            res.json({
                status: "An error occured",
                messge: err
            })
        }
        res.json(
            {
                data: cases
            }
        )
    });
};

//handle creating a new case
exports.new = (req, res)=>{
    var myCase = new Case();
    myCase.date = req.body.date;
    myCase.country = req.body.country;
    myCase.state = req.body.state;
    myCase.case = req.body.case;
    myCase.death = req.body.death;


    //save the data and check for errors
     myData.save((err)=>{
        if(err) 
            res.json(err)
        res.json({
            message: "New case added",
            data: myCase
        });
     });
};


//handle viewing one case
exports.view = (req, res)=>{
    Case.findById(req.params.case_id, (err, casee)=>{
        if(err)
            res.send(err)
        res.json({
            message: "Contact list loading",
            data: casee
        })
    })
};


//handle update the cases in the database
exports.update =  (req, res) => {
    Case.findById(req.params.model_id, (err, casee) =>{
            if (err)
                res.send(err);
            casee.date = req.body.date ? req.body.date : casee.date;
            casee.country = req.body.country;
            casee.state = req.body.state;
            casee.case = req.body.case;
            casee.death = req.body.death;

            // save the contact and check for errors
            casee.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Case  Info updated',
                    data: casee
                });
            });
        });
    };

// Handle delete contact
exports.delete =  (req, res)=> {
    Case.remove({
        _id: req.params.case_id
    },(err, casee)=> {
        if (err)
            res.send(err);
        res.json({
                    status: "success",
                    message: 'Case deleted'
                });
            });
};
