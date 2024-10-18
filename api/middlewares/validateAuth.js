
const { check, validationResult } = require("express-validator");

const validateAuth = [
  check('firstname').not().isEmpty().withMessage('First name is required'),
  check('lastname').not().isEmpty().withMessage('Last name is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('phoneno').not().isEmpty().withMessage('Phone number is required'),
  check('message').not().isEmpty().withMessage('Message is required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateAuth;
