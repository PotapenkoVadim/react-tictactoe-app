import React from 'react';
export const PlayerIcon = ({ icon, move }) => (
  <i data-move={ move } className={ `fa ${icon}` }></i>
);