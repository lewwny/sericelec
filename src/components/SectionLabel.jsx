import { Leaf } from 'lucide-react';

export function SectionLabel({ children, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="flex items-center gap-1.5 bg-forest-100 text-forest-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-forest-200">
        <Leaf className="w-3.5 h-3.5" />
        {children}
      </span>
    </div>
  );
}
