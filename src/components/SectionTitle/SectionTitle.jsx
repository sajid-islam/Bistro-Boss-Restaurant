import PropTypes from 'prop-types'

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='text-center my-10 md:max-w-sm mx-auto'>
            <p className='text-[#D99904]'>---{subHeading}---</p>
            <h1 className='uppercase text-3xl md:text-4xl text-[#151515] border-y-2 my-2 py-2 '>{heading}</h1>
        </div>
    );
};

export default SectionTitle;
SectionTitle.propTypes={
    subHeading:PropTypes.string,
    heading:PropTypes.string
}