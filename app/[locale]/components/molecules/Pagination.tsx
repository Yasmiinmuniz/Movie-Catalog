interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => (
  <div className="flex justify-center mt-4">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
    >
      Anterior
    </button>
    <span className="px-3 py-1 mx-1">
      Página {currentPage} de {totalPages}
    </span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
    >
      Próxima
    </button>
  </div>
);
