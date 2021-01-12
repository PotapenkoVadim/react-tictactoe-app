import React from 'react';
export const WinnerDisplay = ({ player, win }) => (
  <div className='row'>
    <div className='col'>
      <p className={`text-center h2 text-${win ? 'success' : 'danger'} mt-5`}>Won { player }!</p>
    </div>
  </div>
);