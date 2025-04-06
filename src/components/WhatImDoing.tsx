import React from 'react';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const WhatImDoing = () => {
  return (
    <section>
      <h2 className="section-title">What I'm Doing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-start space-x-4">
            <DevicePhoneMobileIcon className="w-8 h-8 text-yellow-400" />
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Mobile Apps</h3>
              <p className="text-gray-300">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatImDoing; 