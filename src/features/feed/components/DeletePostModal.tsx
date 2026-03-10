import { Button } from "../../../components/Button";
import { Modal } from "./Modal";

interface DeletePostModalProps {
  isOpen: boolean;
  isDeleting: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

export function DeletePostModal({
  isOpen,
  isDeleting,
  onCancel,
  onDelete,
}: DeletePostModalProps) {
  return (
    <Modal isOpen={isOpen} panelClassName="max-w-[660px]">
      <div className="space-y-10">
        <h2 className="text-[22px] font-bold leading-[26px] text-black">
          Are you sure you want to delete this item?
        </h2>

        <div className="flex justify-end gap-4">
          <Button
            onClick={onCancel}
            variant="secondary"
            className="min-w-[120px]"
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            onClick={onDelete}
            variant="danger"
            className="min-w-[120px]"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
