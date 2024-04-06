import profile from '../../assets/profile1.png'
const Header = () => {
    return (
        <div className='flex justify-between p-10 items-center border-b-4'>
          <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
          <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;