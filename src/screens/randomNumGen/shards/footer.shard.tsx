import { images } from '../../../assets';

export const FooterShard: React.FC = () => {
  const handleGitHubOnClick = () => {
    window.open('https://github.com/AlexandreFPGoncalves');
  };

  return (
    <img
      src={images.ghLogo}
      onClick={handleGitHubOnClick}
      className="mb-[5%] cursor-pointer place-self-center invert transition hover:-translate-y-[2px] hover:opacity-80"
    />
  );
};
