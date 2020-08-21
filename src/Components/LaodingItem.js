import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const LoadingItem = () => {
  return (
    <div>
      <SkeletonTheme color="#e8e8e8" highlightColor="#d4d4d4">
        <p>
          <Skeleton count={1} style={{ height: 20 }} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default LoadingItem;
