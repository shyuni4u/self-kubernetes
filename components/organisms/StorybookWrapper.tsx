import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../modules'
import Wrapper from './Wrapper';

const store = createStore(rootReducer);

export const StorybookWrapper: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Wrapper>{children}</Wrapper>
    </Provider>
  );
};

export default StorybookWrapper;