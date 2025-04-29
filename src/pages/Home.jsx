
import React from 'react';
import { useFetch } from '../shared/hooks/useFetch';
import { usePagination } from '../shared/hooks/usePagination';
import { Pagination } from '../components/Pagination';
import { Spinner } from '../components/Spinner';

export const Home = () => {
  const { data = [], loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
  const { 
    currentPage, 
    paginatedData, 
    totalPages, 
    goToPage 
  } = usePagination(data, 10);

  if (loading) return <Spinner />;
  if (error) return <div className="alert alert-danger">Error: {error.message}</div>;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed ? '✅' : '❌'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="d-flex justify-content-center mt-3">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;