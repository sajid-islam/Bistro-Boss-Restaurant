import PropTypes from 'prop-types'
const Cover = ({ img,title,description }) => {
    return (
        <div style={{ backgroundImage: `url('${img}')` }} className='h-[620px] mb-10 flex flex-col justify-center items-center bg-fixed'>
            <div className='bg-[#15151599]  text-white h-2/4 md:w-2/3 px-5 text-center flex flex-col justify-center space-y-3'>
                <h4 className="text-3xl uppercase font-cinzel  font-bold">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Cover;
Cover.propTypes = {
    img: PropTypes.any,
    title: PropTypes.string,
    description:PropTypes.string
}