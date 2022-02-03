import PropTypes from 'prop-types';


const Container = ({ children }) => (
  <div>{children}</div>
);

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;