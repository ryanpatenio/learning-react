
import { useState, useMemo } from 'react';

export const usePagination = (data = [], pageSize = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  const totalPages = Math.ceil(data.length / pageSize);

  const goToPage = (page) => 
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return {
    currentPage,
    paginatedData,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    canNext: currentPage < totalPages,
    canPrev: currentPage > 1,
  };
};