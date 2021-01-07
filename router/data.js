
// Import contact controller

let router = require('express').Router();
var caseController  = require("../controller/controller")

router.get('/', (req, res)=>{
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    })
});

router.route('/cases')
    .get(caseController.index)
    .post(caseController.new)

router.route('/cases/:case_id')
    .get(caseController.view)
    .patch(caseController.update)
    .put(caseController.update)
    .delete(caseController.delete)

module.exports = router;
