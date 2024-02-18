import { Pagination } from 'react-bootstrap';

const PageNavigation = ({currentPage,onPageChange,totalPage}) => {
  
  return (
    <Pagination>
      <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
      <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPage} />
    </Pagination>
  );
};

export default PageNavigation;