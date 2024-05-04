import PropTypes from  'prop-types'
import { FaCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div className=''>
            <p className='flex items-center'>
                <FaCheckCircle className='mr-2'/> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;