const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { menuService } = require('../../services');

const createMenu = catchAsync(async (req, res) => {
  const menu = await menuService.createMenu(req.body);
  res.status(httpStatus.CREATED).send(menu);
});

const getMenu = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['dishPreference', 'drinkPreference']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);

  const result = await menuService.queryMenu(filter, options);
  res.send(result);
});

const getMenuItem = catchAsync(async (req, res) => {
  const menuItem = await menuService.getMenuItemsById(req.params.menuId);
  if (!menuItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu Item not found');
  }
  res.send(menuItem);
});

const updateMenuItem = catchAsync(async (req, res) => {
  const menu = await menuService.updateMenuItemById(req.params.menuId, req.body);
  res.send(menu);
});

const deleteMenuItem = catchAsync(async (req, res) => {
  await menuService.deleteMenuItemById(req.params.menuId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createMenu,
  getMenu,
  getMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
