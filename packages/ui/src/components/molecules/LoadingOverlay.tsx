import { FC } from 'react';

export const LoadingOverlay: FC<{ message: string }> = ({ message }) => {
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center">
        <div className="animate-slideDown mt-3 rounded-full bg-gray-900 px-4 py-1 text-xs font-medium text-white shadow-lg dark:bg-gray-800">
          {message}
        </div>
      </div>
      <div className="relative z-30 flex min-h-[40vh] items-center justify-center">
        <div className="animate-pulse rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          Please wait
        </div>
      </div>
    </>
  );
};
