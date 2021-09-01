import { CircularProgress } from '@material-ui/core';
import { ProgressHolder, ProgressModal } from "../styles";

export const LoadingModal = () => {
  return (
    <ProgressModal>
      <ProgressHolder>
        <CircularProgress />
      </ProgressHolder>
    </ProgressModal>
  );
}