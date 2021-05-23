import { Form, Select } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setDataValue } from "../actions";
import {
  selectDishPreferences,
  selectDishTypes,
  selectFoodPreferences,
  selectFoodTypes,
  selectDrinkPreferences,
} from "../selectors";

const { Option } = Select;

const SelectInput = ({ optionsKey, setDataValue, ...props }) => {
  const handleSelect = (value) => {
    setDataValue({
      key: props.name,
      value,
    });
  };

  return (
    <Form.Item {...props}>
      <Select onChange={handleSelect} {...props} opt>
        {props[optionsKey].map(({ label, value }) => (
          <Option value={value}>{label}</Option>
        ))}
      </Select>
    </Form.Item>
  );
};

const mapStateToProps = createStructuredSelector({
  foodTypes: selectFoodTypes,
  foodPreferences: selectFoodPreferences,
  dishTypes: selectDishTypes,
  dishPreferences: selectDishPreferences,
  drinkPreferences: selectDrinkPreferences,
});

export default connect(mapStateToProps, { setDataValue })(SelectInput);
