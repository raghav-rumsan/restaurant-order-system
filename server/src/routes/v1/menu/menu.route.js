const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const menuValidation = require('../../../validations/menu/menu.validation');
const { menuController } = require('../../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('manageMenuItems'), validate(menuValidation.createMenu), menuController.createMenu)
  .get(auth('manageMenuItems'), validate(menuValidation.getMenu), menuController.getMenu);

router
  .route('/:menuId')
  .get(auth('manageMenuItems'), validate(menuValidation.getMenuItem), menuController.getMenuItem)
  .patch(auth('manageMenuItems'), validate(menuValidation.updateMenuItem), menuController.updateMenuItem)
  .delete(auth('manageMenuItems'), validate(menuValidation.deleteMenuItem, menuController.deleteMenuItem));

module.exports = router;
