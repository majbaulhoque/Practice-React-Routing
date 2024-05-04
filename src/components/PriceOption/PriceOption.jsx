import PropTypes from  'prop-types'
import Feature from '../../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, prices, features} = option;
    return (
        <div className='bg-blue-600 rounded-md p-4 text-white w-96'>
            <h2 className='text-center'>
                <span className='text-7xl font-bold'>{prices}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-3xl text-center my-6'>{name}</h4>
            <div className='pl-6 '>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <div className='flex justify-end'>
            <button className='mt-12 bg-green-600 px-4 py-4 rounded-md font-bold self-end'>Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;