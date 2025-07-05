import React from 'react';
import { FaStar, FaComments, FaLightbulb } from 'react-icons/fa';

export default function BusinessDisplay({ data, onRegenerate, loading }) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <FaStar
      key={i}
      className={`h-5 w-5 ${i < Math.floor(data.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
    />
  ));

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="p-8 flex-1 border-b md:border-r border-gray-200">
          <div className="flex items-center mb-6">
            <FaComments className="h-16 w-16 text-gray-300 mr-4" />
            <div>
              <h2 className="text-2xl font-bold">{data.name}</h2>
              <p className="text-gray-500">{data.location}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Rating</h3>
              <div className="mt-1 flex items-center">
                <div className="flex">{stars}</div>
                <span className="ml-2">{data.rating} ★ ({data.reviews} reviews)</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">SEO Headline</h3>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg relative">
                <p className="text-lg font-medium">{data.headline}</p>
                <button
                  onClick={onRegenerate}
                  disabled={loading}
                  className="absolute top-2 right-2 p-1 rounded-full text-indigo-600 hover:bg-indigo-50 disabled:opacity-50"
                >
                  <FaLightbulb />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 bg-gray-50 md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Insights</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <FaStar className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <p className="font-medium">SEO Score: 87/100</p>
                <p className="text-sm text-gray-500">Excellent optimization!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}