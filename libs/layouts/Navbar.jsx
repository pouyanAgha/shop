import LiItem from './LiItem';

const Navbar = () => {
  return (
    <div>
      <nav className="flex h-[5vh] items-center justify-between bg-black px-16 text-3xl text-white">
        <LiItem
          text1="about us"
          text2="help"
          text3="instagram"
          text4="telegram"
          text5="twitter"
        >
          menu
        </LiItem>
        <div className="flex gap-3">
          <LiItem
            text1="tshirt"
            text2="hat"
            text3="shoes"
            text4="skirt"
            text5="Pants"
          >
            clothing
          </LiItem>
          <LiItem
            text1="Apple"
            text2="Samsung"
            text3="Huawei"
            text4="Xiaomi"
            text5="Nokia"
          >
            phone
          </LiItem>
          <LiItem
            text1="Dell"
            text2="HP"
            text3="Lenovo"
            text4="Apple"
            text5="Asus"
          >
            laptop
          </LiItem>
          <LiItem
            text1="watch"
            text2="Glasses"
            text3="perfume"
            text4="bracelet"
            text5="Necklaces"
          >
            Other
          </LiItem>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
