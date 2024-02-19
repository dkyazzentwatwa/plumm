import { render, fireEvent } from '@testing-library/react-native';
import PayButton from '../components/payscreen/PayButton';

test('PayButton onPress event', () => {
  const mockOnPress = jest.fn();
  const { getByText } = render(<PayButton onPress={mockOnPress} title="Pay" />);
  fireEvent.press(getByText('Pay'));
  expect(mockOnPress).toHaveBeenCalled();
});
