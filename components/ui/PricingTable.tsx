import React from 'react';

interface PricingRow {
  service: string;
  price: string;
  highlight?: boolean;
}

interface PricingTableProps {
  title: string;
  rows: PricingRow[];
  accentColor?: 'teal' | 'rouge';
}

export default function PricingTable({ title, rows, accentColor = 'teal' }: PricingTableProps) {
  const headerBgColor = accentColor === 'teal' ? 'bg-teal-700' : 'bg-rouge-700';
  const highlightBgColor = accentColor === 'teal' ? 'bg-teal-50' : 'bg-rouge-50';
  const highlightTextColor = accentColor === 'teal' ? 'text-teal-900' : 'text-rouge-900';

  return (
    <div className="overflow-hidden rounded-xl border-2 border-gris-200 shadow-md">
      {/* Header */}
      <div className={`${headerBgColor} px-6 py-4`}>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Table Body */}
      <div className="bg-white">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-6 py-4 border-b border-gris-200 last:border-b-0 ${
              row.highlight ? `${highlightBgColor} font-semibold ${highlightTextColor}` : ''
            }`}
          >
            <span className="text-gris-900">{row.service}</span>
            <span className="font-semibold text-gris-900 whitespace-nowrap">{row.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
