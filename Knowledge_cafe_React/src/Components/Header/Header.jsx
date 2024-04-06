import profile from '../../assets/profile1.png'
const Header = () => {
    return (
        <header className='flex justify-between p-10 items-center border-b-4 max-w-7xl mx-auto'>
          <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
          <img src={profile} alt="" />
            
        </header>
    );
};

export default Header;