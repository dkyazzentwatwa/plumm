import { Button } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

function PayButton({ onPress, title }) {
  return (
    <Button size="large"  style={styles.payButton} onPress={onPress}>
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  payButton: {
    borderRadius: 30,
    width: 120,
    height: 50,
  },
});

export default PayButton

/*
describe('PayButton', () => {
  it('renders the button with the correct title', () => {
    const mockOnPress = jest.fn();
    const title = 'Pay Now';
    const wrapper = shallow(<PayButton onPress={mockOnPress} title={title} />);
    expect(wrapper.find('Button').prop('onPress')).toEqual(mockOnPress);
    expect(wrapper.find('Button').prop('children')).toEqual(title);
  });
});
*/