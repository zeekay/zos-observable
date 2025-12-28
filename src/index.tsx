import React from 'react';

interface ObservableProps { onClose: () => void; }

const Observable: React.FC<ObservableProps> = ({ onClose }) => (
  <div className="h-full w-full bg-white">
    <iframe src="https://observablehq.com/" className="w-full h-full border-0" title="Observable" />
  </div>
);

export default Observable;
