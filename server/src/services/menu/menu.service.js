const httpStatus = require('http-status');
const { Menu } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * @param {Object} menuBody
 * @returns {Promise<Menu>}
 */

const createMenu = async (menuBody) => {
  const menu = await Menu.create(menuBody);
  return menu;
};

/**
 * Query for Menu
 * @param {Object} filter
 * @param {Object} options
 * @param {string} [options.sortBy] -asc/desc
 * @param {number} [options.limit]
 * @param {number} [options.page]
 * @returns {Promise<QueryResult>}
 */

const queryMenu = async (filter, options) => {
  const menuItems = await Menu.paginate(filter, options);
  return menuItems;
};

/**
 * Get Menu Items by id
 * @param {ObjectId} id
 * @returns {Promise<Menu>}
 */

const getMenuItemsById = async (id) => {
  return Menu.findById(id);
};

/**
 * @param {ObjectId} menuId
 * @param {Object} updateBody
 * @returns {Promise<Menu>}
 */

const updateMenuItemById = async (menuId, updateBody) => {
  const menu = await getMenuItemsById(menuId);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu Item not Found');
  }
  Object.assign(menu, updateBody);
  await menu.save();
  return menu;
};

/**
 * Delete menu items by id
 * @param {ObjectId} menuId
 * @returns {Promise<Menu>}
 */

const deleteMenuItemById = async (menuId) => {
  const menu = await getMenuItemsById(menuId);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu Item not found');
  }
  await menu.remove();
  return menu;
};

module.exports = {
  createMenu,
  queryMenu,
  getMenuItemsById,
  updateMenuItemById,
  deleteMenuItemById,
};
