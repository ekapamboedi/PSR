const router = require('express').Router();
const ApiController = require('../controllers/ApiController');

router.get('/login', ApiController.login);
router.get('/sign-up', ApiController.signUp);

module.exports = router;