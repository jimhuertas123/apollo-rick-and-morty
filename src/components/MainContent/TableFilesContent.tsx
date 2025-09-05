import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import './styles/TableFilesContent.css';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface TableFilesContentProps {
  backgroundColor: string;
  title: string;
  members: number;
  date: string;
}

const TableFilesContent = ({
  backgroundColor,
  title,
  members,
  date,
}: TableFilesContentProps) => {
  const isMobile = useMediaQuery('(max-width: 628px)');

  return (
    <div className="recent-files-table table-content">
      <div className="table-content-title">
        <div
          className="table-color-folder"
          style={{ backgroundColor: backgroundColor }}
        />
        <h3>{title}</h3>
      </div>
      {isMobile ? <h3>{members}</h3> : <h3>{members} members</h3>}
      <h3>{date}</h3>
      <DotsHorizontalIcon className="dots-hor-icon" />
    </div>
  );
};

export default TableFilesContent;
