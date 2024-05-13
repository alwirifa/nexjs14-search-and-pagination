'use client';
 
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import { usePathname, useSearchParams } from 'next/navigation';
 
export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
   
    const createPageURL = (pageNumber: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', pageNumber.toString());
      return `${pathname}?${params.toString()}`;
    };
    
    return (
      <div className="flex items-center justify-between">
        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => window.history.pushState(null, '', createPageURL(currentPage - 1))}
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
        </div>
        <div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              aria-current={pageNumber === currentPage ? 'page' : undefined}
              onClick={() => window.history.pushState(null, '', createPageURL(pageNumber))}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <div>
          <button
            disabled={currentPage === totalPages}
            onClick={() => window.history.pushState(null, '', createPageURL(currentPage + 1))}
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    )
}