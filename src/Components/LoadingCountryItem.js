import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const LoadingCountryItem = () => {
  return (
    <div>
      <SkeletonTheme color="#e8e8e8" highlightColor="#d4d4d4">
        <p>
          <Skeleton count={3} style={{ marginTop: 10, height: 40 }} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default LoadingCountryItem;
