import { ToastContainer } from 'react-toastify';
import { shards } from './shards';
import 'react-toastify/dist/ReactToastify.css';

export const RandomNumGenCore = () => {
  return (
    <div className="mx-2 flex max-w-xl flex-col">
      <ToastContainer />
      <div className="flex h-full flex-col justify-center">
        <shards.InputsShard />
      </div>
      <shards.FooterShard />
    </div>
  );
};
