import { images } from '../../../assets';

export const FooterShard: React.FC = () => {
  const handleGitHubOnClick = () => {
    window.open('https://github.com/AlexandreFPGoncalves');
  };

  return (
    <img
      src={images.ghLogo}
      onClick={handleGitHubOnClick}
      className="cursor-pointer place-self-center align-bottom invert transition hover:-translate-y-[2px] hover:opacity-80"
    />
  );
};
